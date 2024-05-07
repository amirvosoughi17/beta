"use client";
import React, { useState } from "react";
import Image from "next/image";
import peP from "@/assets/pur-p.svg";
import poG from "@/assets/green-p.svg";
import poO from "@/assets/red-p.svg";
// react icons
import { PiPlanetBold } from "react-icons/pi";
import { TbServer2 } from "react-icons/tb";
import { TbPaint } from "react-icons/tb";
import { RiVipCrown2Line } from "react-icons/ri";
import { LuBookCopy } from "react-icons/lu";
import { FaBarcode } from "react-icons/fa";
import { TbFilterEdit } from "react-icons/tb";
import { PiMedal } from "react-icons/pi";
import { FiEdit } from "react-icons/fi";
import { TbBoxSeam } from "react-icons/tb";
import { TbUsersGroup } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { PiDevicesBold } from "react-icons/pi";
import { RiShieldUserLine } from "react-icons/ri";
import { TbNotes } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdOutlineComment } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { BsBasket } from "react-icons/bs";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import logo from "@/assets/navlogo.svg";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import Link from "next/link";
import { IoClose } from "react-icons/io5";

const Plans = () => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen2 = () => {
    setOpen(true);
  };

  const handleClose2 = () => {
    setOpen(false);
  };
  const handleClickOpen3 = () => {
    setOpen(true);
  };

  const handleClose3 = () => {
    setOpen(false);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-cnter gap-[70px] mt-[100px] min-h-screen mb-[205px]">
      <div className="flex flex-col gap-1.5 items-center">
        <h1 className="text-[26px] md:text-2xl font-semibold text-[#364163] ">
          تعرفه های ویکسل
        </h1>
        <p className="text-[14px] md:text-lg  text-[#3641637d]">
          قیمت طراحی سایت و فروشگاه اینترنتی
        </p>
        <span className="w-[70px] md:w-[90px] h-[8px] md:h-[9px] bg-[#5D5AFF] rounded-full mt-3"></span>
      </div>
      <div className="flex gap-6 w-full flex-col lg:flex-row items-center lg:items-start justify-center">
       
        {/* purple  */}
        <div className="flex flex-col gap-1 w-[365px] sm:w-[400px] bg-white h-[970px] rounded-[70px] drop-shadow-sm ">
          <div className=" relative">
            <Image src={peP} alt="pep" width={600} height={200} className="w-[full] h-[200px] mt-[-10px]" />
            <h1 className="text-3xl font-bold text-white absolute top-[66px] left-[36%]">
              آموزشی
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
                  <MdOutlineComment className="w-full h-full text-[#5D5AFF]" />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  سیستم نظرات 
                </h1>
              </div>
            </div>
            {/* end row  */}
            {/* row  */}
            <div className="w-full flex items-center justify-cetner gap-3 border-b-[1.5px] py-[13px] border-zinc-200/50">
              <div className="flex items-center gap-2.5 w-[50%]">
                <div className="w-[38px] h-[38px] rounded-full bg-[#5D5AFF1F] flex items-center justify-center p-2.5">
                  <IoMdNotificationsOutline className="w-full h-full text-[#5D5AFF] " />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  سیستم اطلاع رسانی
                </h1>
              </div>
              <div className="flex items-center gap-2.5 w-[50%] ">
                <div className="w-[38px] h-[38px] rounded-full bg-[#5D5AFF1F] flex items-center justify-center p-2.5">
                  <MdOutlineStickyNote2 className="w-full h-full text-[#5D5AFF]" />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  بلاگ
                </h1>
              </div>
            </div>
            {/* end row  */}
            {/* row  */}
            <div className="w-full flex items-center justify-cetner gap-3 border-b-[1.5px] py-[13px] border-zinc-200/50">
              <div className="flex items-center gap-2.5 w-[50%]">
                <div className="w-[38px] h-[38px] rounded-full bg-[#5D5AFF1F] flex items-center justify-center p-2.5">
                  <RiAdminLine className="w-full h-full text-[#5D5AFF] " />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  مدیریت دوره
                </h1>
              </div>
              <div className="flex items-center gap-2.5 w-[50%] ">
                <div className="w-[38px] h-[38px] rounded-full bg-[#5D5AFF1F] flex items-center justify-center p-2.5">
                  <TfiHeadphoneAlt className="w-full h-full text-[#5D5AFF]" />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  پشتیبانی رایگان
                </h1>
              </div>
            </div>
            {/* end row  */}
          </div>
          <button
            onClick={handleClickOpen2}
            className="mt-7 w-[200px] h-[62px] flex items-center justify-center mx-auto text-white text-lg font-medium  rounded-[14px] bg-[#5D5AFF]"
          >
            ثبت سفارش
          </button>
          <Dialog
            open={open2}
            onClose={handleClose2}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <div className="flex flex-col gap-4">
                <div className="w-full items-center justify-between">
                  <Image src={logo} alt="logo" width={150} height={50} />
                  <button onClick={handleClose2}></button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        {/* purple  */}
         {/* orange  */}
         <div className="flex flex-col gap-1 w-[365px] sm:w-[400px] bg-white h-[910px] rounded-[70px] drop-shadow-sm ">
          <div className=" relative">
            <Image alt="poo" width={500} height={200} src={poO} className="w-[full] h-[200px] mt-[-10px]" />
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
                  <BsBasket className="w-full h-full text-[#FF5E5D]" />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  سبد خرید
                </h1>
              </div>
            </div>
            {/* end row  */}
            {/* row  */}
            <div className="w-full flex items-center justify-cetner gap-3 border-b-[1.5px] py-[13px] border-zinc-200/50">
              <div className="flex items-center gap-2.5 w-[50%]">
                <div className="w-[38px] h-[38px] rounded-full bg-[#ff5d5d28] flex items-center justify-center p-2.5">
                  <FaBarcode className="w-full h-full text-[#FF5E5D] " />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  سیستم کد تخفیف
                </h1>
              </div>
              <div className="flex items-center gap-2.5 w-[50%] ">
                <div className="w-[38px] h-[38px] rounded-full bg-[#ff5d5d28] flex items-center justify-center p-2.5">
                  <TfiHeadphoneAlt className="w-full h-full text-[#FF5E5D]" />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  پشتیبانی  
                </h1>
              </div>
            </div>
            {/* end row  */}
          </div>
          <button
            onClick={handleClickOpen}
            className="mt-7 w-[200px] h-[62px] flex items-center justify-center mx-auto text-white text-lg font-medium  rounded-[14px] bg-[#FF5E5D]"
          >
            ثبت سفارش
          </button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className="w-[95%] mx-auto rounded-lg"
          >
            <DialogContent className="sm:w-[450px] ">
              <div className="flex flex-col gap-4">
                <div className="w-full items-center flex justify-between">
                  <Image src={logo} alt="logo" width={130} height={50} />
                  <button onClick={handleClose}>
                    <IoClose  size={27}/>
                  </button>
                </div>
                <div className="flex flex-col gap-3">
                  <h1 className="text-lg font-medium text-gray-700">
                    ارتباط باما از طریق شبکه های اجتماعی :
                  </h1>
                  <div className="flex items-center justify-end gap-2">
                    <Link href="">
                      <FaWhatsapp size={30} className="text-green-500" />
                    </Link>
                    <Link href="https://t.me/wixel_support">
                      <FaTelegram size={30} className="text-blue-500" />
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <h1 className="text-lg font-medium text-gray-700">
                    شماره تماس :
                  </h1>
                  <div className="flex items-end flex-col justify-end gap-2">
                    <div className="flex  items-center gap-2">
                      <span className="text-gray-600">09391167835</span>
                      <LuPhone size={18} className="text-gray-600" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">09024927209</span>
                      <LuPhone size={18} className="text-gray-600" />
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        {/* end oprange  */}
        {/* green  */}
        <div className="flex flex-col gap-1 w-[365px] sm:w-[400px] bg-white h-[780px] rounded-[70px] drop-shadow-sm ">
          <div className=" relative">
            <Image alt="poG" width={500} height={200} src={poG} className="w-[full] h-[200px] mt-[-10px]" />
            <h1 className="text-3xl font-bold text-white absolute top-[66px] left-[38%]">
              شرکتی
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
                  <MdOutlinePhoneEnabled className="w-full h-full text-[#4EC881] " />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  فرم تماس
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
                  فرم ایجاد همکاری
                </h1>
              </div>
              <div className="flex items-center gap-2.5 w-[50%]">
                <div className="w-[38px] h-[38px] rounded-full bg-[#4ec88124] flex items-center justify-center p-2.5">
                  <PiDevicesBold className="w-full h-full text-[#4EC881] " />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  طراحی واکنشگرا
                </h1>
              </div>
            </div>
            {/* end row  */}
            {/* row  */}
            <div className="w-full flex items-center justify-cetner gap-3 border-b-[1.5px] py-[13px] border-zinc-200/50">
              <div className="flex items-center gap-2.5 w-[50%]">
                <div className="w-[38px] h-[38px] rounded-full bg-[#4ec88124] flex items-center justify-center p-2.5">
                  <FiEdit className="w-full h-full text-[#4EC881] " />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  مدیریت نمونه کارها
                </h1>
              </div>
              <div className="flex items-center gap-2.5 w-[50%] ">
                <div className="w-[38px] h-[38px] rounded-full bg-[#4ec88124] flex items-center justify-center p-2.5">
                  <TfiHeadphoneAlt className="w-full h-full text-[#4EC881]" />
                </div>
                <h1 className="text-[14px]  font-medium text-[#020056]">
                  پشتیبانی  
                </h1>
              </div>
            </div>
            {/* end row  */}
            
          </div>
          <button
            onClick={handleClickOpen3}
            className="mt-7 w-[200px] h-[62px] flex items-center justify-center mx-auto text-white text-lg font-medium  rounded-[14px] bg-[#4EC881]"
          >
            ثبت سفارش
          </button>
          <Dialog
            open={open3}
            onClose={handleClose3}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title"></DialogTitle>
            <DialogContent>
              <div className="flex flex-col gap-4">
                <div className="w-full items-center justify-between">
                  <Image src={logo} alt="logo" width={150} height={50} />
                  <button onClick={handleClose3}></button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        {/* green  */}
      </div>
    </div>
  );
};

export default Plans;
