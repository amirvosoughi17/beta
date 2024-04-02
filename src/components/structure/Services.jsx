import React from 'react'
import servicesBg from '@/assets/services-bg.png'
import Image from 'next/image'
import element from '@/assets/element.png'
import servicesIcon from '@/assets/services-icon.png'
const Services = () => {
  return (
    <div className='w-full min-h-[400px] mt-[-100px]'>
        <div className="w-full flex flex-col relative h-full">
            <Image 
            src={servicesBg}
            className='h-[330px] absolute top-1'
            alt='wixel'
            />
            <Image 
            alt='wixel'
            src={element}
            className='top-10 left-10 absolute'
            />
            <div className="flex w-full items-center justify-between z-50 mt-[100px] px-[110px]">
                <div className="flex items-center gap-3">
                    <Image 
                    src={servicesIcon}
                    alt='icon'
                    width={60}
                    height={60}
                    />
                    <span className='text-white text-[33px] font-medium '>امکانات و ویژگی های بی نظیر</span>
                </div>
                <button className='rounded-[17px] bg-[#ffffff31] px-8 py-[14px] hover:bg-[#ffffff4c] duration-300 text-white text-[16px] font-medium'>ثبت سفارش</button>
            </div>
                <div className="px-[110px] w-full h-full overflow-x-auto flex items-center justify-center gap-4">
                    <div className=""></div>
                </div>
        </div>
    </div>
  )
}

export default Services