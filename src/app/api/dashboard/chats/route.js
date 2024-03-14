import { connect } from "@/config/DB";
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
        const user = await User.findOne({ _id: userId }).select('_id chat')

        let chat = null;
        if (!user.chat) {
            const newChat = await Chat.create({ user: userId });
            user.chat = newChat._id;
            await user.save();
            chat = newChat;
        } else {
            chat = await Chat.findOne({ _id: user.chat });
            if (!chat) {
                return NextResponse.json({
                    success: false,
                    message: "Chat not found"
                }, { status: 404 });
            }
        }
        const newMessage = { content, sender: userId };
        chat.messages.push(newMessage);
        await chat.save();

        return NextResponse.json({ chat }, { status: 200 })
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
        const myChats = await Chat.find({ user: userId });
        for (const chat of myChats) {
            for (const message of chat.messages) {
                message.isRead = true;
            }
            await chat.save();
        }
        if (myChats.length === 0) {
            return NextResponse.json({ message: "There is no message!" }, { status: 404 });
        }

        const unreadChats = myChats.filter(chat => chat.messages.some(message => !message.isRead));
        myChats.filter(chat => chat.messages.some(message => !message.isRead));

        return NextResponse.json({ myChats, unreadChats: unreadChats.length }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}