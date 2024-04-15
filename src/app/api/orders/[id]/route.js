import Order from "@/models/Order";
import { connect } from "@/config/DB";
import { NextResponse } from "next/server";

connect();

export async function GET(request, { params }) {
    try {
        const { id } = params;
        if (!id) {
            return NextResponse.json({ message: "صفحه مورد نظر یافت نشد!" }, { status: 404 })
        }
        const order = await Order.findOne({ _id: id });
        return NextResponse.json(order, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            message: error.message
        }, { status: 500 })
    }
}


