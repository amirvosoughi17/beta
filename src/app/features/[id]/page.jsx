"use client";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFeatures, setTotalPrice, setPlanName } from '@/redux/features/featuresSlice';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import Layout from '@/components/Layout';

const fetchPlanDetails = async (id) => {
  const res = await fetch(`/api/plans/${id}`);
  const data = await res.json();
  return data.plan;
};

const PlanDetails = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectedFeatures = useSelector((state) => state.features.selectedFeatures);
  const totalPrice = useSelector((state) => state.features.totalPrice);
  const planName = useSelector((state) => state.features.planName);

  const [plan, setPlan] = useState(null);

  useEffect(() => {
    const pathArray = window.location.pathname.split('/');
    const id = pathArray[pathArray.length - 1];

    const fetchPlanDetailsData = async () => {
      try {
        if (!id) {
          return;
        }

        const planDetails = await fetchPlanDetails(id);
        setPlan(planDetails);
      } catch (error) {
        console.error('Error fetching plan details:', error);
      }
    };

    fetchPlanDetailsData();
  }, []);

  const handleFeatureSelection = (feature) => {
    const featureIndex = selectedFeatures.findIndex(
      (selectedFeature) => selectedFeature._id === feature._id
    );
    if (featureIndex !== -1) {
      dispatch(setFeatures([...selectedFeatures.slice(0, featureIndex), ...selectedFeatures.slice(featureIndex + 1)]));
    } else {
      dispatch(setFeatures([...selectedFeatures, feature]));
    }
  };

  const handleCheckout = () => {
    dispatch(setPlanName(plan.name));
    router.push('/checkout');
  };

  useEffect(() => {
    const basePrice = plan ? plan.basePrice : 0;
    const featurePrices = selectedFeatures.map((feature) => feature.price);
    const featuresTotalPrice = featurePrices.reduce((sum, price) => sum + price, 0);

    dispatch(setTotalPrice(basePrice + featuresTotalPrice));
  }, [selectedFeatures, plan, dispatch]);

  return (
    <Layout>
      <div className=' w-full min-h-screen py-9 px-10'>
        <h1 className='text-center my-10 text-2xl'>Plan Details Page</h1>
        {plan ? (
          <div className='flex flex-col items-center gap-5 py-10 px-10  rounded-xl'>
            <h1 className='font-bold text-slate-200 text-xl'>planName: {plan.name}</h1>
            <div>
              <div className='flex flex-col gap-1 my-10'>
                <h2 className='mb-10 text-lg font-semibold text-gray-600'>Features: </h2>
                {plan.features.map((feature) => (
                  <div
                    className='flex items-center gap-6 bg-violet-700 text-white px-7 py-3 rounded-xl'
                    key={feature._id}
                  >
                    <span>{feature.name}</span>
                    <span>${feature.price}</span>
                    <input
                      type='checkbox'
                      onChange={() => handleFeatureSelection(feature)}
                      checked={selectedFeatures.some(
                        (selectedFeature) => selectedFeature._id === feature._id
                      )}
                    />
                  </div>
                ))}
              </div>
              <p>Total Price: ${totalPrice}</p>
              <button onClick={handleCheckout} className='bg-blue-500 text-white py-2 px-4 mt-5 rounded'>
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-10 w-[30%] mx-auto ">
            <p>please wait </p>
            <Box sx={{ width: '100%' }}>
              <LinearProgress variant="query" />
            </Box>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default PlanDetails;
