import { connect } from "@/config/DB";
import Order from "@/models/Order";
import Payment from "@/models/Payment";
import Ticket from "@/models/Ticket";
import { User } from "@/models/User";
import { NextResponse } from "next/server";

connect()

export async function GET() {
    try {
        const latestOrders = await Order
            .find()
            .sort({ createdAt: -1 })
            .limit(3)
            .populate({
                path: "user",
                select: "_id username email phoneNumber"
            });
        const latestUsers = await User.find().sort({ createdAt: -1 }).limit(3);
        const allUsersCount = await User.find().countDocuments();
        const latestPayments = await Payment
            .find()
            .sort({ createdAt: -1 })
            .limit(3)
            .populate({
                path: "user",
                select: "_id username email phoneNumber"
            });
        const latestTickets = await Ticket
            .find()
            .sort({ createdAt: -1 })
            .limit(3).populate({
                path: "createdBy",
                select: "_id username email phoneNumber"
            });
        const popularPlans = await Order.aggregate([
            { $group: { _id: "$plan", totalOrders: { $sum: 1 } } },
            { $sort: { totalOrders: -1 } },
            { $limit: 5 }
        ]);
        return NextResponse.json({
            latestOrders,
            latestUsers,
            latestPayments,
            latestTickets,
            popularPlans,
            allUsersCount
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { stauts: 500 })
    }
}