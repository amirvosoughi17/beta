import { connect } from "@/config/DB"
import Notification from "@/models/Notification"
import { User } from "@/models/User";
connect();

export async function sendNotification(title, message) {
    try {
        return await Notification.create({ title, message })
    } catch (error) {
        console.log("Error from Send Notification", error.message)
    }
}


export async function sendNotificationToAdmins(title, message) {
    try {
        const newNotification = await Notification.create({ title, message });
        const admins = await User.find({ role: "admin" });
        for (const admin of admins) {
            admin.notifications.push(newNotification._id);
            await admin.save();
        }
    } catch (error) {
        console.log("ERROR FROM sendNotificationToAdmins FUNCTION", error.message)
    }
}