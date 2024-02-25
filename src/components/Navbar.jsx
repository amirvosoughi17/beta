"use client";

import React from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link';

const Navbar = () => {
    const { data: session } = useSession();
    return (
        <div>
            <div className="w-full h-[100px] flex items-center py-5 px-10 justify-center bg-gray-50">
                <div className="flex justify-between w-full items-center ">
                    <Link href='/' className='font-bold text-xl'>wixel v-2</Link>
                    <div className="flex items-center gap-5">
                        {session ? (
                            <>
                            <span>hi {session?.user.username}</span>
                            <Link className='text-gray-600 ' href='/dashboard'>Dashboard</Link>
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