import { connect } from "@/config/DB";
import Event from "@/models/Event";
import { NextResponse } from "next/server";
connect();

export async function POST(request) {
    try {
        const data = await request.json();
        const {
            name,
            description,
            startDate,
            endDate,
            applicablePlans,
            applicableUsers,
            discount
        } = data;

        const newEvent = await Event.create({
            name,
            description,
            startDate,
            endDate,
            applicablePlans,
            applicableUsers,
            discount: {
                percentage: discount.percentage,
                code: discount.code
            }
        });
        return NextResponse.json({ newEvent }, { status: 201 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}