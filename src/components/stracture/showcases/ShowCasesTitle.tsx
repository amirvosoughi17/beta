import React from "react";
import SparklesText from "@/components/magicui/sparkles-text";
import { BsArrowLeft } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const ShowCasesTitle = () => {
  return (
    <div className=" w-full flex  justify-cent items-start mt-[-20px] px-3 md:px-6">
      <div className="flex flex-col w-full gap-4 md:gap-4  items-start">
        <h1 className=" text-3xl text-white font-bold">نمونه کارها</h1>
        <p className=" text-[14.5px] md:text-[15.5px] text-neutral-400 ">
          نمونه کارهای اختصاصی تیم طراحی سایت ویکسل
        </p>
      </div>
    </div>
  );
};

export default ShowCasesTitle;
