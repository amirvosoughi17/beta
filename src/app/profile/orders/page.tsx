"use client";
import React, { useState, useEffect } from "react";
import axiosInstance from "@/utils/axiosInstance";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import OrderCard from "@/components/order/OrderCard";

interface Order {
  _id : any
  user: any; 
  websiteName: string;
  description: string;
  websiteType: string;
  monthlyUserCount: string;
  likedWebsiteUrls: any;
  status: string;
  orderId: string;
}
const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axiosInstance.get("/api/user/orders");
        setOrders(response.data.data.orders);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch user orders", err);
        setError("Failed to fetch user orders");
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <DashboardLayout>
      <div className="flex  items-center justify-center  flex-col">
        {orders.map((order : Order) => (
          <OrderCard
            key={order._id}
            phoneNumber={order.user.phoneNumber}
            username={order.user.username}
            websiteName={order.websiteName}
            description={order.description}
            websiteType={order.websiteType}
            monthlyUserCount={order.monthlyUserCount}
            likedWebsiteUrls={order.likedWebsiteUrls}
            status={order.status}
            orderId={order._id}
          />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default OrdersPage;
