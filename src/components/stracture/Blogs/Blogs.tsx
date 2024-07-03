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
    <div className="flex flex-col items-center justify-center gap-10">
      <span>مقالات</span>
      <Carousel
        dir="ltr"
        opts={{
          align: "start",
        }}
        className="w-full "
      >
        <CarouselContent className="flex gap-4 w-full">
          {blogs.map((blog, index) => (
            <div key={index} className="w-full md:w-1/3 px-2">
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
            </div>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Blogs;
