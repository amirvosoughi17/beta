"use client";
import axiosInstance from "@/utils/axiosInstance";
import React, { useEffect, useState } from "react";

const OrdersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get("/api/admin/order/list");
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch user list");
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);
  
  return <div>OrdersList</div>;
};

export default OrdersList;
