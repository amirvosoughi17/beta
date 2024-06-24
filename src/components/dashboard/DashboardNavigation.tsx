"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import wixelLogo from "@/assets/f.png";
import Image from "next/image";
import { GrMenu } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DashboardLink from "./DashboardLink";

const DashboardNavigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const pathname = usePathname();

  const DashboardnavLinks = [
    { href: "/", label: "خانه" },
    { href: "/profile", label: "حساب کاربری" },
    { href: "/profile/orders", label: "سفارشات من" },
    { href: "/dashboard/#orders", label: "سفارشات" },
    { href: "/dashboard", label: "کاربران" },
  ];

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.pathname + window.location.hash);
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [pathname]);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <div className=" fixed top-0 left-0 right-0 h-[70px]  p-4 bg-neutral-800/70 shadow-lg z-50 backdrop-blur-xl border-b-[0.8px] border-neutral-700/70">
      <div className="w-full flex  h-full  gap-3 items-center justify-between">
        <div>
          <Image src={wixelLogo} alt="logo" className="w-[37px]" />
        </div>
        <div className="flex items-center gap-5">
          {DashboardnavLinks.map((index, item) => (
            <DashboardLink key={item} label={index.label} href={index.href} />
          ))}
        </div>
        <div className=" hidden lg:flex">logout</div>
        <button
          className=" shadow-lg right-0 p-2 rounded-lg   bg-neutral-600 z-50 lg:hidden "
          onClick={handleToggleMenu}
        >
          {toggleMenu ? <IoMdClose size={20} /> : <GrMenu size={20} />}
        </button>
      </div>

      {toggleMenu && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed top-0 right-0 w-[250px] h-screen bg-green-500 z-40"
        >
          <div className="flex flex-col gap-4">
            <Link href="/">خانه</Link>
            <Link href="/profile">حساب کاربری</Link>
            <Link href="/profile/orders">سفارشات من</Link>
            <Link href="/dashboard#orders">سفارشات</Link>
            <Link href="/dashboard#users">کاربران</Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default DashboardNavigation;
