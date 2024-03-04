import mongoose from "mongoose";

const featureSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    plan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plan',
        required: true
    },
});

const Feature = mongoose.models.Feature || mongoose.model('Feature', featureSchema);
export default Feature;