import Event from "@/models/Event";
import { User } from "@/models/User";
import { sendNotification } from "./sendNotification";

async function checkExpiredEvents() {
    const currentDate = new Date();
    try {
        const expiredEvents = await Event.find(
            {
                endDate: { $lt: currentDate },
                notificationSent: false
            }
        );
        for (const event of expiredEvents) {
            for (const userId of event.applicableUsers) {
                const user = await User.findById(userId);
                if (user) {
                    await sendNotification(
                        'Event Ended',
                        `The event "${event.name}" has ended.`
                    );
                }
            }

            event.notificationSent = true;
            await event.save();
        }
    } catch (error) {
        console.error('Error checking for expired events:', error);
    }
}

setInterval(checkExpiredEvents, 3600000); 
