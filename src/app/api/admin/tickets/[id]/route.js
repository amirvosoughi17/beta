import { connect } from "@/config/DB";
import Ticket from "@/models/Ticket";
import { User } from "@/models/User";
import { sendNotification } from "@/utils/sendNotification";
import { get_user_data_from_session } from "@/utils/session";
import { NextResponse } from "next/server";

connect();

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

export async function POST(request, { params }) {
    try {
        const { id } = params;
        const data = await request.json();
        const { message } = data;

        const userId = await get_user_data_from_session(request);
        const user = await User.findById(userId)
        const ticket = await Ticket.findById(id).populate({
            path: 'responses.user',
            select: '_id',
        });
        if (user.role === "admin") {
            ticket.responses.push({
                user,
                message
            })
            await ticket.save()
            return NextResponse.json({ ticket }, { status: 200 })
        } else {
            return NextResponse.json({ message: "You don't have permission!" }, { status: 401 })
        }

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

        const NOTIFICATION_MESSAGES = {
            IN_PROGRESS: "Ticket is checking",
            CLOSED: "Ticket is closed"
        };

        switch (updatedTicket.status) {
            case "inProgress":
                const inProgressTicketMessage = await sendNotification(NOTIFICATION_MESSAGES.IN_PROGRESS);
                user.notifications.push(inProgressTicketMessage._id)
                break;
            case "closed":
                const closedTicketMessage = await sendNotification(NOTIFICATION_MESSAGES.CLOSED);
                user.notifications.push(closedTicketMessage._id)
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