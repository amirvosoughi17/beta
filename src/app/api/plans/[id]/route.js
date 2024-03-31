import { NextResponse } from "next/server";
import Plan from '@/models/Plan'
import { connect } from "@/config/DB";
import Event from '@/models/Event';

connect();
export async function GET(request, { params }) {
    try {
        const { id } = params;
        if (!id) {
            return NextResponse.json({
                message: "Plan Not found!"
            }, { status: 404 })
        }
        const plan = await Plan.findOne({ _id: id }).populate({
            path: "event",
            select: "_id name discountPercentage"
        });
        return NextResponse.json({
            success: true,
            plan
        }, { status: 200 })

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}