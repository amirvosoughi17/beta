"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import Parllax from "./Parllax";
import LoadingScreen from "@/components/LoadScreen";
import HeroText from "./HeroText";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="">
      {isLoading && <LoadingScreen setIsLoading={setIsLoading} />}
      {!isLoading && (
        <div className=" flex flex-col lg:flex-row w-full mx-auto mb-[-60px] ">
          <div className="w-full flex flex-col lg:flex-row  dark:bg-neutral-900/40 bg-white    relative   ">
            <DotPattern
              className={cn(
                "[mask-image:linear-gradient(to_bottom_left,black,transparent,transparent)]"
              )}
            />
            <div className="w-full h-auto ">
              <HeroText />
            </div>
            <div className="w-full  lg:pl-10 ">
              <Parllax />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
