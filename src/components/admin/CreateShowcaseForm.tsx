"use clinet";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { CreateShowcaseFormData } from "@/types/index";
import axiosInstance from "@/utils/axiosInstance";
import { Input } from "../ui/input";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { FiAlertTriangle } from "react-icons/fi";
import Spinner from "../Spinner";
import { ConfettiButton } from "../magicui/confetti";
import { FaElementor } from "react-icons/fa6";
import { FaWordpressSimple } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import { SiNestjs } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { PiFigmaLogo } from "react-icons/pi";
import { Button } from "../ui/button";

export const technologies = [
  {
    name: "typescript",
    icon: <BiLogoTypescript className=" text-blue-600" size={30} />,
  },
  {
    name: "javascript",
    icon: <RiJavascriptFill className=" text-amber-400" size={30} />,
  },
  { name: "React", icon: <FaReact className=" text-blue-500" size={30} /> },
  { name: "nextjs", icon: <RiNextjsFill className=" text-white" size={30} /> },
  { name: "Node.js", icon: <FaNodeJs className=" text-green-500" size={30} /> },
  {
    name: "mongodb",
    icon: <SiMongodb className=" text-green-500" size={30} />,
  },
  {
    name: "postgres",
    icon: <BiLogoPostgresql className="text-blue-500" size={30} />,
  },
  { name: "express", icon: <SiExpress className="text-white" size={30} /> },
  { name: "nestJs", icon: <SiNestjs className=" text-rose-600" size={30} /> },
  { name: "figma", icon: <PiFigmaLogo className=" text-white" size={30} /> },
  {
    name: "wordpress",
    icon: <FaWordpressSimple className="text-blue-500" size={30} />,
  },
  {
    name: "elementor",
    icon: <FaElementor className=" text-pink-600" size={30} />,
  },
];
const CreateShowcaseForm: React.FC = () => {
  const [selectedTeches, setSelectedTeches] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>("");
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateShowcaseFormData>();
  const handleTechSelect = (tech: string) => {
    setSelectedTeches((prevSelected) =>
      prevSelected.includes(tech)
        ? prevSelected.filter((t) => t !== tech)
        : [...prevSelected, tech]
    );
  };

  const onSubmit: SubmitHandler<CreateShowcaseFormData> = async (data) => {
    data.teches = selectedTeches;
    try {
      setIsSuccess(false);
      setIsLoading(true);
      const response = await axiosInstance.post("/api/showcases", data);
      setIsSuccess(true);
      setIsLoading(false);
    } catch (error: any) {
      setError(error.response?.data?.message || "مشکلی پیش امده امیر عزیز ");
      setIsSuccess(false);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-3">
      <div className=" flex flex-col gap-3">
        <label htmlFor="title">عنوان</label>
        <Input
          className=" px-3 py-2 bg-transparent border-[0.5px] border-neutral-700 rounded-lg text-neutral-300"
          id="title"
          {...register("title", { required: "Title is required" })}
        />
        {errors.title && <p>{errors.title.message}</p>}
      </div>

      <div className=" flex flex-col gap-3">
        <label htmlFor="description">توضیحات</label>
        <textarea
          rows={4}
          id="description"
          {...register("description", { required: "Description is required" })}
        />
        {errors.description && <p>{errors.description.message}</p>}
      </div>

      <div className=" flex w-full flex-col gap-3">
        <label htmlFor="teches">تکنولوژی ها</label>
        <div className="flex flex-wrap gap-3 w-full">
          {technologies.map((tech) => (
            <button
              type="button"
              key={tech.name}
              onClick={() => handleTechSelect(tech.name)}
              className={`w-[50px] relative h-[50px] flex items-center justify-center p-2  rounded-lg bg-neutral-950 ${
                selectedTeches.includes(tech.name) ? "bg-neutral-900" : ""
              }`}
            >
              {selectedTeches.includes(tech.name) && (
                <div className=" absolute w-full h-full rounded-lg bg-neutral-950/60 backdrop-blur-[1.5px] flex items-center justify-center ">
                  <MdOutlineDone className="  text-white" size={25} />
                </div>
              )}
              {tech.icon}
            </button>
          ))}
        </div>
        {errors.teches && <p>{errors.teches.message}</p>}
      </div>

      <div className=" flex flex-col gap-3">
        <label htmlFor="image">عکس </label>
        <Input
          className=" px-3 py-2 bg-transparent border-[0.5px] border-neutral-700 rounded-lg text-neutral-300"
          id="image"
          {...register("image", { required: "Image URL is required" })}
        />
        {errors.image && <p>{errors.image.message}</p>}
      </div>

      <div className=" flex flex-col gap-3">
        <label htmlFor="category">دسته بندی</label>
        <Input
          className=" px-3 py-2 bg-transparent border-[0.5px] border-neutral-700 rounded-lg text-neutral-300"
          id="category"
          {...register("category", { required: "Category is required" })}
        />
        {errors.category && <p>{errors.category.message}</p>}
      </div>

      <div className=" flex flex-col gap-3">
        <label htmlFor="instagramHref">لینک اینستاگرام</label>
        <Input
          className=" px-3 py-2 bg-transparent border-[0.5px] border-neutral-700 rounded-lg text-neutral-300"
          id="instagramHref"
          {...register("instagramHref", {
            required: "Instagram URL is required",
          })}
        />
        {errors.instagramHref && <p>{errors.instagramHref.message}</p>}
      </div>

      <div className=" flex flex-col gap-3">
        <label htmlFor="webHref">لینک وبسایت</label>
        <Input
          className=" px-3 py-2 bg-transparent border-[0.5px] border-neutral-700 rounded-lg text-neutral-300"
          id="webHref"
          {...register("webHref", { required: "Website URL is required" })}
        />
        {errors.webHref && <p>{errors.webHref.message}</p>}
      </div>

      <ConfettiButton
        disabled={isLoading}
        className={` w-full ${isSuccess && ""}`}
        type="submit"
        isSuccess={isSuccess}
      >
        {isLoading ? (
          <div className="flex w-full items-center justify-between">
            <Spinner />
            <span>لطفا صبر کنید ..</span>
            <span className="w-[25px]"></span>
          </div>
        ) : (
          <span>{!isSuccess && "ایجاد نمونه کار"}</span>
        )}
        {isSuccess && (
          <div className="flex w-full  items-center justify-between">
            <div className="w-[25px] h-[25px] rounded-full flex items-center justify-center  text-green-600">
              <MdOutlineDone size={25} />
            </div>
            <span className="text-[13px] lg:text-[14px] text-green-600">
              ابجاد نمونه کار با موفقیت انجام شد
            </span>
            <span className="w-[25px]"></span>
          </div>
        )}
      </ConfettiButton>
      {error.length > 0 && (
        <div className="flex flex-col gap-2 bg-red-500 p-4 rounded-lg">
          <FiAlertTriangle size={17} className="text-white" />
          {error?.map((message: any, index: any) => (
            <span key={index} className="text-white">
              {message}
            </span>
          ))}
        </div>
      )}
    </form>
  );
};

export default CreateShowcaseForm;
