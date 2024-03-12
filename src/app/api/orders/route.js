import { connect } from "@/config/DB";
import Notification from "@/models/Notification";
import Order from "@/models/Order";
import { User } from "@/models/User";
import { get_user_data_from_session } from "@/utils/session";
import { NextResponse } from "next/server";

connect();

export async function POST(request) {
  try {
    const data = await request.json();
    const { planName, supportTime, selectedFeatures } = data;
    const user_id = await get_user_data_from_session(request);
    const user = await User.findOne({ _id: user_id });
    const newOrder = await Order.create({
      plan: planName,
      user,
      supportTime,
      selectedFeatures,
      totalFeature: selectedFeatures.length,
      statusDates: {
        pending: new Date(Date.now())
      }
    });
    const newNotification = await Notification.create({
      message: "new Order created Successfully!",
    });
    user.notifications.push(newNotification);
    user.orders.push(newOrder._id);

    await user.save();

    const userInfo = {
      _id: user._id,
      username: user.username,
      email: user.email,
      phoneNumber: user.phoneNumber,
    };

    return NextResponse.json({ newOrder: { ...newOrder.toObject(), user: userInfo } }, { status: 201 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message
    }, { status: 500 })
  }
}
