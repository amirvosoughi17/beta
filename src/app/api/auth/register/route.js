import { NextResponse } from 'next/server';
import bcrpyt from 'bcryptjs';
import { connect } from "@/config/DB";
import { User } from "@/models/User";
import { generate_token } from "@/utils/session";
import { sendNotification, sendNotificationToAdmins } from '@/utils/sendNotification';

connect();

export async function POST(request) {
    const { username, email, phoneNumber, password } = await request.json();

    if (!username || !email || !password || !phoneNumber) {
        return NextResponse.json({
            message: "لطفا تمامی فیلد هارو پر کنید "
        }, { status: 400 })
    }

    if (username.length < 3) {
        return NextResponse.json({
            message: "نام کاربری باید بیشتر از سه حرف تشکیل شده باشد"
        }, { status: 400 })
    }
    const existUser = await User.findOne({ email: email });
    if (existUser) {
        return NextResponse.json({
            message: "شما قبلا با این ایمیل ثبت نام کرده اید"
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
        const nowDate = new Date().toLocaleString('fa-IR');
        const registerationNotification = await sendNotification(
            `خوش امدید ${newUser.username}`,
            ` ${newUser.username}%
            شما در تاریخ  
            ${nowDate} %
            به ویکسل پیوستید
            `
        );
        await sendNotificationToAdmins(
            `${newUser.username} به ویکسل اضافه شد`,
            "اطلاع ثبت نامی جدید , کاربر جدیدی به ویکسل افزوده شد"
        )
        newUser.notifications.push(registerationNotification._id)
        await newUser.save();

        return generate_token("Registeration was successfull", 201, newUser);
    } catch (error) {
        return NextResponse.json({
            message: error.message
        }, { status: 500 })
    }
}