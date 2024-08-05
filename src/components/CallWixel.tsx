"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiSolidMessageDetail } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { SiTelegram } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
const CallWixel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" relative ">
      <div
        className={`w-[57px] h-[57px] rounded-full  ${
          isOpen ? "bg-indigo-500 text-white" : "bg-neutral-800/60 "
        } backdrop-blur-lg  border-[1.5px] border-neutral-600 shadow-lg`}
      >
        <button
          onClick={handleClick}
          className="flex w-full h-full items-center justify-center duration-300"
        >
          {isOpen ? (
            <IoClose size={23} className=" text-white" />
          ) : (
            <BiSolidMessageDetail size={23} className=" text-indigo-400" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="  absolute left-[70px] md:left-[85px] bottom-0  flex flex-col gap-2 md:gap-2.5">
          <Link href='https://t.me/vosooughi' target="_blank" className="w-[220px] h-[60px] px-3 rounded-[30px] rounded-bl bg-neutral-800/50 cursor-pointer hover:bg-neutral-900 backdrop-blur-xl border-neutral-500 border-[0.7px] flex items-center gap-3 duration-300">
            <div className="w-[40px] h-[40px] p-2 rounded-full bg-neutral-800/60 backdrop-blur-md border-[0.5px] flex items-center justify-center border-neutral-500/70">
              <Image
                src="/telegram.svg"
                alt="telegram"
                width={25}
                height={25}
              />
            </div>
            <h1 className=" text-sm font-medium tracking-wide text-neutral-200 hover:text-white duration-200">
              پشتیبانی تلگرام
            </h1>
          </Link>
          <Link href='https://www.instagram.com/wixel_org?igsh=MWc5eWVqaWluc2oxbQ==' target="_blank" className="w-[220px] h-[60px] px-3 rounded-[30px] rounded-se bg-neutral-800/50 cursor-pointer hover:bg-neutral-900  backdrop-blur-xl border-neutral-500 border-[0.7px] flex items-center gap-3 duration-300">
            <div className="w-[40px] h-[40px] p-2 rounded-full bg-neutral-800/60 backdrop-blur-md border-[0.5px] flex items-center justify-center border-neutral-500/70">
              <Image
                src="/instagram.png"
                alt="instagram"
                width={25}
                height={25}
              />
            </div>
            <h1 className=" text-sm font-medium tracking-wide text-neutral-200 hover:text-white duration-200">
              پیج اینستاگرام
            </h1>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CallWixel;
