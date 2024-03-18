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
    discount: {
        percentage: {
            type: Number,
            required: true,
            min: 0,
            max: 100,
            default: 0,
        },
        code: {
            type: String,
            unique: true,
            sparse: true,
        },
    },
    applicablePlans: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plan',
    }],
    applicableUsers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
});

eventSchema.virtual('isActive').get(function () {
    const now = new Date();
    return now >= this.startDate && now <= this.endDate;
});

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema)
export default Event;
