"use client"
import React , {useEffect} from 'react'
import { useSelector , useDispatch } from 'react-redux';
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
import { IoMdLogOut } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";


const DashboardSideNav = () => {
    const userInfo = useSelector(selectUserInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserData())
    }, [dispatch]);

  return (
    <div>
        <div className="fixed w-[140px] h-screen right-0 top-0  bg-[--body-bg]">
            <div className="py-[50px] flex flex-col justify-between items-center h-full ">
                <div className="flex flex-col items-center gap-[40px]">
                    <div className="">
                        <Image 
                        src={sideLogo}
                        alt='logo'
                        width={80}
                        height={80}
                        className='w-[60px] h-[60px]'
                        />
                    </div>
                    <div className="flex flex-col gap-6 items-center">
                        {userInfo && userInfo.role === "user" ? (
                            <>
                        <Link href='/dashboard' className="flex flex-col items-center gap-2 mt-10">
                            <FaRegUser  size={25}/>
                            <span className='text-sm  text-gray-200'>حساب</span>
                        </Link>
                        <Link href='/dashboard' className="flex flex-col items-center gap-2">
                            <IoMdNotificationsOutline  size={25}/>
                            <span className='text-sm  text-gray-200'>اعلانات</span>
                        </Link>
                        <Link href='/dashboard' className="flex flex-col items-center gap-2">
                            <FiShoppingBag  size={25}/>
                            <span className='text-sm  text-gray-200'>سفارش ها</span>
                        </Link>
                        <Link href='/dashboard' className="flex flex-col items-center gap-2">
                            <GiCash  size={25}/>
                            <span className='text-sm  text-gray-200'>پرداخت</span>
                        </Link>
                            </>
                        ) : <div></div>}
                        {userInfo && userInfo.role === "admin" ? (
                            <>
                             <Link href='/dashboard' className="flex flex-col items-center gap-2">
                            <FaRegUser  size={25}/>
                            <span className='text-sm  text-gray-200'>حساب</span>
                        </Link>
                        <Link href='/dashboard' className="flex flex-col items-center gap-2">
                            <IoMdNotificationsOutline  size={25}/>
                            <span className='text-sm  text-gray-200'>اعلانات</span>
                        </Link>
                        <Link href='/dashboard/admin' className="flex flex-col items-center gap-2">
                            <FiShoppingBag  size={25}/>
                            <span className='text-sm  text-gray-200'>سفارش ها</span>
                        </Link>
                            <Link href='/dashboard/admin' className="flex flex-col items-center gap-2">
                            <FaUsers  size={25}/>
                            <span className='text-sm  text-gray-200'>کاربران</span>
                        </Link>
                            <Link href='/dashboard/admin' className="flex flex-col items-center gap-2">
                            <BiMessageDetail  size={25}/>
                            <span className='text-sm  text-gray-200'>پیام ها</span>
                        </Link>
                            </>
                        ) : <div></div>}
                    </div>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <Link href='/' className="flex flex-col items-center mb-10">
                            <IoMdLogOut  size={25} className='text-red-500'/>
                            <span className='text-sm  text-red-500'>خروج</span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardSideNav;


