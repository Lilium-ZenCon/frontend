'use client';

import Image from 'next/image';
import logo from 'public/assets/swap-logo.svg';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import Company from '../../abis/Company.json';

const company = () => {
    const [amount, setAmount] = useState(0);
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        const getBalance = async (provider) => {
            const contractBalance = await provider.getBalance(
                '0x47Eb14a6f6DB1e29e82909BA12430b2d7C830851'
            );
			console.log(balance)
			//setBalance(contractBalance);
        };

        if (typeof window.ethereum !== 'undefined') {

            const provider = new ethers.providers.Web3Provider(ethereum);
			getBalance(provider);
        }
    });

    return (
        <div>
            <div className="">
                <div className="bg-darkgreen w-5/12 rounded-md ml-40 pt-1 mt-16">
                    <h1 className="font-bold text-white text-lg	m-6 pl-6">
                        Withdraw
                    </h1>
                    <div className=" mt-4 flex flex-col  items-center justify-center"></div>

                    <div className="flex flex-col  items-center justify-center">
                        <div className="bg-white w-[90%] h-24 rounded-md flex items-center justify-center gap-20">
                            <p className=" focus:outline-none text-3xl font-bold">
                                Amount:
                            </p>
                            <p
                                className="focus:outline-none  text-3xl font-bold"
                                placeholder="0"
                            >
                                {balance}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <button
                            type="submit"
                            className="text-white focus:outline-none bg-grey font-semibold p-2 rounded-lg w-[90%] my-6 hover:bg-white hover:text-grey border-grey transition duration-300 ease-in-out"
                        >
                            Withdraw
                        </button>
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
        </div>
    );
};

export default company;
