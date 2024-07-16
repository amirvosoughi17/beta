"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import axiosInstance from "@/utils/axiosInstance";
import { Button } from "@/components/ui/button";
import { FiAlertTriangle } from "react-icons/fi";
import { MdOutlineDone } from "react-icons/md";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { registerFormInput } from "@/types";
import Spinner from "../Spinner";
import Link from "next/link";

const RegisterForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();
  const { register, handleSubmit } = useForm<registerFormInput>();
  const onSubmit: SubmitHandler<registerFormInput> = async (data) => {
    setMessage("");
    try {
      const response = await axiosInstance.post("/api/user/sign-up", data);
      setIsLoading(true);
      setIsSuccess(false);
      setMessage(response.data.message);
      console.log("Registration successful", response.data);
      setIsSuccess(true);
      router.push(`/auth/verify/${data.phoneNumber}`);
    } catch (error: any) {
      console.error("Error registering user:", error);
      setIsLoading(false);
      setIsSuccess(false);
      setMessage(error?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center justify-center gap-2 flex-col min-h-screen w-full max-w-[380px]"
    >
      <Card className="w-full max-w-sm">
        <CardHeader className="flex flex-col gap-2">
          <CardTitle className="text-2xl font-semibold ">ثبت نام</CardTitle>
          <CardDescription>
            برای ثبت سفارش و ورود به حساب ابتدا ثبت نام کنید
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-5">
          <div className="grid gap-3">
            <Input
              id="username"
              placeholder="نام کاربری"
              disabled={isLoading}
              {...register("username", {
                required: "username is required",
              })}
            />
          </div>
          <div className="grid gap-3">
            <Input
              placeholder="شماره تماس"
              id="phoneNumber"
              disabled={isLoading}
              {...register("phoneNumber", {
                required: "Phone Number is required",
              })}
            />
          </div>
          <div className="grid gap-3">
            <Input
              id="password"
              placeholder="رمز عبور"
              type="password"
              disabled={isLoading}
              {...register("password", { required: "Password is required" })}
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <Button
            disabled={isLoading}
            className={` w-full ${isSuccess && "bg-emerald-600 text-white"}`}
            type="submit"
          >
            {isLoading ? (
              <div className="flex w-full items-center justify-between">
                <Spinner />
                <span>ثبت نام</span>
                <span className="w-[25px]"></span>
              </div>
            ) : (
              <span>{!isSuccess && "ثبت نام"}</span>
            )}
            {isSuccess && (
              <div className="flex w-full  items-center justify-between">
                <div className="w-[25px] h-[25px] rounded-full flex items-center justify-center  text-white">
                  <MdOutlineDone size={25} />
                </div>
                <span className="text-[13px] lg:text-[14px]">
                  ثبت با موفقیت انجام شده
                </span>
                <span className="w-[25px]"></span>
              </div>
            )}
          </Button>
          {message && (
            <div className=" flex items-center gap-3 w-full rounded-lg bg-red-500 py-3 px-4 text-sm lg:text-md">
              <FiAlertTriangle size={17} />
              <span>{message}</span>
            </div>
          )}
          <div className="flex items-center w-full mt-2 px-2 justify-between">
            <span className="text-sm lg:text-[15px] text-neutral-400">
              ثبت نام کرده اید ؟
            </span>
            <Link
              className=" text-blue-500 text-sm lg:text-[15px] underline hover:text-white duration-300"
              href="/auth/login"
            >
              ورود{" "}
            </Link>
          </div>
        </CardFooter>
      </Card>
    </form>
  );
};

export default RegisterForm;
