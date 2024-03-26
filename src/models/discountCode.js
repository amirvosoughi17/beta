import mongoose from 'mongoose';

const discountCodeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    code: {
        type: String,
        unique: true,
        sparse: true,
    },
    expiredAt: {
        type: Date,
        required: true
    },
    discountPercentage: {
        type: Number,
        required: true,
        min: 0,
        max: 100,
        default: 0,
    }
})
const DiscountCode = mongoose.models.DiscountCode || mongoose.model("DiscountCode", discountCodeSchema);
export default DiscountCode;
