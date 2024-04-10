import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
    plan: {
        type: String,
        required: true
    },
    supportTime: {
        type: Number,
        default: 1,
    },
    supportStartedAt: {
        type: Date,
    },
    supportExpiresAt: {
        type: Date
    },
    selectedFeatures: [{
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            enum: ['در انتظار توسعه', 'در حال توسعه', 'توسعه داده شده'],
            default: 'در انتظار توسعه'
        }
    }],
    orderProgress: {
        type: Number,
        min: 0,
        max: 100,
        default: 0
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: [
            "در انتظار تایید",
            "پذیرفته شده",
            "پذیرفته نشده",
            "در انتظار پرداخت قسط اول",
            "در انتطار پرداخت قسط دوم",
            "در حال پیشرفت",
            "تکمیل شده"
        ],
        default: "در انتظار تایید"
    },
    statusDates: {
        pending: { type: Date, default: null },
        accepted: { type: Date, default: null },
    },
    installments: [{
        amount: {
            type: Number,
            required: true
        },
        paid: {
            type: Boolean,
            default: false
        },
        paidAt: {
            type: Date,
            default: null
        }
    }],
    lastReminderSentAt: Date,
    totalPrice: {
        type: Number,
        default: 0,
        required: true
    }
}, { timestamps: true });

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
export default Order;