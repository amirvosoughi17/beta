import React from "react";
import Parllax from "./Parllax";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <div className=" flex flex-col lg:flex-row w-full ">
      <div className=" w-full flex flex-col lg:flex-row  dark:bg-neutral-900/40 bg-white  dark:bg-dot-white/[0.16] bg-dot-black/[1.7] relative ">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-neutral-900 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
        <div className="w-full h-[470px] ">
          <HeroText />
        </div>
        <div className="w-full  lg:pl-10 ">
          <Parllax />
        </div>
      </div>
    </div>
  );
};

export default Hero;
