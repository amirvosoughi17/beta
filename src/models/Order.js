import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
    plan: {
        type: String,
        required: true
    },
    supportTime: {
        type: Number,
        required: true,
        default: 1,
        min: [1, 'Support time must be at least 1 month'],
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
            enum: ['todo', 'inProgress', 'completed'],
            default: 'todo'
        }
    }],
    totalFeature: {
        type: Number,
        required: true,
        default: 0
    },
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
            "pending",
            "accepted",
            "notAccepted",
            "waitForFirstInstallment",
            "waitForSecondInstallment",
            "inProgress",
            "completed",
            "canceled"
        ],
        default: "pending"
    },
    installments: [{
        dueDate: { type: Date },
        amount: { type: Number },
        paid: { type: Boolean, default: false },
    }],
    statusDates: {
        pending: { type: Date },
        accepted: { type: Date },
        notAccepted: { type: Date },
        inProgress: { type: Date },
        completed: { type: Date },
        canceled: { type: Date },
    },
    paymentStatus: {
        firstInstallmentPaid: {
            type: Boolean,
            default: false
        },
        firstInstallmentPaidAt: {
            type: Date,
            default: null
        },
        secondInstallmentPaid: {
            type: Boolean,
            default: false
        },
        secondInstallmentPaidAt: {
            type: Date,
            default: null
        }
    },
    totalPrice: {
        type: Number,
        default: 0,
        required: true
    }
});


const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
export default Order;