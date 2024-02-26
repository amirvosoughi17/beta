import { NextResponse } from "next/server";
import bcrpyt from 'bcryptjs';
import { connect } from "@/config/DB";
import { User } from "@/models/User";

connect();

export async function POST(request) {
    const { username, email, phoneNumber, password } = await request.json();

    const existUser = await User.findOne({ email: email });
    if (existUser) {
        return NextResponse.json({ message: "user exist" }, { status: 400 })
    }


    const hashedPasss = await bcrpyt.hash(password, 10);
    try {
        const newUser = await User.create({
            username,
            email,
            phoneNumber,
            password: hashedPasss
        })

        return NextResponse.json({ message: "register success" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "failed to register" }, { status: 400 })
    }
}