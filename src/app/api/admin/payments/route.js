import { connect } from "@/config/DB";
import Payment from "@/models/Payment";
import { NextResponse } from "next/server";
connect()

export async function GET() {
    try {
        const payments = await Payment.find().populate({
            path: "user",
            select: "_id username email phoneNumber"
        });
        return NextResponse.json({
            payments,
            paymentsCount: payments.length
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}