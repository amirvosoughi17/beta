import { connect } from "@/config/DB";
import Ticket from "@/models/Ticket";
import { NextResponse } from "next/server";
import User from '@/models/User';
import NodeCache from "node-cache";

connect()

const nodeCache = new NodeCache();

export async function GET() {
    try {
        let tickets = [];
        if (nodeCache.has("tickets")) {
            tickets = JSON.parse(nodeCache.get("tickets"))
        } else {
            tickets = await Ticket.find().populate("createdBy", "_id username email");
            nodeCache.set("tickets", JSON.stringify(tickets), 300);
        }
        return NextResponse.json({
            tickets,
            ticketsCount: tickets.length
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}