"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserInfo,
  selectUsers,
  selectUserInfo,
} from "@/redux/user/userSlice";
import { fetchUserData } from "@/utils/userActions";
import { fetchAllUsers } from "@/utils/userActions";
import { useRouter } from "next/navigation";
import Link from "next/link";
import DashboardLayout from "@/components/DashboardLayout";
import { Loader2 } from "lucide-react";
import { TiTick } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";

// shadcn
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";

const Admin = () => {
  const dispatch = useDispatch();
  const [isUpdating, setIsUpdating] = useState(false);
  const userInfo = useSelector(selectUserInfo);
  const router = useRouter();
  const users = useSelector(selectUsers);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  useEffect(() => {
    if (userInfo && userInfo.role !== "admin") {
      router.push("/dashbaord");
    }
  }, [userInfo, router]);

  const fetchOrders = async () => {
    try {
      const response = await fetch("/api/admin/orders");
      if (response.ok) {
        const data = await response.json();
        setOrders(data.orders);
        console.log(data);
      } else {
        console.error("Failed to fetch orders:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching orders:", error.message);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);

  const handleAcceptProject = async (orderId) => {
    setIsUpdating(true);
    try {
      const response = await fetch(`/api/admin/orders`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderId, newStatus: "پذیرفته شده" }),
      });
      if (!response.ok) {
        throw new Error("خطا در تایید پروژه.");
      }
      fetchOrders();
    } catch (error) {
      console.error("Error accepting project:", error.message);
      alert(error.message);
    } finally {
      setIsUpdating(false);
    }
  };
  const handleRejectProject = async (orderId) => {
    setIsUpdating(true);
    try {
      const response = await fetch(`/api/admin/orders`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderId, newStatus: "پذیرفته نشده" }),
      });
      if (!response.ok) {
        throw new Error("خطا در تایید پروژه.");
      }
      fetchOrders();
    } catch (error) {
      console.error("Error accepting project:", error.message);
      alert(error.message);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="p-2 sm:p-8 w-full">
        <div className="w-full  lg:w-[80%] xl:w-[85%] lg:mr-[295px] lg:mt-0 mt-[70px]">
          <div className="w-[100%] min-h-screen  mx-auto  shadow-md rounded-xl py-7 px-1 lg:px-4 xl:px-8">
            <div className="flex flex-col gap-2 mb-10">
              <h1 className="text-3xl font-semibold text-white">
                لیست سفارشات
              </h1>
              <p className="text-md text-gray-600">
                برای قبول یا رد کردن پروژه روی ایکون تیک یا ضربدر کلیک کنید
              </p>
            </div>
            {orders.length > 0 ? (
              <div className="flex flex-wrap gap-6">
                {orders.map((order) => (
                  <>
                    {order?.status === "پذیرفته نشده" ? (
                      <></>
                     ) : (
                    <Card
                      key={order._id}
                      className=" w-full md:w-[42%] px-2 py-5 sm:px-4 sm:py-6 xl:px-6 xl:py-8"
                    >
                      <div>
                        <div className="flex flex-col gap-3">
                          <div className="w-full flex  justify-between">
                            <h1 className="text-white font-semibold text-xl sm:text-2xl">
                              سایت {order.plan}
                            </h1>
                            <div className="flex flex-col gap-2">
                              <Badge
                                className={`py-[5px] ${
                                  order.status === "پذیرفته شده"
                                    ? "bg-yellow-600"
                                    : order.status === "تکمیل شده"
                                    ? "bg-green-600"
                                    : order.status === "در انتظار تایید"
                                    ? "bg-gray-600"
                                    : order.status === "پذیرفته نشده"
                                    ? "bg-rose-600"
                                    : order.status === "در حال پیشرفت"
                                    ? "bg-blue-600"
                                    : order.status ===
                                      "در انتظار پرداخت قسط اول"
                                    ? "bg-orange-600"
                                    : order.status ===
                                      "در انتظار پرداخت قسط دوم"
                                    ? "bg-violet-600"
                                    : order.status === 'لغو شده"'
                                    ? "bg-red-600"
                                    : ""
                                }`}
                              >
                                {order.status}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Card className="flex gap-1 flex-col pl-2 pr-3 py-7 sm:p-6 w-[70%]">
                              <h1 className="text-zinc-200 text-[14px] sm:text-md">
                                {order?.user?.username}
                              </h1>
                              <h2 className="text-zinc-600 text-xs sm:text-sm">
                                {order?.user?.phoneNumber}
                              </h2>
                            </Card>
                            <Card className="my-3 py-3 px-2 sm:p-3 flex items-center justify-center gap-1 w-[30%]">
                              <span className="flex items-center justify-center  rotate-45 duration-300">
                                <div className="w-[58px] h-[58px]  rounded-full flex items-center justify-center bg-[#1d1f2d] rotate-[-45deg] absolute top- z-50">
                                  <span className="text-white text-[15px]">
                                    {`${Math.round(order.orderProgress)}%`}
                                  </span>
                                </div>
                                <Progress
                                  className="w-[70px] h-[70px] bg-transparent border-[0.5px] rounded-full flex items-center justify-center z-10 "
                                  value={order.orderProgress}
                                />
                              </span>
                            </Card>
                            {userInfo &&
                              userInfo.role === "admin" &&
                              order.status === "در انتظار تایید" && (
                                <div className="flex items-center justify-center flex-col  gap-[4px]">
                                  <Button
                                    variant="outline"
                                    className="p-[3px] w-[46px] h-[46px] rounded-md"
                                    disabled={isUpdating}
                                    onClick={() =>
                                      handleRejectProject(order._id)
                                    }
                                  >
                                    <IoMdClose size={22} />
                                  </Button>
                                  <Button
                                    variant="outline"
                                    className="p-[3px] w-[46px] h-[46px] rounded-md"
                                    disabled={isUpdating}
                                    onClick={() =>
                                      handleAcceptProject(order._id)
                                    }
                                  >
                                    <TiTick size={22} />
                                  </Button>
                                </div>
                              )}
                          </div>
                          <div className="flex w-full items-center justify-between  pt-3 px-2">
                            <Link href={`/dashboard/order/${order._id}`}>
                              <Button variant="outline">مشاهده</Button>
                            </Link>
                            <span className="text-lg font-medium text-gray-300">
                              {order.totalPrice.toLocaleString()} تومان
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                     )}
                  </>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center ">
                <span className="text-md text-gray-200">لطفا کمی صبر کنید</span>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Admin;
