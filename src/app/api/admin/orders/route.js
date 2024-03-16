import { connect } from "@/config/DB";
import Order from "@/models/Order";
import { User } from "@/models/User";
import { sendNotification } from "@/utils/sendNotification";
import { get_user_data_from_session } from "@/utils/session";
import { NextResponse } from "next/server";

connect()

export async function GET() {
    try {
        const orders = await Order.find().populate({
            path: 'user',
            select: 'username email phoneNumber',
        });
        const orderDocumentCount = await Order.countDocuments();
        if (orderDocumentCount === 0) {
            return NextResponse.json({
                message: "There is not order here..."
            }, { status: 404 })
        }
        return NextResponse.json({ orders, orderDocumentCount }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { success: false })
    }
}

export async function PUT(request) {
    try {
        const data = await request.json();
        const { orderId, newStatus } = data;
        const userId = await get_user_data_from_session(request);
        const user = await User.findById(userId).select("_id notifications");

        const order = await Order.findByIdAndUpdate(orderId, { status: newStatus }, { new: true })
        const MESSAGES_CONTENT = {
            ACCEPTED: {
                title: "Order Status Changed to accepted",
                message: "order status changed to accepted after that we will so somethings"
            },
            NOT_ACCEPTED: {
                title: "Order Status Changed to not_accepted",
                message: "order status changed to not_accepted sorry"
            }
        }
        if (order) {
            switch (newStatus) {
                case "accepted":
                    order.status = "accepted"
                    order.statusDates.accepted = Date.now()
                    const acceptedNotification = await sendNotification(
                        MESSAGES_CONTENT.ACCEPTED.title,
                        MESSAGES_CONTENT.ACCEPTED.message
                    );
                    user.notifications.push(acceptedNotification._id)
                    await user.save();
                    break;
                case "notAccepted":
                    order.status = "notAccepted"
                    order.statusDates.notAccepted = Date.now()
                    const notAcceptedNotification = await sendNotification(
                        MESSAGES_CONTENT.NOT_ACCEPTED.title,
                        MESSAGES_CONTENT.NOT_ACCEPTED.message
                    );
                    user.notifications.push(notAcceptedNotification._id)
                    await user.save();
                    break;
            }
        }
        return NextResponse.json({ order }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}