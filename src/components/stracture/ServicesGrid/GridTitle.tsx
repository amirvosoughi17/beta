import React from "react";
import SparklesText from "@/components/magicui/sparkles-text";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";

const GridTitle = () => {
  return (
    <div className="w-full   hidden" dir="rtl">
      <div className=" w-full flex f justify-start items-start px-4">
        <div className="flex flex-col gap-3 items-start">
          <SparklesText text="خدمات ویکسل" />
          <Link href="" className=" flex  items-center gap-2 justify-center">
            <span className=" text-neutral-400 text-sm">
              مشاهده خدمات و سرویس های بیشتر ویکسل
            </span>
            <BsArrowLeft size={12} className="text-neutral-400 text-sm" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GridTitle;
