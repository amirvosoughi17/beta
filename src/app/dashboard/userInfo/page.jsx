"use client";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData } from '@/utils/userActions';
import { selectUserInfo } from '@/redux/user/userSlice';
import DashboardLayout from '@/components/DashboardLayout'
import React from 'react'
// shadcn 
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"


const UserInfo = () => {
  const userInfo = useSelector(selectUserInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch])

  return (
    <div>
      <DashboardLayout>
        <div className='py-5 px-2 lg:px-5 xl:px-7 lg:py-8 w-full min-h-screen  bg-[#1E1E1E]'>
          <div className="w-full  lg:w-[80%] xl:w-[85%] lg:mr-[230px] xl:mr-[250px]   flex flex-col items-center justify-center gap-6 h-full">
            <div className="xl:w-[90%] w-full lg:w-[95%]  md:h-[700px] bg-[#171717] py-4 sm:py-8 p-4 md:p-10 rounded-xl">
              <h1 className='sm:mb-10 mb-4 text-xl text-zinc-300 font-semibold'>اطلاعات حساب</h1>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-[20px] sm:gap-[40px] lg:gap-[25px] xl:gap-[60px] lg:px-4 xl:px-10">
                {/* profile */}
                <div className="flex flex-col items-center  gap-3">
                  <Avatar className="md:w-[85px] md:h-[85px] w-[100px] h-[100px] shadow-md">
                    <AvatarFallback ><span className='text-3xl'>{userInfo?.username?.charAt(0).toUpperCase()}</span></AvatarFallback>
                  </Avatar>
                  <div className="">
                    <Button
                      variant="secondary"
                      className='md:w-[80px] w-[100px] font-vazirmatn'
                      onClick={() =>
                        toast("در دسترس نیست", {
                          description: "ویراش عکس پروفایل امکان پذیر نیست",
                          action: {
                            label: "متوجه شدم",
                            onClick: () => console.log("Undo"),
                          },
                        })
                      }
                    >
                      ویرایش
                    </Button>
                  </div>
                </div>
                {/* end profile */}
                <form className="flex flex-col md:flex-row gap-2.5  xl:gap-7 w-[90%]">
                  <div className="flex flex-col gap-3 sm:gap-5  xl:gap-7">
                    <div className="flex flex-col gap-2 sm:gap-3">
                      <Label htmlFor="username" className='text-zinc-200 text-md'>نام کاربری</Label>
                      <Input type="text" disabled className="py-[24px] w-full md:w-[280px] xl:w-[320px] " placeholder={userInfo?.username} />
                    </div>
                    <div className="flex flex-col gap-2 sm:gap-3">
                      <Label htmlFor="email" className='text-zinc-200 text-md'>ایمیل</Label>
                      <Input type="email" disabled className="py-[24px] w-full md:w-[280px] xl:w-[320px]" displed placeholder={userInfo?.email} />
                    </div>
                    <div className="flex flex-col gap-2 sm:gap-3">
                      <Label htmlFor="phoneNumber" className='text-zinc-200 text-md'>شماره تماس</Label>
                      <Input type="text" disabled className="py-[24px] w-full md:w-[280px] xl:w-[320px]" displed placeholder={userInfo?.phoneNumber} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 sm:gap-[23.5px] xl:gap-[31.5px]">
                    <div className="flex flex-col gap-2 sm:gap-3">
                      <Label htmlFor="password" className='text-zinc-200 text-md'>رمز عبور</Label>
                      <Input type="text" disabled className="py-[24px] w-full md:w-[280px] xl:w-[320px]" displed placeholder='----------' />
                    </div>
                    <div className="flex flex-col gap-2 sm:gap-3">
                      <Label htmlFor="componyName" className='text-zinc-200 text-md'>نام شرکت</Label>
                      <Input type="text" className="py-[24px] w-full md:w-[280px] xl:w-[320px]" placeholder='نام شرکت خود را وارد کنید' />
                    </div>
                    <Button className='py-[23px] mt-7'>ذخیره</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  )
}

export default UserInfo