import { connect } from "@/config/DB";
import Notification from "@/models/Notification";
import Chat from "@/models/Chat";
import { User } from "@/models/User";
import { get_user_data_from_session } from "@/utils/session";
import { NextResponse } from "next/server";

connect();

export async function POST(request) {
    try {
        const data = await request.json();
        const { content } = data;
        const userId = await get_user_data_from_session(request);
        const user = await User.findOne({ _id: userId }).select('_id email chats notifications')
        const newMessage = await Chat.create({
            sender: user,
            content
        });
        return NextResponse.json({ newMessage }, { status: 201 });
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
        const myChats = await Chat.find().where({ sender: userId })
        for (const chat of myChats) {
            chat.isRead = true;
            await chat.save();
        }
        return NextResponse.json({ myChats }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}