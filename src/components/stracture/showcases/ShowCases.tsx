import React from "react";
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
  },
  {
    title: "اژانس نکست",
    description:
      "اژانس دیجیتال مارکتینگ پلن با اراعه خدمات مارکتینگ , سعو , تولید متحوا",
    teches: ["wordpress", "figma"],
    image: "/showcase.png",
  },
  {
    title: "اژانس دیجیتال مارکتینگ پلن",
    description:
      "اژانس دیجیتال مارکتینگ پلن با اراعه خدمات مارکتینگ , سعو , تولید متحوا",
    teches: ["react", "nodejs", "nextjs", "mongodb", "figma"],
    image: "/showcase.png",
  },
  {
    title: "اژانس نکست",
    description:
      "اژانس دیجیتال مارکتینگ پلن با اراعه خدمات مارکتینگ , سعو , تولید متحوا",
    teches: ["wordpress", "figma"],
    image: "/showcase.png",
  },
];

const ShowCases = () => {
  return (
    <section className="lg:w-[93%]  w-full mx-auto min-h-[2000px]  lg:min-h-[1500px] flex flex-col gap-10 relative">
      <div className=" hidden lg:block absolute top-[82px] right-[2px]">
        <GoDotFill size={15} className="text-neutral-500" />
      </div>
      <div className="flex flex-col gap-[60px]">
        <ShowCasesTitle />
        <div className="grid grid-cols-1 md:grid-cols-2    md:gap-">
          {showcases.map((showcase, index) => (
            <ShowCaseCard
              key={index}
              title={showcase.title}
              description={showcase.description}
              teches={showcase.teches}
              image={showcase.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowCases;
