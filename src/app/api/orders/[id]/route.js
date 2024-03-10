import Order from "@/models/Order";
import { calculateOrderProgress } from "@/utils/calculateOrderProgress";
import mongoose from "mongoose";
import { connect } from "@/config/DB";

connect();

export async function GET(request, { params }) {
    try {
        const { id } = params;

        if (!id) {
            return Response.json({
                message: "Order Not found!"
            }, { status: 404 })
        }
        const isValidObjectId = mongoose.Types.ObjectId.isValid(id);
        if (!isValidObjectId) {
            return Response.json({
                message: "Invalid Order ID"
            }, { status: 400 });
        }

        const order = await Order.findOne({ _id: id });
        return Response.json(order, { status: 200 })
    } catch (error) {
        return Response.json({
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
            return Response.json({
                success: false,
                message: 'Order not found',
            }, { status: 404 });
        }

        const selectedFeature = order.selectedFeatures.find(sf => sf.name === featureName);

        if (!selectedFeature) {
            return Response.json({
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
                order.status = "in_progress";
            } else {
                order.status = "pending";
            }
        }
        await order.save();

        return Response.json({
            success: true,
            message: 'Feature status updated successfully!',
            order,
        }, { status: 200 });

    } catch (error) {
        return Response.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}

