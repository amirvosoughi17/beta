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
import navLogo from "@/assets/logow.png";
// react icons
import { MdKeyboardArrowLeft } from "react-icons/md";
// shadcn
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import ActiveLink from "./ActiveLink";

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
            <Image
              alt="logo"
              width={175}
              height={51}
              className="w-[130px] "
              src={navLogo}
            />
          </div>
          <nav className="items-center gap-8 hidden lg:flex">
            <ActiveLink href="/">
              <span>خانه</span>
            </ActiveLink>

            <ActiveLink href="#plans">
              <span>تعرفه ها</span>
            </ActiveLink>
            <ActiveLink href="#faq">
              <span>سوالات متداول</span>
            </ActiveLink>
            <ActiveLink href="contact">
              <span>ارتباط باما</span>
            </ActiveLink>
            <ActiveLink href="/tariffs">
              <span>مقالات</span>
            </ActiveLink>
          </nav>

          <div className="">
            <button className="bg-[#5D5AFF] z-50 rounded-[17px] hidden md:flex  py-[15px] w-[160px] h-[50px] pl-[13px] pr-[20px]  items-center justify-between shadow-md shadow-[#4E4AFF59] hover:opacity-85 duration-300">
              <span className="text-white text-[14px] font-semibold">
                ثبت سفارش
              </span>
              <MdKeyboardArrowLeft className="text-[18px] text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
