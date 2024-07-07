"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface navigationLinkProps {
  href: string;
  label: string;
}
const NavigationLink: React.FC<navigationLinkProps> = ({ href, label }) => {
  const pathname = usePathname();
  const activeLink = pathname === href;

  return (
    <Link href={href} className=" h-full flex items-center justify-center ">
      <span
        className={` text-neutral-400 bg--500 py-7   font-normal tracking-wider ${
          activeLink && "text-white border-b-[0.5px] border-white"
        } hover:text-gray-100 duration-200`}
      >
        {label}
      </span>
    </Link>
  );
};

export default NavigationLink;
