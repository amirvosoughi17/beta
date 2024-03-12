import { connect } from "@/config/DB";
import Order from "@/models/Order";
import { calculateOrderProgress } from "@/utils/calculateOrderProgress";
import { NextResponse } from "next/server";

connect()

export async function GET(request, { params }) {
    try {
        const { id } = params;
        const order = await Order.findOne({ _id: id })
        if (order) {
            return NextResponse.json({ order }, { status: 200 })
        } else {
            return NextResponse.json({ message: "Order not found" }, { status: 500 });
        }
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}

export async function PUT(request, { params }) {
    try {
        const { id } = params;
        const data = await request.json();
        const { featureName, newStatus } = data;
        const order = await Order.findById(id);

        if (!order) {
            return NextResponse.json({
                success: false,
                message: 'Order not found',
            }, { status: 404 });
        }

        const selectedFeature = order.selectedFeatures.find(sf => sf.name === featureName);

        if (!selectedFeature) {
            return NextResponse.json({
                success: false,
                message: 'Selected feature not found in the order',
            }, { status: 404 });
        }


        selectedFeature.status = newStatus;

        const saveOrderProgress = calculateOrderProgress(order);
        order.orderProgress = saveOrderProgress;
        if (order.orderProgress === 100) {
            order.status = "completed";
            order.statusDates.completed = new Date()
            order.supportStartedAt = new Date();
            order.supportExpiresAt = new Date();
            order.supportExpiresAt.setMonth(order.supportExpiresAt.getMonth() + order.supportTime)

        } else {
            if (order.orderProgress <= 75) {
                order.status = "inProgress";
            } else {
                order.status = "pending";
            }
        }
        await order.save();

        return NextResponse.json({
            success: true,
            message: 'Feature status updated successfully!',
            order,
        }, { status: 200 });

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}