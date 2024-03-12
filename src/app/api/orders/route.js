import { connect } from "@/config/DB";
import Order from "@/models/Order";
import { User } from "@/models/User";
import { get_user_data_from_session } from "@/utils/session";
import { NextResponse } from "next/server";
import Plan from "@/models/Plan";

connect();

export async function POST(request) {
  try {
    const data = await request.json();
    const { planName, selectedFeatures } = data;
    const user_id = await get_user_data_from_session(request);
    const user = await User.findOne({ _id: user_id });
    const plan = await Plan.findOne({ name: planName });

    const supportTime = 4; 

    const originalPhoneNumberValidator = User.schema.path('phoneNumber').validators[0];
    User.schema.path('phoneNumber').validators = [];

    const newOrder = await Order.create({
      plan: planName,
      user,
      supportTime,
      selectedFeatures,
      totalFeature: selectedFeatures.length,
      statusDates: {
        pending: new Date(Date.now())
      },
      basePrice: plan.basePrice,
    });

    User.schema.path('phoneNumber').validators = [originalPhoneNumberValidator];

    user.orders.push(newOrder._id);
    await user.save();

    return NextResponse.json({ newOrder }, { status: 201 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message
    }, { status: 500 });
  }
}
