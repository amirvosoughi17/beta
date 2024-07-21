import React from "react";
import SparklesText from "@/components/magicui/sparkles-text";
import { BsArrowLeft } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const BlogsTitle = () => {
  return (
    <div className=" w-full flex  justify-center items-center px-3 md:px-6">
      <div className="flex flex-col w-full gap-3 md:gap-4 xl:gap-6 items-center">
        <SparklesText text="مقالات ویکسل" />
        <p className=" text-[14.5px] md:text-[15.5px] text-neutral-400 ">
        اخبار , مقالات  و  به‌روزرسانی‌ها برای آگاهی بیشتر شما
        </p>
      </div>
    </div>
  );
};

export default BlogsTitle;
