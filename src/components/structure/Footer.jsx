import Image from "next/image";
import React from "react";
import logo from "@/assets/darklogo.svg";
import Link from "next/link";
// reacticons
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
const Footer = () => {
  return (
    <div>
      <div className="w-full min-h-[370px] bg-[#161D48] px-4 py-10 md:px-[100px] md:py-[100px]">
        <div className="flex flex-col gap-5">
          <div className="w-full flex flex-col md:flex-row gap-4 items-center justify-between pt-4 border-b-[0.6px] border-zinc-700 pb-7">
            <Image src={logo} alt="logo" className="w-[150px] mb-5 md:mb-0" />
            <div className="flex items-center gap-5">
              <Link
                className="text-md text-zinc-300 duration-300 hover:text-white"
                href="/"
              >
                خانه
              </Link>
              <Link
                className="text-md text-zinc-300 duration-300 hover:text-white"
                href="/"
              >
                تعرفه ها
              </Link>
              <Link
                className="text-md text-zinc-300 duration-300 hover:text-white"
                href="/"
              >
                {" "}
                سایت فروشگاهی
              </Link>
              <Link
                className="text-md text-zinc-300 duration-300 hover:text-white"
                href="/"
              >
                ارتباط باما
              </Link>
            </div>
            <div className="flex items-cente gap-3 mt-4">
              <Link
                href="https://www.instagram.com/wixel_org/?igsh=bzA5a2h2NWR6cGRh&utm_source=qr"
                target="_blank"
                className="w-[35px] h-[35px] rounded-lg bg-[#bfbebe49] flex items-center justify-center"
              >
                <span>
                  <FaInstagram />
                </span>
              </Link>
              <Link
                href="https://t.me/wixel_support"
                target="_blank"
                className="w-[35px] h-[35px] rounded-lg bg-[#bfbebe49] flex items-center justify-center"
              >
                <FaTelegram />
              </Link>
              <Link
                href="https://www.linkedin.com/in/%D9%88%DB%8C%DA%A9%D8%B3%D9%84-wixel-85a4b62aa/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-lg bg-[#bfbebe49] flex items-center justify-center"
              >
                <IoLogoLinkedin />
              </Link>
            </div>
          </div>
          <div className="flex items-start gap-6 flex-col md:flex-row justify-between px-3 pt-5">
            <div className="flex flex-col gap-3">
              <h1 className="text-xl text-white font-medium text-center md:text-start">
                طراحی سایت اماده و کدنویسی شده{" "}
              </h1>
              <p className="text-md text-zinc-300 text-center md:text-start">
                طراحی سایت اختصاصی و اماده با ظاهری چشم نواز و با بروزترین متد
                های روز برای کسب و کار شما با تیم ویکسل
              </p>
            </div>
            <div className="flex gap-2">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
