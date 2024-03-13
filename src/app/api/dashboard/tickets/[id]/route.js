import { connect } from "@/config/DB";
import Ticket from "@/models/Ticket";
import { User } from "@/models/User";
import { get_user_data_from_session } from "@/utils/session";
import { NextResponse } from "next/server";

connect()

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
        ticket.responses.push({
            user,
            message
        })
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
        const ticket = await Ticket.findById(id);
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