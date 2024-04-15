import mongoose from 'mongoose';
import moment from 'moment';

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    startDate: {
        type: Date,
        default: () => moment().format('YYYY-MM-DD HH:mm:ss')
    },
    endDate: {
        type: String,
    },
    discountPercentage: {
        type: Number,
        required: true,
        min: 0,
        max: 100,
        default: 0,
    },
    applicablePlans: [
        {
            plan: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Plan',
            },
            isAllPlans: {
                type: Boolean,
                default: false
            }
        }
    ],
    applicableUsers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
}, { timestamps: true });

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);
export default Event;
