import NextAuth from "next-auth";
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import { User } from "@/models/User";
import connect from '@/config/DB';


export const options = {
    providers: [
       
        CredentialsProvider({
            name: "credentials",
            credentials: {
                phoneNumber: {
                    label: "phoneNumber:",
                    type: "text",
                    placeholder: "phoneNumber"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "password"
                }
            },
                async authorize(credentials ) {
                    await connect();
                    try {
                        const user = await User.findOne({phoneNumber : credentials.phoneNumber});
                        if(user) {
                            const isPasswordCorrect = await bcrypt.compare (
                                credentials.password,
                                user.password
                            )
                            if(isPasswordCorrect) {
                                return user;
                            }
                        }
                    } catch (error) {
                        throw new Error(error)
                    }
                }
            
        })
    ],
}