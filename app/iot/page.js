'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import logo from 'public/assets/swap-logo.svg';
import imageExample from 'public/assets/tree_image_example.jpg';

const company = () => {

    const [type, setType] = useState('iot-simulation');

    return (
        <div>
            <div className='ml-48 mt-8'>
                <div className='w-1/2 min-h-1/2 py-12 bg-darkgreen rounded-lg'>
                    <div className='flex justify-center py-4 gap-4'>
                        <button className='bg-lightgreen w-64 py-4 rounded-lg mt-8 hover:bg-white hover:text-black duration-300 ease-in-out font-bold text-lg' onClick={() => setType('iot-simulation')}>Hardware simulation</button>
                        <button className='bg-lightgreen w-64 py-4 rounded-lg mt-8 hover:bg-white hover:text-black duration-300 ease-in-out font-bold text-lg' onClick={() => setType('outputs')}>Outputs</button>
                    </div>
                    {type === 'iot-simulation' && (
                        <div>
                            <h1 className='text-white font-bold text-3xl flex justify-center mt-12 mb-4'>Hardware Simulation</h1>
                            <div className='flex justify-around'>
                                <div className='flex flex-col'>
                                    <label className=" text-white py-1" >Temperature:</label>
                                    <input className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen" ></input>

                                    <label className=" text-white py-1">Humidity:</label>
                                    <input className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen" ></input>

                                    
                                </div>
                                <div className='flex flex-col'>
                                    <label className=" text-white py-1">CO:</label>
                                    <input className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen"  ></input>

                                    <label className=" text-white py-1">Image:</label>
                                    <input
                                    className="file-input file-input-ghost  file-input-bordered w-72 max-w-xs text-darkgreen bg-white"
                                    type="file"
                                    value={''}
                                    placeholder="Upload a file"></input>


                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <button className='bg-lightgreen w-64 px-6 py-4 rounded-lg mt-8 hover:bg-white hover:text-black duration-300 ease-in-out'>Add device</button>
                            </div>
                        </div>
                    )}
                    {type == 'outputs' && (
                        <div>
                            <h1 className='text-white font-bold text-3xl flex justify-center mt-12 mb-4'>Outputs</h1>
                            <div className='flex justify-around'>
                                <div className='flex flex-col justify-center items-center'>
                                    <h1 className='text-xl text-white font-bold py-4' >Image output</h1>
                                    <div className='flex flex-col'>
                                        <label className=" text-white py-1" >Link:</label>
                                        <input className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen" ></input> 
                                    </div>
                                    <button className='bg-lightgreen w-72 px-2 h-8 py-4 rounded-lg mt-8 hover:bg-white hover:text-black duration-300 ease-in-out flex items-center justify-center font-semibold'>See sensors image</button>
                                    
                                    <div>
                                        <h1 className='mt-8 text-white font-semibold'>Result:</h1>
                                        <Image
                                        className='mt-8'
                                        src={imageExample}
                                        alt='tree'
                                        width='300'
                                        height='300' />
                                    </div>


                                </div>
                                <div className='flex flex-col  items-center'>
                                    <h1 className='text-xl text-white font-bold py-4' >Sensors output</h1>
                                    <div className='flex flex-col'>
                                        <label className=" text-white py-1" >Link:</label>
                                        <input className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen" ></input> 
                                    </div>
                                    <button className='bg-lightgreen w-72 px-2 h-8 py-4 rounded-lg mt-8 hover:bg-white hover:text-black duration-300 ease-in-out flex items-center justify-center font-semibold'>See sensors result</button>
                                    <div>
                                        <h1 className='mt-8 text-white font-semibold'>Result:</h1>
                                        <p className='text-white mt-8 w-72'>Result here</p>
                                    </div>
                                    
                                </div>
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
