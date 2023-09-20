import imageExample from '@/public/assets/tree_image_example.jpg';
import Image from 'next/image';

const Outputs = () => {
	return (
        <div>
        <h1 className='text-white font-bold text-3xl flex justify-center mt-8 mb-4'>Outputs</h1>
        <div className='flex justify-around'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-xl text-white font-bold py-4' >Image output</h1>
                <div className='flex flex-col'>
                    <label className=" text-white py-1" >GraphQL Manager:</label>
                    <input className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen" ></input> 
                </div>
                <button className='bg-lightgreen w-72 px-2 h-8 py-4 rounded-lg mt-8 hover:bg-white hover:text-black duration-300 ease-in-out flex items-center justify-center font-semibold'>Request output image</button>
                
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
                    <label className=" text-white py-1" >Server Manager:</label>
                    <input className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen" ></input> 
                </div>
                <button className='bg-lightgreen w-72 px-2 h-8 py-4 rounded-lg mt-8 hover:bg-white hover:text-black duration-300 ease-in-out flex items-center justify-center font-semibold'>Request sensorsouput</button>
                <div>
                    <h1 className='mt-8 text-white font-semibold'>Result:</h1>
                    <p className='text-white mt-8 w-72'>Result here</p>
                </div>
                
            </div>
        </div>
    </div>
	);
};

export default Outputs;
