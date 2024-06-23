"use clinet"
import React , { useState , useEffect } from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface DashboardLinkProps {
    label : string ; 
    href : string
}
const DashboardLink : React.FC<DashboardLinkProps> = ({label , href}) => {
    const [currentPath, setCurrentPath] = useState("");
    const pathname = usePathname();
    const ActiveLink = pathname === href
    
  return (
    <Link href={href} className={`text-neutral-400 hover:text-white duration-200 ${ActiveLink && 'text-white'} `}>
        {label}
    </Link>
  )
}

export default DashboardLink