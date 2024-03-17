import { connect } from "@/config/DB";
import Payment from "@/models/Payment";
import { NextResponse } from "next/server";
connect()

export async function GET() {
    try {
        const payments = await Payment.find();
        if (payments.length === 0) {
            return NextResponse.json({
                message: "There is no Payment here!"
            }, { status: 404 })
        }
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