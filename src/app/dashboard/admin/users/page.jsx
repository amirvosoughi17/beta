"use client";
import React, { useState, useEffect } from 'react';
import DashboardLayout from '@/components/DashboardLayout';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/admin');
        if (!res.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await res.json();
        console.log("Fetched users:", data);
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
      
    };

    fetchUsers();
  }, []);

  return (
    <DashboardLayout>
      <div className="w-full lg:w-[80%] xl:w-[85%] lg:mr-[240px] md:mt-0 mt-[70px]">
        <div className="w-full min-h-screen overflow-y-auto shadow-md rounded-xl py-7 px-5 lg:px-4 xl:px-8">
        <div className="flex flex-col gap-0 w-full lg:w-[85%] ">
                            <div className="w-full flex items-center justify-between bg-[#1b1b1b]  my-3 py-4 px-4">
                              <div className="flex items-center gap-[200px]">
                                <span className='text-md text-zinc-300 '>نام کاربری</span>
                                <span className='text-md text-zinc-300 '>شماره تماس</span>
                              </div>
                                <span className='text-md text-zinc-300'>ایمیل</span>
                            </div>
                            <div className="flex flex-col gap-1 w-full]">
                                {users && users.map((user) => (
                                    <div  key={user._id}>
                                        <div className='border-b-[0.6px] border-zinc-500/40 py-3 px-4 '>
                                            <div className="flex items-center justify-between gap-10 w-full">
                                                <div className="flex gap-[200px] items-center">
                                                  <span className='max-w-[190px]'>
                                                    {user.username}
                                                  </span>
                                                  <span>
                                                {user.phoneNumber}
                                                  </span>
                                                </div>
                                                <div className=" max-w-[60%]">
                                                    <div>
                                                        <p className='text-sm text-zinc-300 md:text-md text-left'>
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
    </DashboardLayout>
  );
};

export default Users;
