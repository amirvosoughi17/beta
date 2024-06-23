"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "@/utils/axiosInstance";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface ProfileFormProps {
  username: string;
  phoneNumber: string;
  password: string;
}
const ProfileForm = () => {
  const { register, handleSubmit, setValue } = useForm<ProfileFormProps>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<ProfileFormProps | null>(null);
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axiosInstance.get("/api/user/profile");
        const userInfo = response.data;
        setUserInfo(userInfo);

        setLoading(false);
      } catch (err) {
        setError("Failed to fetch user info");
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  const onSubmit = async (data: ProfileFormProps) => {
    try {
      setError(null);
      const response = await axiosInstance.put("/api/user/profile", data);
      if (response.status === 200) {
        alert("Profile updated successfully");
      }
    } catch (err) {
      setError("Failed to update profile");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 min-w-[350px]">
      <div className="flex flex-col gap-2">
        <label className="text-neutral-400 text-md ">نام کاربری</label>
        <Input
          placeholder={userInfo?.username}
          {...register("username")}
          disabled={!isEditable}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-neutral-400 text-md ">شماره تماس</label>
        <Input
          placeholder={userInfo?.phoneNumber}
          {...register("phoneNumber")}
          disabled={!isEditable}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-neutral-400 text-md ">کلمه عبور</label>
        <Input
          placeholder={userInfo?.password}
          type="password"
          {...register("password")}
          disabled={!isEditable}
        />
      </div>
      <Button disabled={!isEditable} type="submit">
        بروزرسانی{" "}
      </Button>
      <div className="flex items-center gap-3">
        <Checkbox
          name="enableEdit"
          checked={isEditable}
          onClick={() => setIsEditable(!isEditable)}
        />
        <label className="text-neutral-200 text-md " htmlFor="">تغییر اطلاعات</label>
      </div>
    </form>
  );
};

export default ProfileForm;
