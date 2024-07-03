"use client";
import NavigationLink from "./NavigationLink";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "./Nav/Nav";
import Buttonn from "./Nav/Buttonn";
import Image from "next/image";
import wixelLogo from '@/assets/white-logo.svg'
import Link from "next/link";
import { Button } from "@/components/ui/button";

const menu = {
  open: {
    width: "350px",
    height: "630px",
    top: "-25px",
    left: "-25px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "45px",
    height: "45px",
    top: "0px",
    left: "0px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className=" flex items-center justify-center z-50">
      <div className="w-full mx-auto  h-[80px] flex items-center justify-between ">
        <div className="w-full bg-transparent h-full border-b-[0.4px] border-neutral-700  flex items-center justify-between mx-auto px-6 lg:px-[50px]">
          <div>
            <Image 
            src={wixelLogo}
            alt="logo"
            className="w-[35px]"
            />
          </div>
          <nav className="items-center gap-6 hidden lg:flex">
            <NavigationLink href="/" label="خانه" />
            <NavigationLink href="/#services" label="خدمات" />
            <NavigationLink href="/#showcases" label="نمونه کارها" />
            <NavigationLink href="/#contactUs" label="ارتباط باما" />
          </nav>
          <Link href='' className="">
            <Button className=" bg-transparent border-[0.5px] border-neutral-700 text-neutral-300 hover:text-white hover:bg-neutral-800">
              ورود / ثبت نام
            </Button>
          </Link>
          <div className=" absolute left-[10px] top-2 z-100 hidden ">
            <motion.div
              className="w-[330px] h-[650px] bg-[#4b4b4b] rounded-[10px] relative"
              variants={menu}
              animate={isActive ? "open" : "closed"}
              initial="closed"
            >
              <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
            </motion.div>
            <Buttonn
              isActive={isActive}
              toggleMenu={() => {
                setIsActive(!isActive);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
