import mongoose from 'mongoose'

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
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
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
        },
        {
            isAllPlans: {
                type: Boolean,
                default: false
            },
        }
    ],
    applicableUsers: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            userDiscountCode: {
                type: String,
                unique: true,
                sparse: true,
            }
        },
        {
            isAllUsers: {
                type: Boolean,
                default: false
            }
        },
    ],
});

eventSchema.virtual('isActive').get(function () {
    const now = new Date();
    return now >= this.startDate && now <= this.endDate;
});

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema)
export default Event;
