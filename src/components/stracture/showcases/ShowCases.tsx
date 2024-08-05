"use client";
import React, { useState } from "react";
import ShowCaseCard from "./ShowCaseCard";
import { GoDotFill } from "react-icons/go";
import ShowCasesTitle from "./ShowCasesTitle";

const showcases = [
  {
    title: "اژانس دیجیتال مارکتینگ پلن",
    description:
      "اژانس دیجیتال مارکتینگ پلن با اراعه خدمات مارکتینگ , سعو , تولید متحوا",
    teches: ["react", "nodejs", "nextjs", "mongodb", "figma"],
    image: "/plan-showcase.jpg",
    category: "شرکتی",
    instagramHref: "https://www.instagram.com/p/C9vWZ1au8L6/?igsh=MWE3ODVwNndydWp2cg==",
    webHref: "/",
  },
  {
    title: "خدمات ویکیپدیا با ویکیتوری",
    description: " ویکیتوری , اولین اژانس اراعه دهنده ویکیپدیا فارسی",
    teches: ["react", "nodejs", "nextjs", "figma"],
    image: "/wikitori-showcase.jpg",
    category: "شرکتی",
    instagramHref: "https://www.instagram.com/p/C95D-GtovXD/?igsh=azdiYWM0eml2ZHJr",
    webHref: "/",
  },
  {
    title: "اژانس دیجیتال مارکتینگ نکست",
    description:
      "اژانس دیجیتال مارکتینگ پلن با اراعه خدمات مارکتینگ , سعو , تولید متحوا",
    teches: ["wordpress", "elementor", "figma"],
    image: "/next-showcase.jpg",
    category: "شرکتی",
    instagramHref: "https://www.instagram.com/p/C91ptwCoqQ3/?igsh=MXVvYnppcW5nbXB5OQ==",
    webHref: "/",
  },
];

const ShowCases = () => {
  const [selectedCategory, setSelectedCategory] = useState("همه");

  const filteredShowcases = showcases.filter(
    (showcase) =>
      selectedCategory === "همه" || showcase.category === selectedCategory
  );
  return (
    <section className="lg:w-[93%] max-w-[1440px] w-full mx-auto min-h-auto mb-[210px] flex flex-col py-[130px] gap-10 relative">
      <div className="flex flex-col  gap-6 md:gap-[30px]">
        <div className="flex flex-col lg:flex-row  gap-5 lg:justify-between w-full">
          <ShowCasesTitle />
          <div className="flex justify-start items-end  gap-2 sm:gap-4 mb-8 px-2 md:px-6 z-20">
            {["همه", "شرکتی", "فروشگاهی", "آموزشی", "شخصی"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`sm:px-4 sm:py-2 lg:py-3 lg:px-4 text-sm px-3 py-2 rounded-lg border-[1.3px] border-neutral-800 shadow-md  cursor-pointer duration-300 ${
                  selectedCategory === category
                    ? "bg-neutral-700 border-[2px] border-neutral-500   text-white"
                    : "bg-gradient-to-tr from-neutral-950 border-[0.5px] border-neutral-700 to-transparent text-gray-200 hover:bg-neu7"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-[-90px] items-center justify-center lg:mt-[-70px]   gap-4 sm:gap-8 lg:gap-0">
          {filteredShowcases.map((showcase, index) => (
            <ShowCaseCard
              key={index}
              title={showcase.title}
              description={showcase.description}
              teches={showcase.teches}
              image={showcase.image}
              InstagramHref={showcase.instagramHref}
              WebsiteHref={showcase.webHref}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowCases;
