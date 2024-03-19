import { connect } from "@/config/DB";
import Event from "@/models/Event";
import Plan from "@/models/Plan";
import { User } from "@/models/User";
import { generateDiscountCode } from "@/utils/generateDiscount";
import { sendNotification } from "@/utils/sendNotification";
import { NextResponse } from "next/server";

connect();

export async function POST(request) {
    try {
        const data = await request.json();
        let {
            name,
            description,
            startDate,
            endDate,
            applicablePlans,
            applicableUsers,
            discountPercentage
        } = data;

        if (applicableUsers && applicableUsers.isAllUsers === true) {
            const allUsers = await User.find({ role: "user" }).select("_id notifications");
            applicableUsers = allUsers.map(user => ({
                user: user._id,
                userDiscountCode: generateDiscountCode()
            }));
        }
        if (applicablePlans && applicablePlans.isAllPlans === true) {
            const allPlans = await Plan.find().select("_id");
            applicablePlans = allPlans.map(plan => plan._id);
        }

        for (const user of applicableUsers) {
            user.userDiscountCode = generateDiscountCode();
        }

        const newEvent = await Event.create({
            name,
            description,
            startDate,
            endDate,
            applicablePlans,
            applicableUsers,
            discountPercentage
        });
        for (const userId of newEvent.applicableUsers) {
            const user = await User.findById(userId.user);
            if (user) {
                const newEventNotification = await sendNotification(`دعوت شدید ${newEvent.name} شما به جشنواره`, `Event: ${newEvent.description}, ${userId.userDiscountCode}`);
                user.notifications.push(newEventNotification._id)
                await user.save();
            }
        }
        return NextResponse.json({ newEvent }, { status: 201 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message || "An error occurred while creating the event"
        }, { status: 500 });
    }
}
