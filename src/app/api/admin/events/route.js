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
            applicableUsers = (await User.find({ role: "user" })).map(user => user._id);
        }

        if (applicablePlans && applicablePlans.isAllPlans === true) {
            applicablePlans = (await Plan.find()).map(plan => plan._id);
        }

        for (const user of applicableUsers) {
            user.userDiscountCode = generateDiscountCode();
        }

        // await User.updateMany(
        //     { _id: { $in: applicableUsers } },
        //     { $push: { notifications: { $each: notifications } } }
        // );

        const newEvent = await Event.create({
            name,
            description,
            startDate,
            endDate,
            applicablePlans,
            applicableUsers,
            discountPercentage
        });
        return NextResponse.json({ newEvent }, { status: 201 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message || "An error occurred while creating the event"
        }, { status: 500 });
    }
}
