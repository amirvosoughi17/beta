import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BlogCard from "./BlogCard";

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
  return (
    <section className="flex flex-col items-center justify-center gap-10 mb-[200px]">
      <span>مقالات</span>
      <Carousel
        dir="ltr"
        opts={{
          align: "start",
        }}
        className="md:w-[80%] w-[75%]"
      >
        <CarouselContent>
          {blogs.map((blog, index) => (
            <CarouselItem key={index} className="md:basis-1/2 ">
              <BlogCard
                title={blog.title}
                description={blog.description}
                href={blog.href}
                badge={blog.badge}
                image={blog.image}
              />
              {index < blogs.length - 1 && (
                <div className="border-b border-gray-300 dark:border-gray-700 my-4 md:hidden"></div>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Blogs;
