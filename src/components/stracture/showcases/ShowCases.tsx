import React from "react";
import ShowCaseCard from "./ShowCaseCard";
import { TfiPlus } from "react-icons/tfi";

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
    <section className="lg:w-[93%] w-full mx-auto min-h-[2000px]  lg:min-h-[1500px] flex flex-col gap-10 relative">
      <div className="">
      </div>
      <div className=" hidden lg:block absolute top-[58px] right-[-13px]">
        <TfiPlus size={23} className="text-neutral-300" />
      </div>
     
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
    </section>
  );
};

export default ShowCases;
