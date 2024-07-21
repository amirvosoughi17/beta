"use client";
import React from "react";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbWorldSearch } from "react-icons/tb";
import { FaFigma } from "react-icons/fa";
import { FaWordpressSimple } from "react-icons/fa";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";

interface ShowCaseCardProps {
  title: string;
  description: string;
  teches: string[];
  image: string;
  InstagramHref: string;
  WebsiteHref: string;
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
  InstagramHref,
  WebsiteHref,
}) => {
  return (
    <div className="w-[95%] md:w-[380px] mx-auto  lg:w-full relative mt-[0px] sm:mt-[40px] lg:mt-[60px] h-[450px] md:h-[500px] lg:h-[600px]  lg:border-x-[0.5px] border-neutral-700/60">
      <div className=" hidden lg:block absolute top-[-37px] left-[-8px]">
        <GoDotFill size={15} className="text-neutral-500" />
      </div>
      <div className=" hidden lg:block  absolute bottom-[-38px] left-[-8px]">
        <GoDotFill size={15} className="text-neutral-500" />
      </div>
      <div className=" hidden lg:block absolute bottom-[-38px] right-[-8px]">
        <GoDotFill size={15} className="text-neutral-500" />
      </div>
      <span className=" hidden lg:block absolute top-[-30px] w-[87%] left-10 right-10 h-[0.5px] bg-neutral-700/80 mx-auto"></span>
      <span className=" hidden lg:block absolute bottom-[-30px] w-[87%] left-10 right-10 h-[0.5px] bg-neutral-700/80 mx-auto"></span>
      <CardContainer className="  relative flex items-center justify-center">
        <CardBody className="bg-gray-50 relative group/card  flex flex-col gap-2 dark:hover:shadow-2xl dark:hover:shadow-neutral-600/[0.2] dark:bg-neutral-800/20 dark:border-white/[0.2] border-black/[0.1] w-auto h-auto md:h-[460px] max-w-[500px] xl:h-[490px] lg:h-[490px] rounded-lg px-4 py-3 lg:py-4 lg:px-6  border  ">
          <CardItem translateZ="50" className="w-full mt-2 ">
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
            className=" text-xl md:text-2xl mt-5 font-bold text-neutral-200"
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
          <div className="flex justify-between items-center mt-4 lg:mt-6">
            <CardItem
              translateZ={60}
              translateY={-6}
              className="lg:px-4 py-2 flex w-full items-center justify-between rounded-xl text-xs font-normal dark:text-white"
            >
              <div className="flex items-center gap-0">
                {teches.map((tech, idx) => (
                  <div
                    key={idx}
                    className="text-[22px] sm:text-[25px] cursor-pointer hover:scale-105 hover:shadow-xl duration-250 ml-[-6px] shadow-lg bg-neutral-900/70 backdrop-blur-xl border-[0.5px] border-neutral-600/60 p-2.5 rounded-full"
                  >
                    {techIcons[tech] || <span>{tech}</span>}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                <Link
                  href={InstagramHref}
                  className=" bg-transparent p-1.5 sm:p-2 rounded-lg border-[1px] border-neutral-700 hover:bg-neutral-700 duration-300 "
                >
                  <FaInstagram size={23} />
                </Link>
                <Link
                  href={WebsiteHref}
                  className=" bg-transparent p-1.5 sm:p-2 rounded-lg border-[1px] border-neutral-700 hover:bg-neutral-700 duration-300"
                >
                  <TbWorldSearch size={23} />
                </Link>
              </div>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default ShowCaseCard;
