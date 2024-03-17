import { connect } from "@/config/DB";
import Order from "@/models/Order";
import Plan from "@/models/Plan";
import { User } from "@/models/User";
import { sendNotification } from "@/utils/sendNotification";
import { get_user_data_from_session } from "@/utils/session";
import { NextResponse } from "next/server";

connect();

export async function POST(request) {
  try {
    const data = await request.json();
    const { planName, supportTime, selectedFeatures } = data;
    const user_id = await get_user_data_from_session(request);
    const user = await User.findOne({ _id: user_id });

    const plan = await Plan.findOne({ name: planName });
    const planBasePrice = plan.basePrice;
    const selectedFeaturesTotalPrice = selectedFeatures.reduce((total, feature) => {
      return total + feature.price
    }, 0);
    const newOrder = await Order.create({
      plan: planName,
      user,
      supportTime,
      selectedFeatures,
      totalFeature: selectedFeatures.length,
      statusDates: {
        pending: new Date(Date.now())
      },
      totalPrice: planBasePrice + selectedFeaturesTotalPrice
    });

    const newNotification = await sendNotification(
      "سفارش جدید با موفقیت ثبت شد",
      "شما یک وبسایت جدید ثبت کردید, پس از برسی آن ما به شما وضعیت آنرا اطلاع خواهیم داد"
    );
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
