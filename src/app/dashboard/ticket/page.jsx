"use client"
import React, { useEffect, useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
// dhascn
import { Badge } from '@/components/ui/badge';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';


const CustomTable = ({ tickets }) => (
  <Table className="w-full bg-[#1a1a1a]">
    <thead className="bg-[#242424]">
      <TableRow>
        <TableHead className="w-[150px] text-right">عنوان</TableHead>
        <TableHead className="w-[250px] text-right">توضیحات</TableHead>
        <TableHead className="w-[250px] text-right">وضعیت</TableHead>
      </TableRow>
    </thead>
    <TableBody>
      {tickets?.length === 0 ? (
        <TableRow>
          <td colSpan="3" className="text-[17px] text-zinc-300 ">هنوز پیامی ندارید !</td>
        </TableRow>
      ) : (
        tickets.map((ticket) => (
          <TableRow key={ticket._id} className="cursor-pointer hover:bg-gray-600">
            <TableCell className="font-medium w-[100px] text-[17px] text-zinc-300">{ticket.subject}</TableCell>
            <TableCell className="text-[17px] text-zinc-300">{ticket.description}</TableCell>
            <TableCell className="text-[17px] text-zinc-300">{ticket.status}</TableCell>
          </TableRow>
        ))
      )}
    </TableBody>
  </Table>
);

const Ticket = () => {
  const [tickets, setTickets] = useState([]);
  const [ticketModal, setTicketModal] = useState(false);

  const handleTicketModal = () => {
    setTicketModal(!ticketModal);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('/api/dashboard/tickets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ subject, description }),
        });
        const data = await response.json();
        console.log(data);
        if (response.ok) {
            setTicketModal(!ticketModal)
        }
    } catch (error) {
        console.error('Error creating ticket:', error);
    }
};

// fetch tickets 
useEffect(() => {
    const fetchTickets = async () => {
        try {
            const response = await fetch('/api/dashboard/tickets');
            const data = await response.json();
            setTickets(data.myTickets);
        } catch (error) {
            console.error('Error fetching tickets:', error);
        }
    };

    fetchTickets();
}, []);



  return (
    <div>
      <DashboardLayout>
        <div className="py-5 px-2 lg:px-5 xl:px-7 lg:py-8 w-full min-h-screen bg-[#1E1E1E]">
          <div className="w-full lg:w-[80%] xl:w-[85%] lg:mr-[230px] xl:mr-[250px] flex flex-col items-center justify-center gap-6 h-full">
            <div className="w-[80%]  flex flex-col gap-5">
                <div className="flex flex-col items-center  gap-3 border-b-[0.5px] border-zinc-700/60 pb-5">
                    <p className='text-[15px] text-zinc-400  duration-300 hover:text-white'>در صورت داشتن سوال ,مشکل یا پیام میتوانید با ایجاد پیام باما ارتباط برقرار کنید و در کمترین زمان پاسخ بگیرید</p>
                </div>
                <div className="flex flex-col gap-8">
                <h1 className='text-2xl text-gray-200 '>لیست پیام ها</h1>
              <CustomTable tickets={tickets} />
                </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default Ticket;
