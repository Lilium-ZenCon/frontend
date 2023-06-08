'use client'

import { useState } from 'react'

import { FaPlaneDeparture } from 'react-icons/fa'
import {TbBrandCarbon} from 'react-icons/tb'
import { AiFillCar } from 'react-icons/ai'
import { FaBus } from 'react-icons/fa'
import FootprintRetire from '@/components/FootprintRetire'

const page = () => {

    const [type, setType] = useState('carbon')
    const [tokenAmount, setTokenAmount] = useState(0)
    const [timeInterval, setTimeInterval] = useState('weekly')
    const [timeLimit, setTimeLimit] = useState(0)

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
                <input className='w-[80%] h-28 rounded-lg text-black font-bold px-2 text-5xl' type='number' value={tokenAmount} onChange={(e) => setTokenAmount(e.target.value)}></input>
                <button className='bg-dark_grey text-white font-semibold py-5 px-2 rounded-lg cursor-pointer mt-6 w-full' onClick={retireTokens}>Retire</button>
            </div>
            }

            {type === 'public transit' &&
            <FootprintRetire title="public transit ride" typesName="Public transit"/>}

            {type === 'flight' &&
            <FootprintRetire title="flight" typesName="Flight"/>}

            {type === 'car' &&
            <FootprintRetire title="car ride" typesName="Car"/>}
            <div>
        <button className="bg-white font-bold text-grey w-full pt-1" onClick={()=>window.my_modal_2.showModal()}>Schedule retirement</button>
        <dialog id="my_modal_2" className="modal">
            <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg mb-2">Schedule retirements</h3>
                <label className='flex items-center gap-4 w-full justify-between'>
                    <p>Retire</p>
                    <p><strong>{tokenAmount}</strong></p>
                    <p>tokens</p>
                    <p className=''>every</p>
                    <select className='text-black rounded-full h-7' >
                            <option disabled value=""></option>
                            <option key={'monthly'} value={'monthly'}>month</option>
                            <option key={'weekly'} value={'weekly'}>week</option>
                    </select>
                    <button onClick={() => {}} className='px-4 py-1 rounded-full bg-lightgreen text-white h-7'>Schedule</button>
                </label>

                
            </form>
                <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    </div>
        </div>
    </div>
  )
}

export default page