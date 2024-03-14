"use client"
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectUserInfo } from '@/redux/user/userSlice';
import { fetchUserData } from '@/utils/userActions';
import sideLogo from '@/assets/whit-logo.png'
import Image from 'next/image'
import Link from 'next/link';
// react icons
import { FaRegUser } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import { GiCash } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";

// mui 
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Skeleton } from '@mui/material';



const DashboardSideNav = () => {
    const userInfo = useSelector(selectUserInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserData())
    }, [dispatch]);

    return (
        <div>
            <div className="fixed w-[220px] right-0 top-0 bottom-0  bg-[#171717] backdrop-blur-xl hidden lg:block  border-l-[3px] border-[#171717]">
                <div className="py-[50px] flex flex-col justify-between items-center h-full ">
                    <div className="flex flex-col items-center gap-[5px]">
                        <div className="flex flex-col items-center gap-[2px]">
                            <Avatar sx={{ bgcolor: deepPurple[500], width: 80, height: 80 }} className='bg-[--color-secondary]'> <span className='text-3xl'>{userInfo?.username.charAt(0).toUpperCase()}</span></Avatar>
                            <h1 className='text-lg text-gray-300 mt-3'>{userInfo?.username}</h1>
                            <p className='text-sm text-gray-400 font-light'>{userInfo?.phoneNumber}</p>
                        </div>
                        <div className="flex flex-col gap-[2px] items-">
                            {userInfo ? (
                                <>
                                    <Link href='/dashboard' className="flex items-center gap-3 mt-10 bg-zinc-700/60 py-3 rounded-xl pl-9 pr-5">
                                        <RxDashboard size={25} className='text-white' />
                                        <span className='text-[18px]  text-white'>
                                            حساب کاربری
                                        </span>
                                    </Link>
                                    <Link href='/dashboard' className="flex  items-center gap-3  py-4 rounded-xl pl-9 pr-5">
                                        <MdOutlineNotificationsActive size={25} className='text-gray-100' />
                                        <span className='text-[18px]  text-gray-400'>اعلانات</span>
                                    </Link>
                                    <Link href='/dashboard#orders' className="flex  items-center gap-3  py-4 rounded-xl pl-9 pr-5">
                                        <FiShoppingBag size={25} className='text-gray-100' />
                                        <span className='text-[18px]  text-gray-400'>سفارش ها</span>
                                    </Link>
                                    <Link href='/dashboard/order' className="flex items-center gap-3  py-4 rounded-xl pl-9 pr-5">
                                        <MdPayment size={25} className='text-gray-100' />
                                        <span className='text-[18px]  text-gray-400'>پرداخت</span>
                                    </Link>
                                    {userInfo && userInfo.role === "admin" ? (
                                        <Link href='/dashboard/order' className="flex items-center gap-3  py-4 rounded-xl pl-9 pr-5">
                                            <FaUsers size={25} className='text-gray-100' />
                                            <span className='text-[18px]  text-gray-400'>کاربران</span>
                                        </Link>
                                    ) : <></>}
                                    <Link href='/dashboard/chat' className="flex items-center gap-3  py-4 rounded-xl pl-9 pr-5">
                                        <BiMessageDetail size={25} className='text-gray-100' />
                                        <span className='text-[18px]  text-gray-400'>پیام ها</span>
                                    </Link>
                                </>
                            ) : <div>
                                <>
                                    <div href='/dashboard' className="flex items-center gap-3 mt-10 bg-zinc-700/60 py-3 rounded-xl pl-9 pr-5">
                                        <Skeleton animation="wave" variant="circular" width={30} height={30} className='bg-zinc-800/80' />
                                        <Skeleton animation="wave" variant="rectangular" width={100} height={30} className='bg-zinc-800/80' />
                                    </div>
                                    <div href='/dashboard' className="flex  items-center gap-3  py-4 rounded-xl pl-9 pr-5">
                                        <Skeleton animation="wave" variant="circular" width={30} height={30} className='bg-zinc-800/80' />
                                        <Skeleton animation="wave" variant="rectangular" width={100} height={30} className='bg-zinc-800/80' />
                                    </div>
                                    <div href='/dashboard#orders' className="flex  items-center gap-3  py-4 rounded-xl pl-9 pr-5">
                                        <Skeleton animation="wave" variant="circular" width={30} height={30} className='bg-zinc-800/80' />
                                        <Skeleton animation="wave" variant="rectangular" width={100} height={30} className='bg-zinc-800/80' />
                                    </div>
                                    <div href='/dashboard/order' className="flex items-center gap-3  py-4 rounded-xl pl-9 pr-5">
                                        <Skeleton animation="wave" variant="circular" width={30} height={30} className='bg-zinc-800/80' />
                                        <Skeleton animation="wave" variant="rectangular" width={100} height={30} className='bg-zinc-800/80' />
                                    </div>
                                    <div href='/dashboard/order' className="flex items-center gap-3  py-4 rounded-xl pl-9 pr-5">
                                        <Skeleton animation="wave" variant="circular" width={30} height={30} className='bg-zinc-800/80' />
                                        <Skeleton animation="wave" variant="rectangular" width={100} height={30} className='bg-zinc-800/80' />
                                    </div>
                                </>
                            </div>
                            }
                        </div>
                    </div>
                    <div className="flex flex-col items- gap-4">
                        <Link href='/' className="flex mb-3 items-center gap-3 py-3 rounded-xl px-8">
                            <IoLogOutOutline size={25} className='text-gray-100' />
                            <span className='text-[18px] text-gray-300 '>خروج</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardSideNav;


{/* <Skeleton animation="wave" variant="circular" width={30} height={30} className='bg-zinc-800/80' />
<Skeleton animation="wave" variant="rectangular" width={100} height={30} className='bg-zinc-800/80' /> */}