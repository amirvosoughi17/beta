"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axiosInstance from "@/utils/axiosInstance";
import { useRouter } from "next/navigation";

const registerSchema = yup.object({
  email: yup.string().email("Invalid email address").required("Email is required"),
});

type RegisterFormInputs = {
  email: string;
};

const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormInputs>({
    resolver: yupResolver(registerSchema),
  });

  const router = useRouter();

  const onSubmit = async (data: RegisterFormInputs) => {
    console.log("Form data:", data);
    try {
      const response = await axiosInstance.post("/api/auth/register", data);
      console.log("Registration successful", response.data);
      router.push(`/auth/verify/${(data.email)}`);
    } catch (error: any) {
      console.error("Registration failed", error.response?.data || error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[350px] flex flex-col gap-4 items-center justify-center"
    >
      <div className="flex flex-col gap-3 w-full">
        <label>Email</label>
        <input
          className="py-2 px-4 rounded-lg bg-transparent border-[0.5px] border-neutral-600"
          type="email"
          {...register("email")}
        />
        {errors.email && (
          <span className="text-sm text-red-500">{errors.email.message}</span>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-neutral-700 rounded-lg w-full py-3"
      >
        {isSubmitting ? "Loading..." : "Register"}
      </button>
    </form>
  );
};

export default RegisterForm;
