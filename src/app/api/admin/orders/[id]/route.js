import { connect } from "@/config/DB";
import Order from "@/models/Order";
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

        const order = await Order.findByIdAndUpdate(id, {
            $set: { [`selectedFeatures.$[elem].status`]: newStatus },
        }, { arrayFilters: [{ "elem.name": featureName }], new: true }).populate('user');

        if (!order) {
            return NextResponse.json({
                success: false,
                message: 'Order not found',
            }, { status: 404 });
        }

        const user = order.user;

        const MESSAGE_CONTENT = {
            COMPLETED_ORDER_MESSAGE: {
                title: "اتمام توسعه وبسایت",
                message: "وبسایت شما با موفقیت تکمیل شد"
            },
            FIRST_INSTALLMENT_MESSAGE: {
                title: "قسط اول سفارش",
                message: ` ${user.username}  مهلت پرداخت قسط اول شما فرا رسیده است لطفا برای ادامه فرایند توسعه قسط اول خود را پرداخت کنید`

            },
            SECOND_INSTALLMENT_MESSAGE: {
                title: "قسط دوم سفارش",
                message: `${user.username} مهلت پرداخت قسط دوم شما فرا رسیده است لطفا برای ادامه فرایند توسعه قسط دوم خود را پرداخت کنید`
            },
            WAIT_FOR_PAY_PRICE: {
                title: "پرداخت هزینه سفارش",
                message: "فرایند توسعه وبسایت شما به اتمام رسیده است, خواهش مند هستیم نسبت به پرداخت هزینه باقی مانده اقدام کنید"
            }
        }

        const saveOrderProgress = calculateOrderProgress(order);
        order.orderProgress = saveOrderProgress;
        if (order.orderProgress === 100) {
            order.status = "تکمیل شده";

            order.statusDates.completed = new Date()
            order.supportStartedAt = new Date();
            order.supportExpiresAt = new Date();

            order.supportExpiresAt.setMonth(order.supportExpiresAt.getMonth() + order.supportTime)

            // if (order.orderProgress === 100 && !order.paymentStatus.isFullPaid) {
            //     const waitPayPriceNotification = await sendNotification(
            //         MESSAGE_CONTENT.WAIT_FOR_PAY_PRICE.title,
            //         MESSAGE_CONTENT.WAIT_FOR_PAY_PRICE.message
            //     );
            //     user.notifications.push(waitPayPriceNotification._id)
            // }


            const completedOrderStatusNotification = await sendNotification(
                MESSAGE_CONTENT.COMPLETED_ORDER_MESSAGE.title,
                MESSAGE_CONTENT.COMPLETED_ORDER_MESSAGE.message
            );

            user.notifications.push(completedOrderStatusNotification._id)

        } else if (order.orderProgress >= 40) {
            order.status = "در انتظار پرداخت قسط اول"
            const waitForFirstInstallmentNotification = await sendNotification(
                MESSAGE_CONTENT.FIRST_INSTALLMENT_MESSAGE.title,
                MESSAGE_CONTENT.FIRST_INSTALLMENT_MESSAGE.message
            );
            user.notifications.push(waitForFirstInstallmentNotification._id)
        } else if (order.orderProgress >= 60) {
            order.status = "در انتطار پرداخت قسط دوم"
            const waitForSecondInstallmentNotification = await sendNotification(
                MESSAGE_CONTENT.SECOND_INSTALLMENT_MESSAGE.title,
                MESSAGE_CONTENT.SECOND_INSTALLMENT_MESSAGE.message
            );
            user.notifications.push(waitForSecondInstallmentNotification._id)
        } else {
            order.status = "در حال پیشرفت"
        }

        await Promise.all([
            order.save(),
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
