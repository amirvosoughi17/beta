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
                        <div className="flex flex-col gap-2">
                            {tickets && tickets.map((ticket) => (
                                <Link href={`/dashboard/ticket/${ticket._id}`} key={ticket._id}>
                                    <div className='border-[1px] border-zinc-500/40 py-2 px-4 rounded-lg'>
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex ">
                                                <Avatar className="w-[50px] h-[50px] shadow-md">
                                                    <AvatarFallback ><span className='text-lg'>{ticket.createdBy?.user?.username.charAt(0).toUpperCase()}</span></AvatarFallback>
                                                </Avatar>
                                                <div className="flex flex-col gap-1">
                                                    <h1>{ticket.createdBy?.username}</h1>
                                                    <h1>{ticket.createdBy?.email}</h1>
                                                </div>
                                            </div>
                                            <div className="">
                                             <div>{ticket.subject}</div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}

                        </div>
                    </div>
                </div>
            </DashboardLayout>
        </div>
    )
}

export default Tickets