import React from "react";
import TechBox from "./techbox/TechBox";
import Seo from "./SEObox/Seo";
import Responsive from "./Responsive";

const Grid = () => {
  return (
    <div className="mt-[200px] min-h-screen ">
      <div className="flex flex-col w-full h-full gap-5 lg:gap-8">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-8">
          <div className="w-[95%] mx-auto lg:w-[70%] bg-indigo-500 h-[330px]">
            
          </div>
          <div className="w-[95%] mx-auto lg:w-[30%] h-[330px]">
            <TechBox />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-8">
          <div className="w-[95%] mx-auto lg:w-[40%] h-[330px]">
          <Seo />
          </div>
          <div className="w-[95%] mx-autolg:w-[60%] h-[330px]">
            <Responsive />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
