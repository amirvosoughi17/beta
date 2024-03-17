import mongoose from 'mongoose'

const paymentSchema = new mongoose.Schema({
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    installments: {
        type: String,
        enum: ["firstInstallment", "secondInstallment", "fullPayment"],
        default: "firstInstallment"
    },
    amount: {
        type: Number,
        required: true,
        default: 0
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'failed'],
        default: 'pending'
    },
}, { timestamps: true })

const Payment = mongoose.models.Payment || mongoose.model("Payment", paymentSchema);
export default Payment;