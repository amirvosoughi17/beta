"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import React from 'react';


const Register = () => {
    const router = useRouter();
    const [loading , setLoading] = useState(false);
    const [formData, setFormData] = useState({
        username : "",
        email : "",
        phoneNumber : "",
        password : ""
     });
     function handleChange (e) {
        const name = e.target.name;
        const value = e.target.value;
        setFormData((preState) => ({
            ...preState ,
            [name] : value
        }))
     }

     async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
    
        try {
            const res = await fetch('/api/register', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            console.log(formData);
    
            if (res.ok) {
                router.push('/login');
            } else {
                setLoading(false);
                alert('Failed to register');
            }
        } catch (error) {
            console.error('An error occurred during registration:', error);
            setLoading(false);
            alert('Failed to register. Please try again.');
        }
    }

  return (
    <div className='w-full h-[600px] bg-gray-100 flex flex-col items-center justify-center '>
        <form onSubmit={handleSubmit}  className="md:w-[45%] lg:w-[35%] w-[90%]  h-[90%] flex flex-col gap-7 py-10 px-10 bg-white rounded-md shadow-sm">
            <h1 className='text-center font-bold text-3xl text-gray-900'>Register</h1>
            <input 
            type="text"
            name="username"
            placeholder='username'
            className='bg-gray-50 text-slate-800 px-4 py-4 rounded-md'
            onChange={handleChange}
            />
            <input
            type='email'
            placeholder='Email Address'
            name= "email"
            className='bg-gray-50 text-slate-800 px-4 py-4 rounded-md'
            onChange={handleChange}

            />
            <input
            type='text'
            placeholder='Phone Number'
            name= "phoneNumber"
            className='bg-gray-50 text-slate-700 px-4 py-4 rounded-md'
            onChange={handleChange}

            />
            <input
            type='password'
            placeholder='password'
            name= "password"
            className='bg-gray-50 text-slate-700 px-4 py-4 rounded-md'
            onChange={handleChange}

            />
            <button className='bg-slate-700 text-white rounded-md py-3 px-10 ' type='submit'>{loading ? "Loading ..." : "Register"}</button>
        </form>
    </div>
  )
}

export default Register