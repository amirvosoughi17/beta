"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axiosInstance from "@/utils/axiosInstance";
import { LoginFormInput } from "@/types";
import { Button } from "@/components/ui/button";
import { MdOutlineDone } from "react-icons/md";
import { FiAlertTriangle } from "react-icons/fi";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import Spinner from "../Spinner";

const LoginForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();
  const { register, handleSubmit } = useForm<LoginFormInput>();
  const onSubmit: SubmitHandler<LoginFormInput> = async (data) => {
    try {
      setLoading(true);
      const response = await axiosInstance.post("/api/user/sign-in", data);
      setMessage(response.data.message);
      console.log("Registration successful", response.data);
      router.push("/profile");
      setLoading(false);
    } catch (error: any) {
      console.error("Error registering user:", error);
      setMessage(error.response.data.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center justify-center gap-2 flex-col min-h-screen w-full max-w-[380px]"
    >
      <Card className="w-full max-w-sm">
        <CardHeader className="flex flex-col gap-2">
          <CardTitle className="text-2xl font-bold">ورود به حساب</CardTitle>
          <CardDescription>
            برای مشاهده حساب کاربری وارد شوید
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Input
              id="phoneNumber"
              placeholder="شماره تماس"
              {...register("phoneNumber", {
                required: "Phone Number is required",
              })}
            />
          </div>
          <div className="grid gap-2">
            <Input
              id="password"
              placeholder="رمز عبور"
              type="password"
              {...register("password", { required: "Password is required" })}
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <Button
            disabled={loading}
            className={` w-full ${isSuccess && "bg-emerald-600 text-white"}`}
            type="submit"
          >
            {loading ? (
              <div className="flex w-full items-center justify-between">
                <Spinner />
                <span>ورود </span>
                <span className="w-[25px]"></span>
              </div>
            ) : (
              <span>{!isSuccess && "ورود"}</span>
            )}
            {isSuccess && (
              <div className="flex w-full  items-center justify-between">
                <div className="w-[25px] h-[25px] rounded-full flex items-center justify-center  text-white">
                  <MdOutlineDone size={25} />
                </div>
                <span className="text-[13px] lg:text-[14px]">
                  ورود به حساب با موفقیت انجام شد
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
              ثبت نام نکرده اید ؟
            </span>
            <Link
              className=" text-blue-500 text-sm lg:text-[15px] underline hover:text-white duration-300"
              href="/auth/login"
            >
              ثبت نام
            </Link>
          </div>
        </CardFooter>
      </Card>
    </form>
  );
};

export default LoginForm;
