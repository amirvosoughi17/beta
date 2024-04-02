import React from "react";
import heroBlue from "@/assets/hero-blue.png";
import heroGreen from "@/assets/hero-green.png";
import element from "@/assets/element.png";
import Image from "next/image";
import target from "@/assets/target.png";
import blueItem from "@/assets/blue-item.png";
import greenItem from '@/assets/green-item.png'
// react icons
import { MdKeyboardArrowLeft } from "react-icons/md";

const Hero = () => {
  return (
    <div className="w-full py-10   relative ">
      <div className="w-full items-start z-10 flex mt-[-139px]  justify-between pl-[120px] pr-[125px]">
        <div className="w-[2px] h-[550px] z-10 bg-gradient-to-b  from-[#e3e3e35c] to-[#f0efef04"></div>
        <div className="w-[2px] h-[550px] z-10 bg-gradient-to-b  from-[#e3e3e35c] to-[#f0efef04"></div>
        <div className="w-[2px] h-[550px] z-10  bg-gradient-to-b  from-[#e3e3e35c] to-[#f0efef04"></div>
        <div className="w-[2px] h-[550px] z-10  bg-gradient-to-b  from-[#e3e3e35c] to-[#f0efef04]"></div>
        <div className="w-[2px] h-[550px] z-10  bg-gradient-to-b  from-[#e3e3e35c] to-[#f0efef04"></div>
      </div>
      <div className="flex  z-50 gap-1 px-[50px] justify-center items-start mt-[-389px]">
        {/* right  */}
        <div className=" relative  z-50 mt-[40px]">
          <Image
            className=" absolute top-[120px] w-[33px] h-[33px] "
            src={element}
          />
          <div className="relative">
            <Image
              src={heroGreen}
              alt="hero image"
              className=" rotate-[3deg]"
              width={645}
              height={820}
            />
             <Image 
            alt="wixel"
            src={greenItem}
            width={246}
            height={105}
            className=" absolute top-[87px] right-[-20px]"
            />
          </div>
        </div>
        {/* center  */}
        <div className="flex flex-col items-center  z-50 max-w-[405px] relative">
          <Image
            className=" absolute top-10 left-1 rotate-90"
            src={element}
            width={33}
            height={33}
            alt="wixel"
          />
          <Image
            className=" absolute bottom-[20px] right-0  rotate-[-90deg]"
            src={element}
            width={33}
            height={33}
            alt="wixel"
          />
          <div className="">
            <Image alt="target" src={target} width={218} className="" />
          </div>
          <div className="flex flex-col gap-[3px]">
            <h1 className="text-[#313B78] lg:text-[38px] xl:text-[40px] font-semibold  ">
              طراحی پیکسل به پیسکل
            </h1>
            <h1 className="text-[#313B78] lg:text-[38px] xl:text-[40px] font-semibold flex items-center gap-[6px] ">
              <span>وب سایت شما با</span>
              <span className="text-bold text-[#5D5AFF]">ویکسل</span>
            </h1>
          </div>
          <div className="mt-4">
            <p className="text-[#313a7882] lg:text-[14px] xl:text-[15px] text-center">
              طراحی سایت اختصاصی و اماده با ظاهری چشم نواز و با بروزترین متد های
              روز برای کسب و کار شما با تیم ویکسل
            </p>
          </div>
          <div className="flex items-center justify-center mt-8 gap-4">
            <button className="bg-[#5D5AFF] z-50 rounded-[13px]  py-[15px] w-[160px] h-[48px] pl-[13px] pr-[20px] flex items-center justify-between shadow-md shadow-[#4E4AFF59] hover:opacity-85 duration-300">
              <span className="text-white text-[14px] font-semibold ">
                ثبت سفارش
              </span>
              <MdKeyboardArrowLeft className="text-[18px] text-white" />
            </button>
            <button className="rounded-[13px] bg-white drop-shadow-lg shadow-zinc-500  py-[15px] w-[120px] h-[48px] px-[] flex items-center justify-center text-sm font-medium ">
              درباره ما
            </button>
          </div>
        </div>
        {/* left  */}
        <div className=" relative z-50 mt-[40px]">
          <div className="relative">
            <Image
              src={heroBlue}
              alt="hero image"
              className="rotate-[-2.6deg]"
              width={600}
              height={807}
            />
            <Image
              alt="wixel"
              src={blueItem}
              width={246}
              height={105}
              className=" absolute bottom-[135px] right-[-20px]"
            />
          </div>
          <Image
            src={element}
            width={33}
            height={33}
            alt="wixel"
            className=" absolute left-2 bottom-[90px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
