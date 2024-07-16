"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/utils/axiosInstance";
import Spinner from "@/components/Spinner";
import { FetchOrder } from "@/types";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Order from "@/components/admin/Order";

const AdminPage: React.FC = () => {
  const [orders, setOrders] = useState<FetchOrder[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axiosInstance.get("/api/orders", {
          withCredentials: true,
        });
        setOrders(response.data);
        setIsAdmin(true);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setIsAdmin(false);
      }
      setLoading(false);
    };
    fetchOrders();
  }, []);
  const handleDelete = (orderId: number) => {
    setOrders(orders.filter((order) => order.id !== orderId));
  };
  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-neutral-900 z-50">
        <div className="flex w-full flex-col items-center justify-center">
          <Spinner />
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    router.push("/");
  }

  return (
    <div className="w-full h-full">
      <div className="flex flex-col gap-6 p-3 pt-10 w-full md:max-w-[70%] mx-auto 2xl:max-w-[60%]">
        <div className="flex flex-col gap-3">
          <h1 className=" text-xl md:text-2xl font-bold text-white">
            سفارش ها
          </h1>
          <p className=" text-neutral-400 text-sm md:text-md">
            سفارش های اخیر ویکسل
          </p>
        </div>
        <div className="">
          <Table dir="rtl" className=" border-[0.5px] border-neutral-700">
            <TableHeader>
              <TableRow>
                <TableHead className=" text-right">نام </TableHead>
                <TableHead className="text-right">شماره تماس</TableHead>
                <TableHead className="invisible  xl:visible text-right">
                  نام شرکت
                </TableHead>
                <TableHead className=" hidden text-right ">توضیحات</TableHead>
                <TableHead className=" min-w-[120px] text-right">
                  نوع وبسایت
                </TableHead>
                <TableHead className=" text-right">مشاهده</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <Order key={order.id} order={order} onDelete={handleDelete} />
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
