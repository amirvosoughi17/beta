"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import navLogo from "@/assets/navlogo.svg";
import telegram from '@/assets/telegram.svg'
import whatsapp from '@/assets/whatsapp.svg'
// react icons
import { MdKeyboardArrowLeft } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="w-full  z-50 bg-[#F4F9FF] text-black">
      <div className="w-full mx-auto bg-[#5D5AFF] md:h-[60px] h-[55px] mb-[5px] md:mb-[30px] flex items-center justify-center ">
        <p className="text-white text-md font-semibold"></p>
      </div>
      <div className="w-full max-w-[1560px] mx-auto z-50 pr-[10px] pl-[15px] sm:px-[40px] md:px-[100px] sticky">
        <div className="flex items-cetner justify-between pt-5 w-full">
          <div className="">
            <Image alt="logo" className="w-[135px] " src={navLogo} />
          </div>
          <nav className="items-center gap-8 hidden lg:flex ">
            <Link
              href="/"
              className="flex flex-col items-center justify-center relative gap-2"
            >
              <span className="text-[16px] font-medium duration-300 relative text-[#5D5AFF]">
                خانه
              </span>
            </Link>

            <Link
              href="#plans"
              className="flex flex-col items-center justify-center relative gap-2"
            >
              <span className="text-[16px] font-medium duration-300 relative text-[#313B78]">
                تعرفه ها
              </span>
            </Link>
            <Link
              href="#faq"
              className="flex flex-col items-center justify-center relative gap-2"
            >
              <span className="text-[16px] font-medium duration-300 relative text-[#313B78]">
                سوالات متداول
              </span>
            </Link>
            <Link
              href="contact"
              className="flex flex-col items-center justify-center relative gap-2"
            >
              <span className="text-[16px] font-medium duration-300 relative text-[#313B78]">
                ارتباط باما
              </span>
            </Link>
            <Link
              href="/tariffs"
              className="flex flex-col items-center justify-center relative gap-2"
            >
              <span className="text-[16px] font-medium duration-300 relative text-[#313B78]">
                مقالات
              </span>
            </Link>
          </nav>

          <div className="mb-1 md:mt-0 flex items-center gap-1 sm:gap-2">
            
            <Link href='/'>
            <Image 
            src={whatsapp}
            alt="whatsapp"
            width={130}
            height={50}
            className="ml-[0px]"
            />
            </Link>
            <Link href='https://t.me/wixel_support' target="_blank">
            <Image 
            src={telegram}
            alt="whatsapp"
            width={41}
            height={45}
            />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
