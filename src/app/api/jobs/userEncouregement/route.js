import { User } from '@/models/User';
import DiscountCode from '@/models/discountCode';
import { generateDiscountCode } from '@/utils/generateDiscount';
import { sendNotification } from '@/utils/sendNotification';
import { NextResponse } from 'next/server';
import cron from 'node-cron'
export async function GET() {
    try {
        cron.schedule('30 10 * * *', async () => {
            const fiveDaysAgo = new Date();
            fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5);
            const users = await User.find({
                createdAt: { $lt: fiveDaysAgo },
                orders: { $size: 0 },
                encouragementNotificationSent: false
            });

            const twoWeeksLaterDate = new Date();
            twoWeeksLaterDate.setDate(twoWeeksLaterDate.getDate() + 14);

            for (const user of users) {
                const discountCode = await generateDiscountCode(user, twoWeeksLaterDate, 20);
                const discountCodeInfo = await DiscountCode.findById(discountCode._id);

                const sendUserEncouregementNotification = await sendNotification(
                    "عدم سفارش طی ۵ روز",
                    `عزیز ${user.username}%
                    شما طی ۵ روز عضویت به ویکسل هنوز سفارشی نداشته اید%
                   این کد تخفیف ${discountCodeInfo.discountPercentage} درصدی برای شما ${discountCodeInfo.code}
                    `
                );
                user.notifications.push(sendUserEncouregementNotification._id);
                user.encouragementNotificationSent = true;
                await user.save()
            }
            console.log('Running cron job...');
        });
        return NextResponse.json({ message: "Cron is running" }, { status: 200 })

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}