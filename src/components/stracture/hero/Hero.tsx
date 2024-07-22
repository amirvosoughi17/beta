"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import Parllax from "./Parllax";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import LoadingScreen from "@/components/LoadScreen";
import HeroText from "./HeroText";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const boxes = Array.from({ length: 3 }, (_, i) => (
    <div
      key={i}
      className=" md:min-w-[280px] md:h-[130px] min-w-[200px] h-[70px] flex items-center justify-center bg-transparent border-[0.7px] border-neutral-600 p-2 rounded-lg mx-4 my-2"
    >
      Box {i + 1}
    </div>
  ));

  return (
    <div className="">
      {isLoading && <LoadingScreen setIsLoading={setIsLoading} />}
      {!isLoading && (
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
              <div className="w-full mt-[-50px]  relative h-auto">
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
      )}
    </div>
  );
};

export default Hero;
