import { sendNotification } from "@/utils/sendNotification";
import { NextResponse } from "next/server";
import cron from 'node-cron';

export async function GET() {
    try {
        cron.schedule('0 0 * * *', async () => {
            const ordersExpiringSoon = await Order.find({
                supportExpiresAt: {
                    $gte: new Date(),                     
                    $lte: new Date(Date.now() + 24 * 60 * 60 * 1000)
                }
            });

            for (const order of ordersExpiringSoon) {
                await sendNotification("FDLFLDF", 'sdoksd.');
            }

            const expiredOrders = await Order.find({
                supportExpiresAt: { $lte: new Date() }
            });

            for (const order of expiredOrders) {
                if (order.status !== 'تکمیل شده') {
                    await sendNotification(order.user.email, 'Support Time Expired', 'Your support time has expired. Please contact us for further assistance.');
                    order.status = 'Support Time Expired';
                    await order.save();
                }
            }
    })
    } catch (error) {
        return NextResponse.json({
            message: error.message,
            success: false
        }, { status: 500 })
    }
}