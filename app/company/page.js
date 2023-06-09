import React from 'react'
import Image from "next/image";
import logo from "public/assets/logo.svg";

// Use the api keys by providing the strings directly 
const pinataSDK = require('@pinata/sdk');
const pinata = new pinataSDK('30d7a19afe755717bffc', 'ea8d978a134be01628e7e0e6b2ae33aa97e6a1972e8074c26ef1e2709751c22e');

const company = () => {
  return (
    <div>
    <div  className='flex justify-center pb-8' >
      <div className='flex justify-center bg-darkgreen w-[40%] rounded-lg py-4'>
        <div className='flex flex-col '>
          <div className='flex justify-center'>
            <h1 className='text-white font-bold py-4'>Register new company</h1>
          </div>
          <div className='py-4 flex flex-col'>
            <label className=' text-white py-1'>Company Name:</label>
            <input className='w-72 h-8 rounded-lg px-4 focus:outline-none'></input>
          </div>
          <div className='py-4 flex flex-col'>
            <label className=' text-white py-1'>Company Type:</label>
            <input className='w-72 h-8 rounded-lg px-4 focus:outline-none'></input>
          </div>
          <div className='py-4 flex flex-col'>
            <label className=' text-white py-1'>Company Owner:</label>
            <input className='w-72 h-8 rounded-lg px-4 focus:outline-none'></input>
          </div>
          <div className='py-4 flex flex-col'>
            <label className=' text-white py-1'>Country:</label>
            <input className='w-72 h-8 rounded-lg px-4 focus:outline-none'></input>
          </div>
          <div className='py-4 flex flex-col'>
            <label className=' text-white py-1'>Logo URI:</label>
            <input className='file-input file-input-ghost  file-input-bordered w-72 max-w-xs text-darkgreen bg-white' type='file' onClick={console.log("banana")}></input>
          </div>
          <button type='submit' className='text-white focus:outline-none bg-grey font-semibold p-2 rounded-lg w-[100%] my-6 hover:bg-white hover:text-grey border-grey transition duration-300 ease-in-out'>Register</button>  
        </div>
      </div>
      
    </div>
    
    </div>
    
    
  )
}

export default company