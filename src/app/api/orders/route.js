import { connect } from "@/config/DB";
import Order from "@/models/Order";
import Plan from "@/models/Plan";
import { User } from "@/models/User";
import { sendNotification, sendNotificationToAdmins } from "@/utils/sendNotification";
import { get_user_data_from_session } from "@/utils/session";
import { NextResponse } from "next/server";

connect();

export async function POST(request) {
  try {
    const data = await request.json();
    const { planName, totalPrice } = data;

    const userId = await get_user_data_from_session(request);
    const user = await User.findOne({ _id: userId });

    const plan = await Plan.findOne({ name: planName });

    const necessaryFeatures = plan.features.filter(feature => feature.isNeseccary);

    let selectedFeatures = necessaryFeatures;
    if (data.selectedFeatures) {
      selectedFeatures = selectedFeatures.concat(data.selectedFeatures);
    }

    const firstInstallmentAmount = parseFloat((totalPrice * 0.4).toFixed(2));
    const secondInstallmentAmount = parseFloat((totalPrice * 0.6).toFixed(2));
    const newOrder = await Order.create({
      plan: planName,
      user,
      selectedFeatures,
      statusDates: { pending: new Date() },
      totalPrice,
      installments: [
        { amount: firstInstallmentAmount },
        { amount: secondInstallmentAmount }
      ]
    });

    const newNotification = await sendNotification(
      `${user.username} گرانقدر%
      سفارش جدید شما با موفقیت ثبت شد
      `,
      "با سپاس از ثبت سفارش جدید شما! تیم ویکسل در حال بررسی اطلاعات ارسالی است. به زودی وضعیت سفارش شما را به اطلاع خواهیم رساند."
    );
    const orderSinglePageUrl = `http://localhost:3000/dashboard/order/${newOrder._id}`
    await sendNotificationToAdmins(
      `${user.username} سفارشی را ثبت کرد%`,
      `سفارش جدید  دریافت شد برای دیدن اطلاعات آن سفارش %
      ${orderSinglePageUrl}`
    );
    user.notifications.push(newNotification._id);
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
