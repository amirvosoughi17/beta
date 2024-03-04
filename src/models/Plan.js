import mongoose from 'mongoose';

const planSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: [true, 'plan name should be unique']
    },
    features: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Feature'
    }],
    basePrice: {
        type: Number,
        required: true,
    },
    description: String
});

const Plan = mongoose.models.Plan || mongoose.model('Plan', planSchema);
export default Plan;
