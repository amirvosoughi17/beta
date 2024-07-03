import React from 'react'
import resImage from '@/assets/responsive.svg'
import Image from 'next/image'

const Responsive = () => {
  return (
    <div className='w-full h-full relative bg-neutral-800/50 drop-shadow-lg  flex items-center justify-center shadow-lg border-[1.2px] border-neutral-700/60 rounded-xl'>
        <Image 
        src={resImage}
        alt='resImage'
        className='w-[700px] md:w-[80%] h-[200px] md:h-[270px] top-8 absolute left-0 object-cover'
        />
        <div className="w-full absolute h-[110px] bg-gradient-to-b from-neutral-800/80 backdrop-blur-xl to-neutral-900/80  bottom-0 rounded-b-xl">
            <div className="flex flex-col gap-1 w-full h-full p-3 md:p-6">
                <h1 className=' text-2xl font-bold text-neutral-300 tracking-tightest'>طراحی واکنشگرا</h1>
                <p className=' text-sm font-light text-neutral-500 tracking-tightest'>با طراحی واکنشگرا وبسایت شما در هر دستگاهی به بهترین شکل نمایش داده خواهد شد</p>
            </div>
        </div>

    </div>
  )
}

export default Responsive