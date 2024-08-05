"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { linkVariants, footerVariants } from "./animation";
import { FaHome, FaUser, FaBriefcase, FaPhone } from "react-icons/fa";
import { GrArticle } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { CiMenuKebab } from "react-icons/ci";
import { CgClose } from "react-icons/cg";
import { TbMenu } from "react-icons/tb";
import { HiMenuAlt2 } from "react-icons/hi";
import { RiFunctionLine } from "react-icons/ri";

const links = [
  {
    href: "/",
    label: "خانه",
    icon: <FaHome />,
  },
  {
    href: "/#services",
    label: "خدمات",
    icon: <RiFunctionLine />,
  },
  {
    href: "/#showcases",
    label: "نمونه کارها",
    icon: <FaBriefcase />,
  },
  {
    href: "/#blogs",
    label: "مقالات",
    icon: <GrArticle />,
  },
  {
    href: "/#cantact",
    label: "تماس باما",
    icon: <FaPhone />,
  },
];
const HamburgerMenu: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="z-100 lg:hidden ">
      <div
        className="cursor-pointer z-50 relative top-0 mt-1 "
        onClick={toggleMenu}
      >
        {isOpen ? (
          <CgClose size={30} />
        ) : (
          <TbMenu size={33} className=" text-neutral-400" />
        )}
      </div>
      <div className="relative top-0 left-0 right-0 bottom-0 z-100">
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: isOpen ? 0 : "-100%" }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="fixed top-0 right-0 w-full h-full bg-neutral-900 text-white z-40"
        >
          <div className="w-full flex-col gap-10 h-full p-10 py-[90px] justify-between items-center flex ">
            <div className=""></div>
            <div className="flex flex-col w-full gap-6">
              {links.map((link, i) => {
                const isActive = pathname === link.href;

                return (
                  <button onClick={toggleMenu} key={`b_${i}`}>
                    <Link href={link.href}  className="text-4xl">
                      <motion.div
                        custom={i}
                        initial="hidden"
                        animate={isOpen ? "visible" : "hidden"}
                        variants={linkVariants}
                        className={`flex items-center w-full justify-between pb-4 gap-4 duration-200 hover:border-b-[0.7px] border-neutral-700 ${
                          isActive ? "" : ""
                        }`}
                      >
                        <span className=" text-neutral-300 text-3xl">
                          {link.label}
                        </span>
                        <span className=" text-2xl text-neutral-400">
                          {link.icon}
                        </span>
                      </motion.div>
                    </Link>
                  </button>
                );
              })}
            </div>
            <motion.div
              initial="hidden"
              animate={isOpen ? "visible" : "hidden"}
              variants={footerVariants}
              className="flex w-full items-center justify-between"
            >
              <div>
                <span className="text-md text-neutral-400 font-light"></span>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href="https://www.instagram.com/wixel_org?igsh=MWc5eWVqaWluc2oxbQ=="
                  target="_blank"
                  className="w-[45px] h-[45px] flex items-center justify-center rounded-lg shadow-md bg-transparent border-[0.6px] border-neutral-600/80 p-1"
                >
                  <FaInstagram size={23} />
                </Link>
                <Link
                  href="https://t.me/vosooughi"
                  target="_blank"
                  className="w-[45px] h-[45px] flex items-center justify-center rounded-lg shadow-md bg-transparent border-[0.6px] border-neutral-600/80 p-1"
                >
                  <FaTelegram size={23} />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/wixelorg"
                  target="_blank"
                  className="w-[45px] h-[45px] flex items-center justify-center rounded-lg shadow-md bg-transparent border-[0.6px] border-neutral-600/80 p-1"
                >
                  <ImLinkedin size={23} />
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
