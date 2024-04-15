import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import { generate_token } from "@/utils/session";
import { connect } from "@/config/DB";
import { User } from "@/models/User";
import { sendNotification } from "@/utils/sendNotification";

connect();
export async function POST(request) {
    try {
        const { email, password } = await request.json();
        if (!email || !password) {
            return NextResponse.json({
                message: "لطفا تمامی فیلد هارو پر کنید "
            }, { status: 400 })
        }
        const existsUser = await User.findOne({ email });
        if (!existsUser) {
            return NextResponse.json({
                message: "ایمیل یافت نشد"
            }, { status: 400 });
        }
        const isValidPassword = bcrypt.compareSync(password, existsUser.password);
        if (!isValidPassword) {
            return NextResponse.json({
                message: "رمز عبور نادرست است"
            }, { status: 400 });
        }

        const nowDate = new Date().toLocaleString('fa-IR');

        const loggedinNotification = await sendNotification(
            "اعلام ورودی",
            `${existsUser.username} %
            شما در ساعت
            ${nowDate} 
             وارد ویکسل شدید `
        )
        existsUser.notifications.push(loggedinNotification._id);
        await existsUser.save()
        return generate_token("Logged in successfully", 200, existsUser);

    } catch (error) {
        return NextResponse.json({
            message: error.message
        }, { status: 500 });
    }
}