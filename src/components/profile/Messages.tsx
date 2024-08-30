"use client";
import React from "react";
import { useUser } from "@/context/UserContext";
import axiosInstance from "@/utils/axiosInstance";
import { Button } from "../ui/button";
import { FaRegTrashAlt } from "react-icons/fa";
export const Messages = () => {
  const { user } = useUser();
  const deleteMessage = async (messageId: string) => {
    try {
      await axiosInstance.delete(`/api/messages/${messageId}`);
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {user && user.messages && user.messages.length > 0 ? (
        user.messages.map((message: any) => (
          <div className="flex items-center justify-between ">
            <span key={message.id} className="text-xl font-bold text-white">
              {message.content}
            </span>
            <Button size="icon" onClick={() => deleteMessage(message.id)}>
              <FaRegTrashAlt />
            </Button>
          </div>
        ))
      ) : (
        <p>No messages available.</p>
      )}
    </div>
  );
};
