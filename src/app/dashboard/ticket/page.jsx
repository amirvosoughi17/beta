"use client"
import React, { useEffect, useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Loader2 } from 'lucide-react';
import moment from 'moment-jalaali';
import { useRouter } from 'next/navigation';
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { toast } from 'sonner';

const CustomTable = ({ tickets, handleTicketClick }) => (
  <Table className="w-full ">
    <TableHeader className='bg-[#1b1b1b]'>
      <TableRow>
        <TableHead className="w-[350px] text-right">عنوان</TableHead>
        <TableHead className="w-[100px] text-right">زمان ایجاد </TableHead>
        <TableHead className="md:w-[150px] w-[100px] text-right">وضعیت</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {tickets?.length === 0 ? (
        <TableRow>
          <TableCell colSpan="3" className="font-medium w-[100px] text-[17px] text-zinc-300 ">هنوز پیامی ندارید !</TableCell>
        </TableRow>
      ) : (
        tickets.map((ticket) => (
          <TableRow key={ticket._id} onClick={() => handleTicketClick(ticket._id)} className="cursor-pointer hover:bg-gray-600">
            <TableCell className=" w-[100px] text-[15px] text-zinc-300">{ticket.subject}</TableCell>
            <TableCell className=" w-[100px] text-[15px] text-zinc-300">{moment(ticket.createdAt).format('jYYYY/jMM/jDD')}</TableCell>
            <TableCell className="text-[17px] text-zinc-300">
              <Badge>
                {ticket.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))
      )}
    </TableBody>
  </Table>
);

const Ticket = () => {
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const response = await fetch('/api/dashboard/tickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subject, description }),
      });
      setLoading(false)
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setSuccess("پیام با موفقیت ارسال شد")
      }
    } catch (error) {
      console.error('Error creating ticket:', error);
      setError("پیام ارسال نشد !!")
    } finally {
      setLoading(false);
    }
  };

  const handleTicketClick = (ticketID) => {
    router.push(`/dashboard/ticket/${ticketID}`);
  };

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

  useEffect(() => {
    if (success) {
      toast("پیام شما با موفقیت ارسال شد ")
    }
  }, [success]);

  return (
    <div>
      <DashboardLayout>
        <div className="py-5 px-2 lg:px-5 xl:px-7 lg:py-8 w-full min-h-screen md:mt-0 mt-[70px]">
          <div className="w-full lg:w-[80%] xl:w-[85%] lg:mr-[230px] xl:mr-[250px] flex flex-col items-center justify-center gap-6 h-full">
            <div className="md:w-[80%] w-[95%] sm:w-[90%]  flex flex-col gap-5">
              <div className="flex flex-col   gap-3 border-b-[0.5px] border-zinc-700/60 pb-5">
                <p className='text-[15px] text-zinc-400  duration-300 hover:text-white'>در صورت داشتن سوال ,مشکل یا پیام میتوانید با ایجاد پیام باما ارتباط برقرار کنید و در کمترین زمان پاسخ بگیرید</p>
              </div>
              <div className="flex flex-col items-  gap-5 mt-6">
                <div className="flex w-full items-center">
                  <h1 className='text-2xl text-gray-200 text-cetner'>لیست پیام ها</h1>
                </div>
                <CustomTable tickets={tickets} handleTicketClick={handleTicketClick} />
                <div className=" items-end justify-end">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>ایجاد پیام</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px] max-w-[360px] ">
                      <DialogHeader>
                        <DialogTitle className="text-center">پیام جدید</DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleSubmit}>
                        <div className="grid gap-4 py-4">
                          <div className="flex flex-col gap-4">
                            <Label htmlFor="name" className="text-right">
                              موضوع پیام :
                            </Label>
                            <Input
                              placeholder="مثلا :‌مشکل در ثبت سفارش"
                              id="subject"
                              value={subject}
                              required
                              onChange={(e) => setSubject(e.target.value)}
                            />
                          </div>
                          <div className="flex flex-col gap-4">
                            <Label htmlFor="username" className="text-right">
                              توضیحات :
                            </Label>
                            <Textarea
                              placeholder="توضیحات خود را وارد کنید"
                              id="description"
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                              required
                              rows={6}
                            />
                          </div>
                        </div>
                        <DialogFooter className="flex w-full items-start">
                          {loading ? (
                            <Button disabled className="py-6">
                              لطفا کمی صبر کنید
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            </Button>
                          ) : (
                            <Button type="submit">ارسال پیام</Button>
                          )}
                        </DialogFooter>
                        {error && (
                          <Alert variant="destructive" className="text-red-500 border-red-500">
                            <AlertDescription>
                              {error}
                            </AlertDescription>
                          </Alert>
                        )}
                      </form>
                    </DialogContent>
                  </Dialog>

                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default Ticket;
