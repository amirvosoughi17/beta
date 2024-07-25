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

const OrdersList: React.FC = () => {
  const [orders, setOrders] = useState<FetchOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axiosInstance.get("/api/orders", {
          withCredentials: true,
        });
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
      setLoading(false);
    };
    fetchOrders();
  }, []);
  const handleDelete = (orderId: number) => {
    setOrders(orders.filter((order) => order.id !== orderId));
  };
  return (
    <TableBody>
      {orders.map((order) => (
        <Order key={order.id} order={order} onDelete={handleDelete} />
      ))}
    </TableBody>
  );
};

export default OrdersList;
