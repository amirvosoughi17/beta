import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IoIosArrowRoundBack } from "react-icons/io";
interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  badge: string;
  href: string;
}
const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  badge,
  href,
  image,
}) => {
  return (
    <Link
      href={href}
      className="md:basis-1/2  w-full h-full  rounded-lg shadow-lg"
    >
      <Card
        className="w-full bg-transparent border border-none px-4 py-4 lg:py-6 flex flex-col justify-between  sm:h-[470px] h-[400px]  md:h-[380px] lg:h-[460px] xl:h-[490px]"
        dir="rtl"
      >
        <div className=" relative w-full flex flex-col gap-4 lg:gap-6 ">
          <Image
            src={image}
            alt="image"
            className="w-full rounded-xl min-h-[200px] max-h-[250px] object-cover "
            width={300}
            height={200}
          />
          <Badge className=" absolute top-4 py-1.5 px-5 right-4 bg-gradient-to-r from-neutral-900 backdrop-blur-lg to-neutral-700/70 border-[0.7px] border-neutral-700  text-neutral-300">
            {badge}
          </Badge>
          <div className="flex flex-col gap-2 lg:gap-3">
            <h1 className="text-[20px] md:text-2xl mt-2 md:mt-0 lg:text-[24px] font-bold text-white tracking-wide">
              {title}
            </h1>
            <p className=" text-[13px] lg:text-sm max-w-[95%] md:max-w-[85%] lg:max-w-[88.5%] text-neutral-400 md:tracking-wide leading-7 lg:leading-[29px]">
              {description}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default BlogCard;
