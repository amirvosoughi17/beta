import { connect } from "@/config/DB";
import Event from "@/models/Event";
import Plan from "@/models/Plan";
import { User } from "@/models/User";
import DiscountCode from "@/models/discountCode";
import { generateDiscountCode } from "@/utils/generateDiscount";
import { sendNotification } from "@/utils/sendNotification";
import moment from "moment";
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
            discountPercentage
        } = data;
        const parsedStartDate = moment(startDate, 'jYYYY/jM/jD').toDate();
        const parsedEndDate = moment(endDate, 'jYYYY/jM/jD').toDate();

        let applicableUsers = await User.find({ role: "user" }).select("_id notifications discountCodes");
        for (const user of applicableUsers) {
            const discountCode = await generateDiscountCode(user._id, endDate, discountPercentage);
            const findUser = await User.findById(user._id);
            findUser.discountCodes.push(discountCode._id);
            await findUser.save()
        }

        if (applicablePlans && applicablePlans.isAllPlans === true) {
            const allPlans = await Plan.find().select("_id");
            for (const plan of allPlans) {
                applicablePlans = plan._id
            }
        }

        const newEvent = await Event.create({
            name,
            description,
            startDate: parsedStartDate,
            endDate: parsedEndDate,
            applicablePlans,
            applicableUsers,
            discountPercentage
        });

        for (const userId of newEvent.applicableUsers) {
            const user = await User.findById(userId._id);
            if (user) {
                const findDiscountCode = await DiscountCode.findById(user.discountCodes)
                const eventEndDate = new Date(newEvent.endDate).toLocaleString('fa-IR');
                const newEventNotification = await sendNotification(
                    `دعوت شدید ${newEvent.name} شما به جشنواره`,
                    `جشنواره: ${newEvent.description}
                    درصد تخفیف: ${newEvent.discountPercentage}%
                    کد تخفیف شما: ${findDiscountCode.code}
                    مهلت استفاده: ${eventEndDate}`
                );

                user.notifications.push(newEventNotification._id)
                await user.save();
            }
        }
        for (const planId of newEvent.applicablePlans) {
            const plan = await Plan.findById(planId.plan)
            plan.isInEvent = true;

            if (plan.event != null) {
                return NextResponse.json({
                    message: ` تعرفه ${plan.name} در حال حاضر در جشنواره حضور دارد`
                }, { stauts: 400 })
            } else {
                plan.event = newEvent._id
                await plan.save()
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

export async function GET() {
    try {
        const events = await Event.find().populate({
            path: "applicableUsers.user",
            select: "_id username email"
        });
        return NextResponse.json({ events }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}