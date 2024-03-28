"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Logo from "@/assets/whit-logo.png";
import { Loader2 } from "lucide-react";
// react icons
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";
// shadcn
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
        setLoading(false);
        setError("ایمیل با رمز عبور مطاقبت ندارند");
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
    <div className="w-full h-screen relative">
      <div className="flex flex-col items-center  justify-center h-screen ">
        {/* <div className="md:w-[440px] w-[365px] mb-[-50px] mt-5 flex items-center justify-enter">
            <Image 
            alt="logo"
            src={Logo}
            width={55}
            height={55}
            />
        </div> */}
        <div className="flex w-full items-center justify-center h-full">
          <Tabs defaultValue="login" className="md:w-[440px] w-[360px]" dir="rlt">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">ورود</TabsTrigger>
              <TabsTrigger value="register">ثبت نام</TabsTrigger>
            </TabsList>
            <TabsContent value="login" >
              <Card>
                <CardHeader>
                  <CardTitle>ورود</CardTitle>
                  <CardDescription>
                    برای استفاده از سایت ابتدا وارد حساب کاربری خود شوید
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleEmailSubmit}>
                  <CardContent className="space-y-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">ادرس ایمیل</Label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="ایمیل خود را وارد کنید"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="username">رمز عبور</Label>
                      <Input
                        name="password"
                        type="password"
                        placeholder="رمز عبور خود را وارد کنید"
                        onChange={handleChange}
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex flex-col w-full gap-3">
                      {loading ? (
                        <Button disabled className="py-6">
                          لطفا کمی صبر کنید
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        </Button>
                      ) : (
                        <Button
                          variant="secondary"
                          type="submit"
                          className="py-6"
                        >
                          ورود{" "}
                        </Button>
                      )}
                      {error && (
                        <Alert
                          variant="destructive"
                          className="text-red-500 border-red-500"
                        >
                          <AlertDescription>{error}</AlertDescription>
                        </Alert>
                      )}
                    </div>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>

            <TabsContent value="register">
              <Card>
                <CardHeader>
                  <CardTitle>ثبت نام</CardTitle>
                  <CardDescription>
                    حساب کاربری خود را بسازید
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleRegisterSubmit}>
                  <CardContent className="space-y-2">
                    <div className="space-y-2">
                      <Label htmlFor="current">نام کاربری</Label>
                      <Input
                        name="username"
                        type="text"
                        placeholder="نام کاربری را وارد کنید"
                        className="py-6"
                        onChange={handleRegisterChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="current">شماره تماس</Label>
                      <Input
                        name="phoneNumber"
                        type="text"
                        placeholder=" شماره تماس را وارد کنید"
                        className="py-6"
                        onChange={handleRegisterChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="current">ادرس ایمیل</Label>
                      <Input
                       name="email"
                       type="email"
                       placeholder="ایمیل را وارد کنید"
                       className="py-6"
                       onChange={handleRegisterChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new">رمز عبور</Label>
                      <Input 
                        name="password"
                        type="password"
                        placeholder="رمز عبور را وارد کنید"
                        className="py-6"
                        onChange={handleRegisterChange}
                       />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button type='submit' className='w-full'>ثبت نام</Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
          </Tabs>
         
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
