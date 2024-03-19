"use client"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserInfo } from '@/redux/user/userSlice';
import { fetchUserData } from '@/utils/userActions';
import DashboardLayout from '@/components/DashboardLayout';
import moment from 'moment-jalaali';
import { Loader2 } from 'lucide-react';

// react icons
import { BsQuestionCircleFill } from "react-icons/bs";
// shadcn 
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';



const TicketPage = () => {
    const dispatch = useDispatch();
    const userInfo = useSelector(selectUserInfo);
    const [ticket, setTicket] = useState(null);
    const [responseMessage, setResponseMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        dispatch(fetchUserData());
    }, [dispatch]);

    useEffect(() => {
        const pathArray = window.location.pathname.split('/');
        const id = pathArray[pathArray.length - 1];

        const fetchTicket = async () => {
            try {
                const response = await fetch(`/api/dashboard/tickets/${id}`);
                const data = await response.json();
                setTicket(data.ticket);
            } catch (error) {
                console.error('Error fetching ticket:', error);
            }
        };

        fetchTicket();
    }, []);

    if (!ticket) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Loader2 className="h-10 w-10 animate-spin" />
            </div>
        );
    }

    const handleResponseChange = (event) => {
        setResponseMessage(event.target.value);
    };

    const handleSubmitResponse = async () => {
        try {
            setLoading(true);
            const response = await fetch(`/api/dashboard/tickets/${ticket._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: responseMessage }),
            });
            setLoading(false);
            const data = await response.json();
            console.log('Response submitted:', data);
            setResponseMessage('');

            if (response.ok) {
                setSuccess(true);
                window.location.reload();
            }
        } catch (error) {
            console.error('Error submitting response:', error);
            setError("پیام شما ارسال نشد !");
        } finally {
            setLoading(false);
        }
    };


    return (
        <DashboardLayout>
            <div className='min-h-screen  w-full'>
                <div className="w-full  lg:w-[80%] xl:w-[85%] lg:mr-[210px] md:py-10 md:px-10">
                    <div className="w-full lg:w-[95%] xl:w-[90%]  mx-auto rounded-xl min-h-[700px] py-10 px-6 sm:px-8 md:px-10 relative">
                        <div className="flex flex-col gap-4  ">
                            <div className="flex flex-col w-full gap-5 border-b-[1px] border-zinc-600/50 py-6 ">
                                <div className="flex items-center justify-between w-full">
                                    <div>
                                        <h1 className='sm:text-3xl text-xl text-gray-100'>{ticket.subject}</h1>
                                    </div>
                                    <div className="">
                                        <span >
                                            <Badge className='text-[14px]'>
                                                {ticket.status}
                                            </Badge>
                                        </span>
                                    </div>
                                </div>
                                <div className='text-zinc-400 text-md  '>
                                    <span>تاریخ ایجاد : </span>
                                    <span className='text-light'>{moment(ticket.createdAt).format('jYYYY/jMM/jDD')}</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-5'>
                                {ticket && (
                                    <div className="flex items-center gap-6 bg-[#242424] py-3 px-4 rounded-xl w-full">
                                        <div className="flex gap-2 flex-col items-start py-3 px-4  ">
                                            <p className='text-zinc-200 text-md flex items-center gap-2'>
                                                <BsQuestionCircleFill />
                                                <span>متن سوال :</span>
                                            </p>
                                            <p className='text-zinc-200 text-lg'> {ticket.description}</p>
                                        </div>
                                    </div>
                                )}

                                <div className="flex flex-col gap-3 w-full">
                                    {ticket.responses.map((res) => (
                                        <div key={res._id} className={`flex flex-col  gap-4 py-5 px-2 sm:px-4 rounded-xl w-[270px] sm:w-[300px] lg:w-[350px] xl:w-[380px] ${userInfo?.username === res.user?.username ? 'items-start' : 'items-end justify-end'}`} style={{ alignSelf: userInfo.username === res.user?.username ? 'flex-start' : 'flex-end', backgroundColor: userInfo.username === res.user?.username ? '#1E1E1E' : '#303030' }}>
                                            <div className="flex items-center gap-1">

                                                {res.user && (
                                                    <div className={`flex gap-2 items-end ${userInfo?.username === res?.user?.username ? 'flex-row-reverse' : ''}`}>
                                                        <div className="flex flex-col items-end gap-1">
                                                            <h1 className='text-semibold text-md'>{res.user.username}</h1>
                                                            <h1 className='text-light text-sm text-zinc-400'>{res.user.email}</h1>
                                                        </div>
                                                        <Avatar className="w-[50px] h-[50px] shadow-md">
                                                            <AvatarFallback><span className='text-lg'>{res.user.username.charAt(0).toUpperCase()}</span></AvatarFallback>
                                                        </Avatar>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="sm:pr-10 pr-5 pl-5 sm:pl-10">
                                                <p className='text-md text-zinc-100'>
                                                    {res.message}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>


                                <div className="flex sm:flex-row flex-col gap-5 items-end w-full border-t-[1px] border-zinc-500/60 py-4 mx-auto">
                                    <div className="sm:w-[80%] w-full">
                                        <Textarea
                                            rows={4}
                                            className=' bg-[#242424] text-zinc-200  w-full text-md p-3 rounded-xl'
                                            placeholder='متن پیام را وارد کنید ...'
                                            onChange={handleResponseChange}
                                            value={responseMessage}
                                        />
                                    </div>
                                    {loading ? (
                                        <Button disabled className="py-6">
                                            لطفا کمی صبر کنید
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        </Button>
                                    ) : (
                                        <Button onClick={handleSubmitResponse} className='sm:w-[20%] w-full py-[25px]' >ارسال پیام</Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default TicketPage;
