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

discountCodeSchema.pre("validate", async function () {
    const now = new Date();
    if (now >= this.expiredAt && now <= this.endDate) {
        return true;
    } else {
        const expiredDiscountCodeNotification = await sendNotification(
            "کد تخفیف شما سوخت",
            `کد تخفیف ${this.discountPercentage} درصدی شما دیگر سوخت و اعتباری ندارد`
        )
        this.remove();
        for (const userId of this.applicableUsers) {
            const user = await User.findById(userId.user);
            user.notifications.push(expiredDiscountCodeNotification._id);
            await user.save();
        }
        return false;}
});
const DiscountCode = mongoose.models.DiscountCode || mongoose.model("DiscountCode", discountCodeSchema);
export default DiscountCode;
