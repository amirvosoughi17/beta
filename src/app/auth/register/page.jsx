"use client";
import React from "react";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const Register = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleRegisterChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegisterData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(registerData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        router.push("/");
      } else {
        const data = await res.json();
        setError(data.message);
      }
    } catch (error) {
      console.error("An error occurred during registration:", error);
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="mx-auto w-[87%] sm:w-[60%] md:w-[50%] lg:w-[45%] xl:w-[27%] mt-[130px] ">
        <form onSubmit={handleRegisterSubmit}>
          <div className="flex flex-col gap-2 my-8">
            <h1 className="text-3xl font-medium text-white">ثبت نام</h1>
            <p className="text-md text-zinc-400 ">
              ابتدا حساب کاربری خود را ایجاد کنید{" "}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <Input
                name="username"
                type="text"
                placeholder="نام کاربری را وارد کنید"
                className="py-6"
                onChange={handleRegisterChange}
              />
            </div>
            <div className="space-y-2">
              <Input
                name="phoneNumber"
                type="text"
                placeholder=" شماره تماس را وارد کنید"
                className="py-6"
                onChange={handleRegisterChange}
              />
            </div>
            <div className="space-y-2">
              <Input
                name="email"
                type="email"
                placeholder="ایمیل را وارد کنید"
                className="py-6"
                onChange={handleRegisterChange}
              />
            </div>
            <div className="space-y-2">
              <Input
                name="password"
                type="password"
                placeholder="رمز عبور را وارد کنید"
                className="py-6"
                onChange={handleRegisterChange}
              />
            </div>
          </div>
          <div>
            <Button type="submit" className="w-full mt-8">
              ثبت نام
            </Button>
            {error && (
              <Alert
                variant="destructive"
                className="bg-red-500 text-white border-red-600 mt-5"
              >
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </div>
          <div className="flex w-full items-center justify-between mt-3">
            <span className="text-[15px] text-zinc-300 ">
              ثبت نام کرده اید ؟
            </span>
            <Link
              href="/auth/login"
              className="text-[15px] text-blue-600 pb-[0.4px] border-b-[0.5px] border-blue-600"
            >
              ورود
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
