"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';


const Order = () => {


  const [plans, setPlans] = useState(null);
  const router = useRouter();


  useEffect(() => {
    const fetchPlansData = async () => {
      try {
        const plansData = await fetchPlans();
        setPlans(plansData);
      } catch (error) {
        console.error('Error fetching plans:', error);
      }
    };

    fetchPlansData();
  }, []);

  const renderPlans = () => {
    return plans.map((plan) => (
      <Link key={plan._id} href={`/features/${plan._id}`}>
        <div className='w-[200px] h-[200px] rounded-xl bg-white my-5 px-5 py-7 flex flex-col justify-between '>
          <h1 className='font-bold text-white text-xl'>{plan.name}</h1>
          <p>{plan.description}</p>
          <div className="flex items-center w-full justify-between ">
            <span>basePrice : </span>
            <span>${plan.basePrice}</span>
          </div>
        </div>
      </Link>
    ));
  };

  return (

      <div className=' py-10 px-10 w-full min-h-screen '>
        <div>
          <h1>Order Page</h1>

          {plans ? (
            <div>
              <h2>choose your plan </h2>
              <div className='flex flex-wrap gap-7'>
                {plans && plans.map((plan) => (
                  <Link key={plan._id} href={`/features/${plan._id}`}>
                  <div className='w-[200px] h-[200px] rounded-xl bg-white my-5 px-5 py-7 flex flex-col justify-between '>
                    <h1 className='font-bold text-white text-xl'>{plan.name}</h1>
                    <p>{plan.description}</p>
                    <div className="flex items-center w-full justify-between ">
                      <span>basePrice : </span>
                      <span>${plan.basePrice}</span>
                    </div>
                  </div>
                </Link>
                ))}
                </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center mt-[100px] gap-10 w-[30%] mx-auto ">
             
            </div>
          )}
        </div>
      </div>
  )
}

export default Order


const fetchPlans = async () => {
  const res = await fetch('/api/plans');
  const plansData = await res.json();
  return plansData.plans;
};