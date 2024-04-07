import { connect } from "@/config/DB";
import Order from "@/models/Order";
import { User } from "@/models/User";
import { get_user_data_from_session } from "@/utils/session";
import { NextResponse } from "next/server";
import NodeCache from "node-cache";

connect()
const nodeCache = new NodeCache();

export async function GET(request) {
    try {
        let myOrders = [];

        const userId = await get_user_data_from_session(request)
        if (nodeCache.has("myOrders")) {
            myOrders = JSON.parse(nodeCache.get("myOrders"))
        } else {
            myOrders = await Order.find({ user: { $in: userId } });
            nodeCache.set("myOrders", JSON.stringify(myOrders), 300)
        }

        return NextResponse.json({ myOrders, myOrderCount: myOrders.length }, { status: 200 })

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}