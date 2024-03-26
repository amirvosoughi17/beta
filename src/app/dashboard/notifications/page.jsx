"use client";
import React, { useState, useEffect } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { MdOutlineNotificationsActive } from "react-icons/md";
// shadcn
import { Button } from '@/components/ui/button';
import { Checkbox } from "@/components/ui/checkbox";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedNotifications, setSelectedNotifications] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/dashboard/notifications');
      if (response.ok) {
        const jsonData = await response.json();
        setNotifications(jsonData.myNotifications);
      } else {
        console.error('Failed to fetch notifications:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching notifications:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const markNotificationAsRead = async (notificationId) => {
    try {
      const response = await fetch('/api/dashboard/notifications', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ notificationId }),
      });
      if (!response.ok) {
        console.error('Failed to mark notification as read:', response.statusText);
      }
    } catch (error) {
      console.error('Error marking notification as read:', error.message);
    }
  };

  const handleCheckboxChange = async (notificationId, isChecked) => {
    if (isChecked) {
      setSelectedNotifications(prevSelected => [...prevSelected, notificationId]);
    } else {
      setSelectedNotifications(prevSelected => prevSelected.filter(id => id !== notificationId));
    }
  };

  const handleMarkSelectedAsRead = async () => {
    // Iterate over selectedNotifications and mark each notification as read
    for (const notificationId of selectedNotifications) {
      await markNotificationAsRead(notificationId);
    }
    // After marking selected notifications as read, you can update the notifications state if needed.
    fetchData();
    // Clear the selected notifications
    setSelectedNotifications([]);
  };

  return (
    <DashboardLayout>
      <div className="py-5 px-3 sm:px-5 md:px-7 lg:py-10 lg:px-10 w-full md:mt-0 mt-[70px]">
        <div className="w-full lg:w-[80%] xl:w-[85%] lg:mr-[210px] flex flex-col gap-6">
          <div className="w-full md:w-[85%] mx-auto">
            <div className="flex flex-col">
              <h1 className='text-3xl text-gray-200 flex items-center gap-3 my-5'>
                <MdOutlineNotificationsActive />
                <span>اعلانات</span>
              </h1>
            </div>
            <div className="md:w-[85%] w-full bg-[#1b1b1b] flex items-center justify-between rounded-md my-3 py-4 pl-5 pr-5">
              <div className="">
                <span>متن اعلان</span>
              </div>
              <div className="">
                <span>خوانده شد</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 ">
              {notifications && notifications.map((notification) => (
                <div key={notification.id} className="flex flex-col gap-3 md:w-[85%] w-full border-[1px] border-zinc-700/60 py-5 px-5 rounded-lg">
                  <div className="flex items-center justify-between w-full">
                    <h1 className='md:text-[20px] lg:text-[22px] text-[18px]  text-white flex items-center gap-3 '>
                      <MdOutlineNotificationsActive size={23} className='text-gray-300' />
                      {notification.title}
                    </h1>
                    <div className="">
                      <Checkbox
                        onChange={(e) => handleCheckboxChange(notification.id, e.target.checked)}
                      />
                    </div>
                  </div>
                  <div className="sm:pr-9 pr-5">
                    <p className='text-[12px] sm:text-[14px] md:text-[16px] lg:text-[17px] text-zinc-300 '>{notification.message}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center  md:w-[85%] w-full py-4">
              <div className="flex-1 text-sm text-muted-foreground">
                {loading ? 'لطفا کمی صبر کنید ...' : `${notifications.length} اعلان`}
              </div>
              <Button onClick={handleMarkSelectedAsRead} disabled={selectedNotifications.length === 0} className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed">
                ذخیره
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Notifications;
