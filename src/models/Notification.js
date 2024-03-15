import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true,
    },
    count: {
        type: Number,
        default: 1, 
    },
    isRead: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const Notification = mongoose.models.Notification || mongoose.model("Notification", notificationSchema);
export default Notification;