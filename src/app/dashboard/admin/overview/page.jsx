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
// react icons
import { LuUsers } from "react-icons/lu";
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdOutlineCreditCard } from "react-icons/md";
import { VscSymbolEvent } from "react-icons/vsc";
import { VscTarget } from "react-icons/vsc";
import { TbMessages } from "react-icons/tb";
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
  const [date, setDate] = useState()
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
            <div className="flex w-full items-start  justify-between">
              <div className="w-full  pb-4 border-b-[0.4px] border-zinc-800 ">
                <div className="flex w-full items-start justify-between">
                  <div className="w-full flex flex-col gap-1">
                    <h1 className="text-white text-3xl tracking-wide font-bold">
                      مدیریت
                    </h1>
                  </div>
                  <div className="flex  gap-2">
                    <div className="flex  gap-1 ">
                      <Button size='icon' variant='outline'>
                        <VscSymbolEvent />
                      </Button>
                      <Button size="icon" variant='outline'>
                        <VscTarget />
                      </Button>
                      <Button size="icon" variant='outline'>
                        <TbMessages />
                      </Button>
                    </div>
                    <Popover dir='ltr'>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={(
                            "w-[240px] justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
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
            <div className="w-full items-start justify-between flex py-3">
              <Card className="w-full lg:w-[55%] h-[300px] border-none">

              </Card>
              <div className="mb-[30px] w-[40%] mt-[20px]">
                <Carousel className="w-full max-w-sm" dir="ltr">
                  <CarouselContent className="-ml-1">
                    <CarouselItem
                      className="pl-1 md:basis-1/1 lg:basis-1/1"
                      dir="rtl"
                    >
                      <div className="p-1">
                        <Card>
                          <CardContent className="w-full h-[145px] px-5 py-5 flex flex-col gap-2">
                            <div className="w-full flex items-center justify-between  ">
                              <h1 className="text-lg text-slate-200 font-semibold">
                                کل درامد
                              </h1>
                              <MdOutlineAttachMoney size={22} />
                            </div>
                            <div className="flex flex-col gap-[5px]">
                              <h1 className="text-white text-[28px] font-bold">
                                $100,000,000
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
                                {overData?.allUsersCount} +
                              </h1>
                              <h1 className="text-gray-400 text-[13px]">
                                مشاهده کاربران
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
                                کل درامد
                              </h1>
                              <MdOutlineAttachMoney size={22} />
                            </div>
                            <div className="flex flex-col gap-[5px]">
                              <h1 className="text-white text-[28px] font-bold">
                                $100,000,000
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

                    {/* Add more CarouselItem components for additional items */}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-4">
              {/* right  */}
              <div className="flex flex-col w-full lg:w-[40%]  gap-4">
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
                  <div className="flex justify-center rotate-[270deg] flex-col gap-[20px] sm:gap-[60px] w-full lg:gap-4 xl:gap-6 md:mt-[90px] sm:mt-[60px] mt-[80px] lg:mt-[60px] ">
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
                            className="xl:w-[67%] 2xl:w-[60%] lg:w-[80%] md:w-[40%] w-[60%] h-[45px] sm:w-[50%] lg:h-[40px] xl:h-[50px] sm:h-[50px] md:h-[65px] rounded-l-[0.1rem]  rounded-r-[0.1rem]"
                            value={
                              (plan.totalOrders / popularPlans[0].totalOrders) *
                              100
                            }
                          />
                          <div className="xl:w-[50px] lg:w-[40px] md:w-[60px] w-[45px] sm:w-[50px] rotate-90">
                            <span className="text-[12px] text-gray-300 font-medium">
                              {plan._id}
                            </span>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </Card>
              </div>
              {/* end right  */}
              {/* left  */}
              <Card className="lg:w-[60%] w-full h-[520px] lg:h-[450px] border-none">
                <div className="flex items-center gap-3 w-full ">
                  {LoadinglatestOrders ? (
                    <>
                      <div className="w-full flex items-center gap-3">
                        <Skeleton className="w-[50%] h-[450px]" />
                        <Skeleton className="w-[50%] h-[450px]" />
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col sm:flex-row w-full gap-3 r ">
                      {overData &&
                        overData.latestOrders.map((order) => (
                          <Link
                            href={`/dashboard/order/${order._id}`}
                            key={order._id}
                            className="sm:w-[50%] w-full h-[450px] "
                          >
                            <Card className="flex flex-col gap-4 w-full h-full justify-between px-4 py-5 ">
                              <span className="flex items-center justify-center relative rotate-45 duration-300">
                                <div className="w-[142px] h-[142px] rounded-full flex items-center justify-center bg-[#1e1e1e] rotate-[-45deg] absolute top- z-50">
                                  <span className="text-white text-2xl">
                                    {`${Math.round(order.orderProgress)}%`}
                                  </span>
                                </div>
                                <Progress
                                  className="w-[160px] h-[160px] rounded-full flex items-center justify-center z-10 "
                                  value={order.orderProgress}
                                />
                              </span>
                              <div className="w-full flex items-center justify-between  ">
                                <h1 className="text-xl font-semibold text-white">
                                  {order?.plan}
                                </h1>
                                <span className="text-sm text-gray-400 ">
                                  {order?.status}
                                </span>
                              </div>
                              <div className="w-full flex items-center justify-end">
                                <span>
                                  تومان {order?.totalPrice.toLocaleString()}
                                </span>
                              </div>
                              <div className="border-t-[0.7px] border-zinc-800 pt-3 flex items-center gap-3">
                                <Avatar className="w-[50px] h-[50px] shadow-md">
                                  <AvatarFallback>
                                    <span className="text-lg">
                                      {order?.user?.email
                                        ?.charAt(0)
                                        .toUpperCase()}
                                    </span>
                                  </AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col gap-1">
                                  <h1>{order?.user?.phoneNumber}</h1>
                                </div>
                              </div>
                            </Card>
                          </Link>
                        ))}
                    </div>
                  )}
                </div>
              </Card>
              {/* end left  */}
            </div>
            {/* <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full max-w-xs"
    >
      <CarouselContent className="-mt-1 h-[200px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel> */}
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
