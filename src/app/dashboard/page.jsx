"use client";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserInfo } from '@/redux/user/userSlice';
import { fetchUserData } from '@/utils/userActions';
import { selectIsAuthenticated } from '@/redux/user/userSlice';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
// mui
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import DashboardSideNav from '@/components/DashboardSideNav';
import LinearProgress from '@mui/material/LinearProgress';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

//react icons
import { FaRegUser } from 'react-icons/fa6';
import { MdAlternateEmail } from 'react-icons/md';
import { FaSquarePhone } from 'react-icons/fa6';
import { RiLockPasswordLine } from 'react-icons/ri';
import { IoMdNotificationsOutline } from 'react-icons/io';
import DashboardLayout from '@/components/DashboardLayout';



const Dashboard = () => {

    const dispatch = useDispatch();
    const userInfo = useSelector(selectUserInfo);
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const router = useRouter();
    const [orders, setOrders] = useState([]);
    const [loadingOrders, setLoadingOrders] = useState(true);

    const [updateInfo, setUpdateInfo] = useState({
        username: userInfo?.username || '',
        email: userInfo?.email || '',
        phoneNumber: userInfo?.phoneNumber || '',
        password: '',
    });


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
                setLoadingOrders(true);
                const ordersResponse = await fetch('/api/dashboard/myOrders');
                if (ordersResponse.ok) {
                    const ordersData = await ordersResponse.json();
                    setOrders(ordersData.myOrders || []);
                } else {
                    console.error('Failed to fetch user orders:', ordersResponse.statusText);
                }
            } catch (error) {
                console.error('Error fetching user orders:', error.message);
            } finally {
                setLoadingOrders(false);
            }
        };

        fetchUserOrders();
    }, []);


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
                            <div className="w-full bg-[#171B24]  border-[1px] border-slate-700/30 shadow-md  rounded-xl py-5 sm:px-4 md:px-8 ">
                                <h1 className='my-10 text-2xl text-white '>سفارشات شما</h1>
                                {loadingOrders ? (
                                    <div className="flex items-center justify-center">
                                        <span>Loading orders...</span>
                                    </div>
                                ) : (
                                    <div>
                                        {orders.map((order) => (
                                            <div key={order._id} className=" w-[340px] sm:w-[340px] bg-[#23263e] flex flex-col gap-4 py-4 px-4 rounded-lg shadow-md border-gray-600/30 border-[1px]">
                                                <div className="flex w-full items-center justify-between">
                                                    <h1 className='text-xl'>{order.plan}</h1>

                                                    <p className={
                                                        order.status === 'completed' ? 'text-green-500 text-sm' :
                                                            order.status === 'pending' ? 'text-orange-500 text-sm' :
                                                                order.status === 'accepted' ? 'text-yellow-500 text-sm' :
                                                                    order.status === 'notAccepted' ? 'text-red-500 text-sm' :
                                                                        order.status === 'inProgress' ? 'text-blue-500 text-sm' :
                                                                            order.status === 'underReview' ? 'text-purple-500 text-sm' :
                                                                                order.status === 'canceled' ? 'text-gray-500 text-sm' : ''

                                                    }>{order.status}</p>
                                                </div>
                                                <div className="flex flex-col gap-[10px] my-5 min-h-[170px]">
                                                    {order.selectedFeatures.map((feature) => (
                                                        <div key={feature.name} className='bg-[#313250] rounded-md shadow-sm py-[4px] px-3'>
                                                            {feature.name}
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="flex flex-col gap-2 my-1 border-b-[1px] pb-4 border-gray-600/30">
                                                    <h1>وضعیت پرداخت :</h1>
                                                    <div className="w-full flex items-center justify-between">
                                                        <span className='text-gray-300 text-sm'>قسط اول : </span>
                                                        <p className='text-red-500 text-md'>پرداخت نشده</p>
                                                    </div>
                                                    <div className="w-full flex items-center justify-between">
                                                        <span className='text-gray-300 text-sm'>تسویه حساب :</span>
                                                        <p className='text-red-500 text-md'>پرداخت نشده</p>
                                                    </div>
                                                    <h1>وضعیت سفارش :</h1>
                                                <Box sx={{ display: 'flex', alignItems: 'center' , gap : "10px" }}>
                                                    <Box sx={{ width: '100%', mr: 1 }}>
                                                        <LinearProgress variant="determinate" color='secondary' value={order.orderProgress} sx={{ height: '10px', borderRadius: '5px' , backgroundColor : "#ded6ed" }} />
                                                    </Box>
                                                    <Box sx={{ minWidth: 35 }}>
                                                        <Typography variant="body2" color="text.white">{`${Math.round(order.orderProgress)}%`}</Typography>
                                                    </Box>
                                                </Box>
                                                </div>
                                                <div className="my-۲">
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <Link href={`/dashboard/order/${order._id}`} className='bg-[--color-secondary] py-[5px] px-4 rounded-md border-gray-400/40'>
                                                        مشاهده
                                                    </Link>
                                                    <p className='text-gray-200 text-md  '>تومان {order.totalPrice}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
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

