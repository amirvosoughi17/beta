import { connect } from "@/config/DB";
import Ticket from "@/models/Ticket";
import { NextResponse } from "next/server";

connect()

export async function GET() {
    try {
        const tickets = await Ticket.find().populate("createdBy", "_id username email");
        const ticketsCount = await Ticket.countDocuments();
        if (ticketsCount === 0) {
            return NextResponse.json({
                message: "There is no Ticket here!"
            }, { status: 404 });
        }
        return NextResponse.json({
            tickets,
            ticketsCount
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}