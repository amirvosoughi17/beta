import { connect } from "@/config/DB";
import Order from "@/models/Order";
import Payment from "@/models/Payment";
import { User } from "@/models/User";
import { sendNotification } from "@/utils/sendNotification";
import { get_user_data_from_session } from "@/utils/session";
import { NextResponse } from "next/server";
connect();

export async function POST(request) {
    try {
        const data = await request.json();
        const { order: orderId, installment } = data;
        const userId = await get_user_data_from_session(request);
        const user = await User.findById(userId).select("_id username email notifications payments");

        const findOrder = await Order.findById(orderId).populate('user');
        if (!findOrder || String(findOrder.user._id) !== userId) {
            return NextResponse.json({
                success: false,
                message: "شناسه وارد شده با حساب شما مطابقت ندارد"
            }, { status: 400 })
        }
        const MESSAGE_CONTENT = {
            FULL_PAYMENT_MESSAGE: {
                title: "هزینه سفارش به طور کلی پرداخت شد",
                message: "شما همه هزینه سفارش تان را پرداخت کردید"
            },
            FIRST_INSTALLMENT_PAID_MESSAGE: {
                title: "قسط اول پرداخت شد",
                message: "شما قسط اول از سفارش خود را پرداخت کردید"
            },
            SECOND_INSTALLMENT_PAID_MESSAGE: {
                title: "قسط دوم پرداخت شد",
                message: "شما قسط دوم از سفارش خود را پرداخت کردید"
            }
        };

        let amount;
        let paymentMessage;
        let newPayment;

        switch (installment) {
            case "fullPayment":
                if (findOrder.paymentStatus.isFullPaid) {
                    return NextResponse.json({
                        success: false,
                        message: "تمامی هزینه سفارش مربوطه پرداخت شده است"
                    }, { status: 400 })
                }
                amount = findOrder.totalPrice;
                findOrder.installments.forEach(inst => {
                    inst.paid = true;
                    inst.paidAt = Date.now();
                });
                findOrder.paymentStatus.isFullPaid = true;
                paymentMessage = MESSAGE_CONTENT.FULL_PAYMENT_MESSAGE;
                break;

            case "firstInstallment":
            case "secondInstallment":
                const index = installment === "firstInstallment" ? 0 : 1;
                if (findOrder.installments[index].paid) {
                    return NextResponse.json({
                        success: false,
                        message: "هزینه قسط وارد کرده قبلا پرداخت شده بود"
                    }, { status: 400 })
                }
                amount = findOrder.installments[index].amount;
                findOrder.installments[index].paid = true;
                findOrder.installments[index].paidAt = Date.now();
                findOrder.paymentStatus.paidInsallments += 1;
                findOrder.paymentStatus.totalPaidPrice += amount;
                paymentMessage = installment === "firstInstallment" ? MESSAGE_CONTENT.FIRST_INSTALLMENT_PAID_MESSAGE : MESSAGE_CONTENT.SECOND_INSTALLMENT_PAID_MESSAGE;
                break;

            default:
                return NextResponse.json({
                    success: false,
                    message: "لطفا مشخص کنید چه مقدار از هزینه سفارش را پرداخت میکنید"
                }, { status: 400 });
        }

        const paymentNotification = await sendNotification(paymentMessage.title, paymentMessage.message);
        user.notifications.push(paymentNotification._id);

        newPayment = await Payment.create({ order: orderId, installment, amount });
        user.payments.push(newPayment._id);

        await Promise.all([
            findOrder.save(),
            user.save()
        ]);

        return NextResponse.json({ newPayment }, { status: 201 });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 });
    }
}
