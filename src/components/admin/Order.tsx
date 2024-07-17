"use client";
import React, { useState } from "react";
import axiosInstance from "@/utils/axiosInstance";
import { TableCell, TableRow } from "@/components/ui/table";
import Spinner from "../Spinner";
import { FiAlertTriangle } from "react-icons/fi";
import { MdOutlineDone } from "react-icons/md";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MdEdit } from "react-icons/md";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Order = ({ order , onDelete }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleOrderDelete = async () => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.delete(`/api/orders/${order.id}`);
      onDelete(order.id);
      console.log("order deleted successfully");
      setIsLoading(false);
      setIsSuccess(true);
    } catch (error: any) {
      setMessage(error.response.message);
      console.log("falied to delete order !");
      setIsSuccess(false);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <TableRow >
      <TableCell className="font-medium ">{order.name}</TableCell>
      <TableCell>{order.phoneNumber}</TableCell>
      <TableCell className="invisible  xl:visible">
        {order.companyName}
      </TableCell>
      <TableCell className=" hidden ">{order.description}</TableCell>
      <TableCell className="">{order.typeOfWeb}</TableCell>
      <TableCell className=" ">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="icon" variant="outline">
              <MdEdit size={18} />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-[365px] sm:max-w-[430px] max-h-[550px] overflow-y-auto">
            <div className="flex flex-col gap-5 mt-8">
              <div className="flex flex-col gap-3">
                <label
                  htmlFor=""
                  className=" text-neutral-300 text-sm lg:text-md"
                >
                  نام و نام خانوادگی
                </label>
                <Input value={order.name} disabled />
              </div>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor=""
                  className=" text-neutral-300 text-sm lg:text-md"
                >
                  شماره تماس
                </label>
                <Input value={order.phoneNumber} disabled />
              </div>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor=""
                  className=" text-neutral-300 text-sm lg:text-md"
                >
                  نام شرکت
                </label>
                <Input value={order.companyName} disabled />
              </div>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor=""
                  className=" text-neutral-300 text-sm lg:text-md"
                >
                  نوع وبسایت
                </label>
                <Input value={order.typeOfWeb} disabled />
              </div>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor=""
                  className=" text-neutral-300 text-sm lg:text-md"
                >
                  تعداد کاربر
                </label>
                <Input value={order.monthlyUsersCount} disabled />
              </div>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor=""
                  className=" text-neutral-300 text-sm lg:text-md"
                >
                  وبسایت مورد علاقه
                </label>
                <Input value={order.likedWebsiteUrls} disabled />
              </div>
            </div>
            <DialogFooter>
              <Button
              onClick={handleOrderDelete}
                disabled={isLoading}
                className={` w-full hover:bg-red-500/70 bg-red-500 text-white ${
                  isSuccess && "bg-rose-600 text-white"
                }`}
                type="submit"
              >
                {isLoading ? (
                  <div className="flex w-full items-center justify-between">
                    <Spinner />
                    <span>حذف سفارش</span>
                    <span className="w-[25px]"></span>
                  </div>
                ) : (
                  <span>{!isSuccess && "حذف سفارش"}</span>
                )}
                {isSuccess && (
                  <div className="flex w-full  items-center justify-between">
                    <div className="w-[25px] h-[25px] rounded-full flex items-center justify-center  text-white">
                      <MdOutlineDone size={25} />
                    </div>
                    <span className="text-[13px] lg:text-[14px]">
                      سفارش با موفقیت حذف شد
                    </span>
                    <span className="w-[25px]"></span>
                  </div>
                )}
              </Button>
              {message && (
                <div className=" flex items-center gap-3 w-full rounded-lg bg-red-500 py-3 px-4 text-sm lg:text-md">
                  <FiAlertTriangle size={17} />
                  <span>{message}</span>
                </div>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </TableCell>
    </TableRow>
  );
};

export default Order;
