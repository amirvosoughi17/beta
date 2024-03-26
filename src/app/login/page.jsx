"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Logo from '@/assets/whit-logo.png'
import { Loader2 } from "lucide-react"
// react icons 
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from 'next/image';
// shadcn
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"



const LoginPage = () => {

    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("")
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (res.ok) {
                router.push('/dashboard')
            } else {
                setLoading(false);
                setError("ایمیل با رمز عبور مطاقبت ندارند")
            }
        } catch (error) {
            console.error('falied to login', error);
            setLoading(false);
        }
    };

    const handlePhoneSubmit  = (e) => {
        e.preventDefault();
    }
    return (
        <div className='w-full h-screen relative'>
            <div className="flex items-center justify-center h-screen ">
                <div className="flex w-full items-center h-full">
                    <div className="lg:w-[50%] hidden lg:block h-full bg-[#171717] p-8">
                        <div className="">
                            <Image
                            alt='logo'
                            width={45}
                            height={45}
                            className=''
                            src={Logo}
                            />
                        </div>
                    </div>
                <div className="flex lg:w-[50%] flex-col gap-2  w-full items-center  justify-center border-r-[0.6px] h-full border-zinc-700  duration-300  ">
                    <div className="flex flex-col gap-[8px] mb-4 ">
                        <h1 className='sm:text-[25px] text-[23px]  text-white duration-300 '>به ویکسل خوش امدید  </h1>
                        <p className='text-zinc-500  text-[14px] font-light sm:text-[15px] hover:text-white duration-300 '>برای استفاده از سایت ابتدای وارد حساب کاربری خود شوید .</p>
                    </div>
                    <div className="flex flex-col w-[360px]">
                    <form onSubmit={handleEmailSubmit} className='flex flex-col gap-4 mt-4 '>
                        <div className="flex flex-col gap-3 ">
                            <Input
                                name="email"
                                type="email"
                                placeholder="ایمیل خود را وارد کنید"
                                className="py-6"
                                onChange={handleChange}
                            />
                            <Input
                                name="password"
                                type="password"
                                placeholder="رمز عبور خود را وارد کنید"
                                className="py-6"
                                onChange={handleChange}
                            />
                            {loading ? (
                                <Button disabled className="py-6">
                                    لطفا کمی صبر کنید
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                </Button>
                            ) : (
                                <Button variant="secondary" type="submit" className="py-6">ورود </Button>
                            )}
                        </div>
                        {error && (
                        <Alert variant="destructive" className="text-red-500 border-red-500">
                            <AlertDescription>
                                {error}
                            </AlertDescription>
                        </Alert>
                        )}
                    </form>
                    <div className="flex gap-[5px] items-center my-5">
                        <hr  className='bg-zinc-600 w-[48%] h-[1.5px]'/>
                        <span className='text-zinc-400 font-light text-[12px]'>یا </span>
                        <hr  className='bg-zinc-600 w-[47%] h-[1.5px]'/>
                    </div>
                    <form onSubmit={handlePhoneSubmit}  className='flex flex-col gap-4'>
                        <div className="flex flex-col gap-3 ">
                            <Input
                                name="phoneNumber"
                                type="text"
                                placeholder="شماره تماس خود را وارد کنید"
                                className="py-6"
                            />
                            <Button variant="secondary" type="submit"  className="py-6">ورود با رمز یک بار مصرف</Button>
                        </div>
                    </form>

                    </div>
                    <div className="flex items-center justify-between  border-zinc-700/50 pb-5 mt-6">
                        <span className='text-[14px] text-zinc-400 duration-300 hover:text-white' > ثبت نام نکرده اید ؟ </span>
                        <Link href='/register' className='text-blue-500 text-[14px] border-b-[1px] border-blue-600 pb-[1.5px] duration-300 hover:text-white hover:border-white'>ثبت نام</Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};
export default LoginPage;