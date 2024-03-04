"use client";
import React from 'react'

const EcmmercePlan = () => {
    return (
        <div>
            <div className="w-full py-4 px-5 bg-slate-100">
                <div className="flex justify-between flex-col gap-[120px]">
                    <h1>Eccomerce Plan </h1>
                    <div className="flex flex-col   gap-7 mt-10 w-full md:w-[80%]">
                        <div className="flex flex-col gap-2">
                            <h2 className='my-5 font-bold text-2xl text-gray-700'>Authentication</h2>
                            <div className="flex items-center gap-4 bg-white px-5 py-5" >
                                <input
                                    type="checkBox"
                                    className='text-gray-700'
                                    defaultChecked
                                    disabled
                                />
                                <span>auth with email and password</span>
                            </div>
                            <div className="flex items-center gap-4 bg-white px-5 py-5" >
                                <input
                                    type="checkBox"
                                    className='text-gray-700'
                                />
                                <span>Google Provider</span>
                            </div>
                            <div className="flex items-center gap-4 bg-white px-5 py-5" >
                                <input
                                    type="checkBox"
                                    className='text-gray-700'
                                />
                                <span>Apple Provider</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className='my-5 font-bold text-2xl text-gray-700'>Payment</h2>
                            <div className="flex items-center gap-4 bg-white px-5 py-5" >
                                <input
                                    type="checkBox"
                                    className='text-gray-700'
                                    defaultChecked
                                    disabled
                                />
                                <span>Add To card</span>
                            </div>
                            <div className="flex items-center gap-4 bg-white px-5 py-5" >
                                <input
                                    type="checkBox"
                                    className='text-gray-700'
                                    defaultChecked
                                    disabled
                                />
                                <span>Checkout</span>
                            </div>
                            <div className="flex items-center gap-4 bg-white px-5 py-5" >
                                <input
                                    type="checkBox"
                                    className='text-gray-700'
                                />
                                <span>payment with bitchion</span>
                            </div>
                            <div className="flex items-center gap-4 bg-white px-5 py-5" >
                                <input
                                    type="checkBox"
                                    className='text-gray-700'
                                />
                                <span>advanced payment system</span>
                            </div>
                        </div>
                    </div>
                        <div className="w-full bg-slate-600 rounded-e-xl py-10 px-10">
                            <div className="flex items-center justify-between w-full text-gray-200">
                                <span>total Price : </span>
                                <span>1000 $</span>
                            </div>
                            <button  className='mt-10 bg-slate-200 px-5 py-1 rounded-md '>Give a Total Price</button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default EcmmercePlan