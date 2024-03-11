import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import { generate_token } from "@/utils/session";
import { connect } from "@/config/DB";
import { User } from "@/models/User";

connect();
export async function POST(request) {
    try {
        const data = await request.json();
        const { email, password } = data;
        if (!email || !password) {
            return NextResponse.json({
                message: "Please fill in all inputs"
            }, { status: 400 })
        }
        const existsUser = await User.findOne({ email });
        if (!existsUser) {
            return NextResponse.json({
                message: "Email does not exists !"
            }, { status: 400 });
        }
        const isValidPassword = bcrypt.compareSync(password, existsUser.password);
        if (!isValidPassword) {
            return NextResponse.json({
                message: "Password does not match !"
            }, { status: 400 });
        }
        return generate_token("Logged in successfully", 200, existsUser);

    } catch (error) {
        return NextResponse.json({
            message: error.message
        }, { status: 500 });
    }
}