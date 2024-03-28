import { connect } from "@/config/DB";
import Order from "@/models/Order";
import Plan from "@/models/Plan";
import { User } from "@/models/User";
import DiscountCode from "@/models/discountCode";
import { sendNotification } from "@/utils/sendNotification";
import { get_user_data_from_session } from "@/utils/session";
import { NextResponse } from "next/server";

connect();

export async function POST(request) {
  try {
    const data = await request.json();
    let { planName, supportTime, selectedFeatures, discount } = data;
    const user_id = await get_user_data_from_session(request);
    const user = await User.findOne({ _id: user_id });

    const plan = await Plan.findOne({ name: planName });
    const planBasePrice = plan.basePrice;

    if (!selectedFeatures || selectedFeatures.length === 0) {
      selectedFeatures = plan.features.filter(feature => feature.isNeseccary);
    }
    const supportFeaturePricePerMonth = 120;
    const supportTotalPrice = supportFeaturePricePerMonth * supportTime;

    const selectedFeaturesTotalPrice = selectedFeatures.reduce((total, feature) => {
      return total + feature.price
    }, 0);


    const newOrder = await Order.create({
      plan: planName,
      user,
      supportTime,
      selectedFeatures,
      totalFeature: selectedFeatures.length,
      discount: {
        code: discount
      },
      statusDates: {
        pending: new Date(Date.now())
      },
      totalPrice: planBasePrice + selectedFeaturesTotalPrice + supportTotalPrice
    });

    if (newOrder.discount) {
      const code = await DiscountCode.findOne({ code: newOrder.discount.code });
      if (!code) {
        return NextResponse.json({
          message: "کد تخفیف نا معتبر"
        }, { status: 400 })
      }
      if (code && !code.isApplied) {
        const discountedAmount = (newOrder.totalPrice * code.discountPercentage) / 100;

        newOrder.totalPrice -= discountedAmount;
        newOrder.discount.isApplied = true;
        newOrder.discount.amount = discountedAmount;
        code.isApplied = true;



        await DiscountCode.deleteOne({ code: newOrder.discount.code });

        if (user) {
          user.discountCodes = user.discountCodes.filter(code => code !== newOrder.discount.code);
          await user.save();
        }
      }
    }


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
