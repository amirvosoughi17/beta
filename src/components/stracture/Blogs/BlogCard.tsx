import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

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
      className=" w-[320px] h-[400px] bg-neutral-800 rounded-lg shadow-lg"

    >
      <div className="w-full h-full p-2 flex flex-col" dir="rtl">
        <div className=" relative w-full ">
          <Image
            src={image}
            alt="image"
            className="w-full  h-auto max-h-[200px]"
            width={300}
            height={200}
          />
          <Badge className=" absolute top-4 right-4">{badge}</Badge>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold text-neutral-200">{title}</h1>
          <p className=" text-sm font-light text-neutral-400 tracking-widest">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
