"use client";
import React from 'react'
import Layout from '@/components/Layout'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectOrder } from '@/redux/user/userSlice';
// shadcn
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'


const Payment = () => {
  const order = useSelector(selectOrder); 

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const pathArray = window.location.pathname.split("/");
        const id = pathArray[pathArray.length - 1];
        
        const response = await fetch(`/api/orders/${id}`);
        if (response.ok) {
          const data = await response.json();
        } else {
          console.error('Failed to fetch order details:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching order details:', error.message);
      }
    };

    fetchOrderDetails();
  }, []);

  return (
    <Layout>
        <div className="min-h-screen w-full py-5 px-3 sm:py-6 sm:px-5 lg:px-10 lg:py-10">
            <Card className="w-[80%] mx-auto flex flex-col h-[650px] md:flex-row items-center mt-[50px]">
              <div className="w-full md:w-[50%] md:border-l-[0.8px] border-zinc-800 h-full p-5">f</div>
              <div className="w-full md:w-[50%] ">
                <span>
                {order && (
        <>
          <h1>Order Details</h1>
          <p>Order ID: {order._id}</p>
          <p>Order ID: {order.totalPrice}</p>
          {/* Display other order details as needed */}
        </>
      )}</span>
              </div>
            </Card>
        </div>
    </Layout>
  )
}

export default Payment