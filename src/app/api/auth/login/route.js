import { NextResponse } from "next/server";
import { User } from "@/models/User";
import { generate_token } from "@/utils/session";
import bcrypt from 'bcryptjs'
import { connect } from "@/config/DB";
connect();
export async function POST(request) {
    try {
        const data = await request.json();
        const { email, password } = data;
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json(
                { message: "Email is not exists in website" },
                { status: 400 }
            );
        }
        const isValidPassword = bcrypt.compareSync(password, user.password);
        if (!isValidPassword) {
            return NextResponse.json(
                { message: "Password does not match" },
                { status: 400 }
            );
        }
        return generate_token("User Logged in was  successfully", 200, user);
    } catch (error) {
        return NextResponse.json({
            message: error.message
        }, { status: 500 })
    }
}