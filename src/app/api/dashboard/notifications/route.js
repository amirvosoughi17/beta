import { connect } from "@/config/DB";
import Notification from "@/models/Notification";
import { User } from "@/models/User";
import { get_user_data_from_session } from "@/utils/session";
import { NextResponse } from "next/server";

connect();

export async function GET(request) {
    try {
        const userId = await get_user_data_from_session(request);
        const user = await User.findOne({ _id: userId });
        const myNotifications = await Notification.find({ _id: { $in: user.notifications } });

        return NextResponse.json({ myNotifications }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}

export async function PUT(request) {
    try {
        const data = await request.json();
        const userId = await get_user_data_from_session(request);
        const user = await User.findOne({ _id: userId });

        const { notificationId, markAllAsRead } = data;

        if (markAllAsRead === true) {
            await Notification.updateMany(
                { _id: { $in: user.notifications } },
                { $set: { isRead: true } }
            );
            await Notification.deleteMany({ _id: { $in: user.notifications }, isRead: true });
            user.notifications = [];
        } else {
            await Notification.findByIdAndUpdate(notificationId,
                {
                    $set: { isRead: true }
                });
            await Notification.findByIdAndDelete(notificationId);
            user.notifications = user.notifications.filter(id => id !== notificationId);

        }

        await user.save()
        return NextResponse.json({ message: "Update was Successfull" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}