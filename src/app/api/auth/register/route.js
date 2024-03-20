import { NextResponse } from 'next/server';
import bcrpyt from 'bcryptjs';
import { connect } from "@/config/DB";
import { User } from "@/models/User";
import { generate_token } from "@/utils/session";
import { sendNotification } from '@/utils/sendNotification';

connect();

export async function POST(request) {
    const { username, email, phoneNumber, password } = await request.json();

    if (!username || !email || !password || !phoneNumber) {
        return NextResponse.json({
            message: "Please fill in all inputs"
        }, { status: 400 })
    }

    if (username.length < 3) {
        return NextResponse.json({
            message: "Username should be more that 3 characters"
        }, { status: 400 })
    }
    const existUser = await User.findOne({ email: email });
    if (existUser) {
        return NextResponse.json({
            message: "user has already registerd in website"
        }, { status: 400 })
    }


    const hashedPasss = await bcrpyt.hash(password, 10);
    try {
        const newUser = await User.create({
            username,
            email,
            phoneNumber,
            password: hashedPasss
        })
        const nowDate = new Intl.DateTimeFormat(
            'fa-IR', {
            year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'
        }).format(Date.now());

        const registerationNotification = await sendNotification(
            `خوش امدید ${newUser.username}`,
            `  ${nowDate}  ${newUser.username} به ویکسل پیوستید  شما  در تاریخ`
        );
        newUser.notifications.push(registerationNotification._id)
        await newUser.save();
        return generate_token("Registeration was successfull", 201, newUser);

    } catch (error) {
        return NextResponse.json({
            message: error.message
        }, { status: 500 })
    }
}