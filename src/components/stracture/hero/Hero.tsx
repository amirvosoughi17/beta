"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import { motion } from "framer-motion";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import LoadingScreen from "@/components/LoadScreen";
import HeroText from "./HeroText";
import { CgDarkMode } from "react-icons/cg";
import { TiStarOutline } from "react-icons/ti";
import { TbWorldCode } from "react-icons/tb";

const boxData = [
  {
    icon: <CgDarkMode />,
    title: "طراحی در دوحالت",
    description: "حالت تاریک و روشن برای تعامل بیشتر",
  },
  {
    icon: <TiStarOutline />,
    title: "طراحی اختصاصی",
    description: "طراحی سایت اختصاصی برای کسب و کار شما",
  },
  {
    icon: <TbWorldCode />,
    title: "سایت بین المللی",
    description: "طراحی سایت های چند زبانه",
  },
  {
    icon: <TbWorldCode />,
    title: "کدنویسی",
    description: "طراحی سایت های کاملا کدنویسی شده",
  },
];
const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const boxes = boxData.map((box, i) => (
    <div
      key={i}
      className="min-w-auto h-auto bg-transparent border-[0.7px] border-neutral-600 py-4 px-8 rounded-lg mx-4 my-2"
    >
      <div className="flex items-center gap-6">
        <div className="flex flex-col items-end ">
          <div className="text-lg text-neutral-200 mt-2">{box.title}</div>
          <div className="text-xs text-neutral-500 mt-1 font-light">
            {box.description}
          </div>
        </div>
        <div className=" p-2 border-[1px] border-neutral-700 shadow-lg rounded-lg bg-gradient-to-br from-neutral-950 to-neutral-800">
          <span className=" text-5xl">{box.icon}</span>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="">
        <div className=" flex flex-col  w-full mx-auto mb-[-60px] ">
          <div className="dark:bg-neutral-900/40 bg-white    relative   ">
            <DotPattern
              className={cn(
                "[mask-image:linear-gradient(to_bottom,black,transparent,transparent)]"
              )}
            />
            <div className="w-full flex flex-col max-w-[1440px] mx-auto">
              <div className="w-full h-auto ">
                <HeroText />
              </div>
              <div
              >
                <div className="w-full mt-[-65px] xs:mt-[-40px] md:mt-[-25px] lg:mt-[-50px]  relative h-auto">
                  <div className="w-[100px] sm:w-[150px] lg:w-[250px] xl:w-[450px] h-full bg-gradient-to-l from-neutral-900  to-transparent absolute right-0 z-40"></div>
                  <div className="w-[100px] sm:w-[150px] lg:w-[250px] xl:w-[450px] h-full bg-gradient-to-l to-neutral-900  from-transparent absolute left-0 z-40"></div>
                  <VelocityScroll
                    boxes={boxes}
                    default_velocity={5}
                    className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Hero;
