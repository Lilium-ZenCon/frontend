import Image from 'next/image';

const Companies = () => {
    return(
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
    );
};

export default Companies;

