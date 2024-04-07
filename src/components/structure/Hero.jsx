import React from "react";
import heroBlue from "@/assets/hero-blue.png";
import heroGreen from "@/assets/hero-green.png";
import element from "@/assets/element.png";
import Image from "next/image";
import target from "@/assets/target.png";
import blueItem from "@/assets/bh.png";
import greenItem from "@/assets/green-item.png";

// react icons
import { MdKeyboardArrowLeft } from "react-icons/md";

const Hero = () => {
  return (
    <div className="w-full py-10 max-w-[1560px] mx-auto  relative ">
      <div className="w-full items-start z-10 flex mt-[-124px] md:mt-[-139px]  justify-between md:pl-[120px] px-10 md:pr-[125px]">
        <div className="w-[2px] h-[550px] z-10 bg-gradient-to-b  from-[#e3e3e35c] to-[#f0efef04"></div>
        <div className="w-[2px] h-[550px] z-10 bg-gradient-to-b hidden md:block from-[#e3e3e35c] to-[#f0efef04"></div>
        <div className="w-[2px] h-[550px] z-10  bg-gradient-to-b  from-[#e3e3e35c] to-[#f0efef04"></div>
        <div className="w-[2px] h-[550px] z-10  bg-gradient-to-b hidden md:block from-[#e3e3e35c] to-[#f0efef04]"></div>
        <div className="w-[2px] h-[550px] z-10  bg-gradient-to-b  from-[#e3e3e35c] to-[#f0efef04"></div>
      </div>
      <div className="flex z-50 gap-1 px-[20px] sm:px-[50px] justify-center flex-col xl:flex-row items-center xl:items-start mt-[-389px]">
        {/* right  */}
        <div className=" relative hidden xl:block  z-50 mt-[40px]">
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
        <div className="flex flex-col items-center md:mt-0 mt-[-80px]  z-50 max-w-[500px] xl:max-w-[405px] relative">
          <Image
            className=" absolute top-10 left-1 hidden sm:block rotate-90"
            src={element}
            width={33}
            height={33}
            alt="wixel"
          />
          <Image
            className=" absolute bottom-[20px] right-0 hidden sm:block rotate-[-90deg]"
            src={element}
            width={33}
            height={33}
            alt="wixel"
          />
          <div className="mb-[-15px] sm:mb-0">
            <Image alt="target" src={target} width={218} className="w-[210px]" />
          </div>
          <div className="flex flex-col gap-[3px]">
            <h1 className="text-[#313B78] md:text-[38px] text-[30px] sm:text-[38px]  lg:text-[38px] xl:text-[40px] font-semibold  ">
              طراحی پیکسل به پیسکل
            </h1>
            <h1 className="text-[#313B78] md:text-[38px] text-[30px] sm:text-[38px] lg:text-[38px] xl:text-[40px] font-semibold flex items-center gap-[6px] ">
              <span>وب سایت شما با</span>
              <span className="text-bold text-[#5D5AFF]">ویکسل</span>
            </h1>
          </div>
          <div className="xl:mt-4 mt-5 max-w-[322px] sm:max-w-full sm:mt-8">
            <p className="text-[#313a7882] md:text-[15px] text-[13px] sm:text-[15px]  lg:text-[16px] xl:text-[15px] text-center">
              طراحی سایت اختصاصی و اماده با ظاهری چشم نواز و با بروزترین متد های
              روز برای کسب و کار شما با تیم ویکسل
            </p>
          </div>
          <div className="flex items-center justify-center mt-8 gap-4">
            <button className="bg-[#5D5AFF] z-50 rounded-[13px]  py-[15px] md:w-[160px] w-[130px] h-[48px] pl-[13px] pr-[20px] flex items-center justify-between shadow-md shadow-[#4E4AFF59] hover:opacity-85 duration-300">
              <span className="text-white text-[14px] font-semibold ">
                ثبت سفارش
              </span>
              <MdKeyboardArrowLeft className="text-[18px] text-white" />
            </button>
            <button className="rounded-[13px] bg-white drop-shadow-lg shadow-zinc-500  py-[15px] w-[100px] md:w-[120px] h-[48px] px-[] flex items-center justify-center text-sm font-medium ">
              درباره ما
            </button>
          </div>
        </div>
        {/* left  */}
        <div className=" relative overflow-x-hidden sm:overflow-x-visible w-full 2xl:w-[45%] xl:w-[53%] block sm:flex items-center justify-center mt-[20px] sm:mt-[40px]">
          <div className="blue-hero " >
            <Image
              src={heroBlue}
              alt="hero image"
              className="md:rotate-[-2.6deg] "
              layout="responsive"
            />
          </div>
          <Image
            src={element}
            width={33}
            height={33}
            alt="wixel"
            className=" absolute left-2 hidden sm:block  bottom-[90px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
