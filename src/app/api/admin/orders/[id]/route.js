import { connect } from "@/config/DB";
import Order from "@/models/Order";
import { NextResponse } from "next/server";

connect()

export async function GET(request, { params }) {
    try {
        const { id } = params;
        const order = await Order.findOne({ _id: id })
        if (order) {
            return NextResponse.json({ order }, { status: 200 })
        } else {
            return NextResponse.json({ message: "Order not found" }, { status: 500 });
        }
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}


export async function PUT(request, { params }) {
    try {
        const { id } = params;
        const { newStatus } = await request.json();

        const order = await Order.findOne({ _id: id })
        if (order) {
            order.status = newStatus
            await order.save()
            return NextResponse.json({ order }, { status: 200 });
        } else {
            return NextResponse.json({ message: "Order not found!" }, { status: 200 });
        }
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}