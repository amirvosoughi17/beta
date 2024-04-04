import Image from "next/image";
import React from "react";
import logo from "@/assets/footer-logo.png";
import Link from "next/link";
import img from '@/assets/smn.png'
// reacticons 
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
const Footer = () => {
  return (
    <div>
      <div className="w-full min-h-[420px] bg-[#161D48] p-10 md:px-[100px] md:py-[100px]">
        <div className="flex flex-col gap-5">
          <div className="w-full flex flex-col md:flex-row gap-4 items-center justify-between py-4 border-b-[0.6px] border-zinc-500">
            <Image src={logo} alt="logo" className="w-[150px]" />
            <div className="flex items-center gap-5">
              <Link className="text-md text-zinc-300 duration-300 hover:text-white" href="/">خانه</Link>
              <Link className="text-md text-zinc-300 duration-300 hover:text-white" href="/">تعرفه ها</Link>
              <Link className="text-md text-zinc-300 duration-300 hover:text-white" href="/"> سایت فروشگاهی</Link>
              <Link className="text-md text-zinc-300 duration-300 hover:text-white" href="/">ارتباط باما</Link>
            </div>
            <div className="flex items-cente gap-3">
              <Link href='/' className="w-[35px] h-[35px] rounded-lg bg-[#bfbebe49] flex items-center justify-center">
                <span>

                <FaInstagram />
                </span>
              </Link>
              <Link href='/' className="w-[35px] h-[35px] rounded-lg bg-[#bfbebe49] flex items-center justify-center">
                <FaTelegram />
              </Link>
              <Link href='/' className="w-[35px] h-[35px] rounded-lg bg-[#bfbebe49] flex items-center justify-center">
                <IoLogoLinkedin />
              </Link>
            </div>
          </div>
          <div className="flex items-start gap-6 flex-col md:flex-row justify-between px-3 pt-5">
            <div className="flex flex-col gap-3">
              <h1 className="text-xl text-white font-medium">طراحی سایت اماده و کدنویسی شده  </h1>
              <p>طراحی سایت اختصاصی و اماده با ظاهری چشم نواز و با بروزترین متد های روز برای کسب و کار شما با تیم ویکسل</p>
            </div>
            <div className="flex gap-2">
              <Image 
              src={img}
              className="w-[90px] h-[120px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
