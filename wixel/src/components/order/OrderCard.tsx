"use client";
import React, { useState } from "react";
import axiosInstance from "@/utils/axiosInstance";
import { Card } from "../ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface orderCardProps {
  user: any;
  websiteName: string;
  description: string;
  websiteType: string;
  monthlyUserCount: string;
  likedWebsiteUrls: string;
  status: string;
  orderId: string;
}

const OrderCard: React.FC<orderCardProps> = ({
  user,
  websiteName,
  websiteType,
  description,
  monthlyUserCount,
  likedWebsiteUrls,
  status,
  orderId,
}) => {
  const [currentStatus, setCurrentStatus] = useState(status);

  const handleStatusChange = async (newStatus: string) => {
    try {
      setCurrentStatus(newStatus);
      const response = await axiosInstance.patch(
        `/api/orders/${orderId}/status`,
        {
          status: newStatus,
        }
      );

      if (response.status !== 200) {
        throw new Error("Failed to update status");
      }
    } catch (error) {
      console.error(error);
      setCurrentStatus(status);
    }
  };
  return (
    <Card className="w-full min-h-[240px] flex flex-col gap-2 p-3">
      <div className="w-full flex items-center justify-between mb-2">
        <h1 className="text-2xl text-white font-semibold">{websiteName}</h1>
        <Badge
          className={` py-[5px] ${
            status === "تکمیل شده" && "bg-emerald-600 text-white"
          } ${status === "لغو شده" && "bg-rose-600 text-white"}`}
        >
          {status}
        </Badge>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-neutral-400 text-sm ">نوع وبسایت :</span>
        <p className="text-md text-neutral-200 ">{websiteType} </p>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-neutral-400 text-sm ">تعداد کاربر :</span>
        <p className="text-md text-neutral-200 ">{monthlyUserCount} </p>
      </div>
      <div className="pt-2 mt-2 border-t-[0.4px] border-neutral-500/50 flex items-center justify-between mb-2">
        <span>{user}</span>
        <span>09123998400</span>
      </div>
      <div className="flex items-center gap-3">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary" className="w-[50%]">
              مشاهده سفارش
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] w-[360px] md:w-[420px] h-[520px] overflow-y-auto rounded-xl">
            <div className="w-full flex flex-col gap-3">
              <div className="flex w-full flex-col gap-2 mt-5">
                <label className="text-neutral-300 text-sm">
                  نام وبسایت :{" "}
                </label>
                <Input
                  disabled={true}
                  placeholder={websiteName}
                  className="text-neutral-300 text-lg"
                />
              </div>
              <div className="flex w-full flex-col gap-2 ">
                <label className="text-neutral-300 text-sm">نوع وبسایت :</label>
                <Input
                  disabled={true}
                  placeholder={websiteType}
                  className="text-neutral-300 text-lg"
                />
              </div>
              <div className="flex w-full flex-col gap-2 ">
                <label className="text-neutral-300 text-sm">
                  تعداد کاربران :
                </label>
                <Input
                  disabled={true}
                  placeholder={monthlyUserCount}
                  className="text-neutral-300 text-lg"
                />
              </div>
              <div className="flex w-full flex-col gap-2 ">
                <label className="text-neutral-300 text-sm">وبسایت نمونه</label>
                <Input
                  disabled={true}
                  placeholder={likedWebsiteUrls}
                  className="text-neutral-300 text-lg"
                />
              </div>
              <div className="flex w-full flex-col gap-2 ">
                <label className="text-neutral-300 text-sm">توضیحات :</label>
                <Textarea placeholder={description} disabled={true} />
              </div>
              <div className="flex w-full flex-col gap-2 mt-5 pt-5 border-t-[0.4px] border-neutral-600/60 ">
                <label className="text-neutral-300 text-sm">نام کاربری</label>
                <Input
                  disabled={true}
                  placeholder={user}
                  className="text-neutral-300 text-lg"
                />
              </div>
              <div className="flex w-full flex-col gap-2 mb-5">
                <label className="text-neutral-300 text-sm">شماره تماس</label>
                <Input
                  disabled={true}
                  placeholder={"0929584030"}
                  className="text-neutral-300 text-lg"
                />
              </div>
            </div>
          </DialogContent>
        </Dialog>
        <Select onValueChange={handleStatusChange}>
          <SelectTrigger className="w-[50%]">
            <SelectValue
              placeholder={currentStatus}
              className="text-neutral-500"
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="تکمیل شده">تکمیل شده</SelectItem>
              <SelectItem value="درحال انتظار">درحال انتظار</SelectItem>
              <SelectItem value="لغو شده">لغو شده</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </Card>
  );
};

export default OrderCard;
