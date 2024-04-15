import { connect } from "@/config/DB";
import Ticket from "@/models/Ticket";
import { User } from "@/models/User";
import { sendNotificationToAdmins } from "@/utils/sendNotification";
import { NextResponse } from "next/server";
import cron from 'node-cron';

connect()

export async function GET() {
    try {
        cron.schedule('* * * * *', async () => {
            console.log("ticketsEndTime cron is running ...");
            const twoWeeksAgo = new Date();
            twoWeeksAgo.setMinutes(twoWeeksAgo.getMinutes() - 1);
            const deleteClosedTickets = await Ticket.deleteMany({ status: "closed", createdAt: { $lt: twoWeeksAgo } });
            console.log("deleteClosedTickets", deleteClosedTickets);

            const deletedTicketIds = deleteClosedTickets.map(ticket => ticket._id);

            const removedTicketsIdFromUser = await User.updateMany(
                { tickets: { $in: deletedTicketIds } },
                { $pull: { tickets: { $in: deletedTicketIds } } }
            );
            console.log("removedTicketsIdFromUser", removedTicketsIdFromUser);
            if (removedTicketsIdFromUser && deleteClosedTickets) {
                await sendNotificationToAdmins("تیکت ها پاک شدند", "پاکسازی تیکت ها شده انجام شد")
            }
        })
        return NextResponse.json({ message: "ticketsEndTime cron is running" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}