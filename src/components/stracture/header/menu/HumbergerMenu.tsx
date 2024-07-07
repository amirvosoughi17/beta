"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { linkVariants, footerVariants } from "./animation";
import { FaHome, FaUser, FaBriefcase, FaPhone } from "react-icons/fa";
import { GrArticle } from "react-icons/gr";
import { FaInstagram, FaTelegram, FaLinkedin } from "react-icons/fa";

const links = [
  {
    href: "/",
    label: "خانه",
    icon: <FaHome />,
  },
  {
    href: "/profile",
    label: "حساب کاربری",
    icon: <FaUser />,
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
    href: "/#hero",
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
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 45 : 0 }}
          className={`w-8 h-[2.5px] rounded-md bg-white mb-[6px] ${
            isOpen && "w-[30px] mb-[-2px]"
          }`}
        ></motion.div>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ rotate: isOpen ? -45 : 0 }}
          className={`w-7 h-[2.5px] rounded-md bg-white mb-[6px] ${
            isOpen && "w-[30px]"
          }`}
        ></motion.div>
      </div>
      <div className="relative top-0 left-0 right-0 bottom-0 z-100">
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: isOpen ? 0 : "-100%" }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="fixed top-0 right-0 w-full h-full bg-neutral-950 text-white z-40"
        >
          <div className="w-full flex-col gap-10 h-full p-10 py-[90px] justify-between items-center flex ">
            <div className=""></div>
            <div className="flex flex-col w-full gap-6">
              {links.map((link, i) => {
                const isActive = pathname === link.href;

                return (
                  <Link href={link.href} key={`b_${i}`} className="text-4xl">
                    <motion.div
                      custom={i}
                      initial="hidden"
                      animate={isOpen ? "visible" : "hidden"}
                      variants={linkVariants}
                      className={`flex items-center w-full justify-between pb-4 gap-4 duration-200 hover:border-b-[0.7px] border-neutral-700 ${
                        isActive ? "" : ""
                      }`}
                    >
                      <span className=" text-neutral-300">{link.label}</span>
                      <span className=" text-2xl text-neutral-400">
                        {link.icon}
                      </span>
                    </motion.div>
                  </Link>
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
                <span className="text-md text-neutral-400 font-light">
                  Social Networks
                </span>
              </div>
              <div className="flex items-center gap-4 text-neutral-300">
                <button>
                  <FaLinkedin size={27} />
                </button>
                <button>
                  <FaTelegram size={27} />
                </button>
                <button>
                  <FaInstagram size={27} />
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
