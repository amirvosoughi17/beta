import { connect } from "@/config/DB";
import Plan from "@/models/Plan";
import Feature from '@/models/Feature';
import { NextResponse } from "next/server";
connect()

export async function POST(request) {
    try {
        const data = await request.json();
        const { name, price, plan } = data;

        if (!name || !price || !plan) {
            return NextResponse.json({
                success: false,
                message: "Please fill in all required fields (name, price, plan)"
            }, { status: 400 })
        }

        const is_exist_plan = await Plan.findById(plan);

        if (!is_exist_plan) {
            return NextResponse.json({
                success: false,
                message: "Plan does not exist!"
            }, { status: 404 })
        }

        const new_feature = await Feature.create({ name, price, plan });
        is_exist_plan.features.push(new_feature);
        await is_exist_plan.save();

        return NextResponse.json({
            success: true,
            message: {
                success_message: "New Feature created Successfully!",
                new_feature
            }
        }, { status: 201 });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}
