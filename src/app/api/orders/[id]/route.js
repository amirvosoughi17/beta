import Order from "@/models/Order";
import mongoose from "mongoose";
import { connect } from "@/config/DB";
import { NextResponse } from "next/server";

connect();

export async function GET(request, { params }) {
    try {
        const { id } = params;

        if (!id) {
            return NextResponse.json({
                message: "Order Not found!"
            }, { status: 404 })
        }
        const isValidObjectId = mongoose.Types.ObjectId.isValid(id);
        if (!isValidObjectId) {
            return NextResponse.json({
                message: "Invalid Order ID"
            }, { status: 400 });
        }

        const order = await Order.findOne({ _id: id });
        return NextResponse.json(order, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            message: error.message
        }, { status: 500 })
    }
}


