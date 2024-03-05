"use client";
import React , {useState , useEffect} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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
              <h1 className='font-bold text-slate-900 text-xl'>{plan.name}</h1>
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
    <div className='bg-slate-100 py-10 px-10 w-full '>
        <div>
      <h1>Order Page</h1>

      {plans ? (
        <div>
          <h2>choose your plan </h2>

          <div className='flex flex-wrap gap-7'>{renderPlans()}</div>
        </div>
      ) : (
        <p>Loading...</p>
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