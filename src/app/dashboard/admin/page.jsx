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
      router.push("/login");
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
      alert("پروژه با موفقیت تایید شد.");
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
        <div className="w-full  lg:w-[80%] xl:w-[85%] lg:mr-[220px] md:mt-0 mt-[70px]">
          <div className="w-full min-h-screen  overflow-y-auto  shadow-md rounded-xl py-7 px-5 lg:px-4 xl:px-8">
            <h2 className="text-2xl font-bold text-white mb-6 pb-5 border-b-[1px] border-slate-800/60">
              سفارشات
            </h2>
            {orders.length > 0 ? (
              <div className="flex flex-wrap gap-6">
                {orders.map((order) => (
                  <Card key={order._id} className=" w-full md:w-[42%] p-4">
                    <div>
                      <div className="flex flex-col gap-3">
                        <div className="w-full flex items-center justify-between">
                          <h1 className="text-zinc-300 text-lg">
                            {order.plan}
                          </h1>
                          <div className="flex flex-col gap-2">
                            <Badge>{order.status}</Badge>
                            {userInfo && userInfo.role === "admin" && order && (
                              <Button
                                variant="secondary"
                                disabled={isUpdating}
                                onClick={() => handleAcceptProject(order._id)} 
                              >
                                پذیرش
                              </Button>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <span className="text-sm text-muted-foreground">
                            امکانات :
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {order.selectedFeatures.map((feature) => (
                              <Badge
                                variant="secondary"
                                key={feature.name}
                                className=""
                              >
                                {feature.name}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="my-3 flex items-center gap-1">
                          <span className="text-zinc-300 hover:text-white duration-300  tex-lg ">{`${Math.round(
                            order.orderProgress
                          )}%`}</span>
                          <Progress value={order.orderProgress} />
                        </div>
                        <div className="flex w-full items-center justify-between border-t-[0.6px] border-zinc-700/60 pt-3 px-2">
                          <div className="flex gap-1 flex-col">
                            <h1 className="text-zinc-200 text-md">
                              {order?.user?.username}
                            </h1>
                            <h2 className="text-zinc-400 text-sm">
                              {order?.user?.phoneNumber}
                            </h2>
                          </div>
                          <div className="">
                            {order.totalPrice.toLocaleString()} تومان
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
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

{
  /* <div className="flex w-full items-center justify-between">
                      <h1 className='text-xl'>{order.plan}</h1>

                      <p className={
                        order.status === 'completed' ? 'text-green-500 text-sm' :
                          order.status === 'pending' ? 'text-orange-500 text-sm' :
                            order.status === 'accepted' ? 'text-yellow-500 text-sm' :
                              order.status === 'notAccepted' ? 'text-red-500 text-sm' :
                                order.status === 'inProgress' ? 'text-blue-500 text-sm' :
                                  order.status === 'underReview' ? 'text-purple-500 text-sm' :
                                    order.status === 'canceled' ? 'text-gray-500 text-sm' : ''

                      }>{order.status}</p>
                    </div>
                    <div className="flex flex-col gap-[10px] my-5 min-h-[170px]">
                      {order.selectedFeatures.map((feature) => (
                        <div key={feature.name} className='bg-[#313250] rounded-md shadow-sm py-[4px] px-3'>
                          {feature.name}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-2 my-1 border-b-[1px] pb-4 border-gray-600/30">
                      <h1 className='text-white  '>اطلاعات کاربر</h1>
                      <div className="flex items-center justify-between w-full">
                        <span className='text-gray-300 text-sm '>نام کاربری :</span>
                        <p className='text-gray-200 text-md '>{order?.user?.username}</p>
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <span className='text-gray-300 text-sm '>شماره تماس :</span>
                        <p className='text-gray-200 text-md '>{order?.user?.phoneNumber}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Link href={`/dashboard/order/${order._id}`} className='bg-[--color-secondary] py-[5px] px-4 rounded-md border-gray-400/40'>
                        مشاهده
                      </Link>
                      <p className='text-gray-200 text-md '>تومان {order.totalPrice}</p>
                    </div> */
}
