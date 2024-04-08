import { sendNotification } from "@/utils/sendNotification";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        required: [true, 'لطفا ایمیل شرکت خود را وارد کنید'],
        trim: true,
        lowercase: true,
        unique: true,
        match: [/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'لطفا ایمیل معتبر وارد کنید'],
    },
    phoneNumber: {
        type: String,
        required: [true, 'لطفا شماره تماس شرکت خود را وارد کنید'],
        unique: true,
        validate: {
            validator: function (v) {
                const englishNumerals = v.replace(/[۰-۹]/g, function (match) {
                    return String.fromCharCode(match.charCodeAt(0) - '۰'.charCodeAt(0) + '0'.charCodeAt(0));
                });
                return /^(\+98|0|0098)?9\d{9}$/.test(englishNumerals);
            },
            message: 'لطفا یک شماره تلفن معتبر وارد کنید',
        },
    },
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order"
    }],
    payments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Payment"
    }],
    tickets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ticket"
    }],
    notifications: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Notification',
    }],
    discountCodes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "DiscountCode"
    }],
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    encouragementNotificationSent: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });



export const User = mongoose.models.User || mongoose.model("User", userSchema);
