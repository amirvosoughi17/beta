"use client";

import DashboardLayout from '@/components/DashboardLayout';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserInfo } from '@/redux/user/userSlice';
import { fetchUserData } from '@/utils/userActions';
import moment from 'moment';
import 'moment/locale/fa';
//shadcn
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const Order = ({ id }) => {
  const [order, setOrder] = useState(null);
  const userInfo = useSelector(selectUserInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData())
  }, [dispatch]);

  useEffect(() => {
    const pathArray = window.location.pathname.split('/');
    const id = pathArray[pathArray.length - 1];

    const fetchOrderDetails = async () => {
      try {
        if (!id) {
          return;
        }
        const response = await fetch(`/api/admin/orders/${id}`);
        if (response.ok) {
          const data = await response.json();
          setOrder(data.order);

        } else {
          console.error('Failed to fetch order details:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching order details:', error.message);
      }
    };

    fetchOrderDetails();
  }, []);

  const handleStatusChange = async (featureId, newStatus) => {
    const orderId = order._id;
    try {
      const response = await fetch(`/api/admin/orders/${orderId}`);
      if (response.ok) {
        const data = await response.json();
        const order = data.order;

        const selectedFeature = order.selectedFeatures.find(
          (sf) => sf._id === featureId
        );

        if (!selectedFeature) {
          console.error('Selected feature not found in the order');
          return;
        }

        const updateResponse = await fetch(`/api/admin/orders/${orderId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            featureName: selectedFeature.name,
            newStatus: newStatus,
          }),
        });

        if (updateResponse.ok) {
          console.log('Feature status updated successfully!');
        } else {
          console.error('Failed to update feature status:', updateResponse.statusText);
        }
      } else {
        console.error('Failed to fetch order details:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating feature status:', error.message);
    }
  };



  if (!order) {
    return <p>Loading...</p>;
  }
  return (
    <DashboardLayout>
      <div className='p-2 sm:p-8 w-full  md:mt-0 mt-[70px]'>
        <div className="w-full lg:w-[80%] xl:w-[85%] lg:mr-[220px] md:mt-0 mt-[70px]">
          <div className="w-full  min-h-screen  py-5 sm:px-4 md:px-8 flex flex-col gap-5 ">
            <div className="flex w-full items-center justify-between border-b-[1px] border-zinc-800 pb-5 ">
              <h1 className=' flex flex-col gap-4'>
                <span className='text-2xl font-semibold text-white'>سایت {order.plan}</span>
                <div className='text-sm text-zinc-300 flex items-center gap-1'>
                  <span>تاریخ ایجاد :</span>
                  <span> {moment(order.createdAt).locale('fa').format('YYYY/MM/DD')}</span>
                </div>
              </h1>
              <Badge>{order.status}</Badge>
            </div>
            {/* <p>Support Time: {order.supportTime} months</p> */}
            <div className="w-full flex flex-col lg:flex-row items-start gap-6 ">
              <Card className='flex flex-col gap-3 w-full  lg:w-[55%] px-4 py-6'>
                <h1 className='text-2xl mb-7 mt-4 font-semibold text-white pr-4'>امکانات</h1>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between w-full px-4 border-b-[0.5px] border-zinc-800 pb-4">
                    <span className='text-zinc-300 text-sm font-medium'>نام امکان</span>
                    {userInfo && userInfo.role === 'admin' && (
                      <span className='text-zinc-300 text-sm font-medium'>وضعیت</span>
                    )}
                  </div>
                  {order.selectedFeatures.map((feature) => (
                    <div key={feature._id} className='py-4 px-3 '>
                      <div className="flex items-center justify-between ">
                        <span>{feature.name}</span>
                        {/* <span>تومان {feature.price.toLocaleString()}</span> */}
                        {userInfo && userInfo.role === 'admin' && (
                          <select
                            className=' bg-transparent text-white border-zinc-800 border-[1px] rounded-md py-2 px-2'
                            value={feature.status}
                            onChange={(e) => handleStatusChange(feature._id, e.target.value)}
                          >
                            <option value="todo">انجام نشده</option>
                            <option value="inProgress">درحال انجام</option>
                            <option value="completed">انجام شده</option>
                          </select>
                        )}
                        {userInfo && userInfo.role === 'user' && (
                          <Badge>{feature.status}</Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              <Card className="flex flex-col gap-3 w-full  lg:w-[45%] px-4 py-6">
                <h1 className='text-2xl mb-7 mt-4 font-semibold text-white pr-4'>وضعیت پروژه</h1>
                <div className="flex items-center flex-col gap-1 justify-center h-full w-full">
                  <span className="flex items-center justify-center relative rotate-45 duration-300">
                    <div className="w-[186px] h-[186px] lg:w-[165px] lg:h-[165px] rounded-full flex items-center justify-center bg-[#1e1e1e] rotate-[-45deg] absolute top- z-50">
                      <span className="text-white text-2xl">
                        {`${Math.round(order.orderProgress)}%`}
                      </span>
                    </div>
                    <Progress className='w-[210px] h-[210px] lg:w-[185px] lg:h-[185px] rounded-full flex items-center justify-center z-10 ' value={order.orderProgress} />
                  </span>
                  <h1 className='text-lg font-semibold  my-5'>{order.status}</h1>
                </div>
              </Card>
            </div>

          </div>
        </div>
      </div>
    </DashboardLayout >
  )
}

export default Order