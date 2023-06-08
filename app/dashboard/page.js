import React from 'react'

const dashboard = () => {
  return (
    <div>
        <div className='flex flex-row justify-around mt-[2%]'>
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
        <div className='bg-white w-[97%] h-96 ml-[1.5%] my-[2%] shadow-lg rounded-md'>
            <h5 className="text-md font-bold text-grey  ml-[3%] pt-[2%]">Activity</h5>

        </div>
    </div>
  )
}

export default dashboard