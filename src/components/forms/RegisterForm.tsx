"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import axiosInstance from "@/utils/axiosInstance";
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
import { registerFormInput } from "@/types";
import Spinner from "../Spinner";


const RegisterForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();
  const { register, handleSubmit } = useForm<registerFormInput>();
  const onSubmit: SubmitHandler<registerFormInput> = async (data) => {
    setMessage("")
    try {
      const response = await axiosInstance.post("/api/user/sign-up", data);
      setIsLoading(true);
      setMessage(response.data.message)
      console.log("Registration successful", response.data);
      router.push(`/auth/verify/${data.phoneNumber}`);
    } catch (error : any) {
      console.error("Error registering user:", error);
      setIsLoading(false);
      setMessage(error?.response?.data?.message)
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
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="username">نام کاربری</Label>
            <Input
              id="username"
              disabled={isLoading}
              {...register("username", {
                required: "username is required",
              })}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">شماره تماس</Label>
            <Input
              id="phoneNumber"
              disabled={isLoading}
              {...register("phoneNumber", {
                required: "Phone Number is required",
              })}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">رمز عبور</Label>
            <Input
              id="password"
              placeholder="رمز عبور"
              type="password"
              disabled={isLoading}
              {...register("password", { required: "Password is required" })}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button disabled={isLoading} className="w-full" type="submit">
            {isLoading ? <Spinner /> : "ثبت نام"}
          </Button>
          {message && <span className=" text-orange-400">{message}</span>}
        </CardFooter>
      </Card>
    </form>
  );
};

export default RegisterForm;
