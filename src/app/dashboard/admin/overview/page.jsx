"use client";
import React, { useState, useEffect } from 'react'
import DashboardLayout from '@/components/DashboardLayout';
import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"
// react icons 
import { LuUsers } from "react-icons/lu";
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdOutlineCreditCard } from "react-icons/md";
// shadcn 
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';


const Overview = ({ className }) => {
  const [formData, setFormData] = useState({
    name: '',
    basePrice: '',
    description: '',
    features: [],
  });
  const [featureData, setFeatureData] = useState({
    featureName: '',
    featurePrice: '',
  });
  const [date, setDate] = useState({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  })
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleFeatureChange = (e) => {
    setFeatureData({
      ...featureData,
      [e.target.name]: e.target.value,
    });
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
      featureName: '',
      featurePrice: '',
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/plans', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.ok) {
        console.log('Plan added successfully!');
        router.push("/order");
        alert("plan created successFully")
      } else {
        console.error('Failed to add plan:', res.statusText);
      }
    } catch (error) {
      console.error('Failed to add plan:', error);
    }
  };

  return (
    <DashboardLayout>
      <div className="w-full  lg:w-[80%] xl:w-[85%] lg:mr-[220px]">
        <div className="w-full min-h-screen  overflow-y-auto  shadow-md rounded-xl py-7 px-5 lg:px-4 xl:px-8">
          <div className="w-full h-full flex flex-col px-10 py-4">
            {/* head  */}
            <div className="w-full items-center justify-between flex border-b-[0.4px] border-slate-800 pb-5">
              <div className="">
                <h1 className='text-[30px] font-semibold text-white'>Dashboard</h1>
              </div>
              <div className="">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="date"
                      variant={"outline"}
                      className={`
                        w-[300px] justify-start text-right font-normal
                        ${!date && text - muted - foreground}`
                      }
                    >
                      <CalendarIcon className="ml-2 h-4 w-4" />
                      {date?.from ? (
                        date.to ? (
                          <>
                            {format(date.from, "LLL dd, y")} -{" "}
                            {format(date.to, "LLL dd, y")}
                          </>
                        ) : (
                          format(date.from, "LLL dd, y")
                        )
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      initialFocus
                      mode="range"
                      defaultMonth={date?.from}
                      selected={date}
                      onSelect={setDate}
                      numberOfMonths={2}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            {/* end head  */}
            {/* totals  */}
            <div className="flex flex-col md:flex-row gap-3 py-6">
              <Card className='w-[33%] h-[150px] px-5 py-6 flex flex-col gap-2'>
                <div className="w-full flex items-center justify-between ">
                  <h1 className='text-lg text-slate-200 font-semibold'>کل درامد</h1>
                  <MdOutlineAttachMoney size={22} />
                </div>
                <div className="flex flex-col gap-[5px]">
                  <h1 className='text-white text-[28px] font-bold'>$100,000,000</h1>
                  <h1 className='text-gray-400 text-[13px]'>  +%36نسبت به ماه قبل</h1>
                </div>
              </Card>

              <Card className='w-[33%] h-[150px] px-5 py-6 flex flex-col gap-2'>
                <div className="w-full flex items-center justify-between ">
                  <h1 className='text-lg text-gray-200  font-semibold'>کاربران</h1>
                  <LuUsers size={20} />
                </div>
                <div className="flex flex-col gap-[5px]">
                  <h1 className='text-white text-[28px] font-bold'>231+</h1>
                  <h1 className='text-gray-400 text-[13px]'>+%87 نسبت به ماه قبل</h1>
                </div>
              </Card>

              <Card className='w-[33%] h-[150px] px-5 py-6 flex flex-col gap-2'>
                <div className="w-full flex items-center justify-between ">
                  <h1 className='text-lg text-slate-200  font-semibold'>تعداد فروش</h1>
                  <MdOutlineCreditCard size={20} />
                </div>
                <div className="flex flex-col gap-[5px]">
                  <h1 className='text-white text-[28px] font-bold'>43+</h1>
                  <h1 className='text-gray-400 text-[13px]'>+%62 نسبت به ماه قبل</h1>
                </div>
              </Card>

            </div>
            {/* end totals  */}
            <div className="w-full flex flex-col md:flex-row gap-4">
              {/* right  */}
              <div className="flex flex-col w-[40%] h-[600px] gap-4">
                <Card className="w-full h-[450px] flex flex-col gap-3 px-4 py-6">
                  <div className="flex  gap-[2px] items-center w-full justify-between">
                    <div className="flex flex-col gap-[2px]">
                      <h1 className='text-white text-lg font-bold'>محبوبیت پلن ها</h1>
                      <p className='text-[14px] text-gray-400 font-medium'>محبوبیت پلن ها بر اساس تعداد فروش</p>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">افزدون پلن</Button>
                      </DialogTrigger>
                      <DialogContent className="w-[800px]">
                        <DialogHeader>
                          <DialogTitle className="text-center">افزدون پلن</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row  gap-4 py-4">
                          <div className="flex flex-col gap-3">
                            <div className="flex flex-col items-start gap-2">
                              <Label htmlFor="name" className="text-right">
                                نام پلن
                              </Label>
                              <Input
                                placeholder="نام پلن را وارد کنید"
                                className="py-6"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="flex flex-col items-start gap-2">
                              <Label htmlFor="username" className="text-right">
                                قیمت پایه
                              </Label>
                              <Input
                                placeholder="قیمت پایه را وارد کنید"
                                className="py-6"
                                name="basePrice"
                                value={formData.basePrice}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="flex flex-col items-start gap-2">
                              <Label htmlFor="username" className="text-right">
                                توضیحات
                              </Label>
                              <Textarea
                                placeholder="برای صفحه اصلی *"
                                className="py-6"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows={5}
                              />
                            </div>
                            <DialogFooter>
                            <Button type="submit">افزودن پلن</Button>
                          </DialogFooter>
                          </div>

                          <div className="flex flex-col gap-3">
                            <div className="flex flex-col items-start gap-2">
                              <Label htmlFor="username" className="text-right">
                                نام امکان
                              </Label>
                              <Input
                                placeholder="نام امکان را وارد کنید"
                                className="py-6"
                                name="featureName"
                                value={featureData.featureName}
                                onChange={handleFeatureChange}
                              />
                            </div >
                            <div className="flex flex-col items-start gap-2">
                              <Label htmlFor="username" className="text-right">
                                قیمت
                              </Label>
                              <Input
                                placeholder="قیمت امکان را وارد کنید"
                                className="py-6"
                                name="featurePrice"
                                value={featureData.featurePrice}
                                onChange={handleFeatureChange}
                              />
                            </div>
                            <Button
                              className="py-6"
                              type="button" onClick={addFeature}
                              variant="outline">افزدون امکان</Button>
                            {formData.features.map((feature, index) => (
                              <Card key={index} className='bg-[#1d1b2e] px-7 py-4 '>
                                <p>{feature.name} - ${feature.price}</p>
                              </Card>
                            ))}
                          </div>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className="flex justify-center flex-col  w-full gap-6 mt-10 ">
                    <div className="flex  gap-[4px] items-center justify-end">
                      <Progress className=" w-[85%] h-[50px] rounded-l-[0.2rem]  rounded-r-[0.2rem]"  value={40}/>
                      <span className='text-[12px] rotate-90 text-gray-300 font-medium'>اموزشی</span>
                    </div>
                    <div className="flex  gap-[px] items-center justify-end">
                      <Progress className=" w-[85%] h-[50px] rounded-l-[0.2rem]  rounded-r-[0.2rem]"  value={70}/>
                      <span className='text-[10px] rotate-90 text-gray-300 font-medium'>فروشگاهی</span>
                    </div>
                    <div className="flex  gap-[8px] items-center justify-end">
                      <Progress className=" w-[85%] h-[50px] rounded-l-[0.2rem]  rounded-r-[0.2rem]"  value={50}/>
                      <span className='text-[12px] rotate-90 text-gray-300 font-medium'>شرکتی</span>
                    </div>
                    <div className="flex  gap-[3px] items-center justify-end">
                      <Progress className=" w-[85%] h-[50px] rounded-l-[0.2rem]  rounded-r-[0.2rem]"  value={25}/>
                      <span className='text-[12px] rotate-90 text-gray-300 font-medium'>شخصی</span>
                    </div>
                  </div>
                </Card>
               
              </div>
              {/* end right  */}
              {/* left  */}
              <Card className="w-[60%] h-[450px]  py-6 px-4">
                <h1 className='text-xl font-bold text-gray-200'>نمودار درآمد ماهیانه</h1>
                <div className="flex gap-2 mt-10 px-4">
                  <div className="flex flex-col gap-[38px]">
                    <span className='text-gray-400 text-[12px]'>50M</span>
                    <span className='text-gray-400 text-[12px]'>30M</span>
                    <span className='text-gray-400 text-[12px]'>15M</span>
                    <span className='text-gray-400 text-[12px]'>7M</span>
                    <span className='text-gray-400 text-[12px]'>4M</span>
                    <span className='text-gray-400 text-[12px]'>0M</span>
                  </div>
                  <div className=" flex items-end ">
                    <div className="flex flex-col items-center gap-2"></div>
                  </div>
                </div>
              </Card>
              {/* end left  */}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Overview





// <Card className="w-full  flex flex-col gap-3 px-4 py-4">
// <div className="border-b-[0.4px] border-slate-800">
//   <h1 className='text-lg font-bold text-white pb-3'>مدیریت ویکسل</h1>
// </div>
// <div className="flex flex-col gap-[20px]">
//   {/* admins  */}
//   <div className="flex w-full items-center justify-between">
//     <div className="flex gap-2">
//       <Avatar className="w-[50px] h-[50px] shadow-md">
//         <AvatarFallback ><span className='text-lg'>W</span></AvatarFallback>
//       </Avatar>
//       <div className="flex flex-col gap-[1.5px] justify-center">
//         <h1 className='text-[14px] text-white font-semibold'>Wixel</h1>
//         <span className='text-[12px] text-gray-400 font-medium'>wixel.org@gmail.com</span>
//       </div>
//     </div>
//     <div className="">
//       <Select>
//         <SelectTrigger className="w-[110px]">
//           <SelectValue placeholder="Admin" />
//         </SelectTrigger>
//         <SelectContent>
//           <SelectGroup>
//             <SelectLabel>دسترسی</SelectLabel>
//             <SelectItem value="apple">Admin</SelectItem>
//             <SelectItem value="banana">user</SelectItem>
//           </SelectGroup>
//         </SelectContent>
//       </Select>
//     </div>
//   </div>
//   <div className="flex w-full items-center justify-between">
//     <div className="flex gap-2">
//       <Avatar className="w-[50px] h-[50px] shadow-md">
//         <AvatarFallback ><span className='text-lg'>A</span></AvatarFallback>
//       </Avatar>
//       <div className="flex flex-col gap-[1.5px] justify-center">
//         <h1 className='text-[14px] text-white font-semibold'>Amir Vosoughi</h1>
//         <span className='text-[12px] text-gray-400 font-medium'>amir.vosoughi@gmail.com</span>
//       </div>
//     </div>
//     <div className="">
//       <Select>
//         <SelectTrigger className="w-[110px]">
//           <SelectValue placeholder="Admin" />
//         </SelectTrigger>
//         <SelectContent>
//           <SelectGroup>
//             <SelectLabel>دسترسی</SelectLabel>
//             <SelectItem value="apple">Admin</SelectItem>
//             <SelectItem value="banana">user</SelectItem>
//           </SelectGroup>
//         </SelectContent>
//       </Select>
//     </div>
//   </div>
//   <div className="flex w-full items-center justify-between">
//     <div className="flex gap-2">
//       <Avatar className="w-[50px] h-[50px] shadow-md">
//         <AvatarFallback ><span className='text-lg'>E</span></AvatarFallback>
//       </Avatar>
//       <div className="flex flex-col gap-[1.5px] justify-center">
//         <h1 className='text-[14px] text-white font-semibold'>Ehsan Masoumi</h1>
//         <span className='text-[12px] text-gray-400 font-medium'>Ehsan.Masm@gmail.com</span>
//       </div>
//     </div>
//     <div className="">
//       <Select>
//         <SelectTrigger className="w-[110px]">
//           <SelectValue placeholder="Admin" />
//         </SelectTrigger>
//         <SelectContent>
//           <SelectGroup>
//             <SelectLabel>دسترسی</SelectLabel>
//             <SelectItem value="apple">Admin</SelectItem>
//             <SelectItem value="banana">user</SelectItem>
//           </SelectGroup>
//         </SelectContent>
//       </Select>
//     </div>
//   </div>
//   {/* admins  */}
// </div>
// </Card>