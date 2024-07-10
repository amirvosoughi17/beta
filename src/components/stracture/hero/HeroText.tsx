"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaTelegram, FaLinkedin } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { MdArrowBackIos } from "react-icons/md";
import LoadingScreen from "@/components/LoadScreen";
import { HeroIcons } from "./Icons";

const HeroText = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen setIsLoading={setIsLoading} />}
      {!isLoading && (
        <div className="flex flex-col gap-7 relative z-20 mt-[10px] lg:mt-[20px] px-[13px] lg:px-6 w-full lg:max-w-[100%]">
          <div className="gap-4 px-4 flex justify-start flex-col w-full items-start">
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-neutral-700/40 mt-5 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block"
            >
              <div className="bg-neutral-900/80 rounded-full h-8 px-4 w-[280px] flex items-center justify-center gap-2">
                <span className="text-gradient font-light">
                  طراحی وبسایت و اپلیکیشن کدنویسی شده
                </span>
                <IoIosArrowRoundBack size={16} className="text-neutral-400" />
              </div>
            </motion.button>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center max-w-[99%] text-neutral-200 flex-wrap lg:tracking-wide text-start sm:max-w-[80%] lg:max-w-[450px] font-medium text-[36px] leading-[60px] lg:leading-[70px] md:text-[30px] lg:text-[46px]"
            >
              طراحی سایت اختصاصی با بهترین تکنولوژی های روز با ویکسل
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-neutral-400 font-light text-[14.5px] lg:text-[18px] sm:max-w-[84%] max-w-[92%] text-start leading-7 tracking-wide lg:max-w-[85%] lg:leading-8"
            >
              طراحی سایت و اپلیکیشن اختصاصی , بهبود سعو سایت , خدمات دیجیتال
              مارکتینگ با مشاوره تخصصی
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-[97%] md:w-[90%] mt-3 lg:mt-8"
            >
              <div className="w-[100%] bg-neutral-900/80  backdrop-blur-md f py-[8px] rounded-xl px-2 mx-auto">
                <div className="flex items-start gap-3 md:items-center flex-col md:flex-row w-full justify-between ">
                  <div className="flex items-center gap-3">
                    <Button className="w-[135px] flex items-center gap-2 bg-indigo-400">
                      <span>ثبت سفارش</span>
                      <MdArrowBackIos size={12} />
                    </Button>
                    <Button
                      variant="secondary"
                      className="bg-transparent hidden md:flex"
                    >
                      <span>نمونه کارها</span>
                    </Button>
                  </div>
                  <div className="flex items-center justify-between mt-[-30px] w-full">
                    <span></span>
                    <HeroIcons />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroText;
