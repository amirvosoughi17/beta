"use client";
import React, { useState, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { selectUserInfo } from "@/redux/user/userSlice";
import { fetchUserData } from "@/utils/userActions";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const Users = () => {
  const router = useRouter();
  const [users, setUsers] = useState([]);
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
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/admin");
        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await res.json();
        console.log("Fetched users:", data);
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <DashboardLayout>
      <div className="w-full lg:w-[80%] xl:w-[85%] lg:mr-[280px] lg:mt-0 mt-[70px]">
        <div className="w-full min-h-screen overflow-y-auto shadow-md rounded-xl py-7 px-5 lg:px-4 xl:px-8">
          <div className="flex flex-col w-full lg:w-[85%] mx-auto">
          <div className="flex flex-col gap-4 items-start my-8">
            <h1 className="text-2xl sm:text-3xl font-semibold">لیست کاربران</h1>
            <p className="text-sm sm:text-md font-medium text-zinc-400">
              شرمنده دیگه قابلیت ادیت نزاشتیم ...
            </p>
          </div>
          <div className="flex flex-col gap-0 w-full lg:w-[85%] ">
            <div className="w-full flex items-center justify-between  border-[0.5px] bg-gray-950 text-zinc-300 rounded-md  my-4 py-4 px-4">
              <div className="flex items-center justify-between lg:justify-start w-full lg:gap-[200px]">
                <span className="text-md  font-semibold ">نام کاربری</span>
                <span className="text-md  font-semibold ">شماره تماس</span>
              </div>
              <span className="text-md  font-semibold hidden lg:block">ایمیل</span>
            </div>
            <div className="flex flex-col gap-2 w-full">
              {users &&
                users.map((user) => (
                  <div key={user._id}>
                    <div className=" border-[0.2px] border-gray-800 py-5 px-4 ">
                      <div className="flex items-center justify-between gap-10 w-full">
                        <div className="flex lg:gap-[200px] justify-between lg:justify-start w-full items-center">
                          <span className="max-w-[190px]">{user.username}</span>
                          <span className="text-sm text-zinc-300 md:text-md ">{user.phoneNumber}</span>
                        </div>
                        <div className=" max-w-[60%]">
                          <div>
                            <p className="text-sm text-zinc-300 md:text-md hidden lg:block text-left">
                              {user.email}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Users;
