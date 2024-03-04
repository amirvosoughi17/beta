import mongoose from 'mongoose';

const planSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: [true, 'plan name should be unique']
    },
    features: [{
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }],
    basePrice: {
        type: Number,
        required: true,
    },
    description: String
});

const Plan = mongoose.models.Plan || mongoose.model('Plan', planSchema);
export default Plan;
