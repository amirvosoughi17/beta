"use client";

import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '@/utils/userActions';
import { selectUserInfo, selectIsAuthenticated } from '@/redux/user/userSlice';
import { useEffect, useState } from 'react';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import navLogo from '@/assets/whit-logo.png';
// react icons 
import { MdOutlineNotificationsActive } from "react-icons/md";
import { BiMenu } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";
import { IoLogOutOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { MdWeb } from "react-icons/md";
import { CiBoxes } from "react-icons/ci";
import { FaQuestionCircle } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuUser } from "react-icons/lu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const ITEM_HEIGHT = 48;


const Navbar = () => {

    const dispatch = useDispatch();
    const userInfo = useSelector(selectUserInfo);
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const router = useRouter();

    useEffect(() => {
        dispatch(fetchUserData());
    }, [dispatch]);

    // const handleLogout = async () => {
    //     try {
    //         const response = await fetch("/api/auth/logout", {
    //             method: "GET",
    //         });

    //         router.push('/login')
    //         if (response.ok) {
    //             dispatch(logoutUser());
    //         } else {
    //             console.error("Failed to log out");
    //         }
    //     } catch (error) {
    //         console.error("Error during logout:", error);
    //     }
    // };

    return (
        <header className='flex items-center justify-center'>
            <div className="lg:order-2 w-[95%] h-[60px] sm:w-[89%] sm:h-[68px] md:w-[80%] md:h-[70px] lg:w-[65%] lg:h-[70px] bg-[#1a1e29ba] fixed top-6 rounded-full   py-5 px-1 lg:px-[6px] flex items-center justify-between backdrop-blur-xl duration-200">

                <div className="flex items-center gap-[40px] ">
                    <div className="">
                        <Image
                            src={navLogo}
                            alt='logo'
                            width={50}
                            height={50}
                            className='md:w-[43px] md:h-[43px] mr-[10px] lg:w-[45px] lg:h-[45px] w-[40px] h-[40px] mt-[2px]    md:mt-[1.5px]'
                        />
                    </div>
                   
                </div>
                

            </div>
        </header>

    )
}

export default Navbar

