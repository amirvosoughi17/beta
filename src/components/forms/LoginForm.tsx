"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axiosInstance from '@/utils/axiosInstance';
import { loginSchema } from '@/utils/validationSchema';

type LoginFormInputs = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormInputs>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const response = await axiosInstance.post('/api/auth/login', data);
      console.log('Login successful', response.data);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=' w-[350px] flex flex-col gap-4 items-center justify-center'>
      <div className=' flex flex-col gap-3 w-full'>
        <label>Email</label>
        <input className=' py-2 px-4 rounded-lg bg-transparent border-[0.5px] border-neutral-600' type="email" {...register('email')} />
        {errors.email && <span className=' text-sm text-red-500 '>{errors.email.message}</span>}
      </div>
      <div className=' flex flex-col gap-3 w-full'>
        <label>Password</label>
        <input className=' py-2 px-4 rounded-lg bg-transparent border-[0.5px] border-neutral-600' type="password" {...register('password')} />
        {errors.password && <span className=' text-sm text-red-500 '>{errors.password.message}</span>}
      </div>
      <button type="submit" disabled={isSubmitting} className=' bg-neutral-700 rounded-lg w-full py-3'>
        {isSubmitting ? 'Loading...' : 'Login'}
      </button>
    </form>
  );
};

export default LoginForm;
