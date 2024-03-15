import { connect } from "@/config/DB";
import Ticket from "@/models/Ticket";
import { User } from "@/models/User";
import { sendNotification } from "@/utils/sendNotification";
import { get_user_data_from_session } from "@/utils/session";
import { NextResponse } from "next/server";

connect();

export async function POST(request) {
    try {
        const data = await request.json();
        const { subject, description } = data;
        const userId = await get_user_data_from_session(request);
        const user = await User.findOne({ _id: userId }).select('_id email tickets notifications')

        if (!subject || !description) {
            return NextResponse.json({ message: "Please fill out all inputs" }, { status: 400 })
        }

        const newTicket = await Ticket.create({
            subject,
            description,
            createdBy: user
        });

        const newNotification = await sendNotification(
            "new Ticket created successfully",
            "you open new ticket, we will check it"
        );
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
        const user = await User.findOne({ _id: userId }).select('tickets')
        const myTickets = await Ticket.find({ _id: { $in: user.tickets } });
        return NextResponse.json({ myTickets }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}