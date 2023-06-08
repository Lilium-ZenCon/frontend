import NFTCarousel from '@/components/NFTCarousel'
import React from 'react'

const dashboard = () => {
  return (
    <div className='mx-10'>
        <h1 className='text-3xl font-bold mb-2'>Dashboard</h1>
        <h3 className="text-lg font-semibold text-grey">
          Achievements
        </h3>
    <div className='h-[80%]'>
        <div className='flex flex-row justify-around '>
            <NFTCarousel/>
        </div>
        <h3 className="text-lg font-semibold text-grey mt-6">
          Activity
        </h3>
        <div className='bg-white shadow-lg rounded-md flex justify-between items-center'>
            <div className='flex flex-col justify-between items-center'>
            <div className='bg-white w-96 h-32 shadow-lg rounded-md'>
                <h5 className="text-sm font-bold text-grey mt-[6%] ml-[8%]">Total Footprint</h5>
                <h1 className='font-bold text-darkgreen text-4xl ml-[8%]' >12,000</h1>

            </div>
            <div className='bg-white w-96 h-32 shadow-lg rounded-md'>
                <h5 className="text-sm font-bold text-grey mt-[6%] ml-[8%]">Total Offset</h5>
                <h1 className='font-bold text-darkgreen text-4xl ml-[8%]' >12,000</h1>

            </div>
            <div className='bg-white w-96 h-32 shadow-lg rounded-md'>
                <h5 className="text-sm font-bold text-grey mt-[6%] ml-[8%]">Carbon Balance</h5>
                <h1 className='font-bold text-darkgreen text-4xl ml-[8%]' >12,000</h1>

            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default dashboard