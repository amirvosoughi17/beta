import { connect } from "@/config/DB";
import Chat from "@/models/Chat";
import { pusherServer } from "@/utils/pusher";
import { get_user_data_from_session } from "@/utils/session";
import { NextResponse } from "next/server";

connect();

export async function GET(request, { params }) {
    try {
        const { id } = params;
        const findChat = await Chat.find({ _id: id });

        if (!findChat) {
            return NextResponse.json({ message: "Chat not found!" }, { status: 404 })
        }
        for (const chat of findChat) {
            for (const message of chat.messages) {
                message.isRead = true;
            }
            await chat.save();
        }
        return NextResponse.json({ findChat }, { status: 200 })
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
        const { content } = data;

        const userId = await get_user_data_from_session(request);
        const chat = await Chat.findById({ _id: id });

        const newMessage = chat.messages.push({ content, sender: userId })
        await chat.save();
        const channelName = chat._id.toHexString();
        await pusherServer.trigger(channelName, "new-message", newMessage)
        return NextResponse.json({ chat }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}