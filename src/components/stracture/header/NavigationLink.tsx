"use client";
import Link from 'next/link';
import React from 'react'
import { usePathname } from 'next/navigation';

interface navigationLinkProps {
    href : string ;
    label : string ;
}
const NavigationLink : React.FC<navigationLinkProps> = ({ href , label }) => {
    const pathname = usePathname();
    const activeLink = pathname === href ;

  return (
    <Link href={href}>
        <span className={` text-neutral-400 font-normal tracking-wider ${activeLink && "text-white"} hover:text-gray-100 duration-200`}>
            {label}
        </span>
    </Link>
  )
}

export default NavigationLink