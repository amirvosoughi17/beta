"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import navLogo from "@/assets/navlogo.svg";
// react icons
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full  z-50 bg-[#F4F9FF] text-black">
      {/* <div className="w-full mx-auto bg-[#5D5AFF] md:h-[50px] h-[45px] mb-[5px] md:mb-[5px] flex items-center justify-center ">
        <p className="text-white text-md font-semibold"></p>
      </div> */}
      <div className="w-full max-w-[1560px] mx-auto z-50 pb-3  px-[20px] sm:px-[40px] md:px-[100px] sticky">
        <div className="flex items-cetner justify-between  w-full pt-7">
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

          <div className="mb-2 md:mt-0 flex items-center gap-1 sm:gap-2 pl-2">
            <Link href="https://t.me/wixel_support" target="_blank" className="rounded-xl w-[41px] h-[41px] bg-blue-500 text-white flex items-center justify-center">
              <FaTelegramPlane  size={21}/>
            </Link>
            <Link href="/"  className=" rounded-xl w-[41px] h-[41px] bg-green-500 text-white flex items-center justify-center">
              <FaWhatsapp size={22} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
