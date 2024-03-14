import mongoose from "mongoose";
import Plan from "./Plan";
const orderSchema = new mongoose.Schema({
    plan: {
        type: String,
        required: true
    },
    supportTime: {
        type: Number,
        required: true,
        default : 1 ,
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
            "underReview",
            "accepted",
            "notAccepted",
            "inProgress",
            "completed",
            "canceled"],
        default: "pending"
    },
    statusDates: {
        pending: { type: Date },
        underReview: { type: Date },
        accepted: { type: Date },
        notAccepted: { type: Date },
        inProgress: { type: Date },
        completed: { type: Date },
        canceled: { type: Date },
    },
    totalPrice: {
        type: Number,
        default: 0,
        required: true
    }
});


orderSchema.pre("validate", async function () {
    const plan = await Plan.findOne({ name: this.plan });
    const planBasePrice = plan.basePrice;
    const selectedFeaturesTotalPrice = this.selectedFeatures.reduce((total, feature) => {
        return total + feature.price
    }, 0);
    this.totalPrice = planBasePrice + selectedFeaturesTotalPrice;
})
const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
export default Order;