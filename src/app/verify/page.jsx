"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
// shadcn
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"

const Verify = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("") ;

    const handleSubmit = async (e) => {
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
                setError("کد مطاقبت ندارد")
            }
        } catch (error) {
            console.error('falied to login', error);
            setLoading(false);
            setError("کد مطاقبت ندارد")

        }
    };
    return (
        <div className='w-full h-screen relative bg-zinc-900 '>
            <div className="flex items-center justify-center h-[700px]">
                <div className="flex flex-col gap-2 w-[325px] sm:w-[350px] duration-300  ">
                    <div className="flex flex-col gap-[8px] ">
                        <h1 className='sm:text-[21px] text-[21px]  text-white duration-300 '>کدی که به شما پیامک شد را وارد کنید .</h1>
                        <p className='text-zinc-500  text-[14px] font-light sm:text-[15px] hover:text-white duration-300 '>کد را در فیلد های زیر قرار بدهید :</p>
                    </div>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4 mt-6 w-full items-center'>
                        <div className="flex flex-col gap-6 ">
                            <InputOTP
                                maxLength={5}
                                render={({ slots }) => (
                                    <InputOTPGroup className="gap-[4px] sm:gap-[7px]" style={{ direction: 'ltr' }}>
                                        {slots.map((slot, index) => (
                                            <React.Fragment key={index}>
                                                <InputOTPSlot
                                                    className="rounded-md border-[1px] border-zinc-400"
                                                    {...slot}
                                                />
                                                {index !== slots.length - 1 && <InputOTPSeparator />}
                                            </React.Fragment>
                                        ))}
                                    </InputOTPGroup>
                                )}
                            />

                            {loading ? (
                                <Button disabled className="py-6">
                                    لطفا کمی صبر کنید
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                </Button>
                            ) : (
                                <Button variant="secondary" type="submit" className="py-6">صحت سنجی</Button>
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
                    
                </div>
            </div>
        </div>
    )
}

export default Verify