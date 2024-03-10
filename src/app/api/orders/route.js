import { connect } from "@/config/DB";
import Order from "@/models/Order";
import { User } from "@/models/User";
import { get_user_data_from_session } from "@/utils/session";
import { NextResponse } from "next/server";
connect();

export async function POST(request) {
    try {
        const data = await request.json();
        const { plan, supportTime, selectedFeatures } = data;
        const user_id = await get_user_data_from_session(request);
        const user = await User.findOne({ _id: user_id });
        const newOrder = await Order.create({
            plan,
            user,
            supportTime,
            selectedFeatures,
            totalFeature: selectedFeatures.length,
            statusDates: {
                pending: new Date(Date.now())
            }
        });
        user.orders.push(newOrder._id);
        await user.save();
        return NextResponse.json({ newOrder }, { status: 201 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}