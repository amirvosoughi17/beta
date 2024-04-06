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
    let { planName, totalPrice } = data;


    const user_id = await get_user_data_from_session(request);
    const user = await User.findOne({ _id: user_id });

    const plan = await Plan.findOne({ name: planName });

    const necessaryFeatures = plan.features.filter(feature => feature.isNeseccary);

    let selectedFeatures = necessaryFeatures;
    if (data.selectedFeatures) {
      selectedFeatures = selectedFeatures.concat(data.selectedFeatures);
    }

    const newOrder = await Order.create({
      plan: planName,
      user,
      selectedFeatures,
      totalFeature: selectedFeatures.length,
      statusDates: {
        pending: new Date(Date.now())
      },
      totalPrice
    });

    if (!newOrder.installments.find(inst => inst.amount === newOrder.totalPrice * 0.4)) {
      const firstInstallmentAmount = newOrder.totalPrice * 0.4;
      newOrder.installments.push({ amount: firstInstallmentAmount });
    }

    if (!newOrder.installments.find(inst => inst.amount === newOrder.totalPrice * 0.6)) {
      const secondInstallmentAmount = newOrder.totalPrice * 0.6;
      newOrder.installments.push({ amount: secondInstallmentAmount });
    }

    const newNotification = await sendNotification(
      "سفارش جدید با موفقیت ثبت شد",
      "شما یک وبسایت جدید ثبت کردید, پس از برسی آن ما به شما وضعیت آنرا اطلاع خواهیم داد"
    );

    user.notifications.push(newNotification);
    user.orders.push(newOrder._id);

    await user.save();
    await newOrder.save();

    return NextResponse.json({ newOrder }, { status: 201 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message
    }, { status: 500 })
  }
}
