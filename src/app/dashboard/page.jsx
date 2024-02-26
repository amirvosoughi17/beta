"use client";
import React from 'react'
import { useSession } from 'next-auth/react'

const Dashboard = () => {
  const { data: session } = useSession();
  if (!session) {

    return (
      <div>
        <p>Please log in to view your profile.</p>
      </div>
    );
  }
  return (
    <div className='py-10 px-10'>
      <div className="w-full h-screen">
        <h1 className='text-gray-700'>Dashboard</h1>
        <div className="flex flex-col items-start gap-7 my-10">
        {session.user ? (
        <div>
          <p>Username: {session.user.username}</p>
          <p>Email: {session.user.email}</p>
          <p>Phone Number: {session.user.phoneNumber}</p>
          {/* Do not display the password for security reasons */}
          {/* <p>Password: {session.user.password}</p> */}
          {/* You should not display the password for security reasons */}
        </div>
      ) : (
        // Handle the case where session.user is not defined
        <p>User data is missing. Please try again.</p>
      )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard