"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axiosInstance from "@/utils/axiosInstance";
import { useRouter, useSearchParams , useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MdOutlineDone } from "react-icons/md";
import { FiAlertTriangle } from "react-icons/fi";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Spinner from "../Spinner";
interface VerifyFormInput {
  verificationCode: string;
}


const VerifyForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const { register, handleSubmit, setError } = useForm<VerifyFormInput>();
  const router = useRouter();
  const { phoneNumber } = useParams(); 

  const [otp, setOtp] = useState("");

  const handleOtpChange = (value: string) => {
    setOtp(value);
  };

  const onSubmit: SubmitHandler<VerifyFormInput> = async (data) => {
    try {
      setLoading(true);
      const response = await axiosInstance.post("/api/user/check-otp", {
        phoneNumber,
        code: otp,
      });
      if (response.data.success) {
        console.log("Verification successful");
        router.push("/profile");
      } else {
        setError("verificationCode", {
          type: "manual",
          message: "Invalid verification code",
        });
      }
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      console.error("Error verifying code:", error);
      setMessage(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center justify-center gap-2 flex-col min-h-screen w-full max-w-[380px]"
    >
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">کد یک بار مصرف</CardTitle>
          <CardDescription>
            برای ورود به اکانت کدی که را که به شما ارسال شده در فیلد های زیر قرار دهید
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-4">
            <Label htmlFor="verificationCode">رمز یکبار مصرف را وارد کنید : </Label>
            <InputOTP
              maxLength={6}
              pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
              onChange={handleOtpChange}
            >
              <InputOTPGroup dir="ltr" className="flex w-full items-center justify-center">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
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
        </CardFooter>
      </Card>
    </form>
  );
};

export default VerifyForm;
