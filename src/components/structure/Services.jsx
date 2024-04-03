"use client";
import React from "react";
import servicesBg from "@/assets/services-bg.png";
import Image from "next/image";
import element from "@/assets/element.png";
import servicesIcon from "@/assets/services-icon.png";
import s1 from "@/assets/rocket.png";
import s2 from "@/assets/res.png";
import s3 from "@/assets/flg.png";
import s4 from "@/assets/code.png";

const Services = () => {
  return (
    <div className="w-full min-h-[400px] mt-[-100px] mb-10">
      <div className="w-full  flex flex-col relative h-full">
        <Image
          src={servicesBg}
          className="h-[330px] absolute top-1"
          alt="wixel"
        />
        <Image alt="wixel" src={element} className="top-10 left-10 absolute" />
        <div className="flex w-full max-w-[1560px] mx-auto items-center justify-between z-50 mt-[100px] sm:px-[30px] px-[10px] md:px-[50px] lg:px-[110px] ">
          <div className="flex items-center gap-3">
            <Image src={servicesIcon} alt="icon" width={60} height={60} className="w-[50px] h-[50px] md:w-[60px] md:h-[60px]" />
            <span className="text-white sm:text-[30px] text-[23px]  lg:text-[33px] font-medium ">
              امکانات و ویژگی های بی نظیر
            </span>
          </div>
          <button className="rounded-[17px] hidden md:block bg-[#ffffff31] px-8 py-[14px] hover:bg-[#ffffff4c] duration-300 text-white text-[16px] font-medium">
            ثبت سفارش
          </button>
        </div>
        <div className="lg:px-[110px] sm:px-[30px] px-[10px] md:px-[50px] sticky w-full h-full flex items-center justify-center gap-4 mt-[40px]">
          <div className="lg:flex items-center justify-center gap-2 xl:gap-4 grid grid-cols-1 sm:grid-cols-2">
            <div className="2xl:w-[320px] 2xl:h-[350px] xl:w-[300px] xl:h-[330px] lg:w-[250px] lg:h-[280px] bg-white xl:px-8 px-6 py-8  xl:py-10 rounded-[27px] flex flex-col gap-2 items-start justify-start">
              <div className=" rounded-full bg-[#0077ff1a] w-[100px] h-[100px] flex items-center lg:p-6 xl:p-8 justify-center ">
                <Image alt="wixel" src={s1} />
              </div>
              <div className="flex flex-col gap-2 mt-2 xl:mt-2 xl:gap-3">
                <h1 className="xl:text-[24px] text-[22px] text-[#313B78] font-medium">
                  سئو و بهینه سازی
                </h1>
                <p className="text-[#313a787f] text-[14px] lg:text-[13px] xl:text-[16px]">در ویکسل ما با تمرکز ویژه بر سعو تکنیکال به کمک اصول بهینه سازی متنوع به بهبود عملکرد و نمره سایت شما میپردازد</p>
              </div>
            </div>
            <div className="2xl:w-[320px] 2xl:h-[350px] xl:w-[300px] xl:h-[330px] lg:w-[250px] lg:h-[280px] bg-white xl:px-8 px-6 py-8  xl:py-10 rounded-[27px] flex flex-col gap-2 items-start justify-start">
              <div className=" rounded-full bg-[#ff5d5d24] w-[100px] h-[100px] flex items-center lg:p-6 xl:p-8 justify-center ">
                <Image alt="wixel" src={s2} className="" />
              </div>
              <div className="flex flex-col gap-2 mt-2 xl:mt-2 xl:gap-3">
                <h1 className="xl:text-[24px] text-[22px] text-[#313B78] font-medium">
                  طراحی واکنشگرا
                </h1>
                <p className="text-[#313a787f] text-[14px] lg:text-[13px] xl:text-[16px]">در ویکسل ما با تمرکز ویژه بر سعو تکنیکال به کمک اصول بهینه سازی متنوع به بهبود عملکرد و نمره سایت شما میپردازد</p>
              </div>
            </div>
            <div className="2xl:w-[320px] 2xl:h-[350px] xl:w-[300px] xl:h-[330px] lg:w-[250px] lg:h-[280px] bg-white xl:px-8 px-6 py-8  xl:py-10 rounded-[27px] flex flex-col gap-2 items-start justify-start">
              <div className=" rounded-full bg-[#995aff1b] w-[100px] h-[100px] flex items-center lg:p-6 xl:p-8 justify-center ">
                <Image alt="wixel" src={s3} className="" />
              </div>
              <div className="flex flex-col gap-2 mt-2 xl:mt-2 xl:gap-3">
                <h1 className="xl:text-[24px] text-[22px] text-[#313B78] font-medium">
                  ازادی انتخاب
                </h1>
                <p className="text-[#313a787f] text-[14px] lg:text-[13px] xl:text-[16px]">در ویکسل ما با تمرکز ویژه بر سعو تکنیکال به کمک اصول بهینه سازی متنوع به بهبود عملکرد و نمره سایت شما میپردازد</p>
              </div>
            </div>
            <div className="2xl:w-[320px] 2xl:h-[350px] xl:w-[300px] xl:h-[330px] lg:w-[250px] lg:h-[280px] bg-white xl:px-8 px-6 py-8  xl:py-10 rounded-[27px] flex flex-col gap-2 items-start justify-start">
              <div className=" rounded-full bg-[#4ec88125] w-[100px] h-[100px] flex items-center lg:p-6 xl:p-8 justify-center ">
                <Image alt="wixel" src={s4} className="" />
              </div>
              <div className="flex flex-col gap-2 mt-2 xl:mt-2 xl:gap-3">
                <h1 className="xl:text-[24px] text-[22px] text-[#313B78] font-medium">
                  تخصص
                </h1>
                <p className="text-[#313a787f] text-[14px] lg:text-[13px] xl:text-[16px]">در ویکسل ما با تمرکز ویژه بر سعو تکنیکال به کمک اصول بهینه سازی متنوع به بهبود عملکرد و نمره سایت شما میپردازد</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
