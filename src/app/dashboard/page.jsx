"use client";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUserInfo } from "@/redux/user/userSlice";
import { fetchUserData } from "@/utils/userActions";
import { selectIsAuthenticated } from "@/redux/user/userSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2 } from "lucide-react";
//react icons
import DashboardLayout from "@/components/DashboardLayout";
// shadcn
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const router = useRouter();
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(true);
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [noOrder, setNoOrder] = useState(orders.length === 0);


  useEffect(() => {
    if (!isAuthenticated) {
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    const fetchUserOrders = async () => {
      try {
        setLoadingOrders(true);
        const ordersResponse = await fetch("/api/dashboard/myOrders");
        if (ordersResponse.ok) {
          const ordersData = await ordersResponse.json();
          setOrders(ordersData.myOrders || []);
          setNoOrder(ordersData.myOrders.length === 0);
        } else {
          console.error(
            "Failed to fetch user orders:",
            ordersResponse.statusText
          );
        }
      } catch (error) {
        console.error("Error fetching user orders:", error.message);
      } finally {
        setLoadingOrders(false);
      }
    };
    fetchUserOrders();
  }, []);
  const handleOrderClick = (orderId) => {
    router.push(`/dashboard/order/${orderId}`);
  };
  return (
    <DashboardLayout>
      <div className="py-5 px-2 sm:px-5 md:px-7 lg:py-10 lg:px-10 w-full min-h-screen lg:mt-0 mt-[70px]  ">
        <div className="w-full  lg:w-[80%] xl:w-[85%] lg:mr-[220px] flex flex-col gap-6">
          <div className="flex flex-col gap-4 w-full lg:w-[75%] mx-auto ">
            <div className="flex flex-col  gap-3 border-b-[0.5px] border-zinc-700/60 pb-5">
              <p className="text-zinc-300 text-sm sm:text-md md:text-[14px] hover:text-white duration-300 font-light">
                برای مشاهده وضعیت پروژه تیم ویکسل در هر مرحله پیامی به شما ارسال
                میکند که در بخش{" "}
                <Link
                  href="/dashboard/notofications"
                  className="text-blue-500 border-b-[0.7px] border-blue-500 pb-[2px]"
                >
                  اعلانات{" "}
                </Link>{" "}
                قابل مشاهده است
              </p>
            </div>
            <div className="flex flex-col items- gap-3  mt-10 ">
              <h1 className="text-2xl text-gray-200 ">لیست سفارشات</h1>
              <p className="text-sm text-gray-400 ">
                برای مشاهده صفحه مربوط به سفارش روی سطر سفارش کلیک کنید
              </p>
            </div>
            <div className="h-full flex flex-col gap-5  mt-6">
              {loadingOrders ? (
                <div className="flex items-center justify-center ">
                  <span className="text-md text-gray-200">
                    لطفا کمی صبر کنید
                  </span>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                </div>
              ) : (
                <>
                  <Table className="">
                    <TableHeader className="bg-transparent border-[0.4px] border-gray-700  rounded-md">
                      <TableRow className="">
                        <TableHead className="w-[150px] text-right">
                          نوع سایت
                        </TableHead>
                        <TableHead className="w-[250px] text-right ">
                          <span className="hidden sm:flex">
                          پیشرفت پروژه
                          </span>
                        </TableHead>
                        <TableHead className="w-[200px] text-right">
                          وضعیت پروژه
                        </TableHead>
                        <TableHead className="text-right">قیمت نهایی</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody className="">
                      {orders ? (
                        orders.map((order) => (
                          <TableRow
                            key={order._id}
                            onClick={() => handleOrderClick(order._id)}
                            className="cursor-pointer border-[0.4px] border-gray-700 rounded-md hover:bg-gray-600"
                          >
                            <TableCell className="font-medium w-[100px] text-[17px] text-zinc-300">
                              {order.plan}
                            </TableCell>
                            <TableCell className=" items-center h-[65px] gap-2 w-[100px] hidden sm:flex sm:w-[200px]">
                              <span className="text-zinc-300 hover:text-white duration-300  tex-lg ">{`${Math.round(
                                order.orderProgress
                              )}%`}</span>
                              <Progress
                                className="w-[80px] sm:w-full"
                                value={order.orderProgress}
                              />
                            </TableCell>
                            <TableCell className="text-[17px] text-zinc-300">
                              <Badge>{order.status}</Badge>
                            </TableCell>
                            <TableCell className="text-[17px] text-zinc-300">
                              {order.totalPrice}
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow className="cursor-pointer hover:bg-gray-600">
                          <TableCell className="font-medium w-[100px] text-[17px] text-zinc-300">
                            ----
                          </TableCell>
                          <TableCell className="flex items-center h-[65px] gap-2 w-[200px]">
                            <span className="text-zinc-300 hover:text-white duration-300  tex-lg ">
                              0%
                            </span>
                            <Progress className="" value={0} />
                          </TableCell>
                          <TableCell className="text-[17px] text-zinc-300">
                            <Badge>----</Badge>
                          </TableCell>
                          <TableCell className="text-[17px] text-zinc-300">
                            ----
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                  <div className=" w-full flex items-center justify-between mt-5">
                    <Link href="/order">
                      <Button>ثبت سفارش جدید</Button>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

