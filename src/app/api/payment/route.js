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
        const { order, installment } = data;
        const findOrder = await Order.findById(order);
        const userId  = await get_user_data_from_session(request);
        const user = await User.findById(userId).select("_id username email notifications")

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
        }
        let amount;
        let newPayment;

        switch (installment) {
            case "fullPayment":
                if (findOrder.paymentStatus.isFullPaid) {
                    throw new Error("Order is already fully paid");
                }
                amount = findOrder.totalPrice;
                findOrder.installments.forEach(inst => {
                    inst.paid = true;
                    inst.paidAt = Date.now();
                });
                findOrder.paymentStatus.isFullPaid = true;
                const fullPaymentNotification = await sendNotification(
                    MESSAGE_CONTENT.FULL_PAYMENT_MESSAGE.title,
                    MESSAGE_CONTENT.FULL_PAYMENT_MESSAGE.message
                )                
                user.notifications.push(fullPaymentNotification._id)
                break;

            case "firstInstallment":
            case "secondInstallment":
                const index = installment === "firstInstallment" ? 0 : 1;
                if (findOrder.installments[index].paid) {
                    throw new Error(`Installment ${installment} is already paid`);
                }
                amount = findOrder.installments[index].amount;
                findOrder.installments[index].paid = true;
                findOrder.installments[index].paidAt = Date.now();
                findOrder.paymentStatus.paidInsallments += 1;
                findOrder.paymentStatus.totalPaidPrice += amount;
                break;
            default:
                throw new Error("Invalid installment type");
        }
        if(installment === "firstInstallment"){
            const firstInstallmentPaidNotification = await sendNotification(
                MESSAGE_CONTENT.FIRST_INSTALLMENT_PAID_MESSAGE.title,
                MESSAGE_CONTENT.FIRST_INSTALLMENT_PAID_MESSAGE.message
            )                
            user.notifications.push(firstInstallmentPaidNotification._id)
        } else if(installment === "secondInstallment"){
            const secondInstallmentPaidNotification = await sendNotification(
                MESSAGE_CONTENT.SECOND_INSTALLMENT_PAID_MESSAGE.title,
                MESSAGE_CONTENT.SECOND_INSTALLMENT_PAID_MESSAGE.message
            )                
            user.notifications.push(secondInstallmentPaidNotification._id)
        }
        await Promise.all([
            findOrder.save(),
            user.save()
        ]);
        newPayment = await Payment.create({ order, installment, amount });

        return NextResponse.json({ newPayment }, { status: 201 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 })
    }
}