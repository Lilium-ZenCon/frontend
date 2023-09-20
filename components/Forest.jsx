import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import Certifier from '@/abis/Certifier'


const Forest = () => {
    const [geographic, setGeographic] = useState('');
    const [vegetation, setVegetation] = useState('');
    const [weather, setWeather] = useState('');
    const [country, setCountry] = useState('');
    const [carbon , setCarbon ] = useState('');
    const [compensation, setCompensation] = useState('');
    const [contract, setContract] = useState(null);

    const initializeContract = async () => {
        try {
          if (typeof window.ethereum !== "undefined") {
            const contractAddress = "0xe73bc5bd4763a3307ab5f8f126634b7e12e3da9b";
            const provider = new ethers.providers.Web3Provider(window.ethereum);

            const companyContract = new ethers.Contract(
              contractAddress, //colocar endereço
              Certifier.abi, //Colocar ABI
             provider.getSigner() 
            );
    
            setContract(companyContract);

          } else {
            console.error("MetaMask is not installed or not available.");
          }
        } catch (error) {
          console.error("Error initializing contract:", error);
        }
      };

    useEffect(() => {
        initializeContract();
      }, []);

    const handleCreateForest = async () => {
        try {

            if (!geographic || !vegetation || !weather || !country || !carbon || !compensation) {
              alert("Please fill all inputs");
              return;
            }
           
            await contract.newCompany("QmZFqRNLi26tU7TYeLPNxF6kRiYkG9cBMmy5ngrSmAB5j6", "Tupan", "Brazil", "Finance", 100, 100, "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"); //Colocar aqui a função do contrato
            console.log('Company created')
            
          } 
          catch(error){
            console.error("Error registring a forest:", error);
          }
    }

	return (
		<div>
            <h1 className='text-white font-bold text-3xl flex justify-center mt-12 mb-4'>Add new forest</h1>
            <div className='flex justify-around'>
                <div className='flex flex-col'>
                    <label className=" text-white py-1" >Geographic location:</label>
                    <input 
                    onChange={(e) => setGeographic(e.target.value)}
                    className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen" ></input>

                    <label className=" text-white py-1">Vegetation:</label>
                    <input 
                    onChange={(e) => setVegetation(e.target.value)}
                    className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen" ></input>

                    <label className=" text-white py-1">Weather Conditions:</label>
                    <input 
                    onChange={(e) => setWeather(e.target.value)}
                    className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen"  ></input>

                </div>
                <div className='flex flex-col'>
                    <label className=" text-white py-1">Country:</label>
                    <input 
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen"  ></input>

                    <label className=" text-white py-1">Carbon Credits Emitted:</label>
                    <input 
                    onChange={(e) => setCarbon(e.target.value)}
                    type="number" className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen" ></input>

                    <label className=" text-white py-1">Hourly Compensation:</label>
                    <input 
                    onChange={(e) => setCompensation(e.target.value)}
                    type="number" className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen" ></input>

                </div>
            </div>
            <div className='flex justify-center'>
                <button 
                onClick={handleCreateForest}
                className='bg-lightgreen w-72 px-6 py-2 rounded-lg mt-8 hover:bg-white hover:text-black duration-300 ease-in-out font-semibold'>Create forest</button>
            </div>
        </div>
	);
};

export default Forest;
