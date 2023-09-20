import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Company from '@/abis/Company';

const HardwareSimulation = () => {
    const [temperature, setTemperature] = useState('');
    const [humidity, setHumidity] = useState('');
    const [co, setCo] = useState('');
    const [image, setImage] = useState('');
    const [contract, setContract] = useState('');
    const [file, setFile] = useState(null);

    const initializeContract = async () => {
        try {
            if (typeof window.ethereum !== 'undefined') {
                const contractAddress =
                    '0x487c16e3228c9d6be29e4bf400cd21be2e993bbd';
                const provider = new ethers.providers.Web3Provider(
                    window.ethereum
                );
                const signer = await provider.getSigner();
                console.log(signer);

                const companyContract = new ethers.Contract(
                    contractAddress, //colocar endereço
                    Company.abi, //Colocar ABI
                    signer
                );
                console.log('oi');
                setContract(companyContract);
            } else {
                console.error('MetaMask is not installed or not available.');
            }
        } catch (error) {
            console.error('Error initializing contract:', error);
        }
    };

    useEffect(() => {
        initializeContract();
    }, []);

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const base64String = e.target.result.split(',')[1];
                console.log(base64String);
                setImage(base64String);
            };

            reader.readAsDataURL(file);
            console.log(file)
        }
    };

    const jsonData = {
        temperature: parseFloat(temperature),
        humidity: parseFloat(humidity),
        co: parseFloat(co),
        base64_image: image
    };

    const handleSendIotData = async () => {
        try {
            if (!temperature || !humidity || !co || !image) {
                alert('Please fill in all fields.');
                return;
            }
            console.log(jsonData);
            await contract.verifyRealWorldState(JSON.stringify(jsonData));

            console.log('Successfully sent data.');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h1 className="text-white font-bold text-3xl flex justify-center mt-8 mb-4">
                Hardware Simulation
            </h1>
            <div className="flex justify-around">
                <div className="flex flex-col">
                    <label className=" text-white py-1">Temperature:</label>
                    <input
                        onChange={(e) => setTemperature(e.target.value)}
                        className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen"
                    ></input>

                    <label className=" text-white py-1">Humidity:</label>
                    <input
                        onChange={(e) => setHumidity(e.target.value)}
                        className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen"
                    ></input>
                </div>
                <div className="flex flex-col">
                    <label className=" text-white py-1">CO:</label>
                    <input
                        onChange={(e) => setCo(e.target.value)}
                        className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen"
                    ></input>

                    <label className=" text-white py-1">Image:</label>
                    <input
                        onChange={handleFileChange}
                        className="w-72 max-w-xs text-white h-8 flex items-center"
                        type="file"
                        value={file}
                        placeholder="Upload a file"
                    ></input>
                </div>
            </div>
            <div className="flex justify-center">
                <button
                    onClick={handleSendIotData}
                    className="bg-lightgreen w-72 px-2 h-8 py-4 rounded-lg mt-8 hover:bg-white hover:text-black duration-300 ease-in-out flex items-center justify-center font-semibold"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default HardwareSimulation;
