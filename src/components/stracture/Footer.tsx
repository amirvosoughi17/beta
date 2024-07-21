import React from "react";
import Image from "next/image";
import Logo from "@/assets/navigation-logo.svg";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import Link from "next/link";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";

const Footer = () => {
  return (
    <div className="relative flex md:h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background py-10 md:p-20 md:shadow-xl">
      <div className="w-full flex flex-col md:flex-row items-center md:items-start  justify-center gap-[50px] md:justify-between  lg:px-[70px] py-5">
        <div className="flex flex-col items-start gap-2 md:mt-[-10px]">
          <Image src={Logo} alt="wixel" className="w-[130px]" width={100} />
          <div className="flex items-center gap-2 mr-[5px]">
            <div className="w-[35px] h-[35px] flex items-center justify-center rounded-lg shadow-md bg-transparent border-[0.6px] border-neutral-700/60 p-1.5 hover:bg-neutral-700 duration-300 cursor-pointer">
              <FaInstagram size={20} />
            </div>
            <div className="w-[35px] h-[35px] flex items-center justify-center rounded-lg shadow-md bg-transparent border-[0.6px] border-neutral-700/60 p-1.5 hover:bg-neutral-700 duration-300 cursor-pointer">
              <FaTelegram size={20} />
            </div>
            <div className="w-[35px] h-[35px] flex items-center justify-center rounded-lg shadow-md bg-transparent border-[0.6px] border-neutral-700/60 p-1.5 hover:bg-neutral-700 duration-300 cursor-pointer">
              <ImLinkedin size={18} />
            </div>
            <div className="w-[35px] h-[35px] flex items-center justify-center rounded-lg shadow-md bg-transparent border-[0.6px] border-neutral-700/60 p-1.5 hover:bg-neutral-700 duration-300 cursor-pointer">
              <FaTelegram size={20} />
            </div>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="flex flex-col gap-4">
            <span className=" text-md md:text-lg  text-neutral-200 font-medium">
              خدمات
            </span>
            <div className="flex flex-col gap-2.5">
              <Link
                href="/"
                className=" text-[14px] md:text-[15px]  text-neutral-400 "
              >
                طراحی سایت
              </Link>
              <Link
                href="/"
                className=" text-[14px] md:text-[15px]  text-neutral-400 "
              >
                دیجیتال مارکتینگ
              </Link>
              <Link
                href="/"
                className=" text-[14px] md:text-[15px]  text-neutral-400 "
              >
                {" "}
                سعو سایت
              </Link>
              <Link
                href="/"
                className=" text-[14px] md:text-[15px]  text-neutral-400 "
              >
                {" "}
                گرافیک دیزایین
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className=" text-md md:text-lg  text-neutral-200 font-medium">
              طراحی سایت
            </span>
            <div className="flex flex-col gap-2.5">
              <Link
                href="/"
                className=" text-[14px] md:text-[15px]  text-neutral-400 "
              >
                {" "}
                سایت فروشگاهی
              </Link>
              <Link
                href="/"
                className=" text-[14px] md:text-[15px]  text-neutral-400 "
              >
                {" "}
                سایت اموزشی
              </Link>
              <Link
                href="/"
                className=" text-[14px] md:text-[15px]  text-neutral-400 "
              >
                {" "}
                سایت شرکتی
              </Link>
              <Link
                href="/"
                className=" text-[14px] md:text-[15px]  text-neutral-400 "
              >
                {" "}
                سایت شخصی
              </Link>
            </div>
          </div>
        </div>
      </div>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
    </div>
  );
};

export default Footer;
