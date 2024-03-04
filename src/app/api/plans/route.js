import { connect } from "@/config/DB";
import Plan from "@/models/Plan";
import { NextResponse } from "next/server";
connect()

export async function POST(request) {
    try {
        const data = await request.json();
        const { name, basePrice, description } = data;

        const existsName = await Plan.findOne({ name });

        if (existsName) {
            return NextResponse.json({
                message: "Plan name is exists!"
            }, { status: 400 })
        }
        const new_plan = await Plan.create({ name, basePrice, description });

        return NextResponse.json({
            message: "New Plan created successfully!",
            new_plan
        }, { status: 201 });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 });
    }
}

export async function GET() {
    try {
        const plans = await Plan.find().populate({
            path: 'features',
            select: 'name',
        });
        const planCount = await Plan.countDocuments();
        if (planCount === 0) {
            return NextResponse.json({
                message: "There is no plan here! create one..."
            }, { status: 400 });
        }
        return NextResponse.json({ plans }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 });
    }
}