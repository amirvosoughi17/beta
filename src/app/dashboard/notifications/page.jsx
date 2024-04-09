"use client";
import React, { useState, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { MdOutlineNotificationsActive } from "react-icons/md";
import Loading from "@/components/Loading";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/dashboard/notifications");
      if (response.ok) {
        const jsonData = await response.json();
        setNotifications(jsonData.myNotifications);
      } else {
        console.log("Failed to fetch notifications");
      }
    } catch (error) {
      console.error("Error fetching notifications:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCheckboxChange = async (notificationId, isChecked) => {
    try {
      await markNotificationAsRead(notificationId);
      setNotifications((prevNotifications) =>
        prevNotifications.map((notification) =>
          notification.id === notificationId
            ? { ...notification, isRead: isChecked }
            : notification
        )
      );
    } catch (error) {
      console.error("Error marking notification as read:", error.message);
    }
  };

  const markNotificationAsRead = async (notificationId) => {
    try {
      const response = await fetch(
        "/api/dashboard/notifications",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ isRead: true }),
        }
      );
      if (!response.ok) {
        console.log("Failed to mark notification as read");
      }
    } catch (error) {
      console.error("Error marking notification as read:", error.message);
      throw error;
    }
  };

  return (
    <DashboardLayout>
      <div className="py-5 px-3 sm:px-5 md:px-7 lg:py-10 lg:px-10 w-full lg:mt-0 mt-[70px]">
        <div className="w-full lg:w-[80%] xl:w-[85%] lg:mr-[250px] flex flex-col gap-6">
          <div className="w-full md:w-[85%] mx-auto">
            <div className="flex flex-col">
              <h1 className="text-3xl text-white font-semibold flex items-center gap-3 my-5">
                <MdOutlineNotificationsActive />
                <span>اعلانات</span>
              </h1>
            </div>
            <div className="md:w-[85%] w-full bg-transparent border-[0.5px] border-gray-700  flex items-center justify-between rounded-md my-3 py-4 pl-5 pr-5">
              <div className="">
                <span>متن اعلان</span>
              </div>
              <div className="">
                <span>خوانده شد</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 ">
              {notifications ?
                notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="flex flex-col gap-3 md:w-[85%] w-full border-[1px] border-zinc-700/60 py-5 px-5 rounded-lg"
                  >
                    <div className="flex items-center justify-between w-full">
                      <h1 className="md:text-[20px] lg:text-[22px] text-[16px]  text-white flex items-center gap-3 ">
                        <MdOutlineNotificationsActive
                          size={23}
                          className="text-gray-300"
                        />
                        {notification.title}
                      </h1>
                      <div className="">
                      <input
                      type="checkbox"
                      checked={notification.isChecked}
                      onChange={(e) =>
                        handleCheckboxChange(
                          notification.id,
                          e.target.checked
                        )
                      }
                    />
                      </div>
                    </div>
                    <div className="sm:pr-9 pr-5">
                      <p className="text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] text-zinc-300 ">
                        {notification.message}
                      </p>
                    </div>
                  </div>
                )) : <>
                <Loading />
                </> }
            </div>
            <div className="flex items-center  md:w-[85%] w-full py-4">
              <div className="flex-1 text-sm text-muted-foreground">
                {loading
                  ? "لطفا کمی صبر کنید ..."
                  : `${notifications.length} اعلان`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Notifications;
