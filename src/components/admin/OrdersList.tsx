"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/utils/axiosInstance";
import { Skeleton } from "@/components/ui/skeleton";
import Spinner from "@/components/Spinner";
import { FetchOrder } from "@/types";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import Order from "@/components/admin/Order";

const OrdersList: React.FC = () => {
  const [orders, setOrders] = useState<FetchOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get("/api/orders", {
          withCredentials: true,
        });
        setOrders(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);
  const handleDelete = (orderId: number) => {
    setOrders(orders.filter((order) => order.id !== orderId));
  };
  return (
    <TableBody>
      {loading ? (
        <>
          <TableRow>
            <TableCell className="font-medium ">
              <Skeleton className="h-8 w-[60px] lg:w-[80px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-8 w-[100px] lg:w-[120px]" />
            </TableCell>
            <TableCell className="hidden lg:table-cell">
              <Skeleton className="h-8 w-[60px] lg:w-[80px]" />
            </TableCell>
            <TableCell className="hidden lg:table-cell">
              <Skeleton className="h-8 w-[60px] lg:w-[80px]" />
            </TableCell>
            <TableCell className="">
              <Skeleton className="h-8 w-[35px]" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium ">
              <Skeleton className="h-8 w-[60px] lg:w-[80px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-8 w-[100px] lg:w-[120px]" />
            </TableCell>
            <TableCell className="hidden lg:table-cell">
              <Skeleton className="h-8 w-[60px] lg:w-[80px]" />
            </TableCell>
            <TableCell className="hidden lg:table-cell">
              <Skeleton className="h-8 w-[60px] lg:w-[80px]" />
            </TableCell>
            <TableCell className="">
              <Skeleton className="h-8 w-[35px]" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium ">
              <Skeleton className="h-8 w-[60px] lg:w-[80px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-8 w-[100px] lg:w-[120px]" />
            </TableCell>
            <TableCell className="hidden lg:table-cell">
              <Skeleton className="h-8 w-[60px] lg:w-[80px]" />
            </TableCell>
            <TableCell className="hidden lg:table-cell">
              <Skeleton className="h-8 w-[60px] lg:w-[80px]" />
            </TableCell>
            <TableCell className="">
              <Skeleton className="h-8 w-[35px]" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium ">
              <Skeleton className="h-8 w-[60px] lg:w-[80px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-8 w-[100px] lg:w-[120px]" />
            </TableCell>
            <TableCell className="hidden lg:table-cell">
              <Skeleton className="h-8 w-[60px] lg:w-[80px]" />
            </TableCell>
            <TableCell className="hidden lg:table-cell">
              <Skeleton className="h-8 w-[60px] lg:w-[80px]" />
            </TableCell>
            <TableCell className="">
              <Skeleton className="h-8 w-[35px]" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium ">
              <Skeleton className="h-8 w-[60px] lg:w-[80px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-8 w-[100px] lg:w-[120px]" />
            </TableCell>
            <TableCell className="hidden lg:table-cell">
              <Skeleton className="h-8 w-[60px] lg:w-[80px]" />
            </TableCell>
            <TableCell className="hidden lg:table-cell">
              <Skeleton className="h-8 w-[60px] lg:w-[80px]" />
            </TableCell>
            <TableCell className="">
              <Skeleton className="h-8 w-[35px]" />
            </TableCell>
          </TableRow>
        </>
      ) : (
        <>
          {orders.map((order) => (
            <Order
              loading={loading}
              key={order.id}
              order={order}
              onDelete={handleDelete}
            />
          ))}
        </>
      )}
    </TableBody>
  );
};

export default OrdersList;
