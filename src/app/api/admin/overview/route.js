import { connect } from "@/config/DB";
import Order from "@/models/Order";
import Payment from "@/models/Payment";
import Ticket from "@/models/Ticket";
import { User } from "@/models/User";
import { NextResponse } from "next/server";
import NodeCache from "node-cache";

connect()
const nodeCache = new NodeCache();

export async function GET() {
    try {
        let responseData;

        if (nodeCache.has('reviewData')) {
            responseData = JSON.parse(nodeCache.get("reviewData"))
        }

        const latestOrders = await Order
            .find()
            .sort({ createdAt: -1 })
            .limit(2)
            .populate({
                path: "user",
                select: "_id username email phoneNumber"
            });
        const allOrders = await Order.find().countDocuments();;
        const AllUsers = await User.find().countDocuments();
        const AllTickets = await Ticket.find().countDocuments();
        const latestTickets = await Ticket
            .find()
            .sort({ createdAt: -1 })
            .limit(3)
            .populate({
                path: "createdBy",
                select: "_id username email phoneNumber"
            });
        const latestPayments = await Payment
            .find()
            .sort({ createdAt: -1 })
            .limit(3)
            .populate({
                path: "user",
                select: "_id username email phoneNumber"
            });
        const allPayments = await Payment.find().countDocuments();

        const popularPlans = await Order.aggregate([
            { $group: { _id: "$plan", totalOrders: { $sum: 1 } } },
            { $sort: { totalOrders: -1 } },
            { $limit: 5 }
        ]);
        const totalIncomes = await Payment
            .find({ status: "completed" })
            .select("amount");

        let totalAmount = 0;
        for (const income of totalIncomes) {
            totalAmount += income.amount;
        }

        responseData = {
            totalAmount,
            latestOrders,
            allOrders,
            AllUsers,
            AllTickets,
            latestTickets,
            latestPayments,
            allPayments,
            popularPlans,
        }
        nodeCache.set('reviewData', JSON.stringify(responseData), 300)
        return NextResponse.json({ responseData }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { stauts: 500 })
    }
}