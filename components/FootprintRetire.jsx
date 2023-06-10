'use client'

import { useState } from 'react'
import { flights, cars, publicTransportation } from '../utils/footprintTypes'

const FootprintRetire = ({title, typesName, balance, tokenAmount, setTokenAmount, retireTokens}) => {

    const [distance, setDistance] = useState(0)
    const [selectedType, setSelectedType] = useState('')


    let types = typesName === 'Car' ? cars : typesName === 'Flight' ? flights : typesName === 'Public transit' ? publicTransportation : null

    const estimateEmissions = async () => {
        const url = (
            typesName === 'Car' ?
            'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?distance=' + distance + '&type=' + selectedType :
            typesName === 'Flight' ?
            'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromFlight?distance=' + distance + '&type=' + selectedType :
            typesName === 'Public transit' ?
            'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromPublicTransit?distance=' + distance + '&type=' + selectedType :
            null
        )
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '497da21dedmsh0c4adf01f520c40p15a212jsn1ff7b1ddb839',
                'X-RapidAPI-Host': 'carbonfootprint1.p.rapidapi.com'
            }
        }
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setTokenAmount(Number(result.carbonEquivalent) / 100)
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
    <div className=' mt-4 flex flex-col items-center justify-center text-white'>
            <h3 className='font-bold text-white text-3xl pt-3'>Offset a {title}</h3>
            <p className='text-sm mb-5'>You have {balance} carbon tokens</p>
            <div className='flex items-end justify-between mb-5 w-[80%] gap-5'>
                <label className='w-1/2'>
                    <p className='text-sm'>Km traveled</p>
                    <input className='rounded-full text-black px-1 w-3/4 h-7' value={distance} onChange={(e) => setDistance(e.target.value)}></input>
                </label>
                <label  className='w-1/2'>
                    <p className='text-sm'>{typesName} type</p>
                    <select className='text-black rounded-full h-7' value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                        <option disabled value="">Select</option>
                        {types.map((type) => (
                        <option key={type} value={type}>
                        {type}
                        </option>
                    ))}
                    </select>
                </label>
                <button onClick={estimateEmissions} className='px-4 py-1 rounded-full bg-lightgreen text-white h-7'>Estimate</button>
            </div>
            <p className='w-[80%] h-28 rounded-lg text-black font-bold px-2 text-5xl bg-white flex items-center' >{tokenAmount.toFixed(10)}</p>
            <button className='bg-dark_grey text-white font-semibold py-5 px-2 rounded-lg cursor-pointer mt-6 w-full' onClick={retireTokens}>Retire</button>
        </div>
        </div>
  )
}

export default FootprintRetire