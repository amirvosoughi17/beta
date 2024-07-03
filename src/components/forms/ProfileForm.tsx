"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "@/utils/axiosInstance";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Spinner from "../Spinner";

interface ProfileFormProps {
  username: string;
  phoneNumber : string
}
interface PasswordFormProps {
  password: string;
  newPassword: string;
}
const ProfileForm = () => {
  const { register, handleSubmit, setValue } = useForm<ProfileFormProps>();
  const { register: registerPassword, handleSubmit: handlePasswordSubmit } =
    useForm<PasswordFormProps>();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<any>({
    username: "",
  });
  const [passwordError, setPasswordError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axiosInstance.get("/api/user/profile");
        const userInfoData = response.data.data.user;
        setUserInfo(userInfoData);
        setValue("username", userInfoData.username);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch user info");
        setLoading(false);
      }
    };
    fetchUserInfo();
  }, [setValue]);

  const onSubmitProfile = async (data: ProfileFormProps) => {
    try {
      setError(null);
      const response = await axiosInstance.patch("/api/user/update", data);
      if (response.status === 200) {
        alert("Profile updated successfully");
      }
    } catch (err) {
      setError("Failed to update profile");
    }
  };

  const onSubmitPassword = async (data: PasswordFormProps) => {
    try {
      setPasswordError(null);
      const response = await axiosInstance.post(
        "/api/user/change-password",
        data
      );
      if (response.status === 200) {
        alert("Password changed successfully");
      }
    } catch (err) {
      setPasswordError("Failed to change password");
    }
  };

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="flex flex-col gap-3 w-full lg:w-[30%]">
      <form
        onSubmit={handleSubmit(onSubmitProfile)}
        className="flex flex-col gap-3"
      >
        <div className="flex flex-col gap-2">
          <label className="text-neutral-400 text-md ">نام کاربری</label>
          <Input defaultValue={userInfo.username} {...register("username")} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-neutral-400 text-md ">شماره تماس</label>
          <Input disabled={true} 
          placeholder={userInfo.phoneNumber}
          />
        </div>
        <Button type="submit">بروزرسانی </Button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
      <form
        onSubmit={handlePasswordSubmit(onSubmitPassword)}
        className="flex flex-col gap-3"
      >
        <div className="flex flex-col gap-2">
          <label className="text-neutral-400 text-md ">کلمه عبور فعلی</label>
          <Input type="password" {...registerPassword("password")} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-neutral-400 text-md ">کلمه عبور جدید</label>
          <Input type="password" {...registerPassword("newPassword")} />
        </div>
        <Button type="submit">تغییر کلمه عبور </Button>
        {passwordError && <p className="text-red-500">{passwordError}</p>}
      </form>
    </div>
  );
};

export default ProfileForm;
