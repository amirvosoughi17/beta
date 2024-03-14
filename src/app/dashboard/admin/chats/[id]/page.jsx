"use client";
import React, { useState, useEffect } from 'react';

const Chat = ({ chatId }) => {
  const [chat, setChat] = useState(null);
  const [messageInput, setMessageInput] = useState('');

  useEffect(() => {
    const fetchChat = async () => {
      try {
        const response = await fetch(`/api/admin/chats/${chatId}`);
        if (response.ok) {
          const data = await response.json();
          setChat(data.findChat);
        } else {
          console.error('Failed to fetch chat:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching chat:', error.message);
      }
    };

    fetchChat();
  }, [chatId]);

  const handleSendMessage = async () => {
    try {
      const response = await fetch(`/api/admin/chats/${chatId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: messageInput }),
      });
      if (response.ok) {
        // Message sent successfully, update the chat state or fetch the updated chat
        // For simplicity, assume the message is added to the chat immediately
        // You may want to update the chat state with the new message here
        setMessageInput('');
        fetchChat(); // Fetch updated chat after sending message
      } else {
        console.error('Failed to send message:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending message:', error.message);
    }
  };

  return (
    <div>
      <h1>Chat</h1>
      {chat && (
        <div>
          {/* Display chat messages */}
          <ul>
            {chat.messages.map((message) => (
              <li key={message._id}>
                {message.content}
              </li>
            ))}
          </ul>
          {/* Input for sending messages */}
          <input
            type="text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      )}
    </div>
  );
};

export default Chat;
