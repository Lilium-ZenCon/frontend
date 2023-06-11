'use client'
import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import { CiCirclePlus } from 'react-icons/ci';
import { CiViewList } from 'react-icons/ci';



const admin = () => {
    const [type, setType] = useState('companies');

  return (
    <div className="flex justify-between mx-8 items-center ">
        <div className="flex items-center flex-col w-1/5  h-full">
            <button className='w-full bg-lightgreen h-32 rounded-lg shadow-xl my-4 flex flex-col justify-center items-center hover:bg-darkgreen transition ease-in-out duration-1' onClick={() => setType('companies')}>
                <CiViewList className='text-white' size={30} />
                <p className='font-bold text-white mt-2'>All companies</p>

            </button>
            <button className='w-full bg-lightgreen h-32 rounded-lg shadow-xl my-4 flex flex-col justify-center items-center hover:bg-darkgreen transition ease-in-out duration-100' onClick={() => setType('newCompany')}>
                <CiCirclePlus className='text-white' size={30} />
                <p className='font-bold text-white mt-2'>Register new company</p>
            </button>
        </div>
        {type === 'companies' && (
        <div className="bg-darkgreen rounded-md w-[75%] overflow-auto scroll-smooth	 h-[430px] text-white px-8 py-8">
            <h2 className='font-bold mx-2 text-lg my-1'>Registered companies</h2>
            <div className='flex flex-wrap justify-around py-4'>
            
            <button className=" bg-white rounded-lg shadow-xl w-[184px] h-52  text-darkgreen border-4 border-red-500	hover:bg-slate-200 transition duration-300 ease-in-out" onClick={()=>window.my_modal_3.showModal()}>
                <div className='flex justify-center'>
                    <Image
                        src="/assets/nft.jpg"
                        width={56}
                        height={44}
                        className='rounded-full' />
                </div>
                <div className='mx-2 mt-2'>
                    <p className='font-bold text-sm '>Company</p>
                    <p className='text-xs'>Alberta Carbon Trunk Line</p>
                </div>
                <div className='my-2  mx-2'>
                    <p className='font-bold text-sm'>Emmited tokens</p>
                    <p className='text-xs'>14000</p>
                </div>
                <div className='my-2 mx-2'>
                    <p className='font-bold text-sm'>Status</p>
                    <p className='text-xs'>Active</p>
                </div>   
            </button>
            <button className=" bg-white rounded-lg shadow-xl w-[184px] h-52  text-darkgreen border-4 border-emerald-500	hover:bg-slate-200 transition duration-300 ease-in-out" onClick={()=>window.my_modal_3.showModal()}>
                <div className='flex justify-center'>
                    <Image
                        src="/assets/nft.jpg"
                        width={56}
                        height={44}
                        className='rounded-full' />
                </div>
                <div className='mx-2 mt-2'>
                    <p className='font-bold text-sm '>Company</p>
                    <p className='text-xs'>Alberta Carbon Trunk Line</p>
                </div>
                <div className='my-2  mx-2'>
                    <p className='font-bold text-sm'>Emmited tokens</p>
                    <p className='text-xs'>14000</p>
                </div>
                <div className='my-2 mx-2'>
                    <p className='font-bold text-sm'>Status</p>
                    <p className='text-xs'>Active</p>
                </div>   
            </button>
                
            </div>
            

            
        </div> )}

        {type === 'newCompany' && (
            <div className="bg-darkgreen rounded-md w-[75%] overflow-auto scroll-smooth	 h-[430px] text-white px-8 py-4">
                <div className='flex justify-center'> 
                <h2 className='font-bold mx-2 text-lg my-1'>Register new company</h2>
                </div>

                <div className='flex flex-wrap justify-around'>
                    <div className='flex flex-col'>
                        <label className=" text-white py-1">Company Name:</label>
                        <input className="w-72 h-8 rounded-lg px-4 focus:outline-none" ></input>

                        <label className=" text-white py-1">Company Type:</label>
                        <input className="w-72 h-8 rounded-lg px-4 focus:outline-none"></input>

                        <label className=" text-white py-1">Company Owner:</label>
                        <input className="w-72 h-8 rounded-lg px-4 focus:outline-none" ></input>

                        <label className=" text-white py-1">Logo:</label>
                        <input
                        className="file-input file-input-ghost  file-input-bordered w-72 max-w-xs text-darkgreen bg-white"
                        type="file"
                        value={''}
                        placeholder="Upload a file"
                    ></input>
                    </div>
                    <div className='flex flex-col'>
                        <label className=" text-white py-1">Country:</label>
                        <input className="w-72 h-8 rounded-lg px-4 focus:outline-none" ></input>

                        <label className=" text-white py-1">Carbon Credits Emitted:</label>
                        <input type="number" className="w-72 h-8 rounded-lg px-4 focus:outline-none" ></input>

                        <label className=" text-white py-1">Price:</label>
                        <input type="number" className="w-72 h-8 rounded-lg px-4 focus:outline-none"></input>

                       
                    </div>
                   
                    
                    
                </div>
                <div className='flex justify-center'>
                    <button
                    type="submit"
                    className="text-white focus:outline-none bg-lightgreen font-semibold p-2 rounded-lg w-[85%] my-6 hover:bg-white hover:text-grey border-grey transition duration-300 ease-in-out">
							Register
				</button>

                </div>
                
            </div>
        )}


        <dialog id="my_modal_3" className="modal">
            <form method="dialog" className="modal-box">
                <button htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <h3 className="text-lg"><b>Company: </b>Alberta Carbon Trunk Line</h3>
                <div className='flex flex-col my-4'>
                   
                    <p className='mx-1'><b>Company Type:</b> algum</p>
                    <p className='mx-1'><b> Owner: </b></p> 
                    <p className='mx-1'><b>Status:</b> Active</p>
                    <p className='mx-1'><b>Issues detected:</b> Yes</p>
                    <p className='mx-1'><b>Country: </b></p>
                    <p className='mx-1'><b>Tolen Price: </b></p>
                    <p className='mx-1'><b>Carbon Credits Emitted: </b></p>
                    
                    
                    
                </div>
                <div className='flex justify-center'>
                    <button className='bg-lightgreen text-white px-2 py-2 rounded-md hover:bg-darkgreen transition duration-300 ease-in-out'>Revoke</button>
                </div>
            </form>
        </dialog>
    
    </div>
    
            
        
        
  )
}

export default admin

