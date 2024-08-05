import React from "react";
import Image from "next/image";
import Logo from "@/assets/navigation-logo.svg";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import Link from "next/link";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative flex md:h-[400px] lg:h-[450px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background py-10 md:p-20 md:shadow-xl">
      <div className="flex flex-col gap-[40px]  w-full">
        <div className="w-full flex flex-col md:flex-row items-center md:items-start  justify-center gap-[50px] md:justify-between  lg:px-[70px] py-5">
          <div className="flex flex-col items-start gap-2 md:mt-[-10px]">
            <Image src={Logo} alt="wixel" className="w-[130px]" width={100} />
            <div className="flex items-center gap-2 mr-[5px]">
              <Link
                href="https://www.instagram.com/wixel_org?igsh=MWc5eWVqaWluc2oxbQ=="
                target="_blank"
                className="w-[35px] h-[35px] flex items-center justify-center rounded-lg shadow-md bg-transparent border-[0.6px] border-neutral-700/60 p-1.5 hover:bg-neutral-700 duration-300 cursor-pointer"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                href="https://t.me/vosooughi"
                target="_blank"
                className="w-[35px] h-[35px] flex items-center justify-center rounded-lg shadow-md bg-transparent border-[0.6px] border-neutral-700/60 p-1.5 hover:bg-neutral-700 duration-300 cursor-pointer"
              >
                <FaTelegram size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/wixelorg"
                target="_blank"
                className="w-[35px] h-[35px] flex items-center justify-center rounded-lg shadow-md bg-transparent border-[0.6px] border-neutral-700/60 p-1.5 hover:bg-neutral-700 duration-300 cursor-pointer"
              >
                <ImLinkedin size={18} />
              </Link>
            </div>
          </div>
          <div className="flex items-start gap-[30px] lg:gap-[50px]">
            <div className="flex flex-col gap-6">
              <span className=" text-sm md:text-md  text-neutral-400 font-medium">
                خدمات
              </span>
              <div className="flex flex-col gap-3.5">
                <Link
                  href="/"
                  className=" text-[14px] md:text-[16px]  text-neutral-200 "
                >
                  طراحی سایت
                </Link>
                <Link
                  href="/"
                  className=" text-[14px] md:text-[16px]  text-neutral-200 "
                >
                  دیجیتال مارکتینگ
                </Link>
                <Link
                  href="/"
                  className=" text-[14px] md:text-[16px]  text-neutral-200 "
                >
                  {" "}
                  سعو سایت
                </Link>
                <Link
                  href="/"
                  className=" text-[14px] md:text-[16px]  text-neutral-200 "
                >
                  {" "}
                  گرافیک دیزایین
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <span className=" text-sm md:text-md  text-neutral-400 font-medium">
                طراحی سایت
              </span>
              <div className="flex flex-col gap-3.5">
                <Link
                  href="/"
                  className=" text-[14px] md:text-[16px]  text-neutral-200 "
                >
                  {" "}
                  سایت فروشگاهی
                </Link>
                <Link
                  href="/"
                  className=" text-[14px] md:text-[16px]  text-neutral-200 "
                >
                  {" "}
                  سایت اموزشی
                </Link>
                <Link
                  href="/"
                  className=" text-[14px] md:text-[16px]  text-neutral-200 "
                >
                  {" "}
                  سایت شرکتی
                </Link>
                <Link
                  href="/"
                  className=" text-[14px] md:text-[16px]  text-neutral-200 "
                >
                  {" "}
                  سایت شخصی
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <span className=" text-sm md:text-md  text-neutral-400 font-medium">
                تماس باما
              </span>
              <div className="flex flex-col gap-3.5">
                <Link
                  target="_blank"
                  href="https://t.me/vosooughi"
                  className=" text-[14px] md:text-[16px]  text-neutral-200 "
                >
                  تلگرام
                </Link>
                <Link
                  target="_blank"
                  href="/"
                  className=" text-[14px] md:text-[16px]  text-neutral-200 "
                >
                  واتساپ
                </Link>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/wixel_org?igsh=MWc5eWVqaWluc2oxbQ=="
                  className=" text-[14px] md:text-[16px]  text-neutral-200 "
                >
                  اینستاگرام
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/company/wixelorg"
                  className=" text-[14px] md:text-[16px]  text-neutral-200 "
                >
                  لینکدین
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:px-[70px] px-8 w-full flex flex-col gap-4 md:flex-row items-center justify-between">
          <span className=" flex items-center gap-1 text-neutral-400">
            <span className=" tracking-wide font-light">2025</span>
            <FaRegCopyright size={11} />
          </span>
          <div className="flex flex-col items-end gap-3">
            <h1 className=" text-lg text-center md:text-start  text-neutral-400">
            </h1>
            <div className="w-full flex items-center gap-3 z-20 min-w-[350px]">
              <button disabled className=" px-5 py-3 bg-indigo-500 rounded-lg">ارسال</button>
              <input disabled className="w-full bg-transparent text-sm backdrop-blur-lg border-[1px] border-neutral-700 rounded-lg px-3 py-[15px]" type="text" placeholder="انتقادات و پیشنهادات" />
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
