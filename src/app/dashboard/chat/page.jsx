
import DashboardLayout from '@/components/DashboardLayout'
import React from 'react'

//react icons 
import { IoIosChatboxes } from "react-icons/io";
import { VscSend } from "react-icons/vsc";
// mui 
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';

const Chat = () => {
  return (
    <DashboardLayout>
      <div className='py-8 px-3 sm:px-5 md:px-7 lg:py-10 lg:px-10 w-full min-h-screen  bg-[#1E1E1E] '>
        <div className="w-full  lg:w-[80%] xl:w-[85%] lg:mr-[210px] ">
          <div className="flex items-center w-full gap-5">
            {/* sidebar */}
            <div className="hidden md:block w-[25%] h-[700px] bg-[#171717] rounded-xl py-5 px-4">
              <h1 className=' text-gray-200 font-semibold text-lg pb-4 border-b-[1px] border-gray-600/50 flex items-center gap-2'>
                <IoIosChatboxes />
                <span>گفت و گو ها</span>
              </h1>
              <div className="flex items-start w-full h-full">
                <div className="flex flex-col items-start gap-2 py-5 w-full ">

                  <div className="flex bg-[#202020] py-2 px-2 w-full shadow-sm rounded-lg gap-3">
                    <Avatar sx={{ bgcolor: deepPurple[500], width: 55, height: 55 }}> <span className='text-xl'>ک</span></Avatar>
                    <div className="flex flex-col gap-1">
                      <h1 className='text-md text-gray-200 '>کوروش کبیر</h1>
                      <p className='text-sm text-gray-400 font-light'>بریم مقبره کوروش رو ببینیم</p>
                    </div>
                  </div>

                  <div className="flex bg-[#202020] py-2 px-2 w-full shadow-sm rounded-lg gap-3">
                    <Avatar sx={{ bgcolor: deepPurple[500], width: 55, height: 55 }} className='bg-[--color-secondary]'> <span className='text-xl'>A</span></Avatar>
                    <div className="flex flex-col gap-1">
                      <h1 className='text-md text-gray-200 '>Amir</h1>
                      <p className='text-sm text-gray-400 font-light'>خوبی مامانم ؟</p>
                    </div>
                  </div>

                  <div className="flex bg-[#202020] py-2 px-2 w-full shadow-sm rounded-lg gap-3">
                    <Avatar sx={{ bgcolor: deepPurple[500], width: 55, height: 55 }} className='bg-[--color-secondary]'> <span className='text-xl'>E</span></Avatar>
                    <div className="flex flex-col gap-1">
                      <h1 className='text-md text-gray-200 '>ehsan</h1>
                      <p className='text-sm text-gray-400 font-light'>باشه مرسی </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            {/* end sidebar */}
            {/* chat box */}
            <div className="md:w-[75%] w-full h-[700px] bg-[#171717] rounded-xl py-5 px-4 relative">
              <div className="flex flex-col gap-10">
                {/* top */}
                <div className="flex items-center gap-3 w-[100%] mx-auto bg-[#212020] py-4 px-2 left-0 right-0 rounded-tr-xl   absolute top-0  ">
                  <Avatar sx={{ bgcolor: deepPurple[500], width: 65, height: 65 }} > <span className='text-xl'>ک</span></Avatar>
                  <div className="flex flex-col gap-1">
                    <h1 className='text-gray-100 text-lg'>کوروش کبیر</h1>
                    <span className='text-gray-400 text-sm font-light'>0912142908</span>
                  </div>
                </div>
                {/* end top */}
                {/* messages */}
                <div className="flex flex-col gap-2 mt-[100px]">
                  <div className="flex items-end justify-end gap-3">
                    <div>
                      <p className="bg-[#212020] px-4 py-2 rounded-xl text-gray-200">سلام، چطور می‌توانم به شما کمک کنم؟</p>
                    </div>
                    <Avatar sx={{ bgcolor: deepOrange[500], width: 65, height: 65 }} className=''>
                      <span className='text-xl'>ش</span>
                    </Avatar>
                  </div>
                </div>
                <div className="flex items-start gap-3 ">
                  <Avatar sx={{ bgcolor: deepPurple[500], width: 65, height: 65 }} >
                    <span className='text-xl'>ک</span>
                  </Avatar>
                  <div className='flex flex-col gap-1'>
                    <p className="bg-[#212020] px-4 py-3 rounded-xl rounded-r-sm text-gray-200">می‌توانم به شما در انجام پروژه‌ی خود کمک کنم.</p>
                  </div>
                </div>
                {/* end messages */}
                {/* bottom */}
                <div className=" absolute bottom-0 right-0 left-0 w-full border-t-[1px] bg-[#181818] border-zinc-500/60 py-2">
                  <div className="flex items-center justify-between py-6 px-6">
                    <div className="w-[65%]">
                      <input
                        type='text'
                        placeholder='پیام خود را وارد کنید ...'
                        className='w-full h-[55px] rounded-md px-4  bg-transparent border-[1px] border-zinc-500/60 text-md text-gray-300'
                      />
                    </div>
                    <div className="w-[25%]">
                      <button className='bg-[--color-secondary] w-full  h-[55px] rounded-md flex items-center justify-center gap-[8px] duration-300 hover:gap-3'>
                        <span className='text-white text-md '>ارسال پیام</span>
                        <VscSend size={18} className=' rotate-180 text-gray-300' />
                      </button>
                    </div>
                  </div>
                </div>
                {/* end bottom */}
              </div>
            </div>
            {/* end chat box */}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Chat