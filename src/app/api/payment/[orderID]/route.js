import { connect } from "@/config/DB";
import Order from "@/models/Order";
import Payment from "@/models/Payment";
import { User } from "@/models/User";
import DiscountCode from "@/models/discountCode";
import { sendNotification } from "@/utils/sendNotification";
import { get_user_data_from_session } from "@/utils/session";
import { NextResponse } from "next/server";

connect();

export async function POST(request, { params }) {
    try {
        const data = await request.json();
        const orderID = params.orderID;
        const { installment, discount } = data;


        const userId = await get_user_data_from_session(request);
        const user = await User.findById(userId)

        const findOrder = await Order.findById(orderID).populate('user');

        if (!findOrder || String(findOrder.user._id) !== userId) {
            return NextResponse.json({
                success: false,
                message: "شناسه وارد شده با حساب شما مطابقت ندارد"
            }, { status: 400 })
        }
        const MESSAGE_CONTENT = {
            FIRST_INSTALLMENT_PAID_MESSAGE: {
                title: "قسط اول پرداخت شد",
                message: "شما قسط اول از سفارش خود را پرداخت کردید"
            },
            SECOND_INSTALLMENT_PAID_MESSAGE: {
                title: "قسط دوم پرداخت شد",
                message: "شما قسط دوم از سفارش خود را پرداخت کردید"
            },
            ADMIN_NOTIFICATION_MESSAGE: {
                title: `${installment === "firstInstallment" ? "قسط اول" : "قسط دوم"} پرداخت شد`,
                message: ` ${installment === "firstInstallment" ? "قسط اول" : "قسط دوم"} را پرداخت کرد ${user.username}`
            }
        };

        let amount;
        let paymentMessage;
        let discountedAmount = 0;
        let code;
        let newPayment;

        switch (installment) {
            case "fullPayment":
                amount = findOrder.totalPrice;
                findOrder.installments.forEach(inst => {
                    inst.paid = true;
                    inst.paidAt = Date.now();
                });
                paymentMessage = MESSAGE_CONTENT.FULL_PAYMENT_MESSAGE;
                break;

            case "قسط اول":
            case "قسط دوم":

                const index = installment === "قسط اول" ? 0 : 1;

                if (findOrder.installments[index].paid) {
                    return NextResponse.json({
                        success: false,
                        message: "هزینه قسط وارد شده قبلا پرداخت شده بود"
                    }, { status: 400 })
                }

                if (installment === "قسط دوم" && findOrder.installments[0].paid === false) {
                    return NextResponse.json({
                        success: false,
                        message: "نخست هزینه قسط اول را پرداخت کنید"
                    }, { status: 400 })
                }

                amount = findOrder.installments[index].amount;


                if (discount) {
                    code = await DiscountCode.findOne({ code: discount });

                    if (!code) {
                        return NextResponse.json({
                            message: "کد تخفیف نامعتبر است"
                        }, { status: 400 })
                    }
                    discountedAmount = (amount * code.discountPercentage) / 100;

                    amount -= discountedAmount;

                    await DiscountCode.deleteOne({ code: discount });
                }


                findOrder.installments[index].paid = true;
                findOrder.installments[index].paidAt = Date.now();

                paymentMessage = installment === "قسط اول"
                    ? MESSAGE_CONTENT.FIRST_INSTALLMENT_PAID_MESSAGE
                    : MESSAGE_CONTENT.SECOND_INSTALLMENT_PAID_MESSAGE;

                break;
            default:
                return NextResponse.json({
                    success: false,
                    message: "لطفا مشخص کنید چه مقدار از هزینه سفارش را پرداخت میکنید"
                }, { status: 400 });
        }
        const paymentNotification = await sendNotification(paymentMessage.title, paymentMessage.message);
        user.notifications.push(paymentNotification._id);
        newPayment = await Payment.create({
            order: orderID,
            user,
            installment,
            amount,
            discount: {
                code: discount,
                discountAmount: discountedAmount
            }
        });

        if (newPayment.discount && newPayment.discount.code) {
            await User.findOneAndUpdate(
                { _id: userId },
                { $pull: { discountCodes: code._id } }
            );
        }

        newPayment.status = "موفق"
        user.payments.push(newPayment._id);
        const admins = await User.find({ role: "admin" });

        const adminNotifications = admins.map(async admin => {
            const adminNotification = await sendNotification(
                MESSAGE_CONTENT.ADMIN_NOTIFICATION_MESSAGE.title,
                MESSAGE_CONTENT.ADMIN_NOTIFICATION_MESSAGE.message,
            );
            admin.notifications.push(adminNotification._id);
            return admin.save();
        });

        await Promise.all([
            newPayment.save(),
            findOrder.save(),
            user.save(),
            ...adminNotifications
        ]);

        return NextResponse.json({ newPayment }, { status: 201 });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 });
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