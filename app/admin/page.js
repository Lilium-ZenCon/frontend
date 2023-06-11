'use client'
import React from 'react'

const admin = () => {
  return (
    <div className="flex justify-between mx-8 items-center my-10">
        <div className="flex items-center flex-col w-1/5  h-full">
            <button className='w-full bg-lightgreen h-32 rounded-lg shadow-xl my-4'></button>
            <button className='w-full bg-lightgreen h-32 rounded-lg shadow-xl my-4'></button>
        </div>
    
        <div className="bg-darkgreen rounded-md w-[75%] overflow-auto scroll-smooth	 h-[430px] text-white px-8 py-8">
            <h2 className='font-bold mx-2 text-lg my-1'>Empresas cadastradas</h2>
            <div className='flex flex-wrap justify-around	'>
            <button className=" bg-white rounded-lg shadow-xl w-[184px] h-52 mx-2 my-2 text-darkgreen " onClick={()=>window.my_modal_3.showModal()}>
                    <div className='my-2 mx-2 '>
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
            <button className=" bg-white rounded-lg shadow-xl w-[184px] h-52 mx-2 my-2 text-darkgreen " onClick={()=>window.my_modal_3.showModal()}>
                    <div className='my-2 mx-2 '>
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
            <button className=" bg-white rounded-lg shadow-xl w-[184px] h-52 mx-2 my-2 text-darkgreen " onClick={()=>window.my_modal_3.showModal()}>
                    <div className='my-2 mx-2 '>
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
            <button className=" bg-white rounded-lg shadow-xl w-[184px] h-52 mx-2 my-2 text-darkgreen " onClick={()=>window.my_modal_3.showModal()}>
                    <div className='my-2 mx-2 '>
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
                
                
                
                <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box">
                    <button htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                </form>
                </dialog>
                
                
                
                

            </div>
        </div>
    
    </div>
    
            
        
        
  )
}

export default admin

