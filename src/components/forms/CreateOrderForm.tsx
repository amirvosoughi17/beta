"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import axiosInstance from "@/utils/axiosInstance";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface FormData {
  companyName: string;
  description: string;
  websiteType: string;
  monthlyUsersCount: string;
  likedWebsiteUrls: string;
}

const CreateOrderForm = () => {
  const { control, handleSubmit, register } = useForm<FormData>();
  const onSubmit = async (data: FormData) => {
    try {
      const response = await axiosInstance.post("/api/", data);
      console.log("Success:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">order</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] w-[360px] md:w-[420px] h-[520px] overflow-y-auto rounded-xl">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex   flex-col gap-4 mt-2 w-full h-full relative"
        >
          <div className="flex flex-col gap-3">
            <label htmlFor="">نام شرکت </label>
            <Input
              placeholder="نام شرکت / گروه فعالیت خود را وارد کنید"
              className="w-full py-6"
              {...register("companyName")}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="">توضیحات </label>
            <Textarea
              rows={4}
              placeholder="توضیحات را وارد کنید"
              className="w-full py-6"
              {...register("description")}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="websiteType" className="text-lg font-medium">
              نوع وبسایت خود را انتخاب کنید
            </label>
            <Controller
              name="websiteType"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <RadioGroup
                  value={field.value}
                  onValueChange={field.onChange}
                  className="flex flex-col gap-3"
                >
                  <div className="flex items-center gap-3 flex-wrap">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="ecommerce" id="r1" />
                      <label htmlFor="r1">فروشگاهی</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="learning" id="r2" />
                      <label htmlFor="r2">اموزشی</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="company" id="r3" />
                      <label htmlFor="r3">شرکتی</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="personal" id="r4" />
                      <label htmlFor="r4">شخصی</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="startup" id="r5" />
                      <label htmlFor="r5">استارت اپ</label>
                    </div>
                  </div>
                </RadioGroup>
              )}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="monthlyUsers" className="text-lg font-medium">
              تعداد کاربر ماهانه
            </label>
            <Controller
              name="monthlyUsersCount"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full py-6">
                    <SelectValue placeholder="تعداد حدودی کاربران" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="lessThan50">کمتر از ۵۰ </SelectItem>
                      <SelectItem value="moreThan100">بیشتر از ۱۰۰</SelectItem>
                      <SelectItem value="moreThan500">بیشتر از ۵۰۰</SelectItem>
                      <SelectItem value="moreThan1000">
                        بیشتر از ۱۰۰۰
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className="flex flex-col gap-3 ">
            <label htmlFor="">وب سایت نمونه</label>
            <Input
              placeholder="نمونه : www.digikala.com"
              className="w-full py-6"
              {...register("likedWebsiteUrls")}
            />
          </div>
          <Button type="submit" className=" mt-4 ">
            ایجاد سفارش
          </Button>
        </form>
        <DialogFooter className=""></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateOrderForm;
