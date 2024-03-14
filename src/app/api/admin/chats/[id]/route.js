import { connect } from "@/config/DB";
import Chat from "@/models/Chat";
import { User } from "@/models/User";
import { get_user_data_from_session } from "@/utils/session";
import { NextResponse } from "next/server";

connect();

export async function GET(request, { params }) {
    try {
        const { id } = params;
        const chat = await Chat.findByIdAndUpdate(id, { isRead: true }, { new: true });
        if (!chat) {
            return NextResponse.json({ message: "Chat not found!" }, { status: 404 })
        }
        
        return NextResponse.json({ chat }, { status: 200 })
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
        const userId = await get_user_data_from_session(request);
        const user = await User.findById(userId)

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}