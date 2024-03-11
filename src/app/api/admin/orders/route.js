import { connect } from "@/config/DB";
import Order from "@/models/Order";
import { NextResponse } from "next/server";

connect()

export async function GET() {
    try {
        const orders = await Order.find();
        const orderDocumentCount = await Order.countDocuments();
        if(orderDocumentCount === 0){
            return NextResponse.json({
                message: "There is not order here..."
            }, { status: 404 })
        }
        return NextResponse.json({ orders, orderDocumentCount }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { success: false })
    }
}