"use client";
import React, { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import Order from "@/components/admin/Order";

interface OrdersListProps {
  orders: any[];
  ordersLoading: boolean;
}

const OrdersList: React.FC<OrdersListProps> = ({ ordersLoading, orders }) => {
  const [ordersState, setOrders] = useState<any[]>(orders || []);

  useEffect(() => {
    if (Array.isArray(orders)) {
      setOrders(orders);
    } else {
      setOrders([]);
    }
  }, [orders]);

  const handleDelete = (orderId: number) => {
    setOrders(ordersState.filter((order) => order.id !== orderId));
  };

  return (
    <TableBody>
      {ordersLoading ? (
        <>
          {Array.from({ length: 5 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
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
              <TableCell>
                <Skeleton className="h-8 w-[35px]" />
              </TableCell>
            </TableRow>
          ))}
        </>
      ) : (
        <>
          {ordersState.map((order) => (
            <Order
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
