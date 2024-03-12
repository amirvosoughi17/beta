import { connect } from "@/config/DB";
import Order from "@/models/Order";
import { User } from "@/models/User";
import { get_user_data_from_session } from "@/utils/session";
import { NextResponse } from "next/server";

connect()

export async function GET(request) {
    try {
        const userId = await get_user_data_from_session(request)
        const user = await User.findOne({ _id: userId }).populate('orders');

        const myOrders = await Order.find({ _id: { $in: user.orders } });

        const myOrderCount = user.orders.length;
        if (myOrderCount === 0) {
            return NextResponse.json({
                message: "There is no Order here! create one"
            }, { status: 404 })
        }

        return NextResponse.json({ myOrders, myOrderCount }, { status: 200 })

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}