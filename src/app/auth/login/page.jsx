"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
// shadcn
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";


const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
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
      }
    } catch (error) {
      console.error("An error occurred during registration:", error);
    }
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        router.push("/");
      } else {
        const data = await res.json();
        setError(data.message)
        setLoading(false);
      }
    } catch (error) {
      console.error("falied to login", error);
      setLoading(false);
    }
  };

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="mx-auto w-[87%] sm:w-[60%] md:w-[50%] lg:w-[45%] xl:w-[27%] mt-[130px] ">
        <form onSubmit={handleEmailSubmit}>
          <div className="flex flex-col gap-2 my-8">
            <h1 className="text-3xl font-medium text-white"> ورود</h1>
            <p className="text-md text-zinc-400 ">وارد حساب کاربری خود شوید</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <Input
                name="email"
                type="email"
                className="py-6"
                placeholder="ایمیل خود را وارد کنید"
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Input
                name="password"
                type="password"
                className="py-6"
                placeholder="رمز عبور خود را وارد کنید"
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col w-full gap-3">
              {loading ? (
                <Button disabled className="py-6 mt-5">
                  لطفا کمی صبر کنید
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                </Button>
              ) : (
                <Button type="submit" className="py-6 mt-5">
                  ورود{" "}
                </Button>
              )}
              {error && (
                <Alert
                  variant="destructive"
                  className="bg-red-500 text-white border-red-600"
                >
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <div className="flex w-full items-center justify-between mt-3">
                <span className="text-[15px] text-zinc-300 ">
                  ثبت نام نکرده اید ؟
                </span>
                <Link
                  href="/auth/register"
                  className="text-[15px] text-blue-600 pb-[0.4px] border-b-[0.5px] hover:text-blue-400 duration-300 border-blue-600"
                >
                  ایجاد حساب
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
