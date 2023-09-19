'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import logo from 'public/assets/swap-logo.svg';

const company = () => {

    const [type, setType] = useState('companies');

    return (
        <div>
            <div className='ml-48 mt-24'>
                <div className='w-1/2 min-h-1/2 py-12 bg-darkgreen rounded-lg'>
                    <div className='flex justify-center py-4 gap-4'>
                        <button className='bg-lightgreen w-64 py-4 rounded-lg mt-8 hover:bg-white hover:text-black duration-300 ease-in-out font-bold text-lg' onClick={() => setType('companies')}>New company</button>
                        <button className='bg-lightgreen w-64 py-4 rounded-lg mt-8 hover:bg-white hover:text-black duration-300 ease-in-out font-bold text-lg' onClick={() => setType('device')}>New device</button>
                    </div>
                    {type === 'companies' && (
                        <div>
                            <h1 className='text-white font-bold text-3xl flex justify-center mt-12 mb-4'>New company</h1>
                            <div className='flex justify-around'>
                                <div className='flex flex-col'>
                                    <label className=" text-white py-1" >Company Name:</label>
                                    <input className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen" ></input>

                                    <label className=" text-white py-1">Company Type:</label>
                                    <input className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen" ></input>

                                    <label className=" text-white py-1">Company Owner:</label>
                                    <input className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen"  ></input>

                                    <label className=" text-white py-1">Logo:</label>
                                    <input
                                    className="file-input file-input-ghost  file-input-bordered w-72 max-w-xs text-darkgreen bg-white"
                                    type="file"
                                    value={''}
                                    placeholder="Upload a file"></input>
                                </div>
                                <div className='flex flex-col'>
                                    <label className=" text-white py-1">Country:</label>
                                    <input className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen"  ></input>

                                    <label className=" text-white py-1">Carbon Credits Emitted:</label>
                                    <input type="number" className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen" ></input>

                                    <label className=" text-white py-1">Price:</label>
                                    <input type="number" className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen" ></input>

                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <button className='bg-lightgreen w-64 px-6 py-4 rounded-lg mt-8 hover:bg-white hover:text-black duration-300 ease-in-out'>Add new company</button>
                            </div>
                        </div>
                    )}
                    {type == 'device' && (
                        <div>
                            <h1 className='text-white font-bold text-3xl flex justify-center mt-12 mb-4'>New company</h1>
                            <div className='flex justify-around'>
                                <div className='flex flex-col'>
                                    <label className=" text-white py-1" >Company Name:</label>
                                    <input className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen" ></input>

                                    <label className=" text-white py-1">Company Type:</label>
                                    <input className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen" ></input>

                                
                                </div>
                                <div className='flex flex-col'>
                                    <label className=" text-white py-1">Country:</label>
                                    <input className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen"  ></input>

                                    <label className=" text-white py-1">Carbon Credits Emitted:</label>
                                    <input type="number" className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen" ></input>

                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <button className='bg-lightgreen w-64 px-6 py-4 rounded-lg mt-8 hover:bg-white hover:text-black duration-300 ease-in-out'>Add new device</button>
                            </div>
                        </div>
                    )}
                    

                </div>
            </div>
            <Image
                className="bottom-0 right-0  -z-10 absolute"
                src={logo}
                alt="logo"
                width="400"
                height="400"
            />

        </div>
    );
};

export default company;
