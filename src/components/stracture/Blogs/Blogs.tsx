"use client";
import React from "react";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import BlogCard from "./BlogCard";
import BlogsTitle from "./BlogsTitle";

const blogs = [
  {
    title: "اهمیت سعو سایت",
    description:
      "اژانس دیجیتال مارکتینگ پلن با اراعه خدمات مارکتینگ , سعو , تولید متحوا",
    badge: "سعو",
    href: "/blogs/seo",
    image: "/showcase.png",
  },
  {
    title: "اهمیت سعو سایت",
    description:
      "اژانس دیجیتال مارکتینگ پلن با اراعه خدمات مارکتینگ , سعو , تولید متحوا",
    badge: "سعو",
    href: "/blogs/seo",
    image: "/showcase.png",
  },
  {
    title: "اهمیت سعو سایت",
    description:
      "اژانس دیجیتال مارکتینگ پلن با اراعه خدمات مارکتینگ , سعو , تولید متحوا",
    badge: "سعو",
    href: "/blogs/seo",
    image: "/showcase.png",
  },
  {
    title: "اهمیت سعو سایت",
    description:
      "اژانس دیجیتال مارکتینگ پلن با اراعه خدمات مارکتینگ , سعو , تولید متحوا",
    badge: "سعو",
    href: "/blogs/seo",
    image: "/showcase.png",
  },
  {
    title: "اهمیت سعو سایت",
    description:
      "اژانس دیجیتال مارکتینگ پلن با اراعه خدمات مارکتینگ , سعو , تولید متحوا",
    badge: "سعو",
    href: "/blogs/seo",
    image: "/showcase.png",
  },
];
const Blogs = () => {
  const plugin = useRef(Autoplay({ delay: 1500, stopOnInteraction: true }));

  return (
    <section className="flex flex-col items-center justify-center gap-10 mb-[200px]">
      <BlogsTitle />
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        dir="ltr"
        opts={{
          align: "start",
        }}
        className="md:w-[80%] w-[90%]"
      >
        <CarouselContent>
          {blogs.map((blog, index) => (
            <CarouselItem key={index} className="md:basis-1/2 py-3 md:px-4">
              <BlogCard
                key={index}
                title={blog.title}
                description={blog.description}
                href={blog.href}
                badge={blog.badge}
                image={blog.image}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className=" w-[40px] h-[40px]  hidden md:flex bg-neutral-950 text-white" />
        <CarouselNext className=" w-[40px] h-[40px]  hidden md:flex bg-neutral-950 text-white" />
      </Carousel>
    </section>
  );
};

export default Blogs;
