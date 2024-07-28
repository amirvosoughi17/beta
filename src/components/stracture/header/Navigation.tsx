"use client";
import NavigationLink from "./NavigationLink";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import wixelLogo from "@/assets/navigate.svg";
import { GiStarShuriken } from "react-icons/gi";
import HamburgerMenu from "./menu/HumbergerMenu";
import { Button } from "@/components/ui/button";
import CreateOrderForm from "@/components/forms/CreateOrderForm";
import { useAuthRedirect } from "@/utils/authUtils";

const Navigation = () => {
const [isAdmin , setIsAdmin] = useState(false)
  useEffect(() => {
    const token = localStorage.getItem("auth_token"); 
    if(token) {
      setIsAdmin(true)
    }
  }, []);
  return (
    <div className=" flex relative items-center justify-center z-50">
      <div className="w-full h-[35px] lg:h-[40px]   bg-indigo-400 text-black absolute top-0 flex items-center gap-5 sm:gap-6 lg:gap-10 justify-center mx-auto ">
        <GiStarShuriken size={20} className=" w-[15px] " />
        <span className="bboard text-[13px] lg:text-[14px]  font-medium">
          تخفیف ۲۰ درصدی برای اولین سفارش
        </span>
        <GiStarShuriken size={20} className=" w-[15px]" />
      </div>
      <div className="w-full mx-auto  h-[80px] mt-[35px] lg:mt-[40px]  flex items-center justify-between ">
        <div className="w-full bg-transparent h-full border-b-[0.4px] border-neutral-700  flex items-center justify-between mx-auto px-8 md:px-6 lg:px-[50px]">
          <div className="flex w-full items-center justify-between max-w-[1440px] mx-auto">
            <div className="">
              <Image
                src={wixelLogo}
                alt="logo"
                className="w-[95px] lg:w-[105px] mt-2 mr-[-4px]"
              />
            </div>
            <nav className="items-center gap-8 h-full juc hidden lg:flex">
              <NavigationLink href="/" label="خانه" />
              <NavigationLink href="/#services" label="خدمات" />
              <NavigationLink href="/#showcases" label="نمونه کارها" />
              <NavigationLink href="/#contactUs" label="ارتباط باما" />
            </nav>
            <div className="flex items-center gap-3">
              {isAdmin ? (
                <Button> dashbaord</Button>
              ) : (
                <>
                  <div className=" hidden lg:block">
                    <CreateOrderForm />
                  </div>
                </>
              )}
              <HamburgerMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
