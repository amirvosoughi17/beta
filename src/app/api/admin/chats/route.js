import { connect } from "@/config/DB";
import Chat from "@/models/Chat";
import { NextResponse } from "next/server";

connect()

export async function GET() {
    try {
        const chats = await Chat.find().populate({
            path: "user",
            select: "_id username email"
        });
        return NextResponse.json({
            chats,
            chatsCount: chats.length
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}