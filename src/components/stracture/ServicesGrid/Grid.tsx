import {
  CalendarIcon,
  FileTextIcon,
  InputIcon,
  CodeIcon,
} from "@radix-ui/react-icons";
import { Share2Icon } from "lucide-react";

import { AnimatedBeamMultipleOutputDemo } from "./ABeam";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { VscTools } from "react-icons/vsc";

import Globe from "@/components/magicui/globe";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Marquee from "@/components/magicui/marquee";
import { IconCloudDemo } from "./Teches";
import { FileTreeDemo } from "./FileTree";
import GridTitle from "./GridTitle";

const files = [
  {
    name: "bitcoin.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "finances.xlsx",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
  {
    name: "logo.svg",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "keys.gpg",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "seed.txt",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
  },
];

interface Item {
  name: string;
  description: string;
  icon: any;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Payment received",
    description: "Magic UI",
    time: "15m ago",

    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "User signed up",
    description: "Magic UI",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New message",
    description: "Magic UI",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "New event",
    description: "Magic UI",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

const features = [
  {
    Icon: CalendarIcon,
    name: "",
    description: "",
    className: "col-span-3 lg:col-span-1 ",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="w-full  absolute top-0 left-0 right-0 bottom-0 h-full flex items-center justify-center">
        <IconCloudDemo />
      </div>
    ),
  },
  {
    Icon: CodeIcon,
    name: "کدنویسی اختصاصی",
    description: "طراحی سایت کاملا کدنویسی شده برای پروژه شما",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className=" absolute top-10 w-[530px] left-[15%]">
        <FileTreeDemo />
      </div>
    ),
  },
  {
    Icon: Share2Icon,
    name: "طراحی سایت ",
    description: "طراحی انواع سایت فروشگاهی , شرکتی , اموزشی , شخصی با ویکسل",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-[-30px] md:left-[10%] lg:left-0 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },

  {
    Icon: FileTextIcon,
    name: "",
    description: "",
    href: "/",
    cta: "",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute h-full  z-0 flex w-full mx-auto  items-center justify-center  rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Globe
        </span>
        <Globe className="lg:top-[15%] top-[40%] lg:left-[5%] ] flex items-center justify-center " />
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
      </div>
    ),
  },
];

export function Grid() {
  return (
    <section
      dir="ltr"
      className="lg:px-10 px-4 flex flex-col gap-[70px] mb-[140px] mt-[100px] "
    >
      <GridTitle />
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
}
