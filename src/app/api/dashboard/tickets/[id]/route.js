import { connect } from "@/config/DB";
import Ticket from "@/models/Ticket";
import { User } from "@/models/User";
import { sendNotification, sendNotificationToAdmins } from "@/utils/sendNotification";
import { get_user_data_from_session } from "@/utils/session";
import { NextResponse } from "next/server";
connect()

export async function POST(request, { params }) {
    try {
        const { id } = params;
        const data = await request.json();
        const { message } = data;

        const userId = await get_user_data_from_session(request);
        const user = await User.findById(userId).select("_id role username email")

        const ticket = await Ticket.findById(id).populate({
            path: 'responses.user',
            select: '_id',
        }).populate("createdBy", "_id username role notifications");
        ticket.responses.push({
            user,
            message
        })
        switch (user.role) {
            case "admin":
                const notificationMessage = await sendNotification(
                    ` پاسخ جدید برای تیکت ${ticket.subject}`,
                    "تیکت شما توسط ویکسل پاسخ داده شده"
                )

                const createdByUser = await User.findById(ticket.createdBy._id);
                createdByUser.notifications.push(notificationMessage._id)
                await createdByUser.save()
                break;
            case "user":
                const ticketSinglePageUrl = `http://localhost:3000/dashboard/ticket/${ticket._id}`;
                await sendNotificationToAdmins(
                    `پاسخ جدید از سمت تیکت ${ticket.subject} `,
                    `${user.username} پاسخ جدیدی برای تیکت ${ticket.subject} ارسال کرد% 
                    ${ticketSinglePageUrl} برای مشاهده پیام و پاسخ :
                    `
                )
                break;
        }
        await ticket.save()
        return NextResponse.json({ ticket }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}

export async function GET(request, { params }) {
    try {
        const { id } = params;
        const ticket = await Ticket.findById(id).populate({
            path: "createdBy",
            select: "_id username email"
        }).populate({
            path: "responses.user",
            select: "_id username email"
        });
        if (!ticket) {
            return NextResponse.json({ message: "Ticket not found!" }, { status: 404 })
        }
        return NextResponse.json({ ticket }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}

export async function PUT(request, { params }) {
    try {
        const { id } = params;
        const data = await request.json();
        const { newStatus } = data;

        const userId = await get_user_data_from_session(request);
        const user = await User.findById(userId).select("_id notifications")

        const updatedTicket = await Ticket.findByIdAndUpdate(id, { status: newStatus }, { new: true })

        const NOTIFICATION_CONTENT = {
            IN_PROGRESS: {
                title: "تیکت شما در حال برسی است",
                message: ` درود, تیکت ${updatedTicket.subject} از سوی تیم ویکسل در حال برسی است`
            },
            CLOSED: {
                title: "تیکت بسته شد",
                message: `تیکت شما بسته شد, شما نمیتوانید پیامی در  تیکت ${updatedTicket.subject} بدهید`
            }
        };

        switch (updatedTicket.status) {
            case "در حال برسی":
                const inProgressTicketMessage = await sendNotification(
                    NOTIFICATION_CONTENT.IN_PROGRESS.title,
                    NOTIFICATION_CONTENT.IN_PROGRESS.message
                );
                user.notifications.push(inProgressTicketMessage._id)
                break;
            case "بسته شده":
                const closedTicketMessage = await sendNotification(
                    NOTIFICATION_CONTENT.CLOSED.title,
                    NOTIFICATION_CONTENT.CLOSED.message
                );

                user.notifications.push(closedTicketMessage._id)
                break;
        }
        await user.save();
        return NextResponse.json({ message: "وضعیت تیکت بروزرسانی شد" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}