import { connect } from "@/config/DB";
import Order from "@/models/Order";
import { NextResponse } from "next/server";
connect();

export async function POST(request) {
    try {
        const data = await request.json();
        const { plan, ...selectedFeatures } = data;
        const newOrder = await Order.create({
            plan,
            ...selectedFeatures
        })
        return NextResponse.json({ newOrder }, { status: 201 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}