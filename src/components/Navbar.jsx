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
// mui 
import Avatar from '@mui/material/Avatar';
import { deepPurple, deepOrange, pink, green } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';

const ITEM_HEIGHT = 48;


const Navbar = () => {

    const dispatch = useDispatch();
    const userInfo = useSelector(selectUserInfo);
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const router = useRouter();


    const [anchorEl, setAnchorEl] = useState(null);
    const [menu, setMenu] = useState(null);
    const openMenu = Boolean(menu);
    const open = Boolean(anchorEl);



    const handleClickMenu = (even) => {
        setMenu(even.currentTarget);
    };
    const handleCloseMenu = () => {
        setMenu(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        dispatch(fetchUserData());
    }, [dispatch]);

    const handleLogout = async () => {
        try {
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
        }
    };

    return (
        <header className='flex items-center justify-center'>
            <div className="lg:order-2 w-[95%] h-[60px] sm:w-[89%] sm:h-[68px] md:w-[80%] md:h-[70px] lg:w-[65%] lg:h-[70px] bg-[#1a1e29ba] fixed top-6 rounded-full   py-5 px-1 lg:px-[6px] flex items-center justify-between backdrop-blur-xl duration-200">

                <div className="flex items-center gap-[40px] ">
                    <div className="block mr-1">
                        <Image
                            src={navLogo}
                            alt='logo'
                            width={50}
                            height={50}
                            className='md:w-[43px] md:h-[43px] mr-[10px] lg:w-[45px] lg:h-[45px] w-[40px] h-[40px] mt-[2px]    md:mt-[1.5px]'
                        />
                    </div>
                    {/* <nav className='hidden xl:flex items-center gap-[9px] mr-1 '>
                        <Link href='/' className=' bg-[#32374758] rounded-full  hover:bg-[--color-secondary] py-[13px] px-[13px] duration-300 flex items-center justify-center gap-1 shadow-sm hover:shadow-md'>
                            <span className='text-[15px]  text-slate-300 hover:text-white duration-150'>ثبت سفارش</span>
                        </Link>
                        <Link href='/' className='  bg-[#32374758] rounded-full  hover:bg-[--color-secondary] py-[13px] px-[13px] duration-300 flex items-center justify-center gap-1 shadow-sm hover:shadow-md'>
                            <span className='text-[15px]  text-slate-300 hover:text-white duration-150'>طراحی سایت</span>
                            <MdOutlineKeyboardArrowDown  size={20} className='text-slate-300'/>
                        </Link>
                        <Link href='/' className=' bg-[#32374758] rounded-full  hover:bg-[--color-secondary] py-[13px] px-[13px] duration-300 flex items-center justify-center gap-1 shadow-sm hover:shadow-md'>
                            <span className='text-[15px]  text-slate-300 hover:text-white duration-150'>ارتباط با ما</span>
                            <MdOutlineKeyboardArrowDown  size={20} className='text-slate-300'/>
                        </Link>
                    </nav> */}
                </div>
                <div className="flex items-center gap-">
                <div className="flex items-center ">
                    {isAuthenticated ? (
                        <React.Fragment>
                            {/* <Link href='/dashboard#notifications' className='hidden md:block'>
                            <Box sx={{ color: 'action.active' }}>
                                <Badge color="info" badgeContent={0} className='cursor-pointer bg-transparent text-white border-[1px] border-gray-400 py-[10px] px-[10px]  rounded-full'>
                                    <IoIosNotificationsOutline  size={26} className='text-gray-400'/>
                                </Badge>
                            </Box>
                            </Link> */}
                            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', fontFamily: "vazirmatn" }}>
                                <Tooltip title="حساب شخصی">
                                    <IconButton
                                        onClick={handleClick}
                                        size="small"
                                        sx={{ ml: -1 }}
                                        aria-controls={open ? 'account-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                    >
                                        <Avatar className='bg-[#383f5358] w-[45px] h-[45px] md:w-[50px] md:h-[50px]'> <LuUser/></Avatar>
                                    </IconButton>
                                </Tooltip>

                            </Box>
                            <Menu

                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        fontFamily: "vazirmatn",
                                        backgroundColor: "#1a1e29e4",
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 2,
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 2,
                                        },
                                        '&::before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            left: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}

                            >
                                <MenuItem onClick={handleClose} >
                                    <div className='flex items-center gap-5 text-white ml-10 my-[5px] mt-4'>
                                        <Avatar sx={{ bgcolor: deepPurple[500] }} >{userInfo?.username.charAt(0).toUpperCase()}</Avatar>
                                        <Link href='/dashboard' style={{ fontFamily: "vazirmatn", fontSize: "17px" }}>پروفایل</Link>
                                    </div>
                                </MenuItem>

                                <MenuItem onClick={handleClose}>
                                    <div className="flex items-center gap-5 text-white ml-10 my-[5px]">
                                        <Avatar sx={{ bgcolor: deepOrange[500] }} ><MdOutlineNotificationsActive /></Avatar>
                                        <Link href='/dashboard' style={{ fontFamily: "vazirmatn", fontSize: "17px" }}>اعلان ها</Link>
                                    </div>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <div className="flex items-center gap-5 text-white ml-10 my-[5px]">
                                        <Avatar sx={{ bgcolor: pink[500] }} ><FiShoppingBag /></Avatar>
                                        <span style={{ fontFamily: "vazirmatn", fontSize: "17px" }}>سفارشات</span>
                                    </div>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <div className="flex items-center gap-5 text-white ml-10 my-[5px] mb-4">
                                        <Avatar sx={{ bgcolor: green[500] }}><BiMessageDetail /></Avatar>
                                        <span style={{ fontFamily: "vazirmatn", fontSize: "17px" }}>پیام ها</span>
                                    </div>
                                </MenuItem>
                                <Divider style={{ backgroundColor: "#9CA5B5" }} />
                                <MenuItem onClick={handleClose}>
                                    <button onClick={handleLogout} className="flex items-center gap-2 bg-red-500 text-white py-2 px-4 rounded-xl mb-1 ">
                                        <IoLogOutOutline size={25} />
                                        <span style={{ fontFamily: "vazirmatn", fontSize: "17px" }}>خروج</span>
                                    </button>
                                </MenuItem>
                            </Menu>
                        </React.Fragment>
                    ) : (
                        <div className="flex items-center gap-3">
                            <Link href='/login' className='bg-[--color-secondary]  py-[10px] px-5 rounded-full'>
                                ورود
                            </Link>
                        </div>
                    )}
                </div>

                    <div className="flex items-center gap-1 ">
                        <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClickMenu}
                        >
                            <div className=" flex items-center justify-center bg-[#383f5358] rounded-full text-white  mr-[px]  py-[10px] px-[10px]  ">
                                <BiMenu className='md:text-3xl text-[25px] text-gray-300' />
                            </div>
                        </IconButton>
                        <Menu
                            id="long-menu"
                            MenuListProps={{
                                'aria-labelledby': 'long-button',
                            }}
                            anchorEl={menu}
                            open={openMenu}
                            onClose={handleCloseMenu}
                            PaperProps={{
                                style: {
                                    maxHeight: ITEM_HEIGHT * 20.5,
                                    width: '35ch',
                                    backgroundColor: "#1a1e29e4",
                                    borderRadius: "10px"
                                },
                            }}
                        >
                            <div className="flex flex-col  gap-2 my-5 py-5 ">
                                <nav className='flex flex-col items-start gap-1 my-4'>
                                    <Link onClick={handleCloseMenu} href='/' className='flex items-center gap-4 text-[19px] text-white duration-200 hover:bg-gray-900 py-2 px-4 rounded-full'>
                                        <AiOutlineHome size={26} className='text-zinc-200' />
                                        <span>صفحه اصلی</span>
                                    </Link>
                                    <Link onClick={handleCloseMenu} href='/' className='text-[19px] flex items-center gap-4 text-white duration-200 hover:bg-gray-900 py-2 px-4 rounded-full'>
                                        <MdWeb size={26} className='text-rose-600' />
                                        <span>طراحی سایت</span>
                                    </Link>
                                    <Link onClick={handleCloseMenu} href='/' className='text-[19px] flex items-center gap-4 text-white duration-200 hover:bg-gray-900 py-2 px-4 rounded-full'>
                                        <CiBoxes size={26} className='text-violet-600' />
                                        <span>خدمات</span>
                                    </Link>
                                    <Link onClick={handleCloseMenu} href='/' className='text-[19px] flex items-center gap-4 text-white duration-200 hover:bg-gray-900 py-2 px-4 rounded-full'>
                                        <FaQuestionCircle size={26} className='text-orange-600' />
                                        <span>سوالات متداول</span>
                                    </Link>
                                    <Link onClick={handleCloseMenu} href='/' className='text-[19px] flex items-center gap-4 text-white duration-200 hover:bg-gray-900 py-2 px-4 rounded-full'>
                                        <FaPhone size={26} className='text-teal-600' />
                                        <span>تماس با ما</span>
                                    </Link>
                                </nav>
                                <Divider style={{ backgroundColor: "#9CA5B5" }} />
                                <div className="">

                                </div>
                            </div>
                        </Menu>
                    </div>
                </div>

            </div>
        </header>

    )
}

export default Navbar

