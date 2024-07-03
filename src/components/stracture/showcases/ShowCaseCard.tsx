"use client";
import React from "react";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { FaWordpressSimple } from "react-icons/fa";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { TfiPlus } from "react-icons/tfi";

interface ShowCaseCardProps {
  title: string;
  description: string;
  teches: string[];
  image: string;
}

const techIcons: { [key: string]: JSX.Element } = {
  react: <FaReact className=" text-blue-500" />,
  nodejs: <FaNodeJs className=" text-green-500" />,
  nextjs: <RiNextjsFill className=" text-white" />,
  mongodb: <SiMongodb className=" text-green-500" />,
  postgres: <BiLogoPostgresql className="text-blue-500" />,
  express: <SiExpress className="text-white" />,
  figma: <FaFigma className=" text-white" />,
  wordpress: <FaWordpressSimple className="text-blue-500" />,
};

const ShowCaseCard: React.FC<ShowCaseCardProps> = ({
  title,
  description,
  teches,
  image,
}) => {
  return (
    <div className="w-[95%] mx-auto lg:w-full relative mt-[0px] lg:mt-[60px] h-[500px] lg:h-[600px]  lg:border-x-[0.5px] border-neutral-700/60">
      <div className=" hidden lg:block absolute top-[-45px] left-[-13px]">
        <TfiPlus size={23} className="text-neutral-300" />
      </div>
      <div className=" hidden lg:block absolute bottom-[-38px] left-[-13px]">
        <TfiPlus size={23} className="text-neutral-300" />
      </div>
      <div className=" hidden lg:block absolute bottom-[-38px] right-[-11px]">
        <TfiPlus size={23} className="text-neutral-300" />
      </div>
      <span className=" hidden lg:block absolute top-[-30px] w-[87%] left-10 right-10 h-[0.5px] bg-neutral-700/60 mx-auto"></span>
      <span className=" hidden lg:block absolute bottom-[-30px] w-[87%] left-10 right-10 h-[0.5px] bg-neutral-700/60 mx-auto"></span>
      <CardContainer className="  relative flex items-center justify-center">
        <CardBody className="bg-gray-50 relative group/card  flex flex-col gap-2 dark:hover:shadow-2xl dark:hover:shadow-neutral-600/[0.2] dark:bg-neutral-800/20 dark:border-white/[0.2] border-black/[0.1] w-auto h-[450px] md:h-[500px] rounded-lg p-6 border  ">
          <CardItem translateZ="120" translateY={10} className="w-full mt-4 ">
            <Image
              src={image}
              height="1000"
              width="1000"
              className="h- w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <CardItem
            translateZ="50"
            className="text-2xl mt-5 font-bold text-neutral-600 dark:text-white"
          >
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-500"
          >
            {description}
          </CardItem>
          <div className="flex justify-between items-center mt-4">
            <CardItem
              translateZ={60}
              translateY={-6}
              as={Link}
              href="https://twitter.com/mannupaaji"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              <div className="flex items-center gap-0">
                {teches.map((tech, idx) => (
                  <div
                    key={idx}
                    className="text-[26px] cursor-pointer hover:scale-105 hover:shadow-xl duration-250 ml-[-6px] shadow-lg bg-neutral-900/70 backdrop-blur-xl border-[0.5px] border-neutral-600/60 p-2.5 rounded-full"
                  >
                    {techIcons[tech] || <span>{tech}</span>}
                  </div>
                ))}
              </div>
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Sign up
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default ShowCaseCard;
