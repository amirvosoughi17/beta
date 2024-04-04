"use client";
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Installment from "@/components/Installment";

const Payment = () => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const installmentValue =
    order?.installments && order?.installments[0]?.paid === "true"
      ? order?.installments[1]?.amount
      : order?.installments[0]?.amount;
  const [installmentAmount, setInstallmentAmount] = useState(installmentValue);
  const [discount, setDiscount] = useState("");
  const [priceAfterDiscount, setPriceAfterDiscount] = useState(null);

  useEffect(() => {
    setInstallmentAmount(installmentValue);
  }, [installmentValue]);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const pathArray = window.location.pathname.split("/");
        const id = pathArray[pathArray.length - 1];

        const response = await fetch(`/api/payment/${id}`);
        if (response.ok) {
          const data = await response.json();
          setOrder(data.order);
        } else {
          console.error("Failed to fetch order details:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching order details:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const installmentAmountToSend = order.installments[0].paid === "true"
        ? order.installments[1].amount
        : order.installments[0].amount;
  
      const response = await fetch(`/api/payment/${order._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          installment: installmentAmountToSend,
          discount: discount,
        }),
      });
  
      if (response.ok) {
        alert("انتقال به صفحه پرداخت با موفقیت انجام شد");
      } else {
        console.error("Failed to submit payment:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting payment:", error.message);
    }
  };
  
  
  return (
      <div className="min-h-screen w-full py-5 px-3 sm:py-6 sm:px-5 lg:px-10 lg:py-10">
        <Card className="w-[80%] border-none mx-auto flex flex-col gap-4 h-[650px] md:flex-row items-start mt-[50px]">
          <Card className="w-full md:w-[60%] h-full p-5">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Input
                value={installmentAmount}
                onChange={(e) => setInstallmentAmount(e.target.value)}
              />
              <div className="flex items-center w-full gap-2">
                <span>کد تخفیف : </span>
                <Input
                  className="w-[30%]"
                  type="text"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                />
              </div>
              <Button type="submit">پرداخت</Button> {/* Submit button */}
            </form>
          </Card>
          <Card className="w-full md:w-[40%] h- p-5 ">
            <div>
              {loading ? (
                <p>Loading...</p>
              ) : order ? (
                <div className="flex flex-col gap-3">
                  <h1 className="text-xl font-semibold text-white pb-5 mb-5 border-b-[0.4px] border-zinc-800">
                    اطلاعات سفارش
                  </h1>
                  <div className="flex w-full items-center justify-between">
                    <span className="text-md text-zinc-300 ">نام کاربری </span>
                    <p className="text-zinc-200 text-md font-medium">
                      {order?.user?.username}
                    </p>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <span className="text-md text-zinc-300 ">شماره تماس :</span>
                    <p className="text-zinc-200 text-md font-medium">
                      {order?.user?.phoneNumber}
                    </p>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <span className="text-md text-zinc-300 ">قسط اول :</span>
                    <span className="text-zinc-200 text-md font-medium">
                      {" "}
                      تومان{" "}
                      {order?.installments[0]?.amount.toLocaleString(
                        undefined,
                        { maximumFractionDigits: 0 }
                      )}
                    </span>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <span className="text-md text-zinc-300 ">تسویه حساب :</span>
                    <span className="text-zinc-200 text-md font-medium">
                      {" "}
                      تومان{" "}
                      {order?.installments[1]?.amount.toLocaleString(
                        undefined,
                        { maximumFractionDigits: 0 }
                      )}
                    </span>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <span className="text-md text-zinc-300 ">کل مبلغ :</span>
                    <span className="text-md text-zinc-300">
                      تومان {order?.totalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>
              ) : (
                <p>No order found</p>
              )}
            </div>
          </Card>
        </Card>
      </div>
  );
};

export default Payment;
