import React from "react";
import heroBlue from "@/assets/ll.svg";
import heroGreen from "@/assets/sg.svg";
import element from "@/assets/element.svg";
import Image from "next/image";
import target from "@/assets/top-hero.svg";
import blueItem from "@/assets/be.svg";
import greenItem from "@/assets/ge.svg";

// react icons
import { MdKeyboardArrowLeft } from "react-icons/md";

const Hero = () => {
  return (
    <div className="w-full py-10 max-w-[1560px] mx-auto  relative  mt-6 mb-[80px] min-h-[600px]">
      <div className="w-full items-start z-10 flex mt-[-160px] md:mt-[-165px]  justify-between md:pl-[120px] px-10 md:pr-[125px]">
        <div className="w-[2px] h-[550px] z-10 bg-gradient-to-b  from-[#e3e3e35c] to-[#f0efef04"></div>
        <div className="w-[2px] h-[550px] z-10 bg-gradient-to-b hidden md:block from-[#e3e3e35c] to-[#f0efef04"></div>
        <div className="w-[2px] h-[550px] z-10  bg-gradient-to-b  from-[#e3e3e35c] to-[#f0efef04"></div>
        <div className="w-[2px] h-[550px] z-10  bg-gradient-to-b hidden md:block from-[#e3e3e35c] to-[#f0efef04]"></div>
        <div className="w-[2px] h-[550px] z-10  bg-gradient-to-b  from-[#e3e3e35c] to-[#f0efef04"></div>
      </div>
      <div className="flex z-50 gap-1 px-[20px] sm:px-[50px] justify-center flex-col lg:flex-row items-center xl:items-start mt-[-365px] sm:mt-[-390px]">
        {/* right  */}
        <div className=" relative hidden lg:block lg:w-[43%]  mt-[35px] 2xl:mt-[10px] z-50 ">
          <Image
          alt="elemet"
          width={33}
          height={33}
            className=" absolute top-[120px] w-[33px] h-[33px] "
            src={element}
          />
          <div className="relative ">
            <Image
              src={heroGreen}
              alt="hero image"
              className=" rotate-[3deg] lg:w-[75%]  mx-auto"
              width={645}
              height={820}
            />
            <Image
              alt="wixel"
              src={greenItem}
              width={170}
              height={105}
              className=" absolute 2xl:top-[250px] w-[145px] h-[105px] 2xl:w-[170px] 2xl:h-[125px]  top-[190px] right-[50px]"
            />
          </div>
        </div>
        {/* center  */}
        <div className="flex flex-col lg:mb-[200px] xl:mb-0 items-center md:mt-0 mt-[-80px]  z-50 max-w-[500px] xl:max-w-[405px] relative">
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
            <Image alt="target" src={target} width={218} height={100} className="sm:w-[210px] w-[200px]" />
          </div>
          <div className="flex flex-col sm:gap-[3px]">
            <h1 className="text-[#313B78] md:text-[38px] text-[27px] sm:text-[38px]  lg:text-[31px] xl:text-[40px] font-semibold  ">
              طراحی پیکسل به پیسکل
            </h1>
            <h1 className="text-[#313B78] md:text-[38px] text-[27px] sm:text-[38px] lg:text-[31px] xl:text-[40px] font-semibold flex items-center gap-[6px] ">
              <span>وب سایت شما با</span>
              <span className="text-bold text-[#5D5AFF]">ویکسل</span>
            </h1>
          </div>
          <div className="xl:mt-4 mt-4 max-w-[300px]  sm:max-w-full  xl:max-w-[500px] sm:mt-8">
            <p className="text-[#313a7882] md:text-[15px] text-[12.5px] md:max-w-[390px] xl:max-w-[500px] sm:text-[15px]  lg:text-[14.5px] xl:text-[17px] text-center">
              طراحی سایت اختصاصی و اماده با ظاهری چشم نواز و با بروزترین متد های
              روز برای کسب و کار شما با تیم ویکسل
            </p>
          </div>
          <div className="flex items-center justify-center mt-6 sm:mt-8 gap-4">
            <button className="bg-[#5D5AFF] z-50 rounded-[13px]  py-[15px] md:w-[160px] w-[160px] h-[45px] pl-[13px] pr-[20px] flex items-center justify-between shadow-md shadow-[#4E4AFF59] hover:opacity-85 duration-300">
              <span className="text-white text-[14px] font-semibold ">
                ثبت سفارش
              </span>
              <MdKeyboardArrowLeft className="text-[18px] text-white" />
            </button>
            <button className="rounded-[13px] bg-white drop-shadow-lg shadow-zinc-500  py-[15px] w-[100px] md:w-[120px] h-[45px] px-[] flex items-center justify-center text-sm font-medium ">
              درباره ما
            </button>
          </div>
        </div>
        {/* left  */}
        <div className=" relative  w-full 2xl:w-[42%]  lg:w-[43%] block sm:flex sm:w-[75%] md:w-[65%] items-center justify-center mt-[20px] xl:mt-[22px] 2xl:mt-[10px]">
          <div className=" " >
            <Image
              src={heroBlue}
              alt="hero image"
              className="md:rotate-[-2.6deg]"
              layout="responsive"
            />
            <Image 
            src={blueItem}
            alt="wixel"
            width={170}
            height={105}
            className="lg:bottom-[180px] bottom-[100px]  sm:bottom-[130px] absolute w-[130px] h-[95px] sm:w-[145px] sm:h-[105px] 2xl:w-[170px] 2xl:h-[125px] right-8"
            />
          </div>
          <Image
            src={element}
            width={33}
            height={33}
            alt="wixel"
            className=" absolute left-2   bottom-[90px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
