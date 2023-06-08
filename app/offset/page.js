'use client'

import { useState } from 'react'

import { FaPlaneDeparture } from 'react-icons/fa'
import {TbBrandCarbon} from 'react-icons/tb'
import { AiFillCar } from 'react-icons/ai'
import { FaHotel } from 'react-icons/fa'

const page = () => {

    const [type, setType] = useState('carbon')
  return (
    <div className="flex justify-between px-10 items-center gap-10 h-[90%]">
        <div className="flex items-center flex-wrap w-1/2 gap-10 h-full">
            <div className='py-8 w-[40%] shadow-xl rounded-md flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-hover_grey transition duration-300 ease-in-out' onClick={() => setType('carbon')}>
                <TbBrandCarbon size={30}/>
                <p className=' text-grey uppercase text-sm font-semibold'>Carbon tokens</p>
            </div>
            <div className='py-8 w-[40%] shadow-xl rounded-md flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-hover_grey transition duration-300 ease-in-out' onClick={() => setType('flight')}>
                <FaPlaneDeparture size={30}/>
                <p className=' text-grey uppercase text-sm font-semibold'>Flight</p>
            </div>
            <div className='py-8 w-[40%] shadow-xl rounded-md flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-hover_grey transition duration-300 ease-in-out' onClick={() => setType('hotel')}>
                <FaHotel size={30}/>
                <p className=' text-grey uppercase text-sm font-semibold'>Hotel</p>
            </div>
            <div className='py-8 w-[40%] shadow-xl rounded-md flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-hover_grey transition duration-300 ease-in-out' onClick={() => setType('car')}>
                <AiFillCar size={30}/>
                <p className=' text-grey uppercase text-sm font-semibold'>Car</p>
            </div>
        </div>
        <div className='bg-darkgreen rounded-md w-1/2'>
            <h1 className='font-bold text-white text-lg	p-6'>Offset tokens</h1>
            {type === 'carbon' && 
            <div className=' mt-4 flex flex-col  items-center justify-center text-white'>
                CARBON
            </div>}

            {type === 'flight' &&
            <div className=' mt-4 flex flex-col  items-center justify-center'>
                FLIGHT
            </div>}

            {type === 'hotel' &&
            <div className=' mt-4 flex flex-col  items-center justify-center'>
                HOTEL
                </div>}

            {type === 'car' &&
            <div className=' mt-4 flex flex-col  items-center justify-center'>
                CAR
            </div>}
        </div>
    </div>
  )
}

export default page