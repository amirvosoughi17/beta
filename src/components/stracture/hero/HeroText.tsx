"use client";
import React, { useState, useEffect , useRef} from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { HeroIcons } from "./Icons";
import CreateOrderForm from "@/components/forms/CreateOrderForm";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

const HeroText = () => {
  const [isBlackScreenVisible, setIsBlackScreenVisible] = useState(true);
  const buttonRef:any = useRef(null);
  const headingRef:any = useRef(null);
  const paragraphRef:any = useRef(null);
  const containerRef:any = useRef(null);

  useEffect(() => {
    if (buttonRef.current)
      buttonRef.current.classList.add("fade-in-up", "delay-1");
    if (headingRef.current)
      headingRef.current.classList.add("fade-in-up", "delay-2");
    if (paragraphRef.current)
      paragraphRef.current.classList.add("fade-in-up", "delay-3");
    if (containerRef.current)
      containerRef.current.classList.add("fade-in-up", "delay-4");
  }, []);

  return (
    <div className="flex flex-col pb-7 gap-7 relative z-20 mt-[20px] xl:mt-[20px] lg:mt-[20px] px-[13px] lg:px-6 w-full lg:max-w-[100%]">
      <div className="gap-4  flex justify-center flex-col w-full items-center">
        <button  ref={buttonRef} className="bg-neutral-700/40 button-animation mt-5 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
          <div
            className={cn(
              "group rounded-full border  border-black/5 py-[3px] bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 px-2 md:px-4"
            )}
          >
            <AnimatedShinyText className="  inline-flex font-normal items-center gap-4 justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span className=" text-xs">
                ✨ شبکه های اجتماعی ویکسل را دنبال کنید
              </span>
              <ArrowLeftIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </button>
        <h1  ref={headingRef} className="flex text-animation items-center max-w-[380px] xs:max-w-[360px] sm:max-w-[500px] text-neutral-200 flex-wrap lg:tracking-wide text-center lg:max-w-[700px] font-semibold text-[26px] sm:text-[35px] leading-[45px] sm:leading-[55px] lg:leading-[70px]  lg:text-[46px]">
          طراحی سایت اختصاصی با بهترین تکنولوژی های روز با ویکسل
        </h1>

        <p  ref={paragraphRef} className="text-neutral-500 text-animation2 font-light text-[14.5px] md:text-[15px] lg:text-[17px] sm:max-w-[450px] max-w-[360px] text-center leading-7 tracking-wide lg:max-w-[36%] xl:max-w-[35%] 2xl:max-w-[33%]  lg:leading-8">
          طراحی سایت و اپلیکیشن اختصاصی , بهبود سعو سایت , خدمات دیجیتال
          مارکتینگ با مشاوره تخصصی
        </p>

        <div  ref={containerRef} className="w-[97%] md:w-[90%]">
          <div className="w-full  bg-neutral-900/30 flex flex-col gap-6 py-[8px] rounded-xl px-2 mx-auto">
            <div className="flex  items-center  gap-4 flex-col lg:flex-row mx-auto  w-full lg:w-[60%] xl:w-[50%] justify-between ">
              <div className="flex items-center gap-3">
                <CreateOrderForm />
                <Link
                  href="/#showcases"
                  className="bg-neutral-800 flex items-center gap-3 border py-[11px] px-4  rounded-lg "
                >
                  <span className=" text-sm">نمونه کارها</span>
                  <IoIosArrowRoundBack />
                </Link>
              </div>
              <div className="flex button-animation items-center   mt-[-30px]">
                <HeroIcons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
