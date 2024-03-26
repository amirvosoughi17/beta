import { connect } from "@/config/DB";
import DiscountCode from "@/models/discountCode";
import { get_user_data_from_session } from "@/utils/session";
import { NextResponse } from "next/server";

connect();

export async function GET(request) {
    try {
        const userId = await get_user_data_from_session(request);
        const myDiscounts = await DiscountCode.find({ user: userId });
        return NextResponse.json({ myDiscounts }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}