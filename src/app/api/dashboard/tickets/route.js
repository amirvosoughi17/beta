import { connect } from "@/config/DB";
import Ticket from "@/models/Ticket";
import { User } from "@/models/User";
import { sendNotification, sendNotificationToAdmins } from "@/utils/sendNotification";
import { get_user_data_from_session } from "@/utils/session";
import { NextResponse } from "next/server";
import NodeCache from "node-cache";

connect();

const nodeCache = new NodeCache();

export async function POST(request) {
    try {
        const data = await request.json();
        const { subject, description } = data;
        const userId = await get_user_data_from_session(request);
        const user = await User.findOne({ _id: userId }).select('_id email username tickets notifications')

        if (!subject || !description) {
            return NextResponse.json({ message: "لطفا همه مقادیر خواسته شده را وارد کنید" }, { status: 400 })
        }
        if (!user) {
            return NextResponse.json({ message: "به نظر میرسد مشکلی رخ داده, لطفا وارد وبسایت شوید" }, { status: 404 });
        }
        const newTicket = await Ticket.create({
            subject,
            description,
            createdBy: user
        });

        const newNotification = await sendNotification(
            `${user.username} تیکت شما ثبت شد`,
            `تیکت شما با مقصود ${newTicket.subject} ایجاد شد , تیم ویکسل پس از برسی به آن پاسخ خواهند داد`
        );
        const ticketSinglePageUrl = `http://localhost:3000/dashboard/ticket/${newTicket._id}`
        await sendNotificationToAdmins(
            `${user.username} تیکت جدیدی را ایجاد کردند`,
            `تیکت جدید با هدف ${newTicket.subject} ایجاد شد , %
            ${ticketSinglePageUrl}  برای اضافه کردن پاسخ:`
        )
        user.tickets.push(newTicket._id)
        user.notifications.push(newNotification._id)
        await user.save();

        return NextResponse.json({ newTicket }, { status: 201 });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}

export async function GET(request) {
    try {

        const userId = await get_user_data_from_session(request);
        let myTickets = [];
        if (nodeCache.has("myTickets")) {
            myTickets = JSON.parse(nodeCache.get("myTickets"));
        } else {
            myTickets = await Ticket.find({ createdBy: { $in: userId } }).populate("createdBy", "_id username email phoneNumber");
            nodeCache.set("myTickets", JSON.stringify(myTickets), 300);
        }
        return NextResponse.json({ myTickets }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}