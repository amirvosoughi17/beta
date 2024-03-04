import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Plan from '@/models/Plan'
import { connect } from "@/config/DB";
connect();
export async function GET(request, { params }) {
    try {
        const { id } = params;
        if (!id) {
            return NextResponse.json({
                message: "Plan Not found!"
            }, { status: 404 })
        }
        const isValidId = mongoose.Types.ObjectId.isValid(id);

        if (!isValidId) {
            return NextResponse.json({
                message: "Invalid Plan ID"
            }, { status: 400 });
        }

        const plan = await Plan.findOne({ _id: id });
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