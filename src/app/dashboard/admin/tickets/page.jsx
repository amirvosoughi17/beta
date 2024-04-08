"use client";
import React, { useState, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import Link from "next/link";
import { fetchUserData } from "@/utils/userActions";
import { selectUserInfo } from "@/redux/user/userSlice";
//shadcn
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const router = useRouter();
  const dispatch = useDispatch();

  const userInfo = useSelector(selectUserInfo);
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  useEffect(() => {
    if (userInfo && userInfo.role !== "admin") {
      router.push("/dashbaord");
    }
  }, [userInfo, router]);
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch("/api/admin/tickets");
        const data = await response.json();
        setTickets(data.tickets);
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };

    fetchTickets();
  }, []);
  return (
    <div>
      <DashboardLayout>
        <div className="w-full lg:w-[80%] xl:w-[85%] lg:mr-[300px] lg:mt-0 mt-[70px]">
          <div className="w-full min-h-screen overflow-y-auto shadow-md rounded-xl py-7 px-5 lg:px-4 xl:px-8">
            <div className="flex flex-col w-full lg:w-[85%] mx-auto">
              <div className="flex flex-col gap-4 items-start my-8">
                <h1 className="text-2xl sm:text-3xl font-semibold">
                  لیست تیکت ها
                </h1>
                <p className="text-sm sm:text-md font-medium text-zinc-400">
                  برای پاسخ دادن به تیکت روی سطر تیکت کلیک کنید
                </p>
              </div>
              <div className="flex flex-col gap-0 w-full lg:w-[85%] ">
                <div className="w-full flex items-center justify-between  border-[0.5px] bg-gray-950 text-zinc-300 rounded-md  my-4 py-4 px-4">
                    <span className="text-md  font-semibold "> کاربر</span>
                  <span className="text-md  font-semibold ">
                    موضوع پیام
                  </span>
                </div>
                <div className="flex flex-col gap-2 w-full]">
                  {tickets &&
                    tickets.map((ticket) => (
                      <Link
                        href={`/dashboard/ticket/${ticket._id}`}
                        key={ticket._id}
                      >
                        <div className="border-[0.2px] border-gray-800 py-5 px-4  rounded-md ">
                          <div className="flex items-center justify-between gap-10 w-full">
                            <div className="flex gap-2 ">
                              <Avatar className="w-[40px] h-[40px] md:w-[45px] md:h-[45px] shadow-md">
                                <AvatarFallback>
                                  <span className="text-[17px]">
                                    {ticket.createdBy?.username
                                      .charAt(0)
                                      .toUpperCase()}
                                  </span>
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex flex-col gap-[1.5px]">
                                <h1 className="text-md text-zinc-100 md:text-[18px]">
                                  {ticket.createdBy?.username}
                                </h1>
                                <h1 className="text-[12px] text-zinc-400 md:text-md">
                                  {ticket.createdBy?.email}
                                </h1>
                              </div>
                            </div>
                            <div className=" max-w-[60%]">
                              <div>
                                <p className="text-sm text-zinc-300 md:text-md text-left">
                                  {ticket.subject}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default Tickets;
