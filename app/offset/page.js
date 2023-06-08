'use client'

import { useState } from 'react'

import { FaPlaneDeparture } from 'react-icons/fa'
import {TbBrandCarbon} from 'react-icons/tb'
import { AiFillCar } from 'react-icons/ai'
import { FaBus } from 'react-icons/fa'
import FootprintRetire from '@/components/FootprintRetire'

const carTypes = ['SmallDieselCar', 'MediumDieselCar', 'LargeDieselCar', 'MediumHybridCar', 'LargeHybridCar', 'MediumLPGCar', 'LargeLPGCar', 'MediumCNGCar', 'LargeCNGCar', 'SmallPetrolVan', 'LargePetrolVan', 'SmallDielselVan', 'MediumDielselVan', 'LargeDielselVan', 'LPGVan', 'CNGVan', 'SmallPetrolCar', 'MediumPetrolCar', 'LargePetrolCar', 'SmallMotorBike', 'MediumMotorBike', 'LargeMotorBike']

const page = () => {

    const [type, setType] = useState('carbon')
    const [tokenAmout, setTokenAmount] = useState(0)

    const retireTokens = () => {

    }


  return (
    <div className="flex justify-between px-10 items-center gap-10 py-10">
        <div className="flex items-center flex-wrap w-1/2 gap-10 h-full">
            <div className='py-8 w-[40%] shadow-xl rounded-md flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-hover_grey transition duration-300 ease-in-out' onClick={() => setType('carbon')}>
                <TbBrandCarbon size={30}/>
                <p className=' text-grey uppercase text-sm font-semibold'>Carbon tokens</p>
            </div>
            <div className='py-8 w-[40%] shadow-xl rounded-md flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-hover_grey transition duration-300 ease-in-out' onClick={() => setType('flight')}>
                <FaPlaneDeparture size={30}/>
                <p className=' text-grey uppercase text-sm font-semibold'>Flight</p>
            </div>
            <div className='py-8 w-[40%] shadow-xl rounded-md flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-hover_grey transition duration-300 ease-in-out' onClick={() => setType('public transit')}>
                <FaBus size={30}/>
                <p className=' text-grey uppercase text-sm font-semibold'>Public transit</p>
            </div>
            <div className='py-8 w-[40%] shadow-xl rounded-md flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-hover_grey transition duration-300 ease-in-out' onClick={() => setType('car')}>
                <AiFillCar size={30}/>
                <p className=' text-grey uppercase text-sm font-semibold'>Car</p>
            </div>
        </div>
        <div className='bg-darkgreen rounded-md w-1/2'>
            {type === 'carbon' && 
            <div className=' mt-4 flex flex-col items-center justify-center text-white'>
                <h3 className='font-bold text-white text-3xl pt-3 '>Offset tokens</h3>
                <p className='text-sm mb-6'>You have 0 carbon tokens</p>
                <input className='w-[80%] h-28 rounded-lg text-black font-bold px-2 text-5xl' type='number' value={tokenAmout} onChange={(e) => setTokenAmount(e.target.value)}></input>
                <button className='bg-dark_grey text-white font-semibold py-5 px-2 rounded-lg cursor-pointer mt-6 w-full' onClick={retireTokens}>Retire</button>
            </div>}

            {type === 'public transit' &&
            <FootprintRetire title="public transit ride" typesName="Public transit"/>}

            {type === 'flight' &&
            <FootprintRetire title="flight" typesName="Flight"/>}

            {type === 'car' &&
            <FootprintRetire title="car ride" typesName="Car"/>}
        </div>
    </div>
  )
}

export default page