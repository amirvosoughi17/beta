import CreateOrderForm from "@/components/forms/CreateOrderForm";
import React from "react";
import Parllax from "./Parllax";
import ButtonAnimation from "./ButtonAnimation";
import { FaInstagram } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";
import { FaTelegram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import reactElementToJSXString from "react-element-to-jsx-string";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Hero = () => {
  return (
    <div className="mt-[40px] ">
      <div className="  max-w-[95%] lg:mx-auto lg:max-w-[75%] text-center w-full flex flex-col gap-7 items-center justify-center h-[370px]">
        <div className="gap-3 px-6 flex justify-start flex-col lg:justify-center items-start lg:items-center text-white font-bold text-[32px] md:text-[43px] lg:text-[46px] ">
          <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(155,9,108,0.6)_0%,rgba(235,9,8,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex gap-2 items-center z-10 rounded-full bg-neutral-950/80 py-0.5 px-6 lg:px-8 ring-1 ring-neutral-600/40 ">
              <span className="text-neutral-400 font-light">
                طراحی وبسایت و اپلیکیشن کدنویسی شده{" "}
              </span>
              <IoIosArrowRoundBack size={16} className="text-neutral-400" />
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-indigo-400/0 via-indigo-400/90 to-rose-400/0 transition-opacity duration-300 group-hover:opacity-40" />
          </button>
          <h1 className="text-gradient text-start lg:text-center lg:max-w-[90%] ">
            طراحی سایت اختصاصی با بروزترین تکنولوژی های روز با ویکسل
          </h1>
          <p className="text-neutral-500 lg:text-center font-light text-[14px] lg:text-[19px] max-w-[95%] text-start lg:max-w-[70%] ">
            اپلیکیشن موبایل و طراحی گرافیک ارائه می‌دهند. با ما همراه باشید تا
            تجربه‌ای بی‌نظیر از کیفیت و حرفه‌ای بودن را تجربه کنید.
          </p>
        </div>
        <div className="w-full ">
          <div className="w-[90%] px-3 md:px-6  flex items-center justify-between lg:w-[700px] h-[60px] lg:h-[68px] border-[0.5px] border-neutral-700/70 shadow-lg rounded-lg mx-auto">
            <div className="flex items-center gap-3">
              <button className=" bg-indigo-700 flex items-center gap-2 rounded-lg py-2.5 px-6  text-neutral-300 text-sm">
                <span>ثبت سفارش</span>
                <IoIosArrowRoundBack size={19} />
              </button>

              <button className="py-2.5 hidden lg:inline-flex text-sm animate-shimmer items-center justify-center rounded-lg border border-neutral-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-neutral-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                نمونه کارها
              </button>
            </div>
            <div className="flex items-center gap-2.5 lg:gap-4 border-r-[0.5px] pr-4 lg:pr-6 border-neutral-600">
              <Link href="" className="">
                <FaLinkedin
                  className=" text-neutral-300 shadow-lg hover:text-white duration-300 w-6 h-6 lg:w-[27px] lg:h-[27px]"
                  size={23}
                />
              </Link>
              <Link href="">
                <FaTelegram
                  className=" text-neutral-300 shadow-lg hover:text-white duration-300 w-6 h-6 lg:w-[27px] lg:h-[27px]"
                  size={23}
                />
              </Link>
              <Link href="">
                <FaInstagram
                  className=" text-neutral-300 shadow-lg hover:text-white duration-300 w-6 h-6 lg:w-[27px] lg:h-[27px]"
                  size={23}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Parllax />
    </div>
  );
};

export default Hero;
