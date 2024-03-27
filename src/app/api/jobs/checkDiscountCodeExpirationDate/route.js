import DiscountCode from "@/models/discountCode";
import { NextResponse } from "next/server";
import cron from "node-cron";
import { connect } from "@/config/DB";
import { User } from "@/models/User";

connect();

export async function GET() {
    try {
        cron.schedule('* * * * *', async () => {
            console.log('Running cron job...');
            const expiredDiscountCodes = await DiscountCode.find({ expiredAt: { $lte: new Date() } });

            const twentyFourHoursFromNow = new Date();
            twentyFourHoursFromNow.setHours(twentyFourHoursFromNow.getHours() + 24);

            const expiringDiscountCodes = await DiscountCode.find({
                expiredAt: { $lte: twentyFourHoursFromNow }
            }).populate('user');

            for (const discountCode of expiringDiscountCodes) {
                await sendNotification(
                    "۲۴ ساعت مهلت استفاده تا استفاده از کد تخفیف",
                    `عزیز ${discountCode.user.username}, کد تخفیف شما (${discountCode.code}) ۲۴ ساعت دیگر منقضی خواهد شد.`
                );
            }
            await User.updateMany(
                { discountCodes: { $in: expiredDiscountCodes.map(code => code._id) } },
                { $pull: { discountCodes: { $in: expiredDiscountCodes.map(code => code._id) } } }
            );
            await DiscountCode.deleteMany({
                _id: { $in: expiredDiscountCodes.map(code => code._id) }
            });

        });
        return NextResponse.json({ message: "Cron is running" }, { status: 200 })

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}