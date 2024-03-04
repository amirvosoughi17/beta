"use client";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '@/utils/userActions';
import { selectUserInfo , selectIsAuthenticated } from '@/redux/user/userSlice';
import { useEffect } from 'react';
import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const Navbar = () => {
    
    const dispatch = useDispatch();
    const userInfo = useSelector(selectUserInfo);
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const router  = useRouter();

    useEffect(() => {
        dispatch(fetchUserData());
      }, [dispatch]);

      const handleLogout = async () => {
        try {
            const response = await fetch("/api/auth/logout", {
                method: "GET",
            });

            router.push('/login')
            if (response.ok) {
                dispatch(logoutUser());
            } else {
                console.error("Failed to log out");
            }
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };
    return (
        <div>
            <div className="w-full h-[100px] flex items-center py-5 px-10 justify-center bg-gray-50">
                <div className="flex justify-between w-full items-center ">
                    <Link href='/' className='font-bold text-xl'>wixel v-2</Link>
                    <div className="flex items-center gap-5">


                        {isAuthenticated ? (
                            <>
                                <Link className='text-gray-600 ' href='/dashboard'>Dashboard</Link>
                                <button onClick={handleLogout} className='bg-red-400 py-1 px-3 rounded-md text-white'>Sign out </button>
                            </>
                        ) : (
                            <>
                                <Link className='text-gray-600 ' href='/login'>Login</Link>
                                <Link className='text-gray-600 ' href='/register'>Register</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar