import React from 'react'
import Layout from '@/components/Layout'
// shadcn
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const Payment = () => {
  return (
    <Layout>
        <div className="min-h-screen w-full py-5 px-3 sm:py-6 sm:px-5 lg:px-10 lg:py-10">
            <Card className="w-[80%] mx-auto flex flex-col h-[650px] md:flex-row items-center mt-[50px]">
              <div className="w-full md:w-[50%] md:border-l-[0.8px] border-zinc-800 h-full p-5">f</div>
              <div className="w-full md:w-[50%] "></div>
            </Card>
        </div>
    </Layout>
  )
}

export default Payment