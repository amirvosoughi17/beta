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
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:justify-between px-5 lg:px-10 py-5">
        <Image src={Logo} alt="wixel" className="w-[130px]" width={100} />
        <div className="flex flex-col gap-4 md:gap-10 items-center  justify-center md:flex-row">
          <div className=" flex items-center gap-6">
            <Link
              href="/"
              className=" text-neutral-400 text-[15px] lg:text-[17px] hover:text-white duration-200"
            >
              خانه
            </Link>
            <Link
              href="/"
              className=" text-neutral-400 text-[15px] lg:text-[17px] hover:text-white duration-200"
            >
              خدمات{" "}
            </Link>
            <Link
              href="/"
              className=" text-neutral-400 text-[15px] lg:text-[17px] hover:text-white duration-200"
            >
              نمونه کارها
            </Link>
            <Link
              href="/"
              className=" text-neutral-400 text-[15px] lg:text-[17px] hover:text-white duration-200"
            >
              مقالات
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[35px] h-[35px] flex items-center justify-center rounded-lg shadow-md bg-transparent border-[0.6px] border-neutral-700/60 p-1">
              <FaInstagram size={22} />
            </div>
            <div className="w-[35px] h-[35px] flex items-center justify-center rounded-lg shadow-md bg-transparent border-[0.6px] border-neutral-700/60 p-1">
              <FaTelegram />
            </div>
            <div className="w-[35px] h-[35px] flex items-center justify-center rounded-lg shadow-md bg-transparent border-[0.6px] border-neutral-700/60 p-1">
              <ImLinkedin />
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
