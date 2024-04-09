import React from 'react'

const notFound = () => {
    return (
        <div className='min-h-screen flex w-full items-center justify-center'>
            <div className='flex flex-col gap-3'>
                <h1 className='text-5xl font-semibold tracking-wider text-white'>
                    404
                </h1>
            </div>
        </div>
    )
}

export default notFound