'use client';

import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Company from '@/abis/Company';

const Device = () => {
    const [address, setAddress] = useState('');
    const [contract, setContract] = useState('');

    const initializeContract = async () => {
        try {
            if (typeof window.ethereum !== 'undefined') {
                const contractAddress =
                    '0x487c16e3228c9d6be29e4bf400cd21be2e993bbd';
                const provider = new ethers.providers.Web3Provider(
                    window.ethereum
                );
                const signer = await provider.getSigner();
                console.log(signer)

                const companyContract = new ethers.Contract(
                    contractAddress, //colocar endereço
                    Company.abi, //Colocar ABI
                    signer
                );
                  console.log('oi')
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

    const handleRegisterDevice = async () => {
        try {
            if (!address) {
                alert('Please fill a address');
                return;
            }

            await contract.addHardwareDevice(
                '0x90F79bf6EB2c4f870365E785982E1f101E93b906'
            ); //Colocar aqui a função do contrato

            console.log('Successfully created company');
        } catch (error) {
            console.error('Error registring a forest:', error);
        }
    };

    return (
        <div>
            <h1 className="text-white font-bold text-3xl flex justify-center mt-12 mb-4">
                New device
            </h1>
            <div className="flex justify-around">
                <div className="flex flex-col">
                    <label
                        onChange={(e) => setAddress(e.target.value)}
                        className=" text-white py-1"
                    >
                        Address:
                    </label>
                    <input
                        className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    ></input>
                </div>
            </div>
            <div className="flex justify-center">
                <button
                    onClick={handleRegisterDevice}
                    className="bg-lightgreen w-72 px-6 py-2 rounded-lg mt-8 hover:bg-white hover:text-black duration-300 ease-in-out font-semibold"
                >
                    Register new device
                </button>
            </div>
        </div>
    );
};

export default Device;
