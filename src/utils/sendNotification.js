import { connect } from "@/config/DB"
import Notification from "@/models/Notification"
connect();

export async function sendNotification(title, message) {
    try {
        return await Notification.create({ title, message })
    } catch (error) {
        console.log("Error from Send Notification", error.message)
    }
}