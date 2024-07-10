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
        className="w-full  px-4 py-4 lg:py-6 flex flex-col justify-between  sm:h-[470px] h-[400px]  md:h-[380px] lg:h-[460px] xl:h-[490px]"
        dir="rtl"
      >
        <div className=" relative w-full flex flex-col gap-6 ">
          <Image
            src={image}
            alt="image"
            className="w-full rounded-xl "
            width={300}
            height={200}
          />
          <Badge className=" absolute top-4 right-4 bg-indigo-600 px-4 text-white">
            {badge}
          </Badge>
          <div className="flex flex-col gap-2 lg:gap-4">
            <h1 className="text-xl lg:text-2xl font-bold text-white tracking-wide">
              {title}
            </h1>
            <p className=" text-xs lg:text-sm max-w-[80%] text-neutral-400 tracking-wide leading-6">
              {description}
            </p>
          </div>
        </div>
        <Button className=" w-full flex items-center justify-between" variant='outline'>
          <span>مشاهده</span>
          <IoIosArrowRoundBack  size={20}/>
        </Button>
      </Card>
    </Link>
  );
};

export default BlogCard;
