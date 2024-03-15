import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
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
    // sendTo: {
    //     type : mongoose.Schema.Types.ObjectId,
    //     ref: "User"
    // },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const Notification = mongoose.models.Notification || mongoose.model("Notification", notificationSchema);
export default Notification;