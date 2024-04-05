import { connect } from "@/config/DB";
import Event from "@/models/Event";
import Plan from "@/models/Plan";
import { NextResponse } from "next/server";
import NodeCache from "node-cache";
connect();

const nodeCache = new NodeCache();

export async function POST(request) {
    try {
        const data = await request.json();
        const { name, basePrice, description, features } = data;

        const existsName = await Plan.findOne({ name });

        if (existsName) {
            return NextResponse.json({
                message: "Plan name already exists!",
            }, { status: 400 });
        }

        const newPlan = await Plan.create({ name, basePrice, description, features });

        return NextResponse.json({
            message: "New Plan created successfully!",
            newPlan,
        }, { status: 201 });

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message,
        }, { status: 500 });
    }
}



export async function GET() {
    try {
        let plans = [];

        if (nodeCache.has('plans')) {

            plans = JSON.parse(nodeCache.get("plans"))

        } else {
            plans = await Plan.find().populate({
                path: "event",
                select: "_id name discountPercentage"
            });

            nodeCache.set("plans", JSON.stringify(plans), 120)
        }

        return NextResponse.json({
            plans,
            plansCount: plans.length
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message,
        }, { status: 500 });
    }
}
