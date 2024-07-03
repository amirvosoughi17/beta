"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axiosInstance from "@/utils/axiosInstance";
import { LoginFormInput } from "@/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import Spinner from "../Spinner";

const LoginForm: React.FC = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
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
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">شماره تماس</Label>
            <Input
              id="phoneNumber"
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
              {...register("password", { required: "Password is required" })}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button disabled={loading} className="w-full" type="submit">
            {loading ? <Spinner /> : <span>ورود</span>}
          </Button>
          {message && <span className="text-orange-400">{message}</span>}
        </CardFooter>
      </Card>
    </form>
  );
};

export default LoginForm;
