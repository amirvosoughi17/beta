"use client";

import { useDispatch, useSelector } from "react-redux";
import { forwardRef } from "react";
import { fetchUserData } from "@/utils/userActions";
import { selectUserInfo, selectIsAuthenticated } from "@/redux/user/userSlice";
import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import navLogo from "@/assets/navlogo.svg";
import logo from "@/assets/footer-logo.png";

// react icons
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoLogInOutline } from "react-icons/io5";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FiShoppingBag } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { RiAdminLine } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";

// shadcn
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <div className="w-full  z-50 bg-[#F4F9FF] text-black">
      <div className="w-full mx-auto bg-[#5D5AFF] md:h-[60px] h-[55px] mb-[15px] md:mb-[30px] flex items-center justify-center ">
        <p className="text-white text-md font-semibold">
          ۳۰ درصد تخفیف به مناسب نوروز
        </p>
      </div>
      <div className="w-full max-w-[1560px] mx-auto z-50 px-[20px] sm:px-[40px] md:px-[100px] sticky">
        <div className="flex items-cetner justify-between w-full">
          <div className="">
            <Image alt="logo" className="w-[140px] " src={navLogo} />
          </div>
          <nav className="items-center gap-8 hidden lg:flex ">
            <Link href="/" className="flex flex-col items-center justify-center relative gap-2">
              <span className="text-[16px] font-medium duration-300 relative text-[#5D5AFF]">خانه</span>
              <div className="circle"></div>
            </Link>

            <Link href="#plans" className="flex flex-col items-center justify-center relative gap-2">
              <span className="text-[16px] font-medium duration-300 relative text-[#313B78]">تعرفه ها</span>
              <div className="circle"></div>
            </Link>
            <Link href="#faq" className="flex flex-col items-center justify-center relative gap-2">
              <span className="text-[16px] font-medium duration-300 relative text-[#313B78]">سوالات متداول</span>
              <div className="circle"></div>
            </Link>
            <Link href="contact" className="flex flex-col items-center justify-center relative gap-2">
              <span className="text-[16px] font-medium duration-300 relative text-[#313B78]">ارتباط باما</span>
              <div className="circle"></div>
            </Link>
            <Link href="/tariffs" className="flex flex-col items-center justify-center relative gap-2">
              <span className="text-[16px] font-medium duration-300 relative text-[#313B78]">مقالات</span>
              <div className="circle"></div>
            </Link>
          </nav>

          <div className="flex items-center">
            {isAuthenticated ? (
              <div className="flex items-center gap-3 xl:gap-4">
                <button className="bg-[#5D5AFF] z-50 rounded-[17px] hidden md:flex  py-[15px] w-[160px] h-[50px] pl-[13px] pr-[20px]  items-center justify-between shadow-md shadow-[#4E4AFF59] hover:opacity-85 duration-300">
                  <span className="text-white text-[14px] font-semibold">
                    ثبت سفارش
                  </span>
                  <MdKeyboardArrowLeft className="text-[18px] text-white" />
                </button>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="text-zinc-700 bg-transparent ml-3 md:ml-0 mb-2 sm:mb-0  hover:bg-transparent hover:text-zinc-500 p-2"
                    >
                      <HiOutlineMenuAlt2 size={28} />
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle className="mt-8">
                        <Image src={logo} width={150} height={50} />
                      </SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col items-start gap-6 px-5 mt-10">
                      <Link
                        href="/dashboard/userInfo"
                        className="flex items-center gap-3"
                      >
                        <div className="w-[30px] h-[30px] shadow-md rounded-lg bg-[#5D5AFF] flex items-center justify-center p-1">
                          <FiUser size={16} className="text-white " />
                        </div>
                        <span className="text-[18px] font-semibold text-gray-200">
                          حساب کاربری
                        </span>
                      </Link>
                      {userInfo ? (
                        userInfo.role === "user" ? (
                          <div className="flex flex-col items-start gap-6">
                            <Link
                              href="/dashboard/"
                              className="flex items-center gap-3"
                            >
                              <div className="w-[30px] h-[30px] shadow-md rounded-lg bg-[#5D5AFF] flex items-center justify-center p-1">
                                <FiShoppingBag size={16} className="text-white " />
                              </div>
                              <span className="text-[18px] font-semibold text-gray-200">
                                سفارشات
                              </span>
                            </Link>
                            <Link
                              href="/dashboard/"
                              className="flex items-center gap-3"
                            >
                              <div className="w-[30px] h-[30px] shadow-md rounded-lg bg-[#5D5AFF] flex items-center justify-center p-1">
                                <MdPayment size={16} className="text-white " />
                              </div>
                              <span className="text-[18px] font-semibold text-gray-200">
                                پرداخت
                              </span>
                            </Link>
                            <Link
                              href="/dashboard/"
                              className="flex items-center gap-3"
                            >
                              <div className="w-[30px] h-[30px] shadow-md rounded-lg bg-[#5D5AFF] flex items-center justify-center p-1">
                                <BiMessageDetail size={16} className="text-white " />
                              </div>
                              <span className="text-[18px] font-semibold text-gray-200">
                                پیام ها
                              </span>
                            </Link>
                            <Link
                              href="/dashboard/"
                              className="flex items-center gap-3"
                            >
                              <div className="w-[30px] h-[30px] shadow-md rounded-lg bg-[#5D5AFF] flex items-center justify-center p-1">
                                <MdOutlineNotificationsActive size={16} className="text-white " />
                              </div>
                              <span className="text-[18px] font-semibold text-gray-200">
                                اعلانات
                              </span>
                            </Link>
                          </div>
                        ) : (
                          <div className="flex flex-col items-start gap-6">
                              <Link
                              href="/dashboard/admin/overview"
                              className="flex items-center gap-3"
                            >
                              <div className="w-[30px] h-[30px] shadow-md rounded-lg bg-[#5D5AFF] flex items-center justify-center p-1">
                                <RxDashboard size={16} className="text-white " />
                              </div>
                              <span className="text-[18px] font-semibold text-gray-200">
                                دشبورد
                              </span>
                            </Link>
                              <Link
                              href="/dashboard/admin"
                              className="flex items-center gap-3"
                            >
                              <div className="w-[30px] h-[30px] shadow-md rounded-lg bg-[#5D5AFF] flex items-center justify-center p-1">
                                <FiShoppingBag size={16} className="text-white " />
                              </div>
                              <span className="text-[18px] font-semibold text-gray-200">
                                سفارشات
                              </span>
                            </Link>
                              <Link
                              href="/dashboard/admin/users"
                              className="flex items-center gap-3"
                            >
                              <div className="w-[30px] h-[30px] shadow-md rounded-lg bg-[#5D5AFF] flex items-center justify-center p-1">
                                <FaUsers size={16} className="text-white " />
                              </div>
                              <span className="text-[18px] font-semibold text-gray-200">
                                کاربران
                              </span>
                            </Link>
                              <Link
                              href="/dashboard/admin/tickets"
                              className="flex items-center gap-3"
                            >
                              <div className="w-[30px] h-[30px] shadow-md rounded-lg bg-[#5D5AFF] flex items-center justify-center p-1">
                                <BiMessageDetail size={16} className="text-white " />
                              </div>
                              <span className="text-[18px] font-semibold text-gray-200">
                                پیام ها
                              </span>
                            </Link>
                              <Link
                              href="/dashboard/notifications"
                              className="flex items-center gap-3"
                            >
                              <div className="w-[30px] h-[30px] shadow-md rounded-lg bg-[#5D5AFF] flex items-center justify-center p-1">
                                <MdOutlineNotificationsActive size={16} className="text-white " />
                              </div>
                              <span className="text-[18px] font-semibold text-gray-200">
                                اعلان ها
                              </span>
                            </Link>
                          </div>
                        )
                      ) : (
                        <>
                          <span>loading</span>
                        </>
                      )}
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            ) : (
              <div className="">
                <Link href='/auth/login' className="bg-[#5D5AFF] z-50 rounded-[17px] mb-3 md:mb-0  flex py-[15px] w-[100px] h-[50px] pl-[15px] pr-[25px]  items-center justify-between shadow-md shadow-[#4E4AFF59] hover:opacity-85 duration-300">
                  <span className="text-white text-[14px] font-semibold">
                    ورود
                  </span>
                  <IoLogInOutline className="text-[18px] text-white" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
