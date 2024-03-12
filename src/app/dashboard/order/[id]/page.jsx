"use client";

import DashboardLayout from '@/components/DashboardLayout';
import React, { useState, useEffect } from 'react';

const Order = ({ id }) => {
  const [order, setOrder] = useState(null);
  const [featureStatus, setFeatureStatus] = useState({});

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
          const handleStatusChange = async (e, featureId) => {
            const newStatus = e.target.value;
        
            try {
              const response = await fetch(`/api/admin/orders/${orderId}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ featureId, newStatus }),
              });
        
              if (response.ok) {
                const updatedOrder = await response.json();
                setOrder(updatedOrder.order);
        
                setFeatureStatus((prevStatus) => ({
                  ...prevStatus,
                  [featureId]: newStatus,
                }));
              } else {
                console.error('Failed to update feature status:', response.statusText);
              }
            } catch (error) {
              console.error('Error updating feature status:', error.message);
            }
          };
        } else {
          console.error('Failed to fetch order details:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching order details:', error.message);
      }
    };

    fetchOrderDetails();
  }, []);

  const handleStatusChange = async (e, featureId) => {
    const newStatus = e.target.value;

    try {
      const response = await fetch(`/api/admin/orders/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ featureId, newStatus }),
      });

      if (response.ok) {
        const updatedOrder = await response.json();
        setOrder(updatedOrder.order);

        setFeatureStatus((prevStatus) => ({
          ...prevStatus,
          [featureId]: newStatus,
        }));
        
      } else {
        console.error('Failed to update feature status:', response.statusText);
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
              <div className=''>
              <ul>
        {order.selectedFeatures.map((feature) => (
          <div key={feature._id}>
            {feature.name} - {feature.price} - Status:{' '}
            <select
              value={featureStatus[feature._id] || feature.status}
              onChange={(e) => handleStatusChange(e, feature._id)}
            >
              <option value="todo">Todo</option>
              <option value="inProgress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        ))}
      </ul>
              </div>

            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  )
}

export default Order

