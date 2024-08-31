"use client";
import React from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axiosInstance from "@/utils/axiosInstance";
import { VerifySchema } from "@/utils/validationSchema"; // Make sure this is correctly imported

type VerifyPageInputs = {
  code: string;
};

const VerifyPage: React.FC = () => {
  const pathname = usePathname();
  const email = pathname.split("/").pop() as string;
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<VerifyPageInputs>({
    resolver: yupResolver(VerifySchema),
  });

  const onSubmit = async (data: VerifyPageInputs) => {
    if (!email) {
      console.error("Email is missing from URL");
      return;
    }

    try {
      const response = await axiosInstance.post("/api/auth/verify", {
        email,
        code: data.code,
      });
      console.log("Verification successful", response.data);
    } catch (error) {
      console.error("Verification failed", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[350px] flex flex-col gap-4 items-center justify-center"
    >
      <div className="flex flex-col gap-3 w-full">
        <label>Code</label>
        <input
          className="py-2 px-4 rounded-lg bg-transparent border-[0.5px] border-neutral-600"
          type="text"
          {...register("code")}
        />
        {errors.code && (
          <span className="text-sm text-red-500">{errors.code.message}</span>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-neutral-700 rounded-lg w-full py-3"
      >
        {isSubmitting ? "Verifying..." : "Verify"}
      </button>
    </form>
  );
};

export default VerifyPage;
