"use client";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserInfo } from '@/redux/user/userSlice';
import { fetchUserData } from '@/utils/userActions';
import { selectIsAuthenticated } from '@/redux/user/userSlice';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Loader2 } from "lucide-react"
import noOrder1 from '@/assets/no-order5.svg'
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
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegCircleDot } from "react-icons/fa6";
// shadcn 
import { Badge } from '@/components/ui/badge';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button';
import { Progress } from "@/components/ui/progress"
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';


const Dashboard = () => {

    const dispatch = useDispatch();
    const [notifications, setNotifications] = useState([]);
    const userInfo = useSelector(selectUserInfo);
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const router = useRouter();
    const [orders, setOrders] = useState([]);
    const [loadingOrders, setLoadingOrders] = useState(true);
    const [loadingNotifications, setLoadingNotifications] = useState(true);
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    const [ticketModal, setTicketModal] = useState(false);
    const [tickets, setTickets] = useState([]);
    const [noOrder, setNoOrder] = useState(orders.length === 0);


    const handelTicketModal = () => {
        setTicketModal(!ticketModal)
    }

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
                    setNoOrder(ordersData.myOrders.length === 0)
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/dashboard/tickets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ subject, description }),
            });
            const data = await response.json();
            console.log(data);
            if (response.ok) {
                setTicketModal(!ticketModal)
            }
        } catch (error) {
            console.error('Error creating ticket:', error);
        }
    };

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await fetch('/api/dashboard/tickets');
                const data = await response.json();
                setTickets(data.myTickets);
            } catch (error) {
                console.error('Error fetching tickets:', error);
            }
        };

        fetchTickets();
    }, []);

    const handleOrderClick = (orderId) => {
        router.push(`/dashboard/order/${orderId}`);
    };



    return (
        <DashboardLayout>
            <div className='py-5 px-2 sm:px-5 md:px-7 lg:py-10 lg:px-10 w-full min-h-screen   '>
                <div className="w-full  lg:w-[80%] xl:w-[85%] lg:mr-[220px] flex flex-col gap-6">
                    <div className="flex flex-col gap-4 w-full lg:w-[75%] mx-auto ">
                                <div className="flex flex-col  gap-3 border-b-[0.5px] border-zinc-700/60 pb-5">
                                    <p className='text-zinc-300 text-sm sm:text-md md:text-[14px] hover:text-white duration-300 font-light'>برای مشاهده وضعیت پروژه تیم ویکسل در هر مرحله پیامی به شما ارسال میکند که در بخش <Link href='/dashboard/notofications' className='text-blue-500 border-b-[0.7px] border-blue-500 pb-[2px]' >اعلانات </Link> قابل مشاهده است</p>
                                </div>
                                <div className="flex flex-col items- gap-3  mt-10 ">
                                    <h1 className='text-2xl text-gray-200 '>لیست سفارشات</h1>
                                    <p className='text-sm text-gray-400 '>برای مشاهده صفحه مربوط به سفارش روی سطر سفارش کلیک کنید</p>
                                </div>
                                <div className="h-full flex flex-col gap-5  mt-6">
                                    {loadingOrders ? (
                                        <div className='flex items-center justify-center '>
                                           <span className='text-md text-gray-200'>لطفا کمی صبر کنید</span>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        </div>
                                    ) : (
                                        <>
                                        <Table className="">
                                            <TableHeader className="bg-[#1b1b1b]">
                                                <TableRow className="">
                                                    <TableHead className="w-[150px] text-right">نوع سایت</TableHead>
                                                    <TableHead className="w-[250px] text-right">پیشرفت پروژه</TableHead>
                                                    <TableHead className="w-[200px] text-right">وضعیت پروژه</TableHead>
                                                    <TableHead className="text-right">قیمت نهایی</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody className="">
                                                {orders && orders.map((order) => (
                                                    <TableRow key={order._id} onClick={() => handleOrderClick(order._id)} className='cursor-pointer hover:bg-gray-600'>
                                                        <TableCell className="font-medium w-[100px] text-[17px] text-zinc-300">{order.plan}</TableCell>
                                                        <TableCell className="flex items-center h-[65px] gap-2 w-[200px]">
                                                            <span className='text-zinc-300 hover:text-white duration-300  tex-lg '>{`${Math.round(order.orderProgress)}%`}</span>
                                                            <Progress className='' value={order.orderProgress} />
                                                        </TableCell>
                                                        <TableCell className="text-[17px] text-zinc-300">
                                                            <Badge>
                                                                {order.status}
                                                            </Badge>
                                                        </TableCell>
                                                        <TableCell className="text-[17px] text-zinc-300">{order.totalPrice}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    <div className=" w-full flex items-center justify-between">
                                        <Link href='/order'>
                                            <Button>
                                                ثبت سفارش جدید
                                            </Button>
                                        </Link>
                                    </div>
                                        </>
                                    )}

                                </div>



                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;


{/* {ticketModal ? (
    <div className='fixed w-[95%] md:w-[600px] h-[600px] top-10 mx-auto bg-white text-black rounded-xl '>
        <div className=" relative flex flex-col items-center gap-3">
            <button onClick={handelTicketModal} className=' absolute top-4 left-4 text-3xl'>x</button>
            <form onSubmit={handleSubmit} className='flex flex-col items-center gap-4'>
                <div className='flex flex-col gap-2 py-10 '>
                    <label className='text-md text-gray-700' htmlFor="subject">Subject:</label>
                    <input
                        type="text"
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                        className='bg-zinc-600 rounded-md text-white'
                        />
                </div>
                <div className='flex flex-col gap-2 '>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className='bg-zinc-600 rounded-md text-white'
                        ></textarea>
                </div>
                <button type="submit" className='bg-zinc-600 py-2 px-5 rounded-md text-white'>Create Ticket</button>
            </form>
        </div>
    </div>
) : <></>} */}
{/* {orders && orders.length > 0 ? (
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
                    order.status === 'completed' ? 'bg-green-600 py-[4px] rounded-full px-4 text-sm flex  items-center gap-2' :
                    order.status === 'pending' ? 'bg-orange-600 py-[4px] rounded-full px-4  text-sm flex  items-center gap-2' :
                    order.status === 'accepted' ? 'bg-yellow-600 py-[4px] rounded-full px-4  text-sm flex  items-center gap-2' :
                    order.status === 'notAccepted' ? 'bg-red-600  py-[4px] rounded-full px-4 xt-sm flex items-center gap-2' :
                    order.status === 'inProgress' ? 'bg-blue-600  py-[4px] rounded-full px-4 ext-sm flex items-center gap-2' :
                    order.status === 'underReview' ? 'bg-purple-600 py-[4px] rounded-full px-4  text-sm flex  items-center gap-2' :
                    order.status === 'canceled' ? 'bg-gray-600 t py-[4px] rounded-full px-4 ext-sm flex items-center gap-2' : ''
                    
                }>
                {order.status}
                <FaRegCircleDot className='text-zinc-200' />
                </p>
                </div>
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
                )} */}
{/* <div className="flex flex-col  gap-3">
                <ul>
                {tickets &&  tickets.length > 0 ? (
                    tickets.map((ticket) => (
                        <Link href={`/dashboard/ticket/${ticket._id}`} className='bg-[#2a2a2a] my-2 ' key={ticket._id}>
                        <div>Subject: {ticket.subject}</div>
                        <div>Description: {ticket.description}</div>
                        </Link>
                        ))
                        ) : (
                            <>
                            <h1 className='mt-3'>
                            هنوز هیچ سوالی پرسیده نشده است
                            </h1>
                            <button onClick={handelTicketModal} className='bg-[--color-secondary] py-2 px-5 rounded-md w-[130px]'>پرسیدن سوال</button>
                            </>
                            )}
                            <button onClick={handelTicketModal} className='bg-[--color-secondary] py-2 px-5 rounded-md w-[130px]'>سوال جدید</button>
                            </ul>
                            
                        </div> */}


{/* <div className="flex flex-col gap-3 py-4 px-3 ">
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
                        </div> */}