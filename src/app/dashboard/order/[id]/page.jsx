"use client";

import DashboardLayout from '@/components/DashboardLayout';
import React, { useState, useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { selectUserInfo } from '@/redux/user/userSlice';
import { fetchUserData } from '@/utils/userActions';

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
    <div>
      <DashboardLayout>
        <div className='p-2 sm:p-8 w-full  bg-[#0D0F14]'>
          <div className="w-full mr-0 lg:w-[90%] lg:mr-[140px] flex flex-col gap-6">
            <div className="w-full bg-[#171B24] min-h-screen border-[1px] border-slate-700/30 shadow-md   rounded-xl py-5 sm:px-4 md:px-8 flex flex-col gap-5 ">
              <div className="flex w-full items-center justify-between">
                <h1 className='text-2xl font-semibold text-white'>{order.plan}</h1>
                <span className={
                  order.status === 'completed' ? 'text-green-500 text-sm' :
                    order.status === 'pending' ? 'text-orange-500 text-sm' :
                      order.status === 'accepted' ? 'text-yellow-500 text-sm' :
                        order.status === 'notAccepted' ? 'text-red-500 text-sm' :
                          order.status === 'inProgress' ? 'text-blue-500 text-sm' :
                            order.status === 'underReview' ? 'text-purple-500 text-sm' :
                              order.status === 'canceled' ? 'text-gray-500 text-sm' : ''

                }>{order.status}</span>
              </div>
              {/* <p>Support Time: {order.supportTime} months</p> */}
              <h1>قابلیت های انتخاب شده</h1>
              <div className='flex flex-col gap-3'>
              {order.selectedFeatures.map((feature) => (
                  <div key={feature._id}>
                    <div className="flex items-center justify-between py-2 px-4 rounded-md bg-[#232836]">
                      <span>{feature.name}</span>
                      <span>{feature.price}</span>
                      {userInfo && userInfo.role === 'admin' && (
                        <select
                        className=' bg-transparent text-white border-gray-400/60'
                          value={feature.status}
                          onChange={(e) => handleStatusChange(feature._id, e.target.value)}
                        >
                          <option value="todo">To Do</option>
                          <option value="inProgress">In Progress</option>
                          <option value="completed">Completed</option>
                        </select>
                      )}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  )
}

export default Order