import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from "next-auth/providers/github";
import { User } from '@/models/User';
import bcrypt from 'bcryptjs';
import { connect } from "@/config/DB";

connect();

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      id: 'credentials',
      credentials: {
        phoneNumber: { label: "PhoneNumber", type: "text" },
        password: { label: 'password', type: "password" }
      },
      async authorize(credentials) {
        try {
          const user = await User.findOne({ phoneNumber: credentials.phoneNumber });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              return user;
            }
          }
          return null;
        } catch (error) {
          console.error("Error in authorize callback:", error);
          return null;
        }
      }
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "credentials") {
        return true;
      } else if (account?.provider === "github") {
        await connect();
        try {
          const existingUser = await User.findOne({ phoneNumber: user.phoneNumber });
          if (!existingUser) {
            const newUser = new User({
              phoneNumber: user.phoneNumber,
            });

            await newUser.save();
            return true;
          }
          return true;
        } catch (err) {
          console.log("Error saving user", err);
          return false;
        }
      }
    },
  },
  secret: process.env.JWT_SECRET,
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };