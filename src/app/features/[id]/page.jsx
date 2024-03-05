"use client";
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'; 

const PlanDetails = () => {
  const pathname = usePathname();
  const { id } = pathname.split('/').pop();
  const [plan, setPlan] = useState(null);

  useEffect(() => {
    const fetchPlanData = async () => {
      try {
        if (id) {
          const planData = await fetchPlan(id);
          setPlan(planData);
        }
      } catch (error) {
        console.error('Error fetching plan:', error);
      }
    };

    fetchPlanData();
  }, [id]);

  const renderPlanDetails = () => {
    return (
      <div>
        <h1>Plan Details</h1>
        {plan ? (
          <div>
            <h2>{plan.name}</h2>
            <p>Description: {plan.description}</p>
            <p>Base Price: ${plan.basePrice}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  };

  return <div>{renderPlanDetails()}</div>;
};

export default PlanDetails;

const fetchPlan = async (id) => {
  const res = await fetch(`/api/plans/${id}`);
  const planData = await res.json();
  return planData.plan;
};
