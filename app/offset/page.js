'use client'

import { useState } from 'react'

import { FaPlaneDeparture } from 'react-icons/fa'
import {TbBrandCarbon} from 'react-icons/tb'
import { AiFillCar } from 'react-icons/ai'
import { FaHotel } from 'react-icons/fa'

const carTypes = ['SmallDieselCar', 'MediumDieselCar', 'LargeDieselCar', 'MediumHybridCar', 'LargeHybridCar', 'MediumLPGCar', 'LargeLPGCar', 'MediumCNGCar', 'LargeCNGCar', 'SmallPetrolVan', 'LargePetrolVan', 'SmallDielselVan', 'MediumDielselVan', 'LargeDielselVan', 'LPGVan', 'CNGVan', 'SmallPetrolCar', 'MediumPetrolCar', 'LargePetrolCar', 'SmallMotorBike', 'MediumMotorBike', 'LargeMotorBike']

const page = () => {

    const [type, setType] = useState('carbon')
    const [tokenAmout, setTokenAmount] = useState(0)
    const [flightOrigin, setFlightOrigin] = useState('')
    const [flightDestination, setFlightDestination] = useState('')
    const [flightTokens, setFlightTokens] = useState(0)
    const [hotelTokens, setHotelTokens] = useState(0)
    const [carTokens, setCarTokens] = useState(0)
    const [nights, setNights] = useState(0)
    const [hotelCity, setHotelCity] = useState('')
    const [hotelState, setHotelState] = useState('')
    const [hotelCountry, setHotelCountry] = useState('')
    const [distance, setDistance] = useState(0)
    const [selectedCar, setSelectedCar] = useState('');


    const retireTokens = () => {

    }

    const estimateFlightEmissions = () => {
    }

    const estimateHotelEmissions = () => {
    }

    const estimateCarEmissions = async () => {
        const url = `https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?distance=${distance}&vehicle=${selectedCar}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '497da21dedmsh0c4adf01f520c40p15a212jsn1ff7b1ddb839',
                'X-RapidAPI-Host': 'carbonfootprint1.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result.carbonEquivalent);
            setCarTokens(Number(result.carbonEquivalent) / 1000)
        } catch (error) {
            console.error(error);
        }
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
            {type === 'carbon' && 
            <div className=' mt-4 flex flex-col items-center justify-center text-white'>
                <h3 className='font-bold text-white text-3xl pt-3 '>Offset tokens</h3>
                <p className='text-sm mb-6'>You have 0 carbon tokens</p>
                <input className='w-[80%] h-28 rounded-lg text-black font-bold px-2 text-5xl' type='number' value={tokenAmout} onChange={(e) => setTokenAmount(e.target.value)}></input>
                <button className='bg-dark_grey text-white font-semibold py-5 px-2 rounded-lg cursor-pointer mt-6 w-full' onClick={retireTokens}>Retire</button>
            </div>}

            {type === 'flight' &&
            <div className=' mt-4 flex flex-col items-center justify-center text-white'>
                <h3 className='font-bold text-white text-3xl pt-3 mb-4'>Offset a flight</h3>
                <div className='flex items-end justify-between mb-5 w-[80%]'>
                    <label className='w-1/3'>
                        <p className='text-sm'>Origin</p>
                        <input className='rounded-lg text-black px-1 w-3/4'></input>
                    </label>
                    <label  className='w-1/3'>
                        <p className='text-sm'>Destination</p>
                        <input className='rounded-lg text-black px-1 w-3/4'></input>
                    </label>
                    <button onClick={estimateFlightEmissions} className='px-4 py-1 rounded-full bg-lightgreen text-white'>Estimate</button>
                </div>
                <p className='w-[80%] h-28 rounded-lg text-black font-bold px-2 text-5xl bg-white flex items-center' >{flightTokens}</p>
                <button className='bg-dark_grey text-white font-semibold py-5 px-2 rounded-lg cursor-pointer mt-6 w-full' onClick={retireTokens}>Retire</button>
            </div>}

            {type === 'hotel' &&
            <div className=' mt-4 flex flex-col items-center justify-center text-white'>
            <h3 className='font-bold text-white text-3xl pt-3 mb-4'>Offset a hotel stay</h3>
            <div className='flex items-end justify-between mb-5 w-[80%]'>
                <label className='w-1/3'>
                    <p className='text-sm'>Nights</p>
                    <input className='rounded-lg text-black px-1 w-3/4' value={nights} onChange={(e) => setNights(e.target.value)}></input>
                </label>
                <label  className='w-1/3'>
                    <p className='text-sm'>Country</p>
                    <input className='rounded-lg text-black px-1 w-3/4'
                    value={hotelCountry} onChange={(e) => setHotelCountry(e.target.value)}></input>
                </label>
                <label  className='w-1/3'>
                    <p className='text-sm'>State</p>
                    <input className='rounded-lg text-black px-1 w-3/4'
                    value={hotelState} onChange={(e) => setHotelState(e.target.value)}></input>
                </label>
                <label  className='w-1/3'>
                    <p className='text-sm'>City</p>
                    <input className='rounded-lg text-black px-1 w-3/4'
                    value={hotelCity} onChange={(e) => setHotelCity(e.target.value)}></input>
                </label>
                <button onClick={estimateHotelEmissions} className='px-4 py-1 rounded-full bg-lightgreen text-white'>Estimate</button>
            </div>
            <p className='w-[80%] h-28 rounded-lg text-black font-bold px-2 text-5xl bg-white flex items-center' >{hotelTokens}</p>
            <button className='bg-dark_grey text-white font-semibold py-5 px-2 rounded-lg cursor-pointer mt-6 w-full' onClick={retireTokens}>Retire</button>
        </div>}

            {type === 'car' &&
            <div className=' mt-4 flex flex-col items-center justify-center text-white'>
            <h3 className='font-bold text-white text-3xl pt-3 mb-4'>Offset a car ride</h3>
            <div className='flex items-end justify-between mb-5 w-[80%]'>
                <label className='w-1/2'>
                    <p className='text-sm'>Km traveled</p>
                    <input className='rounded-full text-black px-1 w-3/4 h-7' value={distance} onChange={(e) => setDistance(e.target.value)}></input>
                </label>
                <label  className='w-1/2'>
                    <p className='text-s'>Car type</p>
                    <select id="carTypes" className='text-black rounded-full h-7' value={selectedCar} onChange={(e) => setSelectedCar(e.target.value)}>
                        <option disabled value="">Select</option>
                        {carTypes.map((carType) => (
                        <option key={carType} value={carType}>
                        {carType}
                        </option>
        ))}
      </select>
                </label>
                <button onClick={estimateCarEmissions} className='px-4 py-1 rounded-full bg-lightgreen text-white h-7'>Estimate</button>
            </div>
            <p className='w-[80%] h-28 rounded-lg text-black font-bold px-2 text-5xl bg-white flex items-center' >{carTokens}</p>
            <button className='bg-dark_grey text-white font-semibold py-5 px-2 rounded-lg cursor-pointer mt-6 w-full' onClick={retireTokens}>Retire</button>
        </div>}
        </div>
    </div>
  )
}

export default page