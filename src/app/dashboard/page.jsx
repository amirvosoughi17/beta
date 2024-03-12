"use client";

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectUserInfo } from '@/redux/user/userSlice';
import { fetchUserData } from '@/utils/userActions';
import { selectIsAuthenticated } from '@/redux/user/userSlice';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
// mui
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import DashboardSideNav from '@/components/DashboardSideNav';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
// react icons 
import { FaRegUser } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import DashboardLayout from '@/components/DashboardLayout';


const Dashboard = () => {

    const dispatch = useDispatch();
    const userInfo = useSelector(selectUserInfo);
    const isAuthenticated = useSelector(selectIsAuthenticated)
    const router = useRouter();
    const [orders, setOrders] = useState([]);

    const [updateInfo, setUpdateInfo] = useState({
        username: userInfo?.username || "",
        email: userInfo?.email || "",
        phoneNumber: userInfo?.phoneNumber || "",
        password: "",
    })



    useEffect(() => {
        dispatch(fetchUserData())
    }, [dispatch]);

    useEffect(() => {
        if (!isAuthenticated) {

        }
    }, [isAuthenticated, router]);

    useEffect(() => {
    
        const fetchUserOrders = async () => {
          try {
            const ordersResponse = await fetch(`/api/orders/[id]`);
            const ordersData = await ordersResponse.json();
            setOrders(ordersData.userOrders);
          } catch (error) {
            console.error('Error fetching user orders:', error.message);
          } 
        };

        fetchUserOrders();
      }, []);


    const renderWelcomeMessage = () => {
        if (userInfo?.role === 'admin') {
            return <div className='mt-10 flex flex-col gap-4'>
                <p>Welcome {userInfo?.username}, you are an admin!</p>
                <Link className='bg-violet-300 py-1 px-3 rounded-xl w-[160px] ' href='/dashboard/admin'>manage your app</Link>
            </div>;
        } else if (userInfo) {
            return <p>Welcome {userInfo?.username}!</p>;
        } else {
            return null;
        }
    };


    return (
        <DashboardLayout>
        <div className='py-10 px-10 w-full min-h-screen bg-[#0D0F14]'>
            {userInfo ? (
                <>
                    <div className="w-full mr-0 lg:w-[90%] lg:mr-[140px]   md:h-[740px] flex flex-col gap-6">
                        <div className="w-full bg-[#171B24] md:h-[250px] border-[1px] border-slate-700/30 shadow-md rounded-xl py-7 px-5 lg:px-4 xl:px-8">
                            <div className="flex flex-col md:flex-row items-center gap-[25px] lg:gap-[30px] xl:gap-[20px]">
                                <div className="flex gap-4 md:mr-[40px] lg:mr-[60px]">
                                    <Avatar sx={{ bgcolor: deepPurple[500], width: 120, height: 120 }}> <span className='text-4xl'>{userInfo?.username.charAt(0).toUpperCase()}</span></Avatar>
                                </div>
                                <div className="flex items-center justify-center gap-5 md:gap-4 lg:gap-4 xl:gap-7  flex-wrap">
                                    <div className="flex flex-col justify-between gap-4">
                                        <label className='flex items-center gap-2 text-gray-200'>
                                            <FaRegUser size={18} />
                                            <span>نام کاربری :</span>
                                        </label>
                                        <h2 className='lg:w-[240px] lg:h-[35px] md:w-[220px] md:h-[33px] w-[300px] h-[45px] xl:w-[280px] xl:h-[38px] bg-[#1B1D31] px-5 py-2 rounded-md'>{userInfo?.username}</h2>
                                    </div>
                                    <div className="flex flex-col justify-between gap-4">
                                        <label className='flex items-center gap-2 text-gray-200'>
                                            <MdAlternateEmail size={18} />
                                            <span>ایمیل :</span>
                                        </label>
                                        <h2 className='lg:w-[240px] lg:h-[35px] md:w-[220px] md:h-[33px] w-[300px] h-[45px] xl:w-[280px] xl:h-[38px] bg-[#1b1d31b9] px-5 py-2 rounded-md'>{userInfo?.email}</h2>
                                    </div>
                                    <div className="flex flex-col justify-between gap-4">
                                        <label className='flex items-center gap-2 text-gray-200'>
                                            <FaSquarePhone size={18} />
                                            <span>شماره تماس :</span>
                                        </label>
                                        <h2 className='lg:w-[240px] lg:h-[35px] md:w-[220px] md:h-[33px] w-[300px] h-[45px] xl:w-[280px] xl:h-[38px] bg-[#1B1D31] px-5 py-2 rounded-md'>{userInfo?.phoneNumber}</h2>
                                    </div>
                                    <div className="flex flex-col justify-between gap-4">
                                        <label className='flex items-center gap-2 text-gray-200'>
                                            <RiLockPasswordLine size={18} />
                                            <span> رمز عبور :</span>
                                        </label>
                                        <h2 className='lg:w-[240px] lg:h-[35px] md:w-[220px] md:h-[33px] w-[300px] h-[45px] xl:w-[280px] xl:h-[38px] bg-[#1B1D31] px-5 py-2 rounded-md'>-----------</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full bg-[#171B24] min-h-[450px] overflow-y-auto border-[1px] border-slate-700/30 shadow-md  rounded-xl py-5 sm:px-4 md:px-8 ">
                        <ul>
                    {orders && orders.map((order) => (
                      <li key={order._id}>
                        <Link href={`/orders/${order._id}`}>
                          <a>{`Order ID: ${order._id}`}</a>
                        </Link>

                      </li>
                    ))}
                  </ul>
                        </div>
                    </div>
                </>
            ) : (
                <div className="flex flex-col gap-5 mx-auto  items-center justify-center mt-[200px] w-[200px]">
                    <span>لطفا منتظر بمانید !</span>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="query" />
                    </Box>
                </div>
            )}
        </div>
        </DashboardLayout>
    );
};

export default Dashboard;

