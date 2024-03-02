"use client";

import { useSelector } from 'react-redux';

const Dashboard = () => {
  
    const user = useSelector((state) => state.user.user);

    return (
        <div className='py-10 px-10'>
            <div className="w-full h-screen">
                <h1 className='text-gray-700'>Dashboard</h1>

                {user ? (
                    <div className="flex flex-col items-start gap-7 my-10">
                        <div>
                            <p className="text-lg font-semibold">Welcome, {user.username}!</p>
                            <p className="text-gray-600">Email: {user.email}</p>
                        </div>
                    </div>
                ) : (
                    <p>Loading user information...</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
