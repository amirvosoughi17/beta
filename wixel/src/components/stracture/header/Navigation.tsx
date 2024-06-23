"use client";
import NavigationLink from "./NavigationLink";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "./Nav/Nav";
import Button from "./Nav/Button";
import Image from "next/image";
import wixelLogo from '@/assets/f.png'

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
    <div className="hidden">
      <div className="w-full mx-auto  h-[65px] flex items-center justify-between fixed top-[40px]">
        <div className="w-[85%] relative bg-neutral-600/40  rounded-3xl h-full  flex items-center justify-between mx-auto px-4">
          <div>
            <Image 
            src={wixelLogo}
            alt="logo"
            className="w-[40px]"
            />
          </div>
          <nav className="items-center gap-4 hidden lg:flex">
            <NavigationLink href="/" label="خانه" />
            <NavigationLink href="/auth/register" label="ثبت نام" />
          </nav>
          <span></span>
          <div className="flex absolute left-[10px] top-2 lg:hidden   ">
            <motion.div
              className="w-[330px] h-[650px] bg-[#4b4b4b] rounded-[10px] relative"
              variants={menu}
              animate={isActive ? "open" : "closed"}
              initial="closed"
            >
              <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
            </motion.div>
            <Button
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
