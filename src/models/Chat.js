import mongoose from 'mongoose'

const chatSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    content: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    isRead: {
        type: Boolean,
        default: false,
    }
});

const Chat = mongoose.models.Chat || mongoose.model("Chat", chatSchema);
export default Chat;