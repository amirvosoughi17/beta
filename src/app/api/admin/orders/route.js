import { connect } from "@/config/DB";
import Order from "@/models/Order";
import { User } from "@/models/User";
import { sendNotification } from "@/utils/sendNotification";
import { get_user_data_from_session } from "@/utils/session";
import { NextResponse } from "next/server";
import NodeCache from "node-cache";

connect()

const nodeCache = new NodeCache();

export async function GET() {
    try {
        let orders = [];


        if (nodeCache.has("orders")) {
            orders = JSON.parse(nodeCache.get("orders"));
        } else {
            orders = await Order.find().populate({
                path: 'user',
                select: 'username email phoneNumber',
            });
            nodeCache.set("orders", JSON.stringify(orders))
        }
        return NextResponse.json({
            orders,
            orderDocumentCount: orders.length
        }, { status: 200 })
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
        const user = await User.findById(userId);
        if (user.role !== "admin") {
            return NextResponse.json({
                message: "شما اجازه حضور در اینجا را ندارید"
            }, { status: 401 })
        }
        const order = await Order.findByIdAndUpdate(orderId, { status: newStatus }, { new: true })
        const orderedUser = await User.findById(order.user);


        const MESSAGES_CONTENT = {
            ACCEPTED: {
                title: "سفارش شما از سمت ویکسل دریافت و قبول شد",
                message: "سفارش شما از سمت ویکسل قبول گردید , ما به زودی فرایند توسعه را شروع خواهیم کرد"
            },
            NOT_ACCEPTED: {
                title: "سفارش شما از سمت ویکسل رد شد",
                message: "با برسی های صورت گرفته از سمت تیم ویکسل بنا بر دلایلی سفارش شما مورد قبول ویکسل نبود"
            }
        }
        if (order) {
            switch (newStatus) {
                case "پذیرفته شده":
                    order.status = "پذیرفته شده"
                    order.statusDates.accepted = Date.now()
                    const acceptedNotification = await sendNotification(
                        MESSAGES_CONTENT.ACCEPTED.title,
                        MESSAGES_CONTENT.ACCEPTED.message
                    );
                    orderedUser.notifications.push(
                        acceptedNotification._id,
                    )
                    await orderedUser.save();
                    break;
                case "پذیرفته نشده":
                    order.status = "پذیرفته نشده"
                    order.statusDates.notAccepted = Date.now()
                    const notAcceptedNotification = await sendNotification(
                        MESSAGES_CONTENT.NOT_ACCEPTED.title,
                        MESSAGES_CONTENT.NOT_ACCEPTED.message
                    );
                    orderedUser.notifications.push(notAcceptedNotification._id)
                    await orderedUser.save();
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