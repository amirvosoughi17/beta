"use client";

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectUserInfo } from '@/redux/user/userSlice';
import { fetchUserData } from '@/utils/userActions';
import { selectIsAuthenticated } from '@/redux/user/userSlice';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Dashboard = () => {
    const dispatch = useDispatch();
    const userInfo = useSelector(selectUserInfo);
    const isAuthenticated = useSelector(selectIsAuthenticated)
    const router = useRouter();

    const [updateInfo, setUpdateInfo] = useState({
        username: userInfo?.username || "",
        email: userInfo?.email || "",
        phoneNumber: userInfo?.phoneNumber || "",
        password: "",
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUpdateInfo((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(() => {
        dispatch(fetchUserData())
    }, [dispatch]);

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login');
        }
    }, [isAuthenticated, router]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/dashboard", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updateInfo),
            });
            if (res.ok) {
                dispatch(fetchUserData());
                console.log("User info updated successfully");
            } else {
                console.error("Failed to update user info");
            }
        } catch (error) {
            console.error("err", error);
        }
    }

    const renderWelcomeMessage = () => {
        if (userInfo?.role === 'admin') {
            return <div className='mt-10 flex flex-col gap-4'>
                <p>Welcome {userInfo?.username}, you are an admin!</p>
                <Link className='bg-violet-300 py-1 px-3 rounded-xl w-[160px] ' href='/dashboard/admin'>manage your app</Link>
            </div>;
        } else if (userInfo) {
            return <p>Welcome {userInfo?.username}!</p>;
        } else {
            return null; 
        }
    };

    return (
        <div className='py-10 px-10'>
            <div className="w-full h-screen">
                <h1 className='text-gray-700'>Dashboard</h1>
                {renderWelcomeMessage()}
                {userInfo ? (
                    <div className='flex flex-col gap-5 mt-10'>
                        <article>username :{userInfo?.username}</article>
                        <article>email : {userInfo?.email}</article>
                        <article>phoneNumber : {userInfo?.phoneNumber}</article>
                    </div>
                ) : (
                    <p>Loading user information...</p>
                )}
                <form onSubmit={handleUpdate} className='flex flex-col items-center gap-6 mt-[100px]'>
                    <input 
                        className='bg-gray-200  py-2 px-7 rounded-md text-gray-800'
                        placeholder={userInfo?.username}
                        onChange={handleChange}
                        name='username'
                    />
                    <input 
                        className='bg-gray-200  py-2 px-7 rounded-md text-gray-800'
                        placeholder={userInfo?.phoneNumber}
                        onChange={handleChange}
                        name='phoneNumber'
                    />
                    <input 
                        className='bg-gray-200  py-2 px-7 rounded-md text-gray-800'
                        placeholder={userInfo?.email}
                        onChange={handleChange}
                        name='email'
                    />
                    <button className='bg-violet-500 px-[57px] py-2 roundmd' type="submit">Update User Info</button>
                </form>
            </div>
        </div>
    );
};

export default Dashboard;
