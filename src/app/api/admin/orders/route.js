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
                title: `گرامی ${orderedUser.username} %
                سفارش شما از سوی ویکسل دریافت و پذیرفته شده`, 
                message: `عالیقدر ${orderedUser.username} %
                سفارش شما از سوی ویکسل پذیرفته شده است , پس از پرداخت قست اول تیم ویکسل توسعه وبسایت شما را آغاز خواهد کرد`
            },
            NOT_ACCEPTED: {
                title: `گرامی ${orderedUser.username}%
                سفارش شما از سمت ویکسل رد شد`,
                message: `عالیقدر ${orderedUser.username} %
                سفارش شما به دلیل برخی ملاحظات و شرایطی توسط تیم ما در ویکسل مورد پذیرش نمی‌باشد. با عرض پوزش از این موضوع، از صبر و درک شما سپاس‌گزاریم و منتظر همکاری‌های بعدی با شما هستیم.%
                `
            }
        }
        if (order) {
            switch (newStatus) {

                case "پذیرفته شده":
                    order.status = "در انتظار پرداخت قسط اول"
                    order.statusDates.accepted = Date.now()
                    const acceptedNotification = await sendNotification(
                        MESSAGES_CONTENT.ACCEPTED.title,
                        MESSAGES_CONTENT.ACCEPTED.message
                    );
                    orderedUser.notifications.push(
                        acceptedNotification._id,
                    )
                    await order.save();
                    await orderedUser.save();
                    break;
                case "پذیرفته نشده":
                    order.status = "پذیرفته نشده"
                    const notAcceptedNotification = await sendNotification(
                        MESSAGES_CONTENT.NOT_ACCEPTED.title,
                        MESSAGES_CONTENT.NOT_ACCEPTED.message
                    );
                    orderedUser.orders.pull(orderId);
                    await orderedUser.save();
                    orderedUser.notifications.push(notAcceptedNotification._id)
                    await Order.findByIdAndDelete(orderId);
                    await orderedUser.save();
                    break;
            }
        }
        nodeCache.del("orders")
        return NextResponse.json({ order }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}