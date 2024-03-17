import { connect } from "@/config/DB";
import Payment from "@/models/Payment";
import { User } from "@/models/User";
import { get_user_data_from_session } from "@/utils/session";
import { NextResponse } from "next/server";

connect();

export async function GET(request) {
    try {
        const userId = await get_user_data_from_session(request)
        const user = await User.findOne({ _id: userId }).populate('payments');
        const myPayments = await Payment.find({ _id: { $in: user.payments } });

        return NextResponse.json({ myPayments, myPaymentsCount: user.payments.length }, { status: 200 })

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}