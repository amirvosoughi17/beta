"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import axiosInstance from "@/utils/axiosInstance";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { FiAlertTriangle } from "react-icons/fi";
import { MdOutlineDone } from "react-icons/md";
import ShinyButton from "../magicui/shiny-button";
import { ConfettiButton } from "@/components/magicui/confetti";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { OrderFormData } from "@/types";
import Spinner from "../Spinner";

const CreateOrderForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const { control, handleSubmit, register } = useForm<OrderFormData>();
  const onSubmit = async (data: OrderFormData) => {
    try {
      setIsSuccess(false);
      if (typeof data.likedWebsiteUrls === "string") {
        data.likedWebsiteUrls = data.likedWebsiteUrls
          .split(",")
          .map((url: any) => url.trim());
      }
      setIsLoading(true);
      const response = await axiosInstance.post("/api/orders", data);
      setIsLoading(false);
      setIsSuccess(true);
    } catch (error: any) {
      console.error("Error:", error);
      setMessage(error.response?.data?.message || "An error occurred");
      setIsLoading(false);
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex flex-col">
      <Drawer>
        <DrawerTrigger asChild>
          <button>ثبت سفارش</button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-h-[650px] overflow-y-auto  ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex max-w-[370px] md:max-w-[450px] lg:max-w-[500px] mx-auto  flex-col gap-4  w-full h-full relative my-5 px-4"
            >
              <div className="flex flex-col gap-2 mb-4">
                <h1 className="  flex items-center gap-2.5">
                  <MdOutlineShoppingBag size={25} />
                  <h1 className="lg:text-2xl text-xl font-extrabold text-neutral-200">
                    ثبت سفارش
                  </h1>
                </h1>
                <span className=" text-sm lg:text-lg text-neutral-400">
                  اطلاعات زیر را برای درک بهتر ما از کسب و کار شما پرکنید
                </span>
              </div>
              <div className="w-full flex items-center gap-2">
                <div className="flex w-1/2 flex-col gap-3">
                  <label
                    className="text-neutral-300 text-[15px] lg:text-md"
                    htmlFor=""
                  ></label>
                  <Input
                    placeholder="نام و نام خانوادگی"
                    className="w-full py-6"
                    {...register("name", { required: true })}
                  />
                </div>
                <div className="flex w-1/2 flex-col gap-3">
                  <label
                    className="text-neutral-300 text-[15px] lg:text-md"
                    htmlFor=""
                  ></label>
                  <Input
                    className="w-full py-6"
                    {...register("phoneNumber")}
                    placeholder="شماره تماس"
                    {...register("phoneNumber", { required: true })}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label
                  className="text-neutral-300 text-[15px] lg:text-md"
                  htmlFor=""
                ></label>
                <Input
                  placeholder="نام شرکت"
                  className="w-full py-6"
                  {...register("companyName", { required: true })}
                />
              </div>
              <div className="flex flex-col gap-3">
                <label
                  className="text-neutral-300 text-[15px] lg:text-md"
                  htmlFor=""
                ></label>
                <Textarea
                  rows={4}
                  placeholder="توضیحات را وارد کنید"
                  className="w-full py-3"
                  {...register("description", { required: true })}
                />
              </div>
              <div className="flex flex-col gap-3">
                <label
                  className="text-neutral-400 text-sm lg:text-md"
                  htmlFor="websiteType"
                >
                  نوع وبسایت خود را انتخاب کنید
                </label>
                <Controller
                  name="typeOfWeb"
                  control={control}
                  defaultValue="ecommerce"
                  render={({ field }) => (
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3 flex-wrap">
                        {[
                          { value: "ecommerce", label: "فروشگاهی", id: "btn1" },
                          { value: "learning", label: "اموزشی", id: "btn2" },
                          { value: "company", label: "شرکتی", id: "btn3" },
                          { value: "personal", label: "شخصی", id: "btn4" },
                          { value: "startup", label: "استارت اپ", id: "btn5" },
                        ].map((option) => (
                          <button
                            key={option.id}
                            id={option.id}
                            type="button"
                            onClick={() => field.onChange(option.value)}
                            className={`px-4 py-2 rounded-md text-sm lg:text-md ${
                              field.value === option.value
                                ? "bg-indigo-600 text-white"
                                : "bg-neutral-700/50 border-[0.6px] border-neutral-800/80 shadow-md text-neutral-200"
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                />
              </div>

              <div className="flex flex-col gap-3">
                <label
                  className="text-neutral-300 text-[15px] lg:text-md"
                  htmlFor="monthlyUsers"
                >
                  تعداد کاربر ماهانه
                </label>
                <Controller
                  name="monthlyUsersCount"
                  control={control}
                  defaultValue="TEN"
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full py-6">
                        <SelectValue placeholder="تعداد کاربران ماهانه" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="TEN">کمتر از ۱۰ </SelectItem>
                          <SelectItem value="FIFTY">بیشتر از ۵۰</SelectItem>
                          <SelectItem value="FIVE_HUNDRED">
                            بیشتر از ۱۰۰
                          </SelectItem>
                          <SelectItem value="ONE_THOUSAND">
                            بیشتر از ۱۰۰۰
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div className="flex flex-col gap-3 ">
                <label
                  className="text-neutral-300 text-[15px] lg:text-md"
                  htmlFor="likedWebsiteUrls"
                >
                  وب سایت نمونه
                </label>
                <Input
                  type="text"
                  id="likedWebsiteUrls"
                  placeholder="www.example.com"
                  className="w-full py-6"
                  {...register("likedWebsiteUrls", { required: true })}
                />
              </div>
              <ConfettiButton
                disabled={isLoading}
                className={` w-full ${isSuccess && ""}`}
                type="submit"
                isSuccess={isSuccess}
              >
                {isLoading ? (
                  <div className="flex w-full items-center justify-between">
                    <Spinner />
                    <span>لطفا صبر کنید ..</span>
                    <span className="w-[25px]"></span>
                  </div>
                ) : (
                  <span>{!isSuccess && "ثبت سفارش"}</span>
                )}
                {isSuccess && (
                  <div className="flex w-full  items-center justify-between">
                    <div className="w-[25px] h-[25px] rounded-full flex items-center justify-center  text-green-600">
                      <MdOutlineDone size={25} />
                    </div>
                    <span className="text-[13px] lg:text-[14px] text-green-600">
                      ثبت سفارش با موفقیت انجام شد
                    </span>
                    <span className="w-[25px]"></span>
                  </div>
                )}
              </ConfettiButton>
              {message && (
                <div className=" flex items-center gap-3 w-full rounded-lg bg-red-500 py-3 px-4 text-sm lg:text-md">
                  <FiAlertTriangle size={17} />
                  <span>{message}</span>
                </div>
              )}

              <div className="flex flex-col gap-2">
                <p className="text-neutral-400 text-sm lg:text-md leading-6">
                  پس از ثبت سفارش تیم ویکسل در ۴۸ ساعت اینده با شما برای هماهنگی
                  بیشتر تماس خواهد گرفت
                </p>
              </div>
            </form>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default CreateOrderForm;
