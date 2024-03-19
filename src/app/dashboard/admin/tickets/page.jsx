"use client";
import React, { useState, useEffect } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import Link from 'next/link';
//shadcn
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const Tickets = () => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await fetch('/api/admin/tickets');
                const data = await response.json();
                setTickets(data.tickets);
            } catch (error) {
                console.error('Error fetching tickets:', error);
            }
        };

        fetchTickets();
    }, []);
    return (
        <div>
            <DashboardLayout>
                <div className='p-2 sm:p-8 w-full  bg-[#0A0A0A]'>
                    <div className="w-full  lg:w-[80%] xl:w-[85%] lg:mr-[220px]">
                        <div className="pb-5 mb-5 border-b-[0.5px] border-zinc-600/50">
                            <h1 className='text-2xl text-zinc-200 '>
                                تیکت ها
                            </h1>
                        </div>
                        <div className="flex flex-col gap-0 w-full lg:w-[85%] ">
                            <div className="w-full flex items-center justify-between bg-[#1b1b1b]  my-3 py-4 px-4">
                                <span className='text-md text-zinc-300 '>کاربر</span>
                                <span className='text-md text-zinc-300'>موضوع پیام</span>
                            </div>
                            <div className="flex flex-col gap-1 w-full]">
                                {tickets && tickets.map((ticket) => (
                                    <Link href={`/dashboard/ticket/${ticket._id}`} key={ticket._id}>
                                        <div className='border-b-[0.6px] border-zinc-500/40 py-3 px-4 '>
                                            <div className="flex items-center justify-between gap-10 w-full">
                                                <div className="flex gap-2 ">
                                                    <Avatar className="w-[50px] h-[50px] md:w-[55px] md:h-[55px] shadow-md">
                                                        <AvatarFallback ><span className='text-lg'>{ticket.createdBy?.username.charAt(0).toUpperCase()}</span></AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex flex-col gap-1">
                                                        <h1 className='text-md text-zinc-100 md:text-[18px]'>{ticket.createdBy?.username}</h1>
                                                        <h1 className='text-[12px] text-zinc-400 md:text-md'>{ticket.createdBy?.email}</h1>
                                                    </div>
                                                </div>
                                                <div className=" max-w-[60%]">
                                                    <div>
                                                        <p className='text-sm text-zinc-300 md:text-md text-left'>
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
            </DashboardLayout>
        </div>
    )
}

export default Tickets