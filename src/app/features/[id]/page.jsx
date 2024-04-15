"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setFeatures,setTotalPrice,setPlanName,setNecessaryFeatures,} from "@/redux/features/featuresSlice";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BsStarFill } from "react-icons/bs";
import Loading from '@/components/Loading'

const fetchPlanDetails = async (id) => {
  const res = await fetch(`/api/plans/${id}`);
  const data = await res.json();
  return data.plan;
};

const PlanDetails = () => {
  const [plan, setPlan] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();

  const selectedFeatures = useSelector((state) => state.features.selectedFeatures);
  const necessaryFeatures = useSelector((state) => state.features.necessaryFeatures);
  const totalPrice = useSelector((state) => state.features.totalPrice);
  const planName = useSelector((state) => state.features.planName);

  useEffect(() => {
    const pathArray = window.location.pathname.split("/");
    const id = pathArray[pathArray.length - 1];
    const fetchPlanDetailsData = async () => {
      try {
        if (!id) {
          return;
        }
        const planDetails = await fetchPlanDetails(id);
        setPlan(planDetails);
        dispatch(setNecessaryFeatures(planDetails.features.filter(feature => feature.isNeseccary)));
      } catch (error) {
        console.error("Error fetching plan details:", error);
      }
    };
    fetchPlanDetailsData();
  }, []);

  const handleFeatureSelection = (feature) => {
    const featureIndex = selectedFeatures.findIndex(
      (selectedFeature) => selectedFeature._id === feature._id
    );
    if (featureIndex !== -1) {
      dispatch(
        setFeatures([
          ...selectedFeatures.slice(0, featureIndex),
          ...selectedFeatures.slice(featureIndex + 1),
        ])
      );
    } else {
      dispatch(setFeatures([...selectedFeatures, feature]));
    }
  };

  const handleChange = () => {
    setIsChecked(!isChecked);
    handleFeatureSelection(feature);
  };

  const handleCheckout = () => {
    dispatch(setPlanName(plan.name));
    router.push("/checkout");
  };

  useEffect(() => {
    const basePrice = plan ? plan.basePrice : 0;
    const featurePrices = selectedFeatures.map((feature) => feature.price);
    const featuresTotalPrice = featurePrices.reduce(
      (sum, price) => sum + price,
      0
    );
    dispatch(setTotalPrice(basePrice + featuresTotalPrice));
  }, [selectedFeatures, plan, dispatch]);

  return (
    <div className=" w-full min-h-screen py-9 px-4 md:px-10 max-w-[1300px] mx-auto">
      <div className="flex flex-col  items-start gap-10 mt-10">
        <div className="flex flex-col mx-auto md:mx-0 gap-4 md:gap-6">
          <h1 className="text-3xl text-center md:text-start text-white font-semibold">
            سایت {plan?.name}
          </h1>
          <h1 className="text-xl text-center md:text-start text-zinc-300  max-w-[85%] mx-auto md:max-w-full">
            نیاز به قابلیت های پیشرفته دارید ؟ ‌انتخاب کنید
          </h1>
        </div>
        <div className="flex flex-col mx-auto md:mx-0 gap-2">
          <div className="flex items-center gap-2 md:gap-3">
            <span className="w-[12px] h-[12px] md:w-[16px] md:h-[16px] rounded-full bg-[#bab9e3]"></span>
            <span className="md:text-[17px] text-md text-white font-medium">
              امکانات پیشفرض
            </span>
          </div>
          <div className="flex items-center gap-2 md:gap-3 duration-300">
            <span className="w-[12px] h-[12px] md:w-[16px] md:h-[16px] rounded-full bg-[#5D5AFF]"></span>
            <span className="md:text-[17px] text-md text-white font-medium">
              امکانات پیشرفته
            </span>
          </div>
        </div>
      </div>
      <Card className="flex-col  flex md:grid grid-cols-2 mt-10  min-h-[200px] md:mt-[60px] p-3 sm:p-5 md:p-4 lg:p-10 gap-4 ">
        {plan ?
          plan.features.map((feature) => (
            <div
              key={feature._id}
              className={`flex items-center justify-between gap-3  rounded-lg ${
                feature.isNeseccary
                  ? "border-[0.5px] border-gray-700 cursor-not-allowed"
                  : "bg-[#5D5AFF]"
              } px-3 py-4 sm:p-5 md:p-10 max-h-[80px]`}
            >
              <div className="flex items-center gap-6">
                <h1 className="md:text-xl text-md font-medium flex items-center gap-2">
                  <BsStarFill />
                  {feature.name}
                </h1>
              </div>
              {feature.isNeseccary ? (
                <div className="flex items-center gap-2 px-4">
                  <span className="md:text-xl text-md font-medium text-white">
                    انتخاب شده
                  </span>
                  <input
                    type="checkbox"
                    onChange={() => handleFeatureSelection(feature)}
                    checked={true} 
                    disabled={feature.isNeseccary} 
                    className={`w-[14px] h-[14px] bg-gray-500 border-1 border-zinc-500 rounded-lg ${
                      feature.isNeseccary ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  />
                </div>
              ) : (
                <div className="flex items-center gap-2 px-4">
                  <span className="md:text-xl text-md font-medium text-white">
                    انتخاب کنید
                  </span>
                  <input
                    type="checkbox"
                    onChange={() => handleFeatureSelection(feature)}
                    checked={selectedFeatures.some(
                      (selectedFeature) => selectedFeature._id === feature._id
                    )}
                    className="w-[14px] h-[14px] bg-gray-500 border-1 border-zinc-500 rounded-lg"
                  />
                </div>
              )}
            </div>
          )) : 
          <>
          <Loading />
          </>
          }
      </Card>
      <div className="my-8 flex items-center justify-between">
        <div className="flex items-center  gap-1">
        </div>
        <Button onClick={handleCheckout}>نهایی کردن سفارش</Button>
      </div>
      <div className="flex flex-col gap-5 py-4 my-5 border-t-[0.4px] border-zinc-800 px-2">
        <div className="flex items-start gap-2 mt-4 ">
          <span className="text-red-500 text-md flex items-center gap-1 min-w-[55px]">
            <span>توجه :</span>
          </span>
          <p className="md:text-md text-sm text-zinc-300 ">
            قابلیت های پیشفرض از قبل برای شما انتخاب شده است و نیاز به انتخاب
            نیست ولی قابلیت های پیشرفته با توجه به نیاز شما قابل انتخاب است .
          </p>
        </div>
        <div className="flex items-start  gap-2 ">
          <span className="text-red-500 text-md flex items-center gap-1 min-w-[55px]">
            <span>توجه :</span>
          </span>
          <p className="md:text-md text-sm text-zinc-300 ">
            مبلغ پایه تعرفه برحسب قیمت قابلیت های پیشفرض است و با انتخاب قابلیت
            های پیشرفته مبلغی به قیمت کل اضافه خواهد شد
          </p>
        </div>
        <div className="flex items-start  gap-2 ">
          <span className="text-red-500 text-md flex items-center gap-1 min-w-[55px]">
            <span>توجه :</span>
          </span>
          <p className="md:text-md text-sm text-zinc-300 ">
            هزینه دامنه , هاست و هزینه های جانبی وب سایت بر عهده ویکسل می باشد
          </p>
        </div>
        <div className="flex items-start  gap-2 ">
          <span className="text-red-500 text-md flex items-center gap-1 min-w-[55px]">
            <span>توجه :</span>
          </span>
          <p className="md:text-md text-sm text-zinc-300 ">
            پیشتبانی تعرفه های طراحی سایت ویکسل به طور پیشفرض سه ماهه است
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanDetails;
