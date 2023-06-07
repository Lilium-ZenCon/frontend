import React from 'react'
import Image from "next/image";
import logo from "public/assets/logo.svg";
import arrow from "public/assets/arrow.svg"


const swap = () => {
  return (
    <div>
        <div>
            <div className='bg-darkgreen w-1/2
           rounded-md ml-40 pt-1'>

                <h1 className='font-bold text-white text-lg	m-6 pl-6'>Swap</h1>
                <div className=' mt-4 flex flex-col  items-center justify-center'>
                    <div className='bg-white w-[90%] h-24 rounded-md flex items-center justify-between'>
                        <input className='ml-12 focus:outline-none w-64 text-4xl font-bold' placeholder="0" />
                        <select className='mr-12 bg-grey text-white font-semibold py-2 px-2 rounded-lg' >
                            <option>Carbor Verifier</option>
                        </select>
                    </div>
                </div> 
                <div className='flex flex-col  items-center justify-center my-4 '>
                    <Image
                    src={arrow}
                    alt="arrow"
                    width="20"
                    height="50"
                    />
                </div>
                
                <div className='flex flex-col  items-center justify-center'>
                    <div className='bg-white w-[90%] h-24 rounded-md flex items-center justify-between'>
                        <input className='ml-12 focus:outline-none w-64 text-4xl font-bold' placeholder="0" />
                        <select className='mr-12 bg-grey text-white font-semibold py-2 px-2 rounded-lg' >
                            <option>Carbor Verifier</option>
                        </select>
                    </div>
                </div> 

                <div className='flex flex-col  items-center justify-center'>

                    <button type='submit' className='text-white focus:outline-none bg-grey font-semibold p-2 rounded-lg w-[90%] my-6'>
                        Swap
                    </button>     
                </div>  
            </div>
            
        </div>
        
        <div class="overflow-hidden">
        
        <Image
          className='ml-[60%] mt-[4%] absolute -z-0'
          src={logo}
          alt="logo"
          width="650"
          height="650"
        />
        </div>

    </div>
  )
}

export default swap