import { connect } from "@/config/DB"
import Notification from "@/models/Notification"
connect();

export async function sendNotification(message) {
    try {
        return await Notification.create({ message })
    } catch (error) {
        console.log("Error from Send Notification", error.message)
    }
}