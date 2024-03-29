"use client"
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectUserInfo } from '@/redux/user/userSlice';
import { fetchUserData } from '@/utils/userActions';
import sideLogo from '@/assets/whit-logo.png'
import Image from 'next/image'
import Link from 'next/link';
// react icons
import { FiShoppingBag } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { RiAdminLine } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
// shadcn 
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, } from "@/components/ui/command"
import { Skeleton } from "@/components/ui/skeleton"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const DashboardSideNav = () => {
    const [open, setOpen] = useState(false);
    const userInfo = useSelector(selectUserInfo);
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserData())
    }, [dispatch]);

    useEffect(() => {
        const down = (e) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    const handleLogout = async () => {
        try {
            setLoading(true)
            const response = await fetch("/api/auth/logout", {
                method: "GET",
            });
            router.push('/login')
            if (response.ok) {
                dispatch(logoutUser());
            } else {
                console.error("Failed to log out");
            }
        } catch (error) {
            console.error("Error during logout:", error);
        } finally {
            setLoading(false)
        }
    };


    return (
        <div className='flex items-center justify-center'>
            <div className="fixed z-[100] rounded-full lg:rounded-none border-[0.4px] border-zinc-700 flex mx-auto lg:w-[240px] w-[95%] sm:w-[88%] h-[62px] sm:h-[70px] top-5 lg:right-0 lg:top-0 lg:bottom-0 lg:h-[100%]  backdrop-blur-2xl  lg:border-l-[2px] lg:border-[#2f3033]">
                <div className="flex lg:hidden items-center justify-between w-full px-2">
                    <Link href='/' className="p-2.5 bg-zinc-800 rounded-full">
                        <Image
                            src={sideLogo}
                            alt='logo'
                            width={50}
                            height={50}
                            className='w-[29px] h-[29px] sm:w-[33px] sm:h-[33px]  '
                        />
                    </Link>
                    <DropdownMenu dir='rtl' >
                        <DropdownMenuTrigger asChild>
                            <div className="p-3.5 rounded-full bg-zinc-800 text-white cursor-pointer">
                                <span className=''>
                                    <AiOutlineMenu className='text-lg sm:text-xl' />
                                </span>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-45 mt-3 ml-4 flex flex-col gap-3 py-5 px-5">
                            <Link href='/dashboard/userInfo' className="flex items-center gap-3" >
                                <FiUser size={19} />
                                <span className='text-[18px] font-semibold text-gray-200'>حساب کاربری</span>
                            </Link>

                            {userInfo && userInfo.role === "user" && (
                                <>
                                    <Link href='/' className="flex items-center gap-3" >
                                        <FiShoppingBag size={19} />
                                        <span className='text-[18px] font-semibold text-gray-200'>سفارشات</span>
                                    </Link>
                                    <Link href='/' className="flex items-center gap-3" >
                                        <MdPayment size={19} />
                                        <span className='text-[18px] font-semibold text-gray-200'>پرداخت</span>
                                    </Link>
                                    <Link href='/' className="flex items-center gap-3" >
                                        <BiMessageDetail size={19} />
                                        <span className='text-[18px] font-semibold text-gray-200'>پیام ها</span>
                                    </Link>
                                    <Link href='/dashboard/notifications' className="flex items-center gap-3" >
                                        <MdPayment size={19} />
                                        <span className='text-[18px] font-semibold text-gray-200'>اعلانات</span>
                                    </Link>
                                </>
                            )}
                            {userInfo && userInfo.role === "admin" && (
                                <>
                                    <Link href='/dashboard/admin/overview' className="flex items-center gap-3" >

                                        <RxDashboard size={19} />
                                        <span className='text-[18px] font-semibold text-gray-200'>دشبورد</span>
                                    </Link>
                                    <Link href='/dashboard/admin' className="flex items-center gap-3" >
                                        <FiShoppingBag size={19} />
                                        <span className='text-[18px] font-semibold text-gray-200'>سفارشات</span>
                                    </Link>
                                    <Link href='/dashboard/admin/users' className="flex items-center gap-3" >
                                        <FaUsers size={19} />
                                        <span className='text-[18px] font-semibold text-gray-200'>کاربران</span>
                                    </Link>
                                    <Link href='/dashboard/admin/tickets' className="flex items-center gap-3" >
                                        <BiMessageDetail size={19} />
                                        <span className='text-[18px] font-semibold text-gray-200'>پیام ها</span>
                                    </Link>
                                </>
                            )}
                            <DropdownMenuSeparator />
                            <Link href='/' className="flex items-center gap-3" >
                                <IoLogOutOutline size={19} />
                                <span className='text-[18px] font-semibold text-gray-200'>خروج</span>
                            </Link>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>
                <div className="lg:py-[20px] xl:py-[25px] 2xl:py-[30px] px-5 hidden lg:flex flex-col justify-between h-full ">
                    <div className=" flex-col items- gap-[5px] flex">
                        <div className="w-full flex items-center justify-between ">
                            <Image
                                src={sideLogo}
                                alt='logo'
                                width={50}
                                height={50}
                                className='md:w-[45px] md:h-[45px]  lg:w-[48px] lg:h-[48px]  '
                            />
                        </div>
                        <div className="2xl:mt-8 mt-4 border-b-[0.5px] border-zinc-600/50 pb-6 w-full">
                            <div className="flex items-end justify-between w-full">
                                <p className="text-sm text-muted-foreground flex gap-1 ">
                                    <kbd className="pointer-events-none inline-flex h-[30px] select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[13px] font-medium text-muted-foreground opacity-100">
                                        <span className='flex items-center gap-1'>
                                            <span className="text-lg">⌘</span>K
                                        </span>
                                        <span>press</span>
                                    </kbd>
                                </p>
                                <Link href='/dashboard/tickets' className="">
                                    <Button variant="secondary" size="icon" className='w-[35px] h-[35px]'>
                                        <BiMessageDetail size={16} />
                                    </Button>
                                </Link>
                            </div>
                            <CommandDialog open={open} onOpenChange={setOpen} dir="rtl">
                                <CommandList>
                                    <CommandEmpty>نتیجه ای یافت نشد</CommandEmpty>
                                    <CommandGroup >
                                        <Link href='/dashboard'>
                                            <CommandItem className="flex items-center gap-3">
                                                <FiShoppingBag className="mr-2 h-4 w-4" />
                                                <span>سفارش ها</span>
                                            </CommandItem>
                                        </Link>
                                        <Link href='/dashboard/payment'>
                                            <CommandItem className="flex items-center gap-3">
                                                <MdPayment className="mr-2 h-4 w-4" />
                                                <span>پرداخت </span>
                                            </CommandItem>
                                        </Link>
                                        <Link href='/dashboard/tickets'>
                                            <CommandItem className="flex items-center gap-3">
                                                <BiMessageDetail className="mr-2 h-4 w-4" />
                                                <span>پیام ها</span>
                                            </CommandItem>
                                        </Link>
                                        <Link href='/dashboard/profile'>
                                            <CommandItem className="flex items-center gap-3">
                                                <FaUsers className="mr-2 h-4 w-4" />
                                                <span>حساب</span>
                                            </CommandItem>
                                        </Link>
                                        <Link href='/dashboard/notifications'>
                                            <CommandItem className="flex items-center gap-3">
                                                <MdOutlineNotificationsActive className="mr-2 h-4 w-4" />
                                                <span>اعلانات</span>
                                            </CommandItem>
                                        </Link>

                                    </CommandGroup>
                                    <CommandSeparator />
                                    <CommandGroup >
                                        <Link href='/order'>
                                            <CommandItem className="flex items-center gap-3">
                                                <span className='bg-indigo-500 text-white py-2 px-5 rounded-md'>ثبت سفارش</span>
                                                <span className='bg-red-500 text-white py-2 px-5 rounded-md'>خروج</span>
                                            </CommandItem>
                                        </Link>
                                    </CommandGroup>
                                </CommandList>
                            </CommandDialog>
                        </div>
                        <div className="flex flex-col  ">
                            {userInfo ? (
                                <>
                                    <Link href='/dashboard/userInfo' className="flex items-center gap-3 py-2 ">
                                        <div className=" p-[6px] shadow-md rounded-lg">
                                            <FiUser size={25} className='text-white' />
                                        </div>
                                        <span className='text-[18px] font-semibold text-gray-200 hover:text-white duration-300'>
                                            حساب کاربری
                                        </span>
                                    </Link>


                                    {userInfo && userInfo.role === "user" && (
                                        <>
                                            <Link href='/dashboard#orders' className="flex  items-center gap-4 mt-1  py-[8px] 2xl:py-[10px]  duration-300 rounded-xl ">
                                                <div className=" p-[6px] shadow-md rounded-lg">
                                                    <FiShoppingBag size={25} className='text-gray-100' />
                                                </div>
                                                <span className='text-[18px] font-semibold text-gray-200 hover:text-white duration-300'>سفارش ها</span>
                                            </Link>
                                            <Link href='/dashboard/ticket' className="flex items-center justify-between gap-4  py-[8px] 2xl:py-[10px]  duration-300 rounded-xl ">
                                                <div className="flex items-center gap-4">
                                                    <div className=" p-[6px] shadow-md rounded-lg">
                                                        <BiMessageDetail size={25} className='text-gray-100' />
                                                    </div>
                                                    <span className='text-[18px] font-semibold text-gray-200  hover:text-white duration-300 text-slate-300'>پیام ها</span>
                                                </div>
                                            </Link>
                                            <Link href='/dashboard/notifications' className="flex  items-center gap-4  py-[8px] 2xl:py-[10px]  duration-300 rounded-xl  ">
                                                <div className=" p-[6px] shadow-md rounded-lg">
                                                    <MdOutlineNotificationsActive size={25} className='text-gray-100' />
                                                </div>
                                                <span className='text-[18px] font-semibold text-gray-200 hover:text-white duration-300'>اعلان ها</span>
                                            </Link>
                                        </>
                                    )}
                                    <Link href={`${userInfo.role === "admin" ? "/dashboard/admin" : "/dashbard/payment"}`} className="flex items-center gap-4  py-[8px] 2xl:py-[10px]  duration-300 rounded-xl ">
                                        <div className=" p-[6px] shadow-md rounded-lg">
                                            <MdPayment size={25} className='text-gray-100' />
                                        </div>
                                        <span className='text-[18px] font-semibold text-gray-200 hover:text-white duration-300 '>پرداخت</span>
                                    </Link>
                                    {userInfo && userInfo.role === "admin" ? (
                                        <>
                                            <Link href='/dashboard/admin/overview' className="flex items-center gap-4  py-[8px] 2xl:py-[10px]  duration-300 rounded-xl  ">
                                                <div className=" p-[6px] shadow-md rounded-lg">
                                                    <RiAdminLine size={25} className='text-gray-100' />
                                                </div>
                                                <span className='text-[18px] font-semibold text-gray-200 hover:text-white duration-300'>مدیریت</span>
                                            </Link>
                                            <Link href='/dashboard/overview' className="flex items-center gap-4  py-[8px] 2xl:py-[10px]  duration-300 rounded-xl ">
                                                <div className=" p-[6px] shadow-md rounded-lg">
                                                    <FiShoppingBag size={25} className='text-gray-100' />
                                                </div>
                                                <span className='text-[18px] font-semibold text-gray-200 hover:text-white duration-300'>سفارشات</span>
                                            </Link>
                                            <Link href='/dashboard/admin/users' className="flex items-center gap-4  py-[8px] 2xl:py-[10px]  duration-300 rounded-xl ">
                                                <div className=" p-[6px] shadow-md rounded-lg">
                                                    <FaUsers size={25} className='text-gray-100' />
                                                </div>
                                                <span className='text-[18px] font-semibold text-gray-200 hover:text-white duration-300'>کاربران</span>
                                            </Link>
                                            <Link href='/dashboard/admin/tickets' className="flex  items-center gap-4  py-[8px] 2xl:py-[10px]  duration-300 rounded-xl  ">
                                                <div className=" p-[6px] shadow-md rounded-lg">
                                                    <BiMessageDetail size={25} className='text-gray-100' />
                                                </div>
                                                <span className='text-[18px] font-semibold text-gray-200 hover:text-white duration-300'>پیام ها</span>
                                            </Link>
                                        </>

                                    ) : <></>}
                                    {userInfo && userInfo.role === "user" && (
                                        <>
                                            <div className=" w-full my-2">
                                                <hr className='bg-zinc-600 h-[1px] w-[95%] mx-auto' />
                                            </div>
                                            <Link href='/dashboard/notifications' className="flex  items-center gap-4  py-[8px] 2xl:py-[10px]  duration-300 rounded-xl  ">
                                                <div className=" p-[6px] shadow-md rounded-lg">
                                                    <IoIosHelpCircleOutline size={25} className='text-gray-100' />
                                                </div>
                                                <span className='text-[18px] font-semibold text-gray-200 hover:text-white duration-300'>کمک</span>
                                            </Link>
                                        </>
                                    )}

                                </>
                            ) : <div>
                                <>
                                    <div href='/dashboard' className="flex items-center gap-3 mt-5 mb-4   pl-9 pr-5 ">
                                        <Skeleton className="h-[30px] w-[30px] rounded-md" />
                                        <Skeleton className="h-[30px] w-[80%] " />
                                    </div>
                                    <div href='/dashboard' className="flex  items-center gap-3  py-4 rounded-xl pl-9 pr-5">
                                        <Skeleton className="h-[30px] w-[30px] rounded-md" />
                                        <Skeleton className="h-[30px] w-[80%] " />
                                    </div>
                                    <div href='/dashboard#orders' className="flex  items-center gap-3  py-4 rounded-xl pl-9 pr-5">
                                        <Skeleton className="h-[30px] w-[30px] rounded-md" />
                                        <Skeleton className="h-[30px] w-[80%] " />
                                    </div>
                                    <div href='/dashboard/order' className="flex items-center gap-3  py-4 rounded-xl pl-9 pr-5">
                                        <Skeleton className="h-[30px] w-[30px] rounded-md" />
                                        <Skeleton className="h-[30px] w-[80%] " />
                                    </div>
                                    <div href='/dashboard/order' className="flex items-center gap-3  py-4 rounded-xl pl-9 pr-5">
                                        <Skeleton className="h-[30px] w-[30px] rounded-md" />
                                        <Skeleton className="h-[30px] w-[80%] " />
                                    </div>
                                </>
                            </div>
                            }
                        </div>
                    </div>
                    <div className="flex-col hidden lg:flex  gap-3 w-full border-t-[0.5px] border-zinc-600/50">
                        <div className="flex  gap-[12px] mt-3 rounded-lg">
                            {userInfo ? (
                                <>
                                    <Avatar className="w-[50px] h-[50px] shadow-md">
                                        <AvatarFallback ><span className='text-lg'>{userInfo?.username?.charAt(0).toUpperCase()}</span></AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col gap-[5px] ">
                                        <h1 className='text-md font-semibold text-zinc-200'>{userInfo?.username}</h1>
                                        <p className='text-[13px] text-zinc-500 font-light'>{userInfo?.phoneNumber}</p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="flex gap-2">

                                        <Skeleton className='h-[50px] w-[50px] rounded-full' />
                                        <div className="flex flex-col gap-[5px]">
                                            <Skeleton className='h-[25px] w-[140px]' />
                                            <Skeleton className='h-[22px] w-[90]' />
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                        <Link href='/' className="flex items-center gap-4  rounded-xl  duration-300 ">
                            <Button onClick={handleLogout} variant="secondary" className=" w-full flex items-center gap-3 ">
                                <IoLogOutOutline size={20} />
                                <span className='text-md '>خروج</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardSideNav;

