"use client";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo, selectUsers, selectUserInfo } from '@/redux/user/userSlice';
import { fetchUserData } from '@/utils/userActions';
import { fetchAllUsers } from '@/utils/userActions';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
//mui
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import DashboardLayout from '@/components/DashboardLayout';

const Admin = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);
  const router = useRouter();
  const users = useSelector(selectUsers);
  const [orders, setOrders] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    basePrice: '',
    description: '',
    features: [],
  });
  const [featureData, setFeatureData] = useState({
    featureName: '',
    featurePrice: '',
  });
  const [tickets, setTickets] = useState([]);



  useEffect(() => {
    dispatch(fetchUserData())
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchUserData());
    dispatch(fetchAllUsers());
  }, [dispatch]);

  useEffect(() => {
    if (userInfo && userInfo.role !== 'admin') {
      router.push('/login');
    }
  }, [userInfo, router]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFeatureChange = (e) => {
    setFeatureData({
      ...featureData,
      [e.target.name]: e.target.value,
    });
  };

  const addFeature = () => {
    setFormData({
      ...formData,
      features: [
        ...formData.features,
        {
          name: featureData.featureName,
          price: parseFloat(featureData.featurePrice),
        },
      ],
    });
    setFeatureData({
      featureName: '',
      featurePrice: '',
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {
      const res = await fetch('/api/plans', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.ok) {
        console.log('Plan added successfully!');
        router.refresh();
        alert("plan created successFully")
      } else {
        console.error('Failed to add plan:', res.statusText);
      }
    } catch (error) {
      console.error('Failed to add plan:', error);
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await fetch('/api/admin/orders');
      if (response.ok) {
        const data = await response.json();
        setOrders(data.orders);
        console.log(data);
      } else {
        console.error('Failed to fetch orders:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching orders:', error.message);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch('/api/admin/tickets');
        const data = await response.json();
        setTickets(data.tickets);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    fetchTickets();
  }, []);

  return (
    <DashboardLayout>
      <div className='p-2 sm:p-8 w-full  bg-[#0D0F14]'>
        <div className="w-full  lg:w-[80%] xl:w-[85%] lg:mr-[210px]   flex flex-col gap-6">
          <div className="w-full bg-[#171B24] h-screen overflow-y-auto border-[1px] border-slate-700/30 shadow-md rounded-xl py-7 px-5 lg:px-4 xl:px-8">
            <h2 className="text-2xl font-bold text-white mb-5">سفارشات</h2>
            {orders.length > 0 ? (
              <div className='flex flex-wrap gap-6'>
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
                      <h1 className='text-white  '>اطلاعات کاربر</h1>
                      <div className="flex items-center justify-between w-full">
                        <span className='text-gray-300 text-sm '>نام کاربری :</span>
                        <p className='text-gray-200 text-md '>{order?.user?.username}</p>
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <span className='text-gray-300 text-sm '>شماره تماس :</span>
                        <p className='text-gray-200 text-md '>{order?.user?.phoneNumber}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Link href={`/dashboard/order/${order._id}`} className='bg-[--color-secondary] py-[5px] px-4 rounded-md border-gray-400/40'>
                        مشاهده
                      </Link>
                      <p className='text-gray-200 text-md '>تومان {order.totalPrice}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-white">loading...</p>
            )}
          </div>
          <div id='tickets' className="w-full bg-[#171B24]  overflow-y-auto border-[1px] border-slate-700/30 shadow-md  rounded-xl py-5 px-3 sm:px-4 md:px-8 ">
          <ul className='flex flex-wrap gap-4'>
        {tickets?.map((ticket) => (
          <Link href={`/dashboard/ticket/${ticket._id}`} className='bg-[#404040] py-2 px-4 rounded-md' key={ticket._id}>
            <div>Subject: {ticket.subject}</div>
            <div>Description: {ticket.description}</div>
          </Link>
        ))}
      </ul>
          </div>
          <div className="w-full bg-[#171B24]  overflow-y-auto border-[1px] border-slate-700/30 shadow-md  rounded-xl py-5 px-3 sm:px-4 md:px-8 ">
            <div className="">
              <h2 className='text-xl font-bold text-white'>پلن را اضافه کنید</h2>
              <form onSubmit={handleSubmit} className='flex w-full justify-start md:gap-[90px] lg:gap-[120px]  flex-wrap  gap-6 my-10 '>
                <div className="flex flex-col gap-5 ">
                  <div className="flex flex-col items-start gap-3">
                    <label className='text-lg  text-gray-200'>
                      نام پلن :
                    </label>
                    <input
                      className='bg-[#3a3e60] border-[1px] border-gray-500/40 px-5 py-[7px] w-[310px]  rounded-md'
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col items-start gap-3">
                    <label className='text-lg  text-gray-200'>
                      قیمت پایه :
                    </label>
                    <input
                      className='bg-[#3a3e60] border-[1px] border-gray-500/40 px-5 py-[7px] w-[310px]  rounded-md'
                      type="text"
                      name="basePrice"
                      value={formData.basePrice}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col items-start gap-3">
                    <label className='text-lg  text-gray-200'>
                      توضیحات :
                    </label>
                    <textarea
                      className='bg-[#3a3e60] border-[1px] border-gray-500/40 px-5 py-[7px] w-[310px]  rounded-md'
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={5}
                    />
                  </div>
                  <button className='bg-[--color-secondary] text-white px-5 py-[11px] rounded-md ' type="submit">افزدون پلن</button>

                </div>
                <div className="flex flex-col gap-4">
                  <h2 className='text-2xl mt-10'>امکانات</h2>
                  {formData.features.map((feature, index) => (
                    <div key={index} className='my- bg-[--color-secondary] px-7 py-2 rounded-md'>
                      <p>{feature.name} - ${feature.price}</p>
                    </div>
                  ))}
                  <div className="flex flex-col items-start gap-3">
                    <label className='text-lg  text-gray-200'>
                      نام :
                    </label>
                    <input
                      className='bg-[#3a3e60] border-[1px] border-gray-500/40 px-5 py-[7px] w-[310px]  rounded-md'
                      type="text"
                      name="featureName"
                      value={featureData.featureName}
                      onChange={handleFeatureChange}
                    />

                  </div>
                  <div className="flex flex-col items-start gap-3">
                    <label className='text-lg  text-gray-200'>
                      قیمت :‌
                    </label>
                    <input
                      className='bg-[#3a3e60] border-[1px] border-gray-500/40 px-5 py-[7px] w-[310px]  rounded-md'
                      type="text"
                      name="featurePrice"
                      value={featureData.featurePrice}
                      onChange={handleFeatureChange}
                    />
                  </div>
                  <button className='bg-[--color-secondary] text-white px-5 py-3 mt-2 rounded-md ' type="button" onClick={addFeature}>
                    افزدون
                  </button>

                </div>
                <br />
              </form>

            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Admin;

