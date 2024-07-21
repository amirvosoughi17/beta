"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Button } from "@/components/ui/button";
import LoadingScreen from "@/components/LoadScreen";
import { HeroIcons } from "./Icons";
import CreateOrderForm from "@/components/forms/CreateOrderForm";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const HeroText = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex flex-col pb-7 gap-7 relative z-20 mt-[20px] xl:mt-[40px] lg:mt-[20px] px-[13px] lg:px-6 w-full lg:max-w-[100%]">
      <div className="gap-4  flex justify-start flex-col w-full items-start">
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-neutral-700/40 mt-5 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block"
        >
          <div
            className={cn(
              "group rounded-full border border-black/5 py-[3px] bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 px-2 md:px-4"
            )}
          >
            <AnimatedShinyText className="inline-flex font-normal items-center gap-4 justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span className=" text-xs">
                ✨ شبکه های اجتماعی ویکسل را دنبال کنید
              </span>
              <ArrowLeftIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </motion.button>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center max-w-[97%] text-neutral-200 flex-wrap lg:tracking-wide text-start sm:max-w-[80%] lg:max-w-[450px] font-medium text-[36px] leading-[60px] lg:leading-[70px] md:text-[30px] lg:text-[46px]"
        >
          طراحی سایت اختصاصی با بهترین تکنولوژی های روز با ویکسل
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-neutral-400 font-light text-[14.5px] lg:text-[18px] sm:max-w-[84%] max-w-[92%] text-start leading-7 tracking-wide lg:max-w-[85%] lg:leading-8"
        >
          طراحی سایت و اپلیکیشن اختصاصی , بهبود سعو سایت , خدمات دیجیتال
          مارکتینگ با مشاوره تخصصی
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-[97%] md:w-[90%] mt-3 lg:mt-8"
        >
          <div className="w-[100%] bg-neutral-900/30 flex flex-col gap-6 py-[8px] rounded-xl px-2 mx-auto">
            <div className="flex items-start md gap-4 flex-col  w-full justify-between ">
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
            </div>
            <div className="flex items-center justify-between mt-[-30px] w-full">
              <HeroIcons />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroText;
