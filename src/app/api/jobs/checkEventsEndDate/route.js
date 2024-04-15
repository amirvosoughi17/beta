import { connect } from "@/config/DB";
import Event from "@/models/Event";
import Plan from "@/models/Plan";
import { sendNotificationToAdmins } from "@/utils/sendNotification";
import { NextResponse } from "next/server";
import cron from 'node-cron';

connect()

export async function GET() {
    try {
        cron.schedule('* * * * *', async () => {
            console.log("checkEventsEndDate cron is running ...");

            const expiredEvents = await Event.find({ endDate: { $lte: new Date() } });
            const removeEndedEventsIdFromPlans = await Plan.updateMany(
                { event: { $in: expiredEvents.map(event => event._id) } },
                { $unset: { event: "" }, $set: { isInEvent: false } }
            );

            const deleteEndedEvents = await Event.deleteMany({
                _id: { $in: expiredEvents.map(event => event._id) }
            })
            if (removeEndedEventsIdFromPlans && deleteEndedEvents) {
                await sendNotificationToAdmins("رویداد ها پاک شدند", "پاکسازی رویداد های اتمام شده انجام شد")
            }
        })
        return NextResponse.json({
            message: "checkEventsEndDate cron is running..."
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}