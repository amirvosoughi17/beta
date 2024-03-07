import mongoose from "mongoose";
import Plan from "./Plan";
const orderSchema = new mongoose.Schema({
    plan: {
        type: mongoose.Types.ObjectId,
        ref: "Plan",
        required: true,
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
    }],
    totalPrice: {
        type: Number,
        required: true
    }
});


orderSchema.pre("validate", async function () {
    const plan = await Plan.findOne({ _id: this.plan });
    const planBasePrice = plan.basePrice;

    const selectedFeaturesTotalPrice = this.selectedFeatures.reduce((total, feature) => {
        return total + feature.price
    }, 0);
    this.totalPrice = planBasePrice + selectedFeaturesTotalPrice;
})




const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
export default Order;