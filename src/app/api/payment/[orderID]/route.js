import { connect } from "@/config/DB";
import Order from "@/models/Order";
import { send } from "@/utils/vandar";
import { NextResponse } from "next/server";

connect();

export async function POST(request, { params }) {
    try {
        const data = await request.json();
        const { installment: amount } = data;

        const api = process.env.VANDAR_API_KEY;
        const redirect = 'https://localhost:3000';
        const result = await send(api, amount, redirect);
        if (result.status === 1) {
            return NextResponse.json({ redirectUrl: `https://ipg.vand.ar/v3/${result.token}` }, { status: 200 });
        } else {
            return NextResponse.json({ errors: result.errors }, { status: 400 });
        }
    } catch (error) {
        console.error('Error sending transaction:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}

export async function GET(request, { params }) {
    try {
        const orderID = params.orderID;
        const order = await Order.findById(orderID).populate({
            path: "user",
            select: "_id username email phoneNumber"
        });
        return NextResponse.json({ order }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}