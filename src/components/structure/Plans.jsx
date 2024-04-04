import React from "react";
import Image from "next/image";
import planP from "@/assets/plan-p.png";
import peP from "@/assets/pe-p.png";
import poO from '@/assets/peO.png'
import poG from '@/assets/peG.png'
// react icons
import { PiPlanetBold } from "react-icons/pi";
import { TbServer2 } from "react-icons/tb";
import { TbPaint } from "react-icons/tb";
import { RiVipCrown2Line } from "react-icons/ri";
import { LuBookCopy } from "react-icons/lu";
import { TbFilterEdit } from "react-icons/tb";
import { PiMedal } from "react-icons/pi";
import { TbBoxSeam } from "react-icons/tb";
import { TbUsersGroup } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { PiDevicesBold } from "react-icons/pi";
import { RiShieldUserLine } from "react-icons/ri";
import { TbNotes } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const Plans = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-cnter gap-[70px] mt-[100px] min-h-screen mb-[450px]">
      <div className="flex flex-col gap-1.5 items-center">
        <h1 className="text-[26px] md:text-2xl font-semibold text-[#364163] ">
          تعرفه های ویکسل
        </h1>
        <p className="text-[14px] md:text-lg  text-[#3641637d]">
          قیمت طراحی سایت و فروشگاه اینترنتی
        </p>
        <span className="w-[70px] md:w-[90px] h-[8px] md:h-[9px] bg-[#5D5AFF] rounded-full mt-3"></span>
      </div>
      <div className="flex gap-6 w-full flex-col lg:flex-row items-center justify-center">
        {/* orange  */}
        <div className="flex flex-col gap-1 w-[365px] sm:w-[400px] bg-white h-[910px] rounded-[70px] drop-shadow-sm ">
          <div className=" relative">
            <Image src={poO} className="w-[full] h-[200px] mt-[-10px]" />
            <h1 className="text-3xl font-bold text-white absolute top-[66px] left-[33%]">
              فروشگاهی
            </h1>
          </div>
          <div className="flex flex-col w-full gap-2 px-6 sm:px-8 lg:px-2 xl:px-8">
            {/* row  */}
            <div className="w-full flex items-center justify-cetner gap-5 border-b-[1.5px] py-[13px] border-zinc-200/50">
              <div className="flex items-center  gap-2.5 w-[50%]">
                <div className="w-[38px] h-[38px] rounded-full bg-[#ff5d5d28] flex items-center justify-center p-2">
                  <PiPlanetBold className="w-full h-full text-[#FF5E5D] " />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  دامنه اختصاصی
                </h1>
              </div>
              <div className="flex items-center gap-2.5 w-[50%]">
                <div className="w-[38px] h-[38px] rounded-full bg-[#ff5d5d28] flex items-center justify-center p-2">
                  <TbServer2 className="w-full h-full text-[#FF5E5D]" />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  هاستینگ
                </h1>
              </div>
            </div>
            {/* end row  */}
            {/* row  */}
            <div className="w-full flex items-center justify-cetner gap-3 border-b-[1.5px] py-[13px] border-zinc-200/50">
              <div className="flex items-center gap-2.5 w-[50%]">
                <div className="w-[38px] h-[38px] rounded-full bg-[#ff5d5d28] flex items-center justify-center p-2">
                  <TbPaint className="w-full h-full text-[#FF5E5D] " />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  طراحی اختصاصی
                </h1>
              </div>
              <div className="flex items-center gap-2.5 w-[50%] ">
                <div className="w-[38px] h-[38px] rounded-full bg-[#ff5d5d28] flex items-center justify-center p-2">
                  <RiVipCrown2Line className="w-full h-full text-[#FF5E5D]" />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  پنل مدیریت
                </h1>
              </div>
            </div>
            {/* end row  */}
            {/* row  */}
            <div className="w-full flex items-center justify-cetner gap-3 border-b-[1.5px] py-[13px] border-zinc-200/50">
              <div className="flex items-center gap-2.5 w-[50%]">
                <div className="w-[38px] h-[38px] rounded-full bg-[#ff5d5d28] flex items-center justify-center p-2.5">
                  <LuBookCopy className="w-full h-full text-[#FF5E5D] " />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  صفحات نامحدود
                </h1>
              </div>
              <div className="flex items-center gap-2.5 w-[50%] ">
                <div className="w-[38px] h-[38px] rounded-full bg-[#ff5d5d28] flex items-center justify-center p-2">
                  <TbFilterEdit className="w-full h-full text-[#FF5E5D]" />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  فیلترینگ
                </h1>
              </div>
            </div>
            {/* end row  */}
            {/* row  */}
            <div className="w-full flex items-center justify-cetner gap-3 border-b-[1.5px] py-[13px] border-zinc-200/50">
              <div className="flex items-center gap-2.5 w-[50%]">
                <div className="w-[38px] h-[38px] rounded-full bg-[#ff5d5d28] flex items-center justify-center p-2.5">
                  <TbBoxSeam className="w-full h-full text-[#FF5E5D] " />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  مدیریت محصول
                </h1>
              </div>
              <div className="flex items-center gap-2.5 w-[50%] ">
                <div className="w-[38px] h-[38px] rounded-full bg-[#ff5d5d28] flex items-center justify-center p-2">
                  <PiMedal className="w-full h-full text-[#FF5E5D]" />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">سعو</h1>
              </div>
            </div>
            {/* end row  */}
            {/* row  */}
            <div className="w-full flex items-center justify-cetner gap-3 border-b-[1.5px] py-[13px] border-zinc-200/50">
              <div className="flex items-center gap-2.5 w-[50%]">
                <div className="w-[38px] h-[38px] rounded-full bg-[#ff5d5d28] flex items-center justify-center p-2.5">
                  <TbUsersGroup className="w-full h-full text-[#FF5E5D] " />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  مدیریت کاربران
                </h1>
              </div>
              <div className="flex items-center gap-2.5 w-[50%] ">
                <div className="w-[38px] h-[38px] rounded-full bg-[#ff5d5d28] flex items-center justify-center p-2">
                  <MdOutlinePayment className="w-full h-full text-[#FF5E5D]" />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  درگاه پرداخت
                </h1>
              </div>
            </div>
            {/* end row  */}
            {/* row  */}
            <div className="w-full flex items-center justify-cetner gap-3 border-b-[1.5px] py-[13px] border-zinc-200/50">
              <div className="flex items-center gap-2.5 w-[50%]">
                <div className="w-[38px] h-[38px] rounded-full bg-[#ff5d5d28] flex items-center justify-center p-2.5">
                  <PiDevicesBold className="w-full h-full text-[#FF5E5D] " />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  طراحی واکنشگرا
                </h1>
              </div>
              <div className="flex items-center gap-2.5 w-[50%] ">
                <div className="w-[38px] h-[38px] rounded-full bg-[#ff5d5d28] flex items-center justify-center p-2">
                  <RiShieldUserLine className="w-full h-full text-[#FF5E5D]" />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  احراز هویت
                </h1>
              </div>
            </div>
            {/* end row  */}
            {/* row  */}
            <div className="w-full flex items-center justify-cetner gap-3 border-b-[1.5px] py-[13px] border-zinc-200/50">
              <div className="flex items-center gap-2.5 w-[50%]">
                <div className="w-[38px] h-[38px] rounded-full bg-[#ff5d5d28] flex items-center justify-center p-2.5">
                  <TbNotes className="w-full h-full text-[#FF5E5D] " />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  صدور فاکتور
                </h1>
              </div>
              <div className="flex items-center gap-2.5 w-[50%] ">
                <div className="w-[38px] h-[38px] rounded-full bg-[#ff5d5d28] flex items-center justify-center p-2.5">
                  <TfiHeadphoneAlt className="w-full h-full text-[#FF5E5D]" />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  {" "}
                  پشتیبانی پنج ماهه
                </h1>
              </div>
            </div>
            {/* end row  */}
          </div>
          <div className="px-8 w-full flex items-center justify-between mt-6" >
            <span className="text-md font-medium text-[#020056]">شروع از</span>
            <div className="flex items-end">
              <div className="flex items-end ">
                <span className="text-2xl font-bold text-[#FF5E5D]">
                  ۰۰۰,۰۰۰,
                </span>
                <span className="text-5xl font-semibold text-[#FF5E5D]">
                  ۳۵
                </span>
              </div>
              <span className="text-[#FF5E5D] font-medium text-sm">تومان</span>
            </div>
          </div>
            <button className="mt-7 w-[200px] h-[62px] flex items-center justify-center mx-auto text-white text-lg font-medium  rounded-[14px] bg-[#FF5E5D]">
              ثبت سفارش
            </button>
        </div>
        {/* end oprange  */}
        {/* purple  */}
        <div className="flex flex-col gap-1 w-[365px] sm:w-[400px] bg-white h-[910px] rounded-[70px] drop-shadow-sm ">
          <div className=" relative">
            <Image src={peP} className="w-[full] h-[200px] mt-[-10px]" />
            <h1 className="text-3xl font-bold text-white absolute top-[66px] left-[33%]">
              فروشگاهی
            </h1>
          </div>
          <div className="flex flex-col w-full gap-2 px-6 sm:px-8 md:px-6 xl:px-8">
            {/* row  */}
            <div className="w-full flex items-center justify-cetner gap-5 border-b-[1.5px] py-[13px] border-zinc-200/50">
              <div className="flex items-center  gap-2.5 w-[50%]">
                <div className="w-[38px] h-[38px] rounded-full bg-[#5D5AFF1F] flex items-center justify-center p-2">
                  <PiPlanetBold className="w-full h-full text-[#5D5AFF] " />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  دامنه اختصاصی
                </h1>
              </div>
              <div className="flex items-center gap-2.5 w-[50%]">
                <div className="w-[38px] h-[38px] rounded-full bg-[#5D5AFF1F] flex items-center justify-center p-2">
                  <TbServer2 className="w-full h-full text-[#5D5AFF]" />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  هاستینگ
                </h1>
              </div>
            </div>
            {/* end row  */}
            {/* row  */}
            <div className="w-full flex items-center justify-cetner gap-3 border-b-[1.5px] py-[13px] border-zinc-200/50">
              <div className="flex items-center gap-2.5 w-[50%]">
                <div className="w-[38px] h-[38px] rounded-full bg-[#5D5AFF1F] flex items-center justify-center p-2">
                  <TbPaint className="w-full h-full text-[#5D5AFF] " />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  طراحی اختصاصی
                </h1>
              </div>
              <div className="flex items-center gap-2.5 w-[50%] ">
                <div className="w-[38px] h-[38px] rounded-full bg-[#5D5AFF1F] flex items-center justify-center p-2">
                  <RiVipCrown2Line className="w-full h-full text-[#5D5AFF]" />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  پنل مدیریت
                </h1>
              </div>
            </div>
            {/* end row  */}
            {/* row  */}
            <div className="w-full flex items-center justify-cetner gap-3 border-b-[1.5px] py-[13px] border-zinc-200/50">
              <div className="flex items-center gap-2.5 w-[50%]">
                <div className="w-[38px] h-[38px] rounded-full bg-[#5D5AFF1F] flex items-center justify-center p-2.5">
                  <LuBookCopy className="w-full h-full text-[#5D5AFF] " />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  صفحات نامحدود
                </h1>
              </div>
              <div className="flex items-center gap-2.5 w-[50%] ">
                <div className="w-[38px] h-[38px] rounded-full bg-[#5D5AFF1F] flex items-center justify-center p-2">
                  <TbFilterEdit className="w-full h-full text-[#5D5AFF]" />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  فیلترینگ
                </h1>
              </div>
            </div>
            {/* end row  */}
            {/* row  */}
            <div className="w-full flex items-center justify-cetner gap-3 border-b-[1.5px] py-[13px] border-zinc-200/50">
              <div className="flex items-center gap-2.5 w-[50%]">
                <div className="w-[38px] h-[38px] rounded-full bg-[#5D5AFF1F] flex items-center justify-center p-2.5">
                  <TbBoxSeam className="w-full h-full text-[#5D5AFF] " />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  مدیریت محصول
                </h1>
              </div>
              <div className="flex items-center gap-2.5 w-[50%] ">
                <div className="w-[38px] h-[38px] rounded-full bg-[#5D5AFF1F] flex items-center justify-center p-2">
                  <PiMedal className="w-full h-full text-[#5D5AFF]" />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">سعو</h1>
              </div>
            </div>
            {/* end row  */}
            {/* row  */}
            <div className="w-full flex items-center justify-cetner gap-3 border-b-[1.5px] py-[13px] border-zinc-200/50">
              <div className="flex items-center gap-2.5 w-[50%]">
                <div className="w-[38px] h-[38px] rounded-full bg-[#5D5AFF1F] flex items-center justify-center p-2.5">
                  <TbUsersGroup className="w-full h-full text-[#5D5AFF] " />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  مدیریت کاربران
                </h1>
              </div>
              <div className="flex items-center gap-2.5 w-[50%] ">
                <div className="w-[38px] h-[38px] rounded-full bg-[#5D5AFF1F] flex items-center justify-center p-2">
                  <MdOutlinePayment className="w-full h-full text-[#5D5AFF]" />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  درگاه پرداخت
                </h1>
              </div>
            </div>
            {/* end row  */}
            {/* row  */}
            <div className="w-full flex items-center justify-cetner gap-3 border-b-[1.5px] py-[13px] border-zinc-200/50">
              <div className="flex items-center gap-2.5 w-[50%]">
                <div className="w-[38px] h-[38px] rounded-full bg-[#5D5AFF1F] flex items-center justify-center p-2.5">
                  <PiDevicesBold className="w-full h-full text-[#5D5AFF] " />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  طراحی واکنشگرا
                </h1>
              </div>
              <div className="flex items-center gap-2.5 w-[50%] ">
                <div className="w-[38px] h-[38px] rounded-full bg-[#5D5AFF1F] flex items-center justify-center p-2">
                  <RiShieldUserLine className="w-full h-full text-[#5D5AFF]" />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  احراز هویت
                </h1>
              </div>
            </div>
            {/* end row  */}
            {/* row  */}
            <div className="w-full flex items-center justify-cetner gap-3 border-b-[1.5px] py-[13px] border-zinc-200/50">
              <div className="flex items-center gap-2.5 w-[50%]">
                <div className="w-[38px] h-[38px] rounded-full bg-[#5D5AFF1F] flex items-center justify-center p-2.5">
                  <TbNotes className="w-full h-full text-[#5D5AFF] " />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  صدور فاکتور
                </h1>
              </div>
              <div className="flex items-center gap-2.5 w-[50%] ">
                <div className="w-[38px] h-[38px] rounded-full bg-[#5D5AFF1F] flex items-center justify-center p-2.5">
                  <TfiHeadphoneAlt className="w-full h-full text-[#5D5AFF]" />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  {" "}
                  پشتیبانی پنج ماهه
                </h1>
              </div>
            </div>
            {/* end row  */}
          </div>
          <div className="px-8 w-full flex items-center justify-between mt-6" >
            <span className="text-md font-medium text-[#020056]">شروع از</span>
            <div className="flex items-end">
              <div className="flex items-end ">
                <span className="text-2xl font-bold text-[#5D5AFF]">
                  ۰۰۰,۰۰۰,
                </span>
                <span className="text-5xl font-semibold text-[#5D5AFF]">
                  ۳۵
                </span>
              </div>
              <span className="text-[#5D5AFF] font-medium text-sm">تومان</span>
            </div>
          </div>
            <button className="mt-7 w-[200px] h-[62px] flex items-center justify-center mx-auto text-white text-lg font-medium  rounded-[14px] bg-[#5D5AFF]">
              ثبت سفارش
            </button>
        </div>
        {/* purple  */}
        {/* green  */}
        <div className="flex flex-col gap-1 w-[365px] sm:w-[400px] bg-white h-[910px] rounded-[70px] drop-shadow-sm ">
          <div className=" relative">
            <Image src={poG} className="w-[full] h-[200px] mt-[-10px]" />
            <h1 className="text-3xl font-bold text-white absolute top-[66px] left-[33%]">
              فروشگاهی
            </h1>
          </div>
          <div className="flex flex-col w-full gap-2 px-6 sm:px-8 md:px-6 xl:px-8">
            {/* row  */}
            <div className="w-full flex items-center justify-cetner gap-5 border-b-[1.5px] py-[13px] border-zinc-200/50">
              <div className="flex items-center  gap-2.5 w-[50%]">
                <div className="w-[38px] h-[38px] rounded-full bg-[#4ec88124] flex items-center justify-center p-2">
                  <PiPlanetBold className="w-full h-full text-[#4EC881] " />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  دامنه اختصاصی
                </h1>
              </div>
              <div className="flex items-center gap-2.5 w-[50%]">
                <div className="w-[38px] h-[38px] rounded-full bg-[#4ec88124] flex items-center justify-center p-2">
                  <TbServer2 className="w-full h-full text-[#4EC881]" />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  هاستینگ
                </h1>
              </div>
            </div>
            {/* end row  */}
            {/* row  */}
            <div className="w-full flex items-center justify-cetner gap-3 border-b-[1.5px] py-[13px] border-zinc-200/50">
              <div className="flex items-center gap-2.5 w-[50%]">
                <div className="w-[38px] h-[38px] rounded-full bg-[#4ec88124] flex items-center justify-center p-2">
                  <TbPaint className="w-full h-full text-[#4EC881] " />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  طراحی اختصاصی
                </h1>
              </div>
              <div className="flex items-center gap-2.5 w-[50%] ">
                <div className="w-[38px] h-[38px] rounded-full bg-[#4ec88124] flex items-center justify-center p-2">
                  <RiVipCrown2Line className="w-full h-full text-[#4EC881]" />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  پنل مدیریت
                </h1>
              </div>
            </div>
            {/* end row  */}
            {/* row  */}
            <div className="w-full flex items-center justify-cetner gap-3 border-b-[1.5px] py-[13px] border-zinc-200/50">
              <div className="flex items-center gap-2.5 w-[50%]">
                <div className="w-[38px] h-[38px] rounded-full bg-[#4ec88124] flex items-center justify-center p-2.5">
                  <LuBookCopy className="w-full h-full text-[#4EC881] " />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  صفحات نامحدود
                </h1>
              </div>
              <div className="flex items-center gap-2.5 w-[50%] ">
                <div className="w-[38px] h-[38px] rounded-full bg-[#4ec88124] flex items-center justify-center p-2">
                  <TbFilterEdit className="w-full h-full text-[#4EC881]" />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  فیلترینگ
                </h1>
              </div>
            </div>
            {/* end row  */}
            {/* row  */}
            <div className="w-full flex items-center justify-cetner gap-3 border-b-[1.5px] py-[13px] border-zinc-200/50">
              <div className="flex items-center gap-2.5 w-[50%]">
                <div className="w-[38px] h-[38px] rounded-full bg-[#4ec88124] flex items-center justify-center p-2.5">
                  <TbBoxSeam className="w-full h-full text-[#4EC881] " />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  مدیریت محصول
                </h1>
              </div>
              <div className="flex items-center gap-2.5 w-[50%] ">
                <div className="w-[38px] h-[38px] rounded-full bg-[#4ec88124] flex items-center justify-center p-2">
                  <PiMedal className="w-full h-full text-[#4EC881]" />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">سعو</h1>
              </div>
            </div>
            {/* end row  */}
            {/* row  */}
            <div className="w-full flex items-center justify-cetner gap-3 border-b-[1.5px] py-[13px] border-zinc-200/50">
              <div className="flex items-center gap-2.5 w-[50%]">
                <div className="w-[38px] h-[38px] rounded-full bg-[#4ec88124] flex items-center justify-center p-2.5">
                  <TbUsersGroup className="w-full h-full text-[#4EC881] " />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  مدیریت کاربران
                </h1>
              </div>
              <div className="flex items-center gap-2.5 w-[50%] ">
                <div className="w-[38px] h-[38px] rounded-full bg-[#4ec88124] flex items-center justify-center p-2">
                  <MdOutlinePayment className="w-full h-full text-[#4EC881]" />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  درگاه پرداخت
                </h1>
              </div>
            </div>
            {/* end row  */}
            {/* row  */}
            <div className="w-full flex items-center justify-cetner gap-3 border-b-[1.5px] py-[13px] border-zinc-200/50">
              <div className="flex items-center gap-2.5 w-[50%]">
                <div className="w-[38px] h-[38px] rounded-full bg-[#4ec88124] flex items-center justify-center p-2.5">
                  <PiDevicesBold className="w-full h-full text-[#4EC881] " />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  طراحی واکنشگرا
                </h1>
              </div>
              <div className="flex items-center gap-2.5 w-[50%] ">
                <div className="w-[38px] h-[38px] rounded-full bg-[#4ec88124] flex items-center justify-center p-2">
                  <RiShieldUserLine className="w-full h-full text-[#4EC881]" />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  احراز هویت
                </h1>
              </div>
            </div>
            {/* end row  */}
            {/* row  */}
            <div className="w-full flex items-center justify-cetner gap-3 border-b-[1.5px] py-[13px] border-zinc-200/50">
              <div className="flex items-center gap-2.5 w-[50%]">
                <div className="w-[38px] h-[38px] rounded-full bg-[#4ec88124] flex items-center justify-center p-2.5">
                  <TbNotes className="w-full h-full text-[#4EC881] " />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  صدور فاکتور
                </h1>
              </div>
              <div className="flex items-center gap-2.5 w-[50%] ">
                <div className="w-[38px] h-[38px] rounded-full bg-[#4ec88124] flex items-center justify-center p-2.5">
                  <TfiHeadphoneAlt className="w-full h-full text-[#4EC881]" />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  {" "}
                  پشتیبانی پنج ماهه
                </h1>
              </div>
            </div>
            {/* end row  */}
          </div>
          <div className="px-8 w-full flex items-center justify-between mt-6" >
            <span className="text-md font-medium text-[#020056]">شروع از</span>
            <div className="flex items-end">
              <div className="flex items-end ">
                <span className="text-2xl font-bold text-[#4EC881]">
                  ۰۰۰,۰۰۰,
                </span>
                <span className="text-5xl font-semibold text-[#4EC881]">
                  ۳۵
                </span>
              </div>
              <span className="text-[#4EC881] font-medium text-sm">تومان</span>
            </div>
          </div>
            <button className="mt-7 w-[200px] h-[62px] flex items-center justify-center mx-auto text-white text-lg font-medium  rounded-[14px] bg-[#4EC881]">
              ثبت سفارش
            </button>
        </div>
        {/* green  */}

      </div>
    </div>
  );
};

export default Plans;
