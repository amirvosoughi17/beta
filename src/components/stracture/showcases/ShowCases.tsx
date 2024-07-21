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
    image: "/showcase.png",
    category: "شرکتی",
    instagramHref : "instagram.com" ,
    webHref : "www.planagency.ir"
  },
  {
    title: "اژانس نکست",
    description:
      "اژانس دیجیتال مارکتینگ پلن با اراعه خدمات مارکتینگ , سعو , تولید متحوا",
    teches: ["wordpress", "figma"],
    image: "/showcase.png",
    category: "شرکتی",
    instagramHref : "instagram.com",
    webHref : "www.planagency.ir"
  },
  {
    title: "اژانس دیجیتال مارکتینگ پلن",
    description:
      "اژانس دیجیتال مارکتینگ پلن با اراعه خدمات مارکتینگ , سعو , تولید متحوا",
    teches: ["react", "nodejs", "nextjs", "mongodb", "figma"],
    image: "/showcase.png",
    category: "شرکتی",
    instagramHref : "instagram.com",
    webHref : "www.planagency.ir"
  },
  {
    title: "اژانس نکست",
    description:
      "اژانس دیجیتال مارکتینگ پلن با اراعه خدمات مارکتینگ , سعو , تولید متحوا",
    teches: ["wordpress", "figma"],
    image: "/showcase.png",
    category: "آموزشی",
    instagramHref : "instagram.com",
    webHref : "www.planagency.ir"
  },
];

const ShowCases = () => {
  const [selectedCategory, setSelectedCategory] = useState("همه");

  const filteredShowcases = showcases.filter(
    (showcase) =>
      selectedCategory === "همه" || showcase.category === selectedCategory
  );
  return (
    <section className="lg:w-[93%] w-full mx-auto min-h-[2000px] lg:min-h-[1500px] mb-[210px] flex flex-col gap-10 relative">
      <div className="hidden lg:block absolute top-[242px] right-[2px]">
        <GoDotFill size={15} className="text-neutral-500" />
      </div>
      <div className="flex flex-col gap-6 md:gap-[30px]">
        <ShowCasesTitle />
        <div className="flex justify-center gap-2 sm:gap-4 mb-8 px-2 md:px-6">
          {["همه", "فروشگاهی", "شرکتی", "آموزشی", "شخصی"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`sm:px-4 sm:py-2 text-sm px-3 py-2 rounded-lg border-[1.3px] border-neutral-800 shadow-md  duration-300 ${
                selectedCategory === category
                  ? "bg-indigo-700   text-white"
                  : "bg-gradient-to-tr from-neutral-800 to-neutral-900/50 text-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-[-50px] md:mt-0 gap-4 sm:gap-8 lg:gap-0">
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
