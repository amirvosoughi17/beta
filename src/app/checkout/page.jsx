"use client"
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Layout from '@/components/Layout';
import { toast } from "sonner"


const Checkout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOrderSent, setIsOrderSent] = useState(false);
  const selectedFeatures = useSelector((state) => state.features.selectedFeatures);
  const necessaryFeatures = useSelector((state) => state.features.necessaryFeatures);
  const allFeatures = [...selectedFeatures, ...necessaryFeatures];
  const totalPrice = useSelector((state) => state.features.totalPrice);
  const planName = useSelector((state) => state.features.planName);
  const router = useRouter();

  const sendOrderToServer = async () => {
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planName,
          selectedFeatures: allFeatures,
          totalPrice,
        }),
      });

      if (response.ok) {
        const { newOrder } = await response.json();
        console.log('Order sent successfully:', newOrder);
        setIsOrderSent(true);
        router.push('/dashboard');
      } else {
        const { message } = await response.json();
        console.error('Error sending order:', message);
      }
    } catch (error) {
      console.error('Error sending order:', error.message);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="w-full min-h-screen py-9 px-10">
      {planName && <p className="mt-3 text-center text-3xl font-bold">{planName}</p>}
      <div className="flex flex-col items-center gap-5 py-10 px-10 rounded-xl">
        <h2 className="text-xl font-semibold mb-5">Selected Features:</h2>
        <ul>
          {allFeatures.map((feature) => (
            <li key={feature._id}>
              {feature.name} - ${feature.price}
            </li>
          ))}
        </ul>
        <p className="mt-5">Total Price: ${totalPrice}</p>
        {!isOrderSent && (
          <button
            onClick={sendOrderToServer}
            className={`bg-blue-500 text-white py-2 px-4 mt-5 rounded ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isLoading}
          >
            {isLoading ? 'Confirming Order...' : 'Confirm Order'}
          </button>
        )}
        {isOrderSent && (
          <p className="mt-3 text-green-600 font-bold">Order successfully sent!</p>
        )}
      </div>
    </div>
  );
};

export default Checkout;