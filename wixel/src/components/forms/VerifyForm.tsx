"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axiosInstance from "@/utils/axiosInstance";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
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

interface VerifyFormInput {
  verificationCode: string;
}

const VerifyForm: React.FC = () => {
  const { register, handleSubmit, setError } = useForm<VerifyFormInput>();
  const router = useRouter();
  const searchParams = useSearchParams();
  const phoneNumber = searchParams.get("phoneNumber");

  const [otp, setOtp] = useState("");

  const handleOtpChange = (value: string) => {
    setOtp(value);
  };

  const onSubmit: SubmitHandler<VerifyFormInput> = async (data) => {
    try {
      const response = await axiosInstance.post("/api/verify-code", {
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
    } catch (error) {
      console.error("Error verifying code:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center justify-center gap-2 flex-col min-h-screen w-full max-w-[380px]"
    >
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Verify</CardTitle>
          <CardDescription>
            Enter the verification code sent to your phone
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
        <CardFooter>
          <Button className="w-full" type="submit">
            Verify
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default VerifyForm;
