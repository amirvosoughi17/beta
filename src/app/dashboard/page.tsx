"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import OrderCard from "@/components/order/OrderCard";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import UsersCount from "@/components/dashboard/UsersCount";
import axiosInstance from "@/utils/axiosInstance";
import OrdersCount from "@/components/dashboard/OrdersCount";

interface User {
  _id: string;
  username: string;
  phoneNumber: string;
  role: string;
}

interface Order {
  user: User; 
  websiteName: string;
  description: string;
  websiteType: string;
  monthlyUserCount: string;
  likedWebsiteUrls: string;
  status: string;
  _id: string;
}

const Dashboard = () => {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axiosInstance.get("/api/admin/user/list");
        const orderResponse = await axiosInstance.get("/api/admin/order/list");

        setUsers(userResponse.data.data.users);
        setOrders(orderResponse.data.data.orders);

        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!isAdmin) {
      router.push("/auth/login");
    }
  }, [isAdmin, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <DashboardLayout>
      <div className="w-full h-screen px-4">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full">
          <div className="flex flex-col w-full md:w-[63%] gap-4 md:gap-6">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 h-auto">
              <Card className="w-full md:w-[50%] h-[180px]">
                <div className="w-full flex flex-col items-start justify-center h-full px-5 md:px-7 gap-1.5">
                  <span className="text-neutral-400 text-sm">
                    تعداد کاربران
                  </span>
                  <h1 className="text-4xl font-bold text-white">
                    <UsersCount count={users.length} />
                  </h1>
                  <span className="text-neutral-400 text-sm">
                    ۲۰٪ بیشتر از ماه قبل
                  </span>
                  <Progress value={30} className="w-full mt-2.5" />
                </div>
              </Card>
              <Card className="w-full md:w-[50%] h-[180px]">
                <div className="w-full flex flex-col items-start justify-center h-full px-5 md:px-7 gap-1.5">
                  <span className="text-neutral-400 text-sm">
                    تعداد سفارشات
                  </span>
                  <h1 className="text-4xl font-bold text-white">
                    <OrdersCount  count={orders.length}/>
                  </h1>
                  <span className="text-neutral-400 text-sm">
                    ۲۰٪ بیشتر از ماه قبل
                  </span>
                  <Progress value={50} className="w-full mt-2.5" />
                </div>
              </Card>
            </div>
            <Card id="users" className="min-h-[450px] pb-4 flex flex-col">
              <div className="w-full bg-neutral-800 h-[50px] py-2 px-5 rounded-t-lg">
                <h1 className="text-white text-xl font-medium flex items-center gap-2">
                  <FaUsers size={22} />
                  <span>کاربران</span>
                </h1>
              </div>
              <div className="flex flex-col gap-2 px-4 py-4">
                <div className="w-full pb-3 flex items-center justify-between px-3 md:px-5">
                  <div className="flex items-center gap-[100px]">
                    <span className="hidden md:block text-neutral-400">
                      نقش
                    </span>
                    <span className="text-neutral-400">نام کاربری</span>
                  </div>
                  <span className="text-neutral-400">شماره تماس</span>
                </div>
                <div className="flex flex-col gap-3">
                  {users.map((user) => (
                    <div
                      key={user._id}
                      className="flex items-center justify-between px-3 md:px-5 border-y-[0.5px] border-neutral-600/70 py-4"
                    >
                      <div className="flex items-center gap-[100px]">
                        <span className="hidden md:block">{user.role}</span>
                        <span>{user.username}</span>
                      </div>
                      <span>{user.phoneNumber}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
          <Card
            id="orders"
            className="w-full md:w-[37%] md:h-[706px] h-[550px] overflow-y-auto pb-6"
          >
            <div className="w-full bg-neutral-800 h-[50px] py-2 px-5">
              <h1 className="text-white text-xl font-medium flex items-center gap-2">
                <MdOutlineShoppingBag size={22} />
                <span>سفارشات</span>
              </h1>
            </div>
            <div className="flex flex-col gap-4 w-full px-4 py-6">
              {orders.map((order) => (
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
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
