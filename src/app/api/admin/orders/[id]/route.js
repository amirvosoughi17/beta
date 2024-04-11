import { connect } from "@/config/DB";
import Order from "@/models/Order";
import { User } from "@/models/User";
import { calculateOrderProgress } from "@/utils/calculateOrderProgress";
import { sendNotification } from "@/utils/sendNotification";
import { NextResponse } from "next/server";
connect()

export async function GET(request, { params }) {
    try {
        const { id } = params;
        const order = await Order.findOne({ _id: id })
        if (order) {
            return NextResponse.json({ order }, { status: 200 })
        } else {
            return NextResponse.json({ message: "Order not found" }, { status: 500 });
        }
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}

export async function PUT(request, { params }) {
    try {
        const { id } = params;
        const data = await request.json();
        const { featureName, newStatus } = data;

        const order = await Order.findById(id).populate('user');
        if (!order) {
            return NextResponse.json({
                success: false,
                message: 'سفارش پیدا نشد!',
            }, { status: 404 });
        } else if (order.installments[0].paid !== true) {
            return NextResponse.json({
                success: false,
                message: 'قسط نخست این سفارش پرداخت نشده است , نمیتوان پروژه را پیش برد',
            }, { status: 400 });
        }
        const updatedOrder = await Order.findByIdAndUpdate(
            id,
            { $set: { [`selectedFeatures.$[elem].status`]: newStatus } },
            {
                arrayFilters: [{ "elem.name": featureName }],
                new: true
            }
        ).populate('user');

        const user = updatedOrder.user;

        const MESSAGE_CONTENT = {
            COMPLETED_ORDER_MESSAGE: {
                title: "اتمام توسعه وبسایت",
                message: "وبسایت شما با موفقیت تکمیل شد"
            },
            WAIT_FOR_PAY_PRICE: {
                title: "پرداخت هزینه سفارش",
                message: "فرایند توسعه وبسایت شما به اتمام رسیده است, خواهش مند هستیم نسبت به پرداخت هزینه باقی مانده اقدام کنید"
            }
        }
        const saveOrderProgress = calculateOrderProgress(updatedOrder);
        updatedOrder.orderProgress = saveOrderProgress;
        if (updatedOrder.orderProgress === 100) {
            updatedOrder.status = "تکمیل شده";

            updatedOrder.statusDates.completed = new Date()
            updatedOrder.supportStartedAt = new Date();
            updatedOrder.supportExpiresAt = new Date();

            updatedOrder.supportExpiresAt.setMonth(updatedOrder.supportExpiresAt.getMonth() + updatedOrder.supportTime)

            if (updatedOrder.orderProgress === 100 && !updatedOrder.installments[1].paid) {
                const waitPayPriceNotification = await sendNotification(
                    MESSAGE_CONTENT.WAIT_FOR_PAY_PRICE.title,
                    MESSAGE_CONTENT.WAIT_FOR_PAY_PRICE.message
                );
                user.notifications.push(waitPayPriceNotification._id)
            }


            const completedOrderStatusNotification = await sendNotification(
                MESSAGE_CONTENT.COMPLETED_ORDER_MESSAGE.title,
                MESSAGE_CONTENT.COMPLETED_ORDER_MESSAGE.message
            );

            user.notifications.push(completedOrderStatusNotification._id)

        } else if (updatedOrder.orderProgress >= 80) {
            const eighteenPercentCompleted = await sendNotification(
                "خبری خوش",
                `عالیقدر ${user.username}%
                خبری خوش , هشتاد درصد از وبسایت شما توسط تیم ویکسل توسعه داده شده است, زمانی تا اتمام آن باقی نمانده
                `
            );
            user.notifications.push(eighteenPercentCompleted._id)
        } else {
            order.status = "در حال پیشرفت"
        }
        await Promise.all([
            updatedOrder.save(),
            user.save()
        ]);

        return NextResponse.json({
            success: true,
            message: 'Feature status updated successfully!',
            order,
        }, { status: 200 });

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message || 'An error occurred',
        }, { status: 500 })
    }
}
