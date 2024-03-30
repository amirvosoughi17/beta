import { connect } from "@/config/DB";
import Order from "@/models/Order";
import { User } from "@/models/User";
import { sendNotification } from "@/utils/sendNotification";
import { NextResponse } from "next/server";
import cron from 'node-cron';

connect();

export async function GET() {
    try {
        cron.schedule('0 */1 * * *', async () => {
            console.log('paymentReminder job is running ...');

            const orders = await Order.find({
                status: { $in: ["در انتظار پرداخت قسط اول", "در انتظار پرداخت قسط دوم"] }
            });

            for (const order of orders) {
                const unpaidInstallments = order.installments.filter(inst => !inst.paid);

                if (unpaidInstallments.length > 0) {
                    const overdueDate = new Date();
                    overdueDate.setDate(overdueDate.getDate() - 3);

                    const oneDayLaterDate = new Date(overdueDate);
                    oneDayLaterDate.setDate(oneDayLaterDate.getDate() + 1);

                    const twoDaysAgoDate = new Date(overdueDate);
                    twoDaysAgoDate.setDate(twoDaysAgoDate.getDate() + 2);

                    if (new Date() >= overdueDate && new Date() < oneDayLaterDate) {
                        await dayReminder(order, "روز آخر");

                    } else if (new Date() >= oneDayLaterDate && new Date() < twoDaysAgoDate) {
                        await dayReminder(order, "دو روز مانده");

                    } else if (new Date() >= twoDaysAgoDate) {
                        await dayReminder(order, "یک روز مانده");
                    }
                }
            }
        })
        return NextResponse.json({ message: "paymentReminder is running..." }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}

async function dayReminder(order, day) {
    const user = await User.findById(order.user);
    let notificationMessage = "";
    switch (day) {
        case 'روز آخر':
            notificationMessage = "شما فراموش کرده‌اید مبلغ قسط خود را تا امروز پرداخت کنید";
            break;
        case 'دو روز مانده':
            notificationMessage = 'یادآوری: دو روز پیش بود که باید مبلغ قسط خود را پرداخت کنید';
            break;
        case 'یک روز مانده':
            notificationMessage = "یادآوری: فردا باید مبلغ قسط خود را پرداخت کنید.";
            break;
        default:
            notificationMessage = "شما برای سفارش خود مبلغ قسط‌های خود را پرداخت نکرده‌اید. لطفاً به سرعت مبلغ معوقه را پرداخت کنید.";
            break;
    }
    const reminderNotification = await sendNotification(
        "یادآوری پرداخت",
        notificationMessage
    );

    user.notifications.push(reminderNotification._id);
    await user.save();
} 