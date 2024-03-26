import { sendNotification } from '@/utils/sendNotification';
import mongoose from 'mongoose'
import { User } from './User';

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
            }
        },
        {
            isAllUsers: {
                type: Boolean,
                default: false
            }
        },
    ],
}, { timestamps: true });

eventSchema.virtual('isActive').get(async function () {
    const now = new Date();
    if (now >= this.startDate && now <= this.endDate) {
        return true;
    } else {
        const expiredEventNotification = await sendNotification(
            "اتمام زمان جشنواره",
            `جشنواره ${this.name} به اتمام رسید`
        )
        this.remove();
        for (const userId of this.applicableUsers) {
            const user = await User.findById(userId.user);
            user.notifications.push(expiredEventNotification._id);
            await user.save();
        }
        return false;
    }
});

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema)
export default Event;