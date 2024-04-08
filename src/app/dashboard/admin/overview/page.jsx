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
import { useRouter } from "next/navigation";
// react icons
import { LuUsers } from "react-icons/lu";
import { MdOutlineAttachMoney } from "react-icons/md";
import { RiShoppingBag2Line } from "react-icons/ri";
// shadcn
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  const [oData, setoData] = useState(null);
  const [overData, setOverData] = useState(null);
  const [popularPlans, setPopularPlans] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  useEffect(() => {
    if (userInfo && userInfo.role !== "admin") {
      router.push("/dashbaord");
    }
  }, [userInfo, router]);

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
                                <div className="w-[35px] h-[35px] p-2 bg-[#5D5AFF] flex items-center justify-center rounded-md">
                                  <MdOutlineAttachMoney size={22} />
                                </div>
                              </div>
                              <div className="flex flex-col gap-[5px]">
                                <h1 className="text-white text-[28px] font-bold">
                                  {overData?.responseData.totalAmount?.toLocaleString()}{" "}
                                  +
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
                                <div className="w-[35px] h-[35px] p-2 bg-[#5D5AFF] flex items-center justify-center rounded-md">
                                  <RiShoppingBag2Line size={22} />
                                </div>
                              </div>
                              <div className="flex flex-col gap-[5px]">
                                <h1 className="text-white text-[28px] font-bold h-10">
                                  {overData?.responseData.allOrders} +
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
                                <div className="w-[35px] h-[35px] p-2 bg-[#5D5AFF] flex items-center justify-center rounded-md">
                                  <LuUsers size={22} />
                                </div>
                              </div>
                              <div className="flex flex-col gap-[5px]">
                                <h1 className="text-white text-[28px] font-bold h-10">
                                  {overData?.responseData.AllUsers} +
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
                    overData?.responseData.latestPayments?.map((lastpyment) => (
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
                        <span className="text-zinc-200 text-sm flex items-cetner gap-[3px]">
                          <span>تومان</span>
                          <span className="">
                            {lastpyment?.amount?.toLocaleString()}
                          </span>
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
                      overData &&
                      overData.responseData.popularPlans.map((plan) => (
                        <div
                          key={plan._id}
                          className="flex gap-[px] items-center justify-start"
                        >
                          <Progress
                            className="xl:w-[48%] 2xl:w-[60%] lg:w-[80%] md:w-[40%] w-[60%] h-[45px] sm:w-[50%] lg:h-[40px] xl:h-[55px] sm:h-[50px] md:h-[65px] rounded-l-[0.1rem]  rounded-r-[0.4rem]"
                            value={
                              popularPlans &&
                              popularPlans.length > 0 &&
                              popularPlans[0]
                                ? (plan.totalOrders /
                                    popularPlans[0]?.totalOrders) *
                                  100
                                : 0
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
                <div className="w-full flex items-center justify-between border-[0.4px]  duration-300 border-gray-800 py-3 px-4 rounded-md">
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
                    overData.responseData.latestOrders.map((order) => (
                      <Link
                        href={`/dashboard/order/${order._id}`}
                        key={order._id}
                        className="flex justify-between items-center gap-3 border-[0.2px] border-gray-800 py-3 px-3"
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
                            <div className="w-[48px] h-[48px]  rounded-full flex items-center justify-center bg-[#1d1f2d] rotate-[-45deg] absolute top- z-50">
                              <span className="text-white text-[15px]">
                                {`${Math.round(order.orderProgress)}%`}
                              </span>
                            </div>
                            <Progress
                              className="w-[60px] h-[60px] bg-transparent border-[0.5px] rounded-full flex items-center justify-center z-10 "
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
                    overData.responseData.latestTickets?.map((ticket) => (
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
