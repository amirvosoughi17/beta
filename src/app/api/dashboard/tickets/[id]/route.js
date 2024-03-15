import { connect } from "@/config/DB";
import Ticket from "@/models/Ticket";
import { User } from "@/models/User";
import { sendNotification } from "@/utils/sendNotification";
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
        if (user.role === "admin") {
            const notificationMessage = await sendNotification("You have new Message")
            const createdByUser = await User.findById(ticket.createdBy._id);
            createdByUser.notifications.push(notificationMessage._id)
            await createdByUser.save()
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
                title: "Ticket is checking",
                message: "Ticket is checking when ticket checked you will inform"
            },
            CLOSED: {
                title: "Ticket is closed",
                message: "Ticket closed that mean your problem solved successfully"
            }
        };

        switch (updatedTicket.status) {
            case "inProgress":
                const inProgressTicketMessage = await sendNotification(
                    NOTIFICATION_CONTENT.IN_PROGRESS.title,
                    NOTIFICATION_CONTENT.IN_PROGRESS.message
                );
                user.notifications.push(inProgressTicketMessage._id)
                break;
            case "closed":
                const closedTicketMessage = await sendNotification(
                    NOTIFICATION_CONTENT.CLOSED.title,
                    NOTIFICATION_CONTENT.CLOSED.message
                );

                user.notifications.push(closedTicketMessage._id)
                await deleteOldClosedTickets();
                break;
        }
        await user.save();
        return NextResponse.json({ message: "Ticket updated" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}

async function deleteOldClosedTickets() {
    const threeWeeksAgo = new Date();
    threeWeeksAgo.setDate(threeWeeksAgo.getDate() - 21);

    await Ticket.deleteMany({ status: "closed", createdAt: { $lt: threeWeeksAgo } });
}