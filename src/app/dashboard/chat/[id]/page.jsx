"use client";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { VscSend } from 'react-icons/vsc';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import { selectUserInfo } from '@/redux/user/userSlice';
import { fetchUserData } from '@/utils/userActions';
import DashboardLayout from '@/components/DashboardLayout';
import Image from 'next/image';
import profile from '@/assets/whit-logo.png';
import { sendMessage, getAllChats } from '@/utils/chatActions'; 

const Chat = () => {
  const userInfo = useSelector(selectUserInfo);
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([]);

  useEffect(() => {
    fetchChats();
  }, []);

  const fetchChats = async () => {
    try {
      const allChats = await getAllChats();
      setChats(allChats);
    } catch (error) {
      console.error('Error fetching chats:', error);
    }
  };

  const handleSendMessage = async () => {
    try {
      await sendMessage(message);
      fetchChats();
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <DashboardLayout>
      <div className='py-8 px-3 sm:px-5 md:px-7 lg:py-10 lg:px-10 w-full min-h-screen bg-[#1E1E1E]'>
        <div className="w-full  lg:w-[80%] xl:w-[85%] lg:mr-[210px] ">
          <div className="flex items-center w-full gap-5">
            <div className="md:w-[75%] w-full h-[700px] bg-[#171717] rounded-xl py-5 px-4 relative">
              <div className="flex flex-col gap-10">
                <div className="flex items-center gap-3 w-[100%] mx-auto bg-[#161616] border-b-[1px] border-gray-500/60 py-4 px-2 left-0 right-0 rounded-tr-xl absolute top-0">
                  {/* Render chat headers or info here */}
                </div>
                <div className="flex flex-col gap-2 h-[450px] overflow-y-auto mt-[100px]">
                  {chats.map(chat => (
                    <div key={chat._id}>
                      {chat.messages.map(message => (
                        <div key={message._id} className="flex items-center gap-2">
                          <Avatar sx={{ bgcolor: deepPurple[500] }}>{message.sender.username.charAt(0)}</Avatar>
                          <p>{message.content}</p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-[#161616] border-t-[1px] border-gray-500/60 py-2 px-3 rounded-br-xl rounded-bl-xl flex items-center gap-4">
                  <input
                    type="text"
                    className="bg-[#111111] w-full h-[50px] py-3 px-4 text-white rounded-full outline-none"
                    placeholder="Type a message..."
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                  />
                  <button
                    className="rounded-full w-[50px] h-[50px] bg-[#1E88E5] text-white flex justify-center items-center hover:bg-[#0a84ca]"
                    onClick={handleSendMessage}
                  >
                    <VscSend />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Chat;
