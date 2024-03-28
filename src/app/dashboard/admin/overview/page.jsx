"use client";
import React, { useState, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { selectUserInfo } from "@/redux/user/userSlice";
import { fetchUserData } from "@/utils/userActions";
import Autoplay from "embla-carousel-autoplay";
// react icons
import { LuUsers } from "react-icons/lu";
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdOutlineCreditCard } from "react-icons/md";
import { VscSymbolEvent } from "react-icons/vsc";
import { VscTarget } from "react-icons/vsc";
import { TbMessages } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";
// shadcn
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

const Overview = () => {
  const [loadingPP, setLoadingPP] = useState(false);
  const [LoadinglatestOrders, setLoadingLatestOrders] = useState(false);
  const userInfo = useSelector(selectUserInfo);
  const [date, setDate] = useState();
  const [formData, setFormData] = useState({
    name: "",
    basePrice: "",
    description: "",
    features: [],
  });
  const [oData, setoData] = useState(null);
  const [plans, setPlans] = useState([]);
  const [featureData, setFeatureData] = useState({
    featureName: "",
    featurePrice: "",
  });
  const [overData, setOverData] = useState(null);
  const [popularPlans, setPopularPlans] = useState([]);
  const dispatch = useDispatch();
  const [eventData, setEventData] = useState({
    name: "",
    description: "",
    startDate: null,
    endDate: null,
    discountPercentage: 0,
    applicablePlans: {
      plan: null,
      isAllPlans: false,
    },
    applicableUsers: {
      user: null,
      userDiscountCode: "",
      isAllUsers: false,
    },
  });
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  const handleFeatureChange = (e) => {
    setFeatureData({
      ...featureData,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);
  const handleEventChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (dates) => {
    setEventData((prevData) => ({
      ...prevData,
      startDate: dates[0],
      endDate: dates[1],
    }));
  };

  const handlePlanChange = (value) => {
    setEventData((prevData) => ({
      ...prevData,
      applicablePlans: {
        ...prevData.applicablePlans,
        plan: value,
      },
    }));
  };
  const addFeature = () => {
    setFormData({
      ...formData,
      features: [
        ...formData.features,
        {
          name: featureData.featureName,
          price: parseFloat(featureData.featurePrice),
        },
      ],
    });
    setFeatureData({
      featureName: "",
      featurePrice: "",
    });
  };

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await fetch("/api/plans");
        if (res.ok) {
          const data = await res.json();
          setPlans(data.plans);
        } else {
          console.error("Failed to fetch plans:", res.statusText);
        }
      } catch (error) {
        console.error("Failed to fetch plans:", error);
      }
    };

    fetchPlans();
  }, []);

  const handleEventSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/admin/events", {
        method: "POST",
        body: JSON.stringify(eventData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      if (res.ok) {
        console.log("Event added successfully:", data.newEvent);
      } else {
        console.error("Failed to add event:", data.message);
      }
    } catch (error) {
      console.error("Failed to add event:", error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/plans", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        console.log("Plan added successfully!");
        router.push("/order");
        alert("plan created successFully");
      } else {
        console.error("Failed to add plan:", res.statusText);
      }
    } catch (error) {
      console.error("Failed to add plan:", error);
    }
  };

  // over data
  useEffect(() => {
    const fetchOverData = async () => {
      setLoadingLatestOrders(true);
      try {
        setLoadingLatestOrders(true);
        const res = await fetch("/api/admin/overview");
        const resData = await res.json();
        setOverData(resData);
      } catch (error) {
        console.log("cant fetch overData ");
        setLoadingLatestOrders(false);
      } finally {
        setLoadingLatestOrders(false);
      }
    };
    fetchOverData();
  }, []);
  useEffect(() => {
    fetchPopularPlans();
  }, []);

  const fetchPopularPlans = async () => {
    setLoadingPP(true);
    try {
      const response = await fetch("/api/admin/overview");
      if (response.ok) {
        const data = await response.json();
        setPopularPlans(data.popularPlans);
        setLoadingPP(false);
      } else {
        throw new Error("Failed to fetch popular plans");
      }
    } catch (error) {
      console.error("Error fetching popular plans:", error);
      setLoadingPP(false);
    } finally {
      setLoadingPP(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="w-full lg:w-[80%] xl:w-[85%] lg:mr-[220px] lg:mt-0 mt-[70px]">
        <div className="w-full min-h-screen  overflow-y-auto  shadow-md rounded-xl py-7 px-1 lg:px-4 xl:px-8">
          <div className="w-full h-full flex flex-col px-4 sm:px-10 py-4">
            {/*  head  */}
            <div className="flex w-full items-start  justify-between">
              <div className="w-full  pb-4 border-b-[0.4px] border-zinc-800 ">
                <div className="flex w-full items-center md:items-start justify-between">
                  <div className="w-full flex flex-col gap-1">
                    <h1 className="text-white text-2xl md:text-3xl tracking-wide font-bold">
                      مدیریت
                    </h1>
                  </div>
                  <div className="flex  gap-2">
                    <div className="flex  gap-1 ">
                      <Button size="icon" variant="outline">
                        <VscSymbolEvent />
                      </Button>
                      <Button size="icon" variant="outline">
                        <VscTarget />
                      </Button>
                      <Button size="icon" variant="outline">
                        <TbMessages />
                      </Button>
                    </div>
                    <div className="hidden sm:block">
                      <Popover dir="ltr" className="">
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={
                              ("w-[240px] justify-start text-left font-normal",
                              !date && "text-muted-foreground")
                            }
                          >
                            <CalendarIcon className="ml-2 h-4 w-4" />
                            {date ? (
                              format(date, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end head  */}
            <div className="w-full items-cetner justify-between flex-col lg:flex-row flex gap-5 py-3">
              {/* totals  */}
              <div className="flex flex-col items-end w-full lg:w-[40%] gap-1 ">
                <div className="mb-[10px] w-full ">
                  <Carousel
                    plugins={[plugin.current]}
                    className="w-full"
                    dir="ltr"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                  >
                    <CarouselContent className="-ml-1">
                      <CarouselItem
                        className="pl-1 md:basis-1/1 lg:basis-1/1"
                        dir="rtl"
                      >
                        <div className="p-1">
                          <Card>
                            <CardContent className="w-full h-[145px] px-5 py-5 flex flex-col gap-2">
                              <div className="w-full flex items-center justify-between  ">
                                <h1 className="text-lg text-slate-200 font-semibold h-8">
                                  کل درامد
                                </h1>
                                <MdOutlineAttachMoney size={22} />
                              </div>
                              <div className="flex flex-col gap-[5px]">
                                <h1 className="text-white text-[28px] font-bold">
                                  {overData?.totalAmount.toLocaleString()} +
                                </h1>
                                <h1 className="text-gray-400 text-[13px]">
                                  {" "}
                                  +%36نسبت به ماه قبل
                                </h1>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                      <CarouselItem
                        className="pl-1 md:basis-1/1 lg:basis-1/1"
                        dir="rtl"
                      >
                        <div className="p-1">
                          <Card>
                            <CardContent className="w-full h-[145px] px-5 py-5 flex flex-col gap-2">
                              <div className="w-full flex items-center justify-between  ">
                                <h1 className="text-lg text-slate-200 font-semibold">
                                  سفارشات
                                </h1>
                                <MdOutlineAttachMoney size={22} />
                              </div>
                              <div className="flex flex-col gap-[5px]">
                                <h1 className="text-white text-[28px] font-bold h-10">
                                  {overData?.allOrders} +
                                </h1>
                                <h1 className="text-gray-400 text-[13px]">
                                  {" "}
                                  +%36نسبت به ماه قبل
                                </h1>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>

                      <CarouselItem
                        className="pl-1 md:basis-1/1 lg:basis-1/1"
                        dir="rtl"
                      >
                        <div className="p-1">
                          <Card>
                            <CardContent className="w-full h-[145px] px-5 py-5 flex flex-col gap-2">
                              <div className="w-full flex items-center justify-between  ">
                                <h1 className="text-lg text-slate-200 font-semibold">
                                  کاربران
                                </h1>
                                <MdOutlineAttachMoney size={22} />
                              </div>
                              <div className="flex flex-col gap-[5px]">
                                <h1 className="text-white text-[28px] font-bold h-10">
                                  {overData?.AllUsers} +
                                </h1>
                                <h1 className="text-gray-400 text-[13px]">
                                  مشاهده کاربران
                                </h1>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                  </Carousel>
                </div>
                {/* last payment  */}
                <Card className="w-full flex flex-col gap-5 p-3 lg:h-[280px] overflow-y-auto">
                  <h1 className="text-[16px] mb-3 mt-3 pr-3 text-white font-semibold">
                    آخرین پرداخت ها
                  </h1>
                  {overData ? (
                    overData?.latestPayments.map((lastpyment) => (
                      <div
                        key={lastpyment._id}
                        className="flex w-full items-center justify-between px-2"
                      >
                        <div className="flex gap-3 items-center">
                          <Avatar className="w-[45px] h-[45px] shadow-md">
                            <AvatarFallback>
                              <span className="text-lg">
                                {lastpyment?.user?.username
                                  ?.charAt(0)
                                  .toUpperCase()}
                              </span>
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col gap-1">
                            <h1 className="text-[15px] text-white font-medium">
                              {lastpyment.user.username}
                            </h1>
                            <span className="text-xs text-zinc-400">
                              {lastpyment.user.phoneNumber}
                            </span>
                          </div>
                        </div>
                        <span className="text-zinc-۲00 text-sm">
                          تومان {lastpyment?.amount?.toLocaleString()}
                        </span>
                      </div>
                    ))
                  ) : (
                    <>
                      <div className="flex flex-col gap-5">
                        <div className="flex items-center justify-between">
                          <div className="flex gap-3 items-center">
                            <Skeleton className="w-[42px] h-[42px] rounded-full" />
                            <div className="flex flex-col gap-1">
                              <Skeleton className="w-[95px] h-[17px]" />
                              <Skeleton className="w-[80px] h-[15px]" />
                            </div>
                          </div>
                          <div className="">
                            <Skeleton className="w-[130px] h-[28px]" />
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex gap-3 items-center">
                            <Skeleton className="w-[42px] h-[42px] rounded-full" />
                            <div className="flex flex-col gap-1">
                              <Skeleton className="w-[95px] h-[17px]" />
                              <Skeleton className="w-[80px] h-[15px]" />
                            </div>
                          </div>
                          <div className="">
                            <Skeleton className="w-[130px] h-[28px]" />
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex gap-3 items-center">
                            <Skeleton className="w-[42px] h-[42px] rounded-full" />
                            <div className="flex flex-col gap-1">
                              <Skeleton className="w-[95px] h-[17px]" />
                              <Skeleton className="w-[80px] h-[15px]" />
                            </div>
                          </div>
                          <div className="">
                            <Skeleton className="w-[130px] h-[28px]" />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </Card>
                {/* end last payment  */}
              </div>
              {/* pouplar */}
              <div className="flex flex-col w-full lg:w-[60%]  gap-4">
                <Card className="w-full h-[400px] sm:h-[450px] flex flex-col gap-3 px-4 py-6">
                  <div className="flex  gap-[2px] items-start w-full justify-between">
                    <div className="flex flex-col gap-[2px]">
                      <h1 className="text-white lg:text-[15px] text-[15px] xl:text-lg font-bold">
                        محبوبیت پلن ها
                      </h1>
                      <p className="xl:text-[14px] text-[12px]  lg:text-[13px] text-gray-300 hidden md:block  lg:font-medium">
                        محبوبیت پلن ها بر اساس تعداد فروش
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center rotate-[270deg] flex-col gap-[20px] sm:gap-[60px] w-full lg:gap-4 xl:gap-8 md:mt-[90px] sm:mt-[60px] mt-[80px] lg:mt-[60px] xl:mt-[110px] ">
                    {loadingPP ? (
                      <div className="flex h-full w-full items-center justify-center">
                        <Loader2 className="h-7 w-7 animate-spin" />
                      </div>
                    ) : (
                      popularPlans &&
                      popularPlans.map((plan) => (
                        <div
                          key={plan._id}
                          className="flex gap-[px] items-center justify-start"
                        >
                          <Progress
                            className="xl:w-[48%] 2xl:w-[60%] lg:w-[80%] md:w-[40%] w-[60%] h-[45px] sm:w-[50%] lg:h-[40px] xl:h-[55px] sm:h-[50px] md:h-[65px] rounded-l-[0.1rem]  rounded-r-[0.4rem]"
                            value={
                              (plan.totalOrders / popularPlans[0].totalOrders) *
                              100
                            }
                          />
                          <div className="xl:w-[50px] lg:w-[40px] md:w-[60px] w-[45px] sm:w-[50px] rotate-90">
                            <span className="text-[11.5px] text-gray-300 font-medium">
                              {plan._id}
                            </span>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </Card>
              </div>
              {/* end pouplar  */}
            </div>
            <div className="w-full flex-col lg:flex-row flex justify-between gap-5">
              <Card className="w-full overflow-x-auto lg:w-[60%] h-[350px] overflow-y-auto flex flex-col gap-3 p-5">
                <h1 className="text-lg font-semibold text-white mb-2">
                  سفارشات اخیر
                </h1>
                <div className="w-full flex items-center justify-between border-b-[0.4px] hover:bg-[#262626] bg-zinc-900 duration-300 border-zinc-800 py-3 px-4 rounded-md">
                  <div className="flex items-cetner gap-[90px]">
                    <span className="text-[14px] text-zinc-200">کاربر</span>
                    <span className="text-[14px] text-zinc-200 hidden sm:block">
                      نوع سایت
                    </span>
                    <span className="text-[14px] text-zinc-200 hidden sm:block">
                      قیمت
                    </span>
                  </div>
                  <span className="text-[14px] text-zinc-200">وضعیت</span>
                </div>
                <div className="flex flex-col gap-3">
                  {overData ? (
                    overData?.latestOrders.map((order) => (
                      <Link
                        href={`/dashbaord/feature/${order._id}`}
                        key={order._id}
                        className="flex justify-between items-center gap-3 border-b-[0.5px] border-zinc-800 py-3 px-3"
                      >
                        <div className="flex items-center gap-[50px]">
                          <div className=" flex items-center gap-3">
                            <div className="flex flex-col gap-1">
                              <span className="text-md text-zinc-100 font-medium">
                                {order?.user?.username}
                              </span>
                              <span className="text-sm text-zinc-400 font-light">
                                {order?.user?.phoneNumber}
                              </span>
                            </div>
                          </div>
                          <h1 className="text-[16px] text-zinc-200 font-medium hidden sm:block">
                            {order.plan}
                          </h1>
                          <div className="hidden sm:block">
                            <span className="text-md text-zinc-300 ">
                              تومان {order?.totalPrice.toLocaleString()}
                            </span>
                          </div>
                        </div>
                        <div className="">
                          <span className="flex items-center justify-center  rotate-45 duration-300">
                            <div className="w-[48px] h-[48px]  rounded-full flex items-center justify-center bg-[#1e1e1e] rotate-[-45deg] absolute top- z-50">
                              <span className="text-white text-[15px]">
                                {`${Math.round(order.orderProgress)}%`}
                              </span>
                            </div>
                            <Progress
                              className="w-[60px] h-[60px]  rounded-full flex items-center justify-center z-10 "
                              value={order.orderProgress}
                            />
                          </span>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <>
                      <div className="flex flex-col gap-5">
                        <div className="flex  g w-full items-center justify-between px-4 pb-5 pt-4 border-b-[0.4px] border-zinc-800">
                          <div className="flex items-center gap-5 ">
                            <Skeleton className="w-[100px] h-[30px]" />
                            <Skeleton className="w-[100px] h-[30px]" />
                            <Skeleton className="w-[100px] h-[30px]" />
                          </div>
                          <div className="">
                            <Skeleton className="w-[40px] h-[40px] rounded-full " />
                          </div>
                        </div>
                        <div className="flex  g w-full items-center justify-between px-4 py-3">
                          <div className="flex items-center gap-5 ">
                            <Skeleton className="w-[100px] h-[30px]" />
                            <Skeleton className="w-[100px] h-[30px]" />
                            <Skeleton className="w-[100px] h-[30px]" />
                          </div>
                          <div className="">
                            <Skeleton className="w-[40px] h-[40px] rounded-full " />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </Card>
              {/* tickets  */}
              <Card className="w-full lg:w-[40%] h-[350px] overflow-y-auto flex flex-col gap-3 p-5">
                <h1 className="text-lg font-medium text-white mb-4">
                  اخرین تیکت ها
                </h1>
                <div className="flex flex-col gap-5">
                  {overData ? (
                    overData.latestTickets.map((ticket) => (
                      <Link
                        key={ticket._id}
                        href={`/dashboard/ticket/${ticket._id}`}
                        className="  py-2 rounded-md  cursor-pointer"
                      >
                        <div className="items-center justify-between  gap-5 flex w-full">
                          <div className="flex items-center w-full  gap-2 sm:gap-3">
                            <Avatar className="w-[45px] h-[45px] shadow-md">
                              <AvatarFallback>
                                <span className="text-lg">
                                  {ticket?.createdBy?.username
                                    ?.charAt(0)
                                    .toUpperCase()}
                                </span>
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col gap-1">
                              <span className="sm:text-[14px] text-[13px] text-zinc-200 font-medium">
                                {ticket?.createdBy?.username}
                              </span>
                              <span className="text-xs text-zinc-400 font-light">
                                {ticket?.createdBy?.phoneNumber}
                              </span>
                            </div>
                          </div>
                          <div className="w-full flex items-end ">
                            <span className="text-zinc-300 text-sm ">
                              ...
                              {ticket?.subject
                                ? ticket.subject
                                    .split(" ")
                                    .slice(0, 3)
                                    .join(" ")
                                : ""}
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="flex flex-col gap-5">
                      <div className="flex items-center justify-between w-full ">
                        <div className="flex gap-3 items-center">
                          <Skeleton className="w-[45px] h-[45px] rounded-full" />
                          <div className="flex flex-col gap-1">
                            <Skeleton className="sm:w-[110px] w-[90px] h-[17px]" />
                            <Skeleton className="sm:w-[80px] w-[70px] h-[15px]" />
                          </div>
                        </div>
                        <div className="">
                          <Skeleton className="sm:w-[150px] w-[110px] h-[30px]" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between w-full ">
                        <div className="flex gap-3 items-center">
                          <Skeleton className="w-[45px] h-[45px] rounded-full" />
                          <div className="flex flex-col gap-1">
                            <Skeleton className="sm:w-[110px] w-[90px] h-[17px]" />
                            <Skeleton className="sm:w-[80px] w-[70px] h-[15px]" />
                          </div>
                        </div>
                        <div className="">
                          <Skeleton className="sm:w-[150px] w-[110px] h-[30px]" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between w-full ">
                        <div className="flex gap-3 items-center">
                          <Skeleton className="w-[45px] h-[45px] rounded-full" />
                          <div className="flex flex-col gap-1">
                            <Skeleton className="sm:w-[110px] w-[90px] h-[17px]" />
                            <Skeleton className="sm:w-[80px] w-[70px] h-[15px]" />
                          </div>
                        </div>
                        <div className="">
                          <Skeleton className="sm:w-[150px] w-[110px] h-[30px]" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between w-full ">
                        <div className="flex gap-3 items-center">
                          <Skeleton className="w-[45px] h-[45px] rounded-full" />
                          <div className="flex flex-col gap-1">
                            <Skeleton className="sm:w-[110px] w-[90px] h-[17px]" />
                            <Skeleton className="sm:w-[80px] w-[70px] h-[15px]" />
                          </div>
                        </div>
                        <div className="">
                          <Skeleton className="sm:w-[150px] w-[110px] h-[30px]" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </div>
            {/* tickets  */}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Overview;

//  {/* head  */}
//  <div className="w-full items-center justify-between flex  pb-5">

//  <div className="flex items-center gap-[4px] md:gap-3">
//    <Dialog>
//      <DialogTrigger asChild dir="rtl">
//        <Button
//          variant="outline"
//          className="flex items-center gap-1 p-3"
//        >
//          <VscSymbolEvent size={17} />
//          <span className="hidden md:block">افزدون جشنواره</span>
//        </Button>
//      </DialogTrigger>
//      <DialogContent className="" dir="rtl">
//        <DialogHeader>
//          <DialogTitle className="text-center mb-10">
//            جشنواره
//          </DialogTitle>
//        </DialogHeader>
//        <form onSubmit={handleEventSubmit}>
//          <div className="flex flex-col gap-4">
//            <div className="flex flex-col items-start gap-3">
//              <Label htmlFor="name" className="text-right">نام جشنواره</Label>
//              <Input
//                id="name"
//                name="name"
//                value={eventData.name}
//                onChange={handleEventChange}
//                placeholder="نام جشنواره را وارد کنید"
//                className="col-span-3"
//              />
//            </div>
//            <div className="flex flex-col items-start gap-3">
//              <Label htmlFor="description" className="text-right">توضیحات</Label>
//              <Textarea
//                id="description"
//                name="description"
//                value={eventData.description}
//                onChange={handleEventChange}
//                placeholder="توضیحات را وارد کنید"
//                className="col-span-3"
//                rows={5}
//              />
//            </div>
//            <div className="flex flex-col items-start gap-3">
//              <Label htmlFor="date" className="text-right">تاریخ شروع و پایان</Label>
//              <Popover>
//                <PopoverTrigger asChild>
//                  <Button
//                    id="date"
//                    variant={"outline"}
//                    className={`w-full justify-start text-right font-normal ${!eventData.startDate && "text-muted-foreground"
//                      }`}
//                  >
//                    <CalendarIcon className="ml-2 h-4 w-4" />
//                    {eventData.startDate && eventData.endDate ? (
//                      <>
//                        {eventData.startDate.toLocaleDateString()} -{" "}
//                        {eventData.endDate.toLocaleDateString()}
//                      </>
//                    ) : (
//                      <span>Pick a date</span>
//                    )}
//                  </Button>
//                </PopoverTrigger>
//                <PopoverContent className="w-auto p-0" align="start">
//                  <Calendar
//                    initialFocus
//                    mode="range"
//                    selected={[eventData.startDate, eventData.endDate]}
//                    onSelect={handleDateChange}
//                    numberOfMonths={2}
//                  />
//                </PopoverContent>
//              </Popover>
//            </div>
//            <div className="flex flex-col items-start gap-3">
//              <Label htmlFor="plan" className="text-right">پلن قابل اعمال</Label>
//              <Select onValueChange={handlePlanChange}>
//                <SelectTrigger>
//                  <SelectValue placeholder="انتخاب پلن" />
//                </SelectTrigger>
//                <SelectContent position="popper">
//                  <SelectItem key="all" value="all">
//                    همه پلن‌ها
//                  </SelectItem>
//                  {plans.map((plan) => (
//                    <SelectItem key={plan._id} value={plan._id}>
//                      {plan.name}
//                    </SelectItem>
//                  ))}
//                </SelectContent>
//              </Select>

//            </div>
//          </div>
//          <DialogFooter className="mt-5">
//            <Button type="submit">افزودن جشنواره</Button>
//          </DialogFooter>
//        </form>
//      </DialogContent>
//    </Dialog>
//    <Popover>
//      <PopoverTrigger asChild>
//        <Button
//          variant={"outline"}
//          className={
//            "md:w-[240px] w-[130px] justify-start text-left font-normal"
//          }
//        >
//          <CalendarIcon className="ml-2 h-4 w-4" />
//          {oData ? format(oData, "PPP") : <span>Pick a date</span>}
//        </Button>
//      </PopoverTrigger>
//      <PopoverContent
//        align="start"
//        className="flex w-auto flex-col space-y-2 p-2"
//      >
//        <Select
//          onValueChange={(value) =>
//            setoData(addDays(new Date(), parseInt(value)))
//          }
//        >
//          <SelectTrigger>
//            <SelectValue placeholder="Select" />
//          </SelectTrigger>
//          <SelectContent position="popper">
//            <SelectItem value="0">امروز</SelectItem>
//            <SelectItem value="1">فردا</SelectItem>
//            <SelectItem value="3">این سه روز</SelectItem>
//            <SelectItem value="7">این هفته</SelectItem>
//          </SelectContent>
//        </Select>
//        <div className="rounded-md border">
//          <Calendar
//            mode="single"
//            selected={oData}
//            onSelect={setoData}
//          />
//        </div>
//      </PopoverContent>
//    </Popover>
//  </div>
// </div>
// {/* end head  */}

//  {/* totals  */}
//  <div className="flex flex-col lg:flex-row gap-3 py-6">
//  <Card className="lg:w-[33%] w-full h-[145px] px-5 py-5 flex flex-col gap-2">
//    <div className="w-full flex items-center justify-between ">
//      <h1 className="text-lg text-slate-200 font-semibold">
//        کل درامد
//      </h1>
//      <MdOutlineAttachMoney size={22} />
//    </div>
//    <div className="flex flex-col gap-[5px]">
//      <h1 className="text-white text-[28px] font-bold">
//        $100,000,000
//      </h1>
//      <h1 className="text-gray-400 text-[13px]">
//        {" "}
//        +%36نسبت به ماه قبل
//      </h1>
//    </div>
//  </Card>

//  <Card className="lg:w-[33%] w-full px-5 h-[145px] py-5 flex flex-col gap-2">
//    <div className="w-full flex items-center justify-between ">
//      <h1 className="text-lg text-gray-200  font-semibold">
//        کاربران
//      </h1>
//      <LuUsers size={20} />
//    </div>
//    <div className="flex flex-col gap-[5px]">
//      <h1 className="text-white text-[28px] font-bold">{overData?.allUsersCount} +</h1>
//      <h1 className="text-gray-400 text-[13px]">
//        مشاهده کاربران
//      </h1>
//    </div>
//  </Card>

//  <Card className="lg:w-[33%] w-full px-5 py-5 h-[145px] flex flex-col gap-2">
//    <div className="w-full flex items-center justify-between ">
//      <h1 className="text-lg text-slate-200  font-semibold">
//        تعداد سفارشات
//      </h1>
//      <MdOutlineCreditCard size={20} />
//    </div>
//    <div className="flex flex-col gap-[5px]">
//      <h1 className="text-white text-[28px] font-bold">43+</h1>
//      <h1 className="text-gray-400 text-[13px]">
//        +%62 نسبت به ماه قبل
//      </h1>
//    </div>
//  </Card>
// </div>
// {/* end totals  */}
