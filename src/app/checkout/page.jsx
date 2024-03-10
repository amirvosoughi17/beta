"use client";
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const selectedFeatures = useSelector((state) => state.features.selectedFeatures);
  const totalPrice = useSelector((state) => state.features.totalPrice);
  const basePrice = useSelector((state) => state.features.basePrice);
  
  const calculatedTotalPrice = selectedFeatures.length > 0 ? totalPrice : basePrice;
  return (
    <div className=' w-full min-h-screen py-9 px-10'>
      <h1 className='text-center my-10 text-2xl'>Checkout Page</h1>
      <div className='flex flex-col items-center gap-5 py-10 px-10 bg-white rounded-xl'>
        <h2 className='text-xl font-semibold mb-5'>Selected Features:</h2>
        <ul>
          {selectedFeatures.map((feature) => (
            <li key={feature._id}>
              {feature.name} - ${feature.price}
            </li>
          ))}
        </ul>
        <p className='mt-5'>Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default Checkout;
