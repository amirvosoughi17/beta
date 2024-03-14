"use client"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserInfo } from '@/redux/user/userSlice';
import { fetchUserData } from '@/utils/userActions';
import DashboardLayout from '@/components/DashboardLayout';
// mui 
import { Avatar } from '@mui/material';
import { deepPurple } from '@mui/material/colors';


const TicketPage = () => {
    const dispatch = useDispatch();
    const userInfo = useSelector(selectUserInfo);
    const [ticket, setTicket] = useState(null);
    const [responseMessage , setResponseMessage] = useState(''); 

    useEffect(() => {
        dispatch(fetchUserData())
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
        return <div>Loading...</div>;
    }

    const handleResponseChange = (event) => {
        setResponseMessage(event.target.value);
      };

      const handleSubmitResponse = async () => {
        try {
            const response = await fetch(`/api/admin/tickets/${ticket._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: responseMessage }),
            });
            const data = await response.json();
            console.log('Response submitted:', data);
            setResponseMessage('');
            window.location.reload();
        } catch (error) {
            console.error('Error submitting response:', error);
        }
    };

    return (
        <DashboardLayout>
            <div className='min-h-screen bg-[#1E1E1E] w-full'>
                <div className="w-full  lg:w-[80%] xl:w-[85%] lg:mr-[210px] md:py-10 md:px-10">
                    <div className="w-full lg:w-[75%] bg-[#171717] mx-auto rounded-xl min-h-[700px] py-10 px-10 relative">
                        <div className="flex flex-col gap-4  ">
                            <div className="flex flex-col w-full gap-5 border-b-[1px] border-zinc-600/50 py-6 ">
                                <div className="flex items-center justify-between w-full">
                                    <div>
                                        <h1 className='text-3xl text-gray-100'>{ticket.subject}</h1>
                                    </div>
                                    <div className="">
                                        <span className='text-lg text-green-500'>{ticket.status}</span>
                                    </div>
                                </div>
                                <span className='text-zinc-500 text-sm font-semibold'>تاریخ ایجاد :</span>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <div className="flex items-center gap-6 bg-[#242424] py-3 px-4 rounded-xl w-full">
                                    <div className="flex gap-2">
                                        <Avatar sx={{ bgcolor: deepPurple[500], width: 55, height: 55 }} className='bg-[--color-secondary] w-[100px]'>M</Avatar>
                                        <h1 className='text-semibold text-md '>امیر محمد</h1>
                                    </div>
                                    <div className="">
                                        {ticket.description}
                                    </div>
                                </div>
                                {ticket.responses.map((res) => (
                                    <div key={res.id} className="flex items-center gap-6 bg-[#242424] py-3 px-4 rounded-xl w-full">
                                        <div className="flex gap-2">
                                            <Avatar sx={{ bgcolor: deepPurple[500], width: 55, height: 55 }} className='bg-[--color-secondary] w-[100px]'>M</Avatar>
                                            <h1 className='text-semibold text-md '>{res.user}</h1>
                                        </div>
                                        <div className="">
                                            {res.message}
                                        </div>
                                    </div>
                                ))}
                               <div className="flex gap-5 items-end w-full border-t-[1px] border-zinc-500/60 py-4 mx-auto">
                                <textarea 
                                rows={4}
                                className='w-[580px] bg-[#242424] text-zinc-500 text-md p-3 rounded-xl'
                                placeholder='متن پیام را وارد کنید ...'
                                onChange={handleResponseChange}
                                value={responseMessage} 
                                />
                                <button onClick={handleSubmitResponse} className='bg-[--color-secondary] py-3 px-8 rounded-md w-[20%]' >ارسال پیام</button>
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
