const HardwareSimulation = () => {
	return (
		<div>
            <h1 className='text-white font-bold text-3xl flex justify-center mt-8 mb-4'>Hardware Simulation</h1>
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
                    className="w-72 max-w-xs text-white h-8 flex items-center"
                    type="file"
                    value={''}
                    placeholder="Upload a file"></input>


                </div>
            </div>
            <div className='flex justify-center'>
                <button className='bg-lightgreen w-72 px-2 h-8 py-4 rounded-lg mt-8 hover:bg-white hover:text-black duration-300 ease-in-out flex items-center justify-center font-semibold'>Send</button>
            </div>
        </div>
	);
};

export default HardwareSimulation;
