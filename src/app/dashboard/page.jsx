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
import { Skeleton } from '@mui/material';
//react icons
import { FaRegUser } from 'react-icons/fa6';
import { MdAlternateEmail } from 'react-icons/md';
import { FaSquarePhone } from 'react-icons/fa6';
import { RiLockPasswordLine } from 'react-icons/ri';
import { IoMdNotificationsOutline } from 'react-icons/io';
import DashboardLayout from '@/components/DashboardLayout';
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegCircleDot } from "react-icons/fa6";


const Dashboard = () => {

    const dispatch = useDispatch();
    const [notifications, setNotifications] = useState([]);
    const userInfo = useSelector(selectUserInfo);
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const router = useRouter();
    const [orders, setOrders] = useState([]);
    const [loadingOrders, setLoadingOrders] = useState(true);
    const [loadingNotifications, setLoadingNotifications] = useState(true);


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

    useEffect(() => {
        fetchNotifications();
    }, []);

    const fetchNotifications = async () => {
        try {
            setLoadingNotifications(true);
            const response = await fetch('/api/dashboard/notifications');
            if (response.ok) {
                const data = await response.json();
                setNotifications(data.myNotifications);
            } else {
                console.error('Failed to fetch notifications:', response.statusText);
            }

        } catch (error) {
            console.error('Error fetching notifications:', error.message);
        } finally {
            setLoadingNotifications(false)
        }
    };

    const markNotificationAsRead = async (notificationId) => {
        try {
            const response = await fetch('/api/dashboard/notifications', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ notificationId }),
            });
            if (response.ok) {
                fetchNotifications();
            } else {
                console.error('Failed to mark notification as read:', response.statusText);
            }
        } catch (error) {
            console.error('Error marking notification as read:', error.message);
        }
    };




    return (
        <DashboardLayout>
            <div className='py-5 px-3 sm:px-5 md:px-7 lg:py-10 lg:px-10 w-full  bg-[#1E1E1E] '>
                <div className="w-full  lg:w-[80%] xl:w-[85%] lg:mr-[210px] flex flex-col gap-6">
                    <div className="w-full  rounded-xl lg:px-0">
                        <div className="flex xl:flex-row flex-col items- gap-[25px] py- w-full   lg:gap-[20px] ">
                            <div className="flex flex-col md:flex-row items-center xl:py-[15px] md:items-start justify-center md:py-[50px] md:px-[20px] gap-[25px] lg:gap-[30px] xl:gap-[35px] bg-[#171717] w-full xl:w-[63%]  rounded-2xl ">
                                {orders && orders.length > 0 ? (
                                    <>
                                        {loadingOrders ? (
                                            <div className="flex flex-col gap-5 mt-5">
                                                <Skeleton animation="wave" variant="rectangular" width="20%" height={40} className='bg-zinc-800/80 mb-6' />
                                                <Skeleton animation="wave" variant="rectangular" width="100%" height={300} className='bg-zinc-800/80' />
                                                <Skeleton animation="wave" variant="rectangular" width="100%" height={300} className='bg-zinc-800/80' />
                                            </div>
                                        ) : (
                                            <div>
                                                <h1 className='my-7 text-2xl text-gray-200 font-semibold' >سفارشات شما</h1>
                                                <div className='flex flex-wrap gap-5'>
                                                    {orders.map((order) => (
                                                        <div key={order._id} id='orders' className=" w-[340px] sm:w-[97%] bg-[#2C2C2C] flex flex-col gap-4 py-4 px-4 rounded-lg shadow-md border-gray-600/30 border-[1px]">
                                                            <div className="flex w-full items-center justify-between">
                                                                <h1 className='text-xl'>{order.plan}</h1>

                                                                <p className={
                                                                    order.status === 'completed' ? 'bg-green-600 py-[4px] rounded-full px-4 text-sm flex items-center gap-2' :
                                                                        order.status === 'pending' ? 'bg-orange-600 py-[4px] rounded-full px-4  text-sm flex items-center gap-2' :
                                                                            order.status === 'accepted' ? 'bg-yellow-600 py-[4px] rounded-full px-4  text-sm flex items-center gap-2' :
                                                                                order.status === 'notAccepted' ? 'bg-red-600  py-[4px] rounded-full px-4 xt-sm flex items-center gap-2' :
                                                                                    order.status === 'inProgress' ? 'bg-blue-600  py-[4px] rounded-full px-4 ext-sm flex items-center gap-2' :
                                                                                        order.status === 'underReview' ? 'bg-purple-600 py-[4px] rounded-full px-4  text-sm flex items-center gap-2' :
                                                                                            order.status === 'canceled' ? 'bg-gray-600 t py-[4px] rounded-full px-4 ext-sm flex items-center gap-2' : ''

                                                                }>
                                                                    {order.status}
                                                                    <FaRegCircleDot className='text-zinc-200' />
                                                                </p>
                                                            </div>
                                                            {/* <div className="flex flex-wrap items-start  gap-[10px] my-5 min-h-[100px] ">
                    {order.selectedFeatures.map((feature) => (
                        <div key={feature.name} className='bg-[#313250] rounded-md shadow-sm py-[4px] w-[310px] flex items-center justify-center '>
                            {feature.name}
                        </div>
                    ))}
                </div> */}
                                                            <div className="flex flex-col gap-2 my-1 border-b-[1px] pb-4 border-gray-600/30">
                                                                <h1 className='md:text-xl text-lg text-white my-3 '>وضعیت پرداخت :</h1>
                                                                <div className="w-full flex items-center justify-between">
                                                                    <span className='text-gray-300 text-sm'>قسط اول : </span>
                                                                    <p className='text-red-500 text-md'>پرداخت نشده</p>
                                                                </div>
                                                                <div className="w-full flex items-center justify-between">
                                                                    <span className='text-gray-300 text-sm'>تسویه حساب :</span>
                                                                    <p className='text-red-500 text-md'>پرداخت نشده</p>
                                                                </div>
                                                                <h1 className='md:text-xl text-lg text-white my-2'>وضعیت سفارش :</h1>
                                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: "10px" }}>
                                                                    <Box sx={{ width: '100%', mr: 1 }}>
                                                                        <LinearProgress variant="determinate" color='secondary' value={order.orderProgress} sx={{ height: '10px', borderRadius: '5px', backgroundColor: "#ded6ed" }} />
                                                                    </Box>
                                                                    <Box sx={{ minWidth: 35 }}>
                                                                        <Typography variant="body2" color="text.white">{`${Math.round(order.orderProgress)}%`}</Typography>
                                                                    </Box>
                                                                </Box>
                                                            </div>
                                                            <div className="">
                                                            </div>
                                                            <div className="flex items-center justify-between my-">
                                                                <Link href={`/dashboard/order/${order._id}`} className='bg-[--color-secondary]  py-[8px] px-4 rounded-md border-gray-400/40'>
                                                                    مشاهده سفارش
                                                                </Link>
                                                                <p className='text-gray-200 text-md  '>تومان {order.totalPrice}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                    </>
                                ) : (
                                    <div className="flex flex-col py-4 px-4">
                                        <h1 className='my-7 text-2xl text-gray-200 font-semibold' >سفارشات شما</h1>
                                        <div className="flex  items-center gap-2">
                                            <h1 className='text-lg'>متاسفانه شما هنوز هیچ سفارشی ثبت نکرده اید</h1>
                                            <span className='text-2xl'>&#x1F613;</span>
                                        </div>
                                        <h1 className='my-3'>برای ثبت سفارش اینجا کلیک کنید </h1>
                                        <div className="mt-3">
                                        <Link href='/order' className='bg-[--color-secondary] py-[7px] px-5 rounded-md'>شروع کنید</Link>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col  w-full xl:w-[37%] h-[500px] ">
                                <div className="w-full h-full bg-[#171717] rounded-2xl overflow-y-auto ">
                                    <div className="flex flex-col gap-3 py-4 px-3 ">
                                        <h1 className=' text-2xl text-gray-200 font-semibold px-3 border-b-[1px] border-gray-700/60 pb-3' >اعلانات</h1>
                                        {loadingNotifications ? (
                                            <div className='flex flex-col gap-1'>
                                                <div className="flex flex-col gap-3 py-4 px-3">
                                                    <div className="flex items-center  gap-3">
                                                        <Skeleton animation="wave" variant="circular" width={40} height={40} className='bg-zinc-800/80' />
                                                        <Skeleton animation="wave" variant="rectangular" width="40%" height={40} className='bg-zinc-800/80' />
                                                    </div>
                                                    <Skeleton animation="wave" variant="rectangular" width="100%" height={70} className='bg-zinc-800/80' />
                                                </div>
                                                <div className="flex flex-col gap-3 py-4 px-3">
                                                    <div className="flex items-center  gap-3">
                                                        <Skeleton animation="wave" variant="circular" width={40} height={40} className='bg-zinc-800/80' />
                                                        <Skeleton animation="wave" variant="rectangular" width="40%" height={40} className='bg-zinc-800/80' />
                                                    </div>
                                                    <Skeleton animation="wave" variant="rectangular" width="100%" height={70} className='bg-zinc-800/80' />
                                                </div>
                                            </div>
                                        ) : (
                                            <div>
                                                {notifications.map((notification) => (
                                                    <>
                                                        <div key={notification._id} className='w-[98%] min-h-[70px]  lg:py-5 lg:px-8 xl:py-3 xl:px-4  sm:py-4 sm:px-6 py-3 px-5 rounded-md border-b-[1px] border-gray-500/50 flex  '  >
                                                            <div className="flex flex-col gap-3 w-full h-full">
                                                                <div className="flex items-start justify-between gap-2  w-full">
                                                                    <div className="flex items-center gap-3">
                                                                        <div className="bg-[--color-secondary] p-[4px] rounded-lg">
                                                                            <IoMdNotificationsOutline className='text-lg md:text-2xl text-white' />
                                                                        </div>
                                                                        <h1 className='text-lg sm:text-xl font-semibold text-white'>سفارش جدید</h1>
                                                                    </div>
                                                                    <div className="">
                                                                        {!notification.isRead && (
                                                                            <button onClick={() => markNotificationAsRead(notification._id)} >
                                                                                <RiDeleteBinLine className='text-xl text-red-500' />
                                                                            </button>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                <p className='text-slate-200 text-[14px] sm:text-[16px]  w-[90%] md:text-[18px] '>{notification.message}</p>
                                                            </div>
                                                        </div>
                                                    </>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;

