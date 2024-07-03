import React from "react";
import ParLine from "./ParLine";
import Image from "next/image";
import wixleLogo from "@/assets/white-logo.svg";
const TechBox = () => {
  return (
    <div className="w-full h-full relative bg-neutral-800/50 drop-shadow-lg  flex items-center justify-center shadow-lg border-[1.2px] border-neutral-700/60  rounded-xl ">
      <div className="w-full h-[100px] bg-gradient-to-b to-neutral-900  from-transparent absolute bottom-0 z-40"></div>
      <div className="w-full h-[100px] bg-gradient-to-b to-transparent  from-neutral-900 absolute top-0 z-40"></div>
      <div className="w-full h-full flex items-center justify-center flex-col">
        <div className="w-full h-[100%] z-10 mx-auto ">
          <ParLine />
        </div>
        <div className=" absolute z-50 w-[105px] h-[105px] bg-gray-800/40 shadow-xl rounded-xl backdrop-blur-2xl">
          <div className=" w-[105px] h-[105px] bg-neutral-800/70 rounded-xl backdrop-blur-md flex items-center justify-center">
            <Image src={wixleLogo} alt="wixel" className="w-[55px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechBox;
