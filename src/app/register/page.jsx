"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Loader2 } from "lucide-react"

// shadcn 
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const Register = () => {
    const router = useRouter();
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phoneNumber: "",
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (res.ok) {
                router.push('/login');
            } else {
                setLoading(false);
                setError("اطلاعات وارد شده اشتباه است")
            }
        } catch (error) {
            console.error('An error occurred during registration:', error);
            setLoading(false);
        }
    };

    return (
        <div className='w-full h-screen relative bg-zinc-900 '>
            <div className="flex items-center justify-center h-[850px] md:h-[800px]">
                <div className="flex flex-col gap-2 w-[325px] sm:w-[350px] duration-300  ">
                    <div className="flex flex-col gap-[8px] mb-4 ">
                        <h1 className='sm:text-[25px] text-[23px]  text-white duration-300 '>به ویکسل خوش امدید  </h1>
                        <p className='text-zinc-500  text-[14px] font-light sm:text-[15px] hover:text-white duration-300 '>برای استفاده از سایت ابتدای وارد حساب کاربری خود شوید .</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4 mt-4'>
                        <div className="flex flex-col gap-3 ">
                            <Input
                                name="username"
                                type="text"
                                placeholder="نام کاربری را وارد کنید"
                                className="py-6"
                                onChange={handleChange}
                            />
                            <Input
                                name="phoneNumber"
                                type="text"
                                placeholder=" شماره تماس را وارد کنید"
                                className="py-6"
                                onChange={handleChange}
                            />
                            <Input
                                name="email"
                                type="email"
                                placeholder="ایمیل را وارد کنید"
                                className="py-6"
                                onChange={handleChange}
                            />
                            <Input
                                name="password"
                                type="password"
                                placeholder="رمز عبور را وارد کنید"
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
                    <div className="flex items-center justify-between  border-zinc-700/50 pb-5 mt-6">
                        <span className='text-[14px] text-zinc-400 duration-300 hover:text-white' > ثبت نام کرده اید ؟ </span>
                        <Link href='/login' className='text-blue-500 text-[14px] border-b-[1px] border-blue-600 pb-[1.5px] duration-300 hover:text-white hover:border-white'>ورود</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
