"use client";
import React from "react";
import servicesBg from "@/assets/services-bg.png";
import Image from "next/image";
import element from "@/assets/element.png";
import servicesIcon from "@/assets/services-icon.png";
import s1 from "@/assets/e1.svg";
import s2 from "@/assets/e2.svg";
import s3 from "@/assets/e3.svg";
import s4 from "@/assets/e4.svg";

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
          <div className="lg:flex items-center justify-center gap-[8px] xl:gap-4 grid grid-cols-2 sm:grid-cols-2">
            <div className="2xl:w-[320px] 2xl:h-[350px] xl:w-[300px] xl:h-[330px] sm:w-[250px] sm:h-[280px] w-[180px] h-[220px] bg-white xl:px-8 sm:px-6 sm:py-8 px-4 py-6  xl:py-10 rounded-[27px] flex flex-col gap-2 items-start justify-start">
              <div className=" rounded-full  sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] flex items-center  justify-center ">
                <Image alt="wixel" src={s1} />
              </div>
              <div className="flex flex-col gap-1 sm:gap-2 mt-1 sm:mt-2 xl:mt-2 xl:gap-3">
                <h1 className="xl:text-[24px] sm:text-[22px] text-[18px] text-[#313B78] font-semibold">
                  سئو و بهینه سازی
                </h1>
                <p className="text-[#313a787f] text-[11px] sm:text-[14px] lg:text-[13px] xl:text-[16px]">با تمرکز بر بهبود نمره و عملکرد سایت، ویکسل از اصول بهینه‌سازی متنوع بهره می‌برد تا رتبه و دسترسی بهتری در موتورهای جستجو برای شما فراهم کن
</p>
              </div>
            </div>
            <div className="2xl:w-[320px] 2xl:h-[350px] xl:w-[300px] xl:h-[330px] sm:w-[250px] sm:h-[280px] w-[180px] h-[220px] bg-white xl:px-8 sm:px-6 sm:py-8 px-4 py-6  xl:py-10 rounded-[27px] flex flex-col gap-2 items-start justify-start">
              <div className=" rounded-full  sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] flex items-center  justify-center ">
                <Image alt="wixel" src={s2} className="" />
              </div>
              <div className="flex flex-col gap-1 sm:gap-2 mt-1 sm:mt-2 xl:mt-2 xl:gap-3">
                <h1 className="xl:text-[24px] sm:text-[22px] text-[18px] text-[#313B78] font-semibold">
                پشتیبانی 

                </h1>
                <p className="text-[#313a787f] text-[11px] sm:text-[14px] lg:text-[13px] xl:text-[16px]">با ارائه پشتیبانی تیم ما در هر زمان از روز و شب بهره مند شوید تا به شما کمک کنیم و سوالات شما را پاسخ دهیم.
</p>
              </div>
            </div>
            <div className="2xl:w-[320px] 2xl:h-[350px] xl:w-[300px] xl:h-[330px] sm:w-[250px] sm:h-[280px] w-[180px] h-[220px] bg-white xl:px-8 sm:px-6 sm:py-8 px-4 py-6  xl:py-10 rounded-[27px] flex flex-col gap-2 items-start justify-start">
              <div className=" rounded-full  sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] flex items-center  justify-center ">
                <Image alt="wixel" src={s3} className="" />
              </div>
              <div className="flex flex-col gap-1 sm:gap-2 mt-1 sm:mt-2 xl:mt-2 xl:gap-3">
                <h1 className="xl:text-[24px] sm:text-[22px] text-[18px] text-[#313B78] font-semibold">
                فرآیند سفارش ساده

                </h1>
                <p className="text-[#313a787f] text-[11px] sm:text-[14px] lg:text-[13px] xl:text-[16px]">با ورود به داشبورد، می‌توانید به راحتی وب‌سایت مورد نظر خود را سفارش دهید و مراحل توسعه آن را به‌صورت ساده و شفاف پیگیری کنید.
</p>
              </div>
            </div>
            <div className="2xl:w-[320px] 2xl:h-[350px] xl:w-[300px] xl:h-[330px] sm:w-[250px] sm:h-[280px] w-[180px] h-[220px] bg-white xl:px-8 sm:px-6 sm:py-8 px-4 py-6  xl:py-10 rounded-[27px] flex flex-col gap-2 items-start justify-start">
              <div className=" rounded-full sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] flex items-center  justify-center ">
                <Image alt="wixel" src={s4} className="" />
              </div>
              <div className="flex flex-col gap-1 sm:gap-2 mt-1 sm:mt-2 xl:mt-2 xl:gap-3">
                <h1 className="xl:text-[24px] sm:text-[22px] text-[18px] text-[#313B78] font-semibold">
                طراحی واکنشگرا

                </h1>
                <p className="text-[#313a787f] text-[11px] sm:text-[14px] lg:text-[13px] xl:text-[16px]">با ارائه تجربه‌ای سرشار از خلاقیت و ظرافت، ویکسل به طراحی‌هایی اختصاصی متناسب با هر دستگاه، از دسکتاپ تا موبایل، می‌پردازد. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
