"use client";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoIosChatboxes } from 'react-icons/io';
import { VscSend } from 'react-icons/vsc';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import { selectUserInfo } from '@/redux/user/userSlice';
import { fetchUserData } from '@/utils/userActions';
import DashboardLayout from '@/components/DashboardLayout';

const Chat = () => {
  const userInfo = useSelector(selectUserInfo);
  const dispatch = useDispatch();
  const [chaters, setChaters] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedUserMessages, setSelectedUserMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    dispatch(fetchUserData());
    fetchChats();
  }, [dispatch]);

  const fetchChats = async () => {
    try {
      const response = await fetch('/api/admin/chats');
      if (response.ok) {
        const data = await response.json();
        setChaters(data.chats);
      } else {
        console.error('Failed to fetch chaters:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching chaters:', error.message);
    }
  };

  const handleChatClick = async (userId) => {
    try {
      const response = await fetch(`/api/admin/chats/${userId}`);
      if (response.ok) {
        const data = await response.json();
        const findChat = data.findChat[0]; 
        setSelectedUserMessages(findChat.messages);
        setSelectedUserId(userId);
      } else {
        console.error('Failed to fetch user chats:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching user chats:', error.message);
    }
  };

  const sendMessage = async () => {
    try {
      const response = await fetch('/api/dashboard/chats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          content: newMessage,
          recipient: selectedUserId
        }),
      });
      if (response.ok) {
        handleChatClick(selectedUserId);
        setNewMessage('');
      } else {
        console.error('Failed to send message:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending message:', error.message);
    }
  };
  return (
    <DashboardLayout>
      <div className='py-8 px-3 sm:px-5 md:px-7 lg:py-10 lg:px-10 w-full min-h-screen bg-[#1E1E1E]'>
        <div className="w-full  lg:w-[80%] xl:w-[85%] lg:mr-[210px] ">
        <div className="flex items-center w-full gap-5">
          <div className="hidden md:block w-[25%] h-[700px] overflow-y-auto bg-[#171717] rounded-xl py-5 px-4">
            <h1 className='text-gray-200 font-semibold text-lg pb-4 border-b-[1px] border-gray-600/50 flex items-center gap-2'>
              <IoIosChatboxes />
              <span>Users</span>
            </h1>
            <div className="flex flex-col items-start gap-2 py-5 w-full">
              {chaters.map((chater) => (
                <div key={chater._id} className="flex bg-[#202020] py-2 px-2 w-full shadow-sm rounded-lg gap-3" onClick={() => handleChatClick(chater._id)}>
                  <Avatar sx={{ bgcolor: deepPurple[500], width: 55, height: 55 }}> <span className='text-xl'>{chater.user.username}</span></Avatar>
                  <div className="flex flex-col gap-1">
                    <h1 className='text-md text-gray-200 '>{chater.user.name}</h1>
                    <p className='text-sm text-gray-400 font-light'>{chater.messages[chater.messages.length - 1]?.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-[75%] w-full h-[700px] bg-[#171717] rounded-xl py-5 px-4 relative">
            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-3 w-[100%] mx-auto bg-[#161616] border-b-[1px] border-gray-500/60 py-4 px-2 left-0 right-0 rounded-tr-xl absolute top-0">
                <Avatar sx={{ bgcolor: deepPurple[500], width: 65, height: 65 }}>
                  <span className='text-xl'>{userInfo?.username}</span>
                </Avatar>
              </div>
              <div className="flex flex-col gap-2 h-[450px] overflow-y-auto mt-[100px]">
                {selectedUserMessages?.map((message, index) => (
                  <div key={index} className={`flex items-${message.sender === userInfo.id ? 'end' : 'start'} gap-3 `}>
                    <Avatar sx={{ bgcolor: deepPurple[500], width: 65, height: 65 }}>
                      <span className='text-xl'>{message.sender === userInfo.id ? 'You' : 'Other'}</span>
                    </Avatar>
                    <div className={`flex flex-col gap-1 ${message.sender === userInfo.id ? '' : 'text-right'}`}>
                      <p className={`bg-[#212020] px-4 py-3 rounded-xl rounded-${message.sender === userInfo.id ? 'r' : 'l'}-sm text-gray-200`}>{message.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-[#161616] border-t-[1px] border-gray-500/60 py-2 px-3 rounded-br-xl rounded-bl-xl flex items-center gap-4">
                <input
                  type="text"
                  className="bg-[#111111] w-full h-[50px] py-3 px-4 text-white rounded-full outline-none"
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button className="rounded-full w-[50px] h-[50px] bg-[#1E88E5] text-white flex justify-center items-center hover:bg-[#0a84ca]" onClick={sendMessage}>
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
