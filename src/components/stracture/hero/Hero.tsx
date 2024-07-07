import React from "react";
import Parllax from "./Parllax";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <div className=" flex flex-col lg:flex-row w-full ">
      <div className="lg:h-[700px] h-[510px] w-full lg:w-[55%] dark:bg-neutral-950/40 bg-white  dark:bg-dot-white/[0.16] bg-dot-black/[0.2] relative flex justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-neutral-900 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
        <div className="w-full  ">
          <HeroText />
        </div>
      </div>
      <div className="w-full lg:w-[45%] lg:pl-10 ">
        <Parllax />
      </div>
    </div>
  );
};

export default Hero;
