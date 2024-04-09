"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

const Checkout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOrderSent, setIsOrderSent] = useState(false);
  const selectedFeatures = useSelector(
    (state) => state.features.selectedFeatures
  );
  const necessaryFeatures = useSelector(
    (state) => state.features.necessaryFeatures
  );
  const allFeatures = [...selectedFeatures, ...necessaryFeatures];
  const totalPrice = useSelector((state) => state.features.totalPrice);
  const planName = useSelector((state) => state.features.planName);
  const router = useRouter();

  const sendOrderToServer = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          planName,
          selectedFeatures: allFeatures,
          totalPrice,
        }),
      });

      if (response.ok) {
        const { newOrder } = await response.json();
        console.log("Order sent successfully:", newOrder);
        setIsOrderSent(true);
        router.push("/dashboard");
      } else {
        const { message } = await response.json();
        console.error("Error sending order:", message);
      }
    } catch (error) {
      console.error("Error sending order:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen py-9 px-3 sm:px-10">
      <Card className="flex flex-col  gap-5 py-10 px-5 sm:px-10 rounded-xl max-w-[900px] mx-auto mt-[20px]">
        {planName && (
          <p className="mt-3 text-3xl font-bold">سایت {planName} </p>
        )}
        <h2 className="text-xl font-semibold my-5">قابلیت های انتخاب شده</h2>
        <div className="flex flex-col gap-3">
          {allFeatures.map((feature) => (
            <Card
              key={feature._id}
              className="flex items-center justify-between gap-10 px-4 py-3"
            >
              <span className="text-lg font-medium text-gray-300">
                {feature.name}
              </span>
              <span>{feature.isNeseccary ? " پیشفرض " : "پیشرفته"}</span>
            </Card>
          ))}
        </div>
        <div className="flex w-full flex-col sm:flex-row items-center gap-3">
          <button
            onClick={sendOrderToServer}
            className={`bg-blue-500 text-white py-3 sm:py-4 text-lg px-4 mt-5 rounded w-full sm:w-[60%] ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? "لطفا منتظر بمانید ..." : "ثبت سفارش"}
          </button>
          <Card className="text-lg sm:mt-5 text-center text-white px-5 py-4 w-full sm:w-[40%]">
            قیمت کل : {totalPrice?.toLocaleString()} تومان
          </Card>
        </div>
        {isOrderSent ? (
          <div className="flex items-center gap-3">
            <span className="text-green-600 font-medium text-xl">
              سفارش شما با موفقیت ثبت شد{" "}
            </span>
            <Loader2 className="h-6 w-6 animate-spin" />
          </div>
        ) : (
          <span className="text-red-600 font-medium text-xl">
            خطا در ثبت سفارش
          </span>
        )}
        <div className="flex items-start flex-col mt-10 gap-4">
          <div className="flex items-start gap-2">
            <span className="text-red-500 font-medium text-sm sm:text-lg min-w-[40px] sm:min-w-[50px]">
              توجه :
            </span>
            <p className="sm:text-lg text-sm text-gray-100">
              پس از ثبت سفارش تیم ویکسل تا ۴۸ ساعت بعد با شما در تماس خواهد بود
              تا هماهنگی لازم برای ادامه روند پروژه صورت گیرد
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Checkout;
