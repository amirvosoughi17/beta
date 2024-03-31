import mongoose from 'mongoose'

const paymentSchema = new mongoose.Schema({
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    installments: {
        type: String,
        enum: ["قسط اول", "قسط دوم", "کل مبلغ"],
        default: "قسط اول"
    },
    discount: {
        code: {
            type: String,
            default: null
        },
        discountAmount: {
            type: Number,
            default: 0
        }
    },
    amount: {
        type: Number,
        required: true,
        default: 0
    },
    status: {
        type: String,
        enum: ['در انتظار', 'موفق', 'ناموفق'],
        default: 'در انتظار'
    },
}, { timestamps: true })

const Payment = mongoose.models.Payment || mongoose.model("Payment", paymentSchema);
export default Payment;