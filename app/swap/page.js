'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from 'public/assets/swap-logo.svg';
import Company from '../../abis/Company.json';
import companyAddresses from '../../utils/companyAddresses.json';
import { ethers } from 'ethers';
import { toast } from 'react-toastify';
import Register from '../../abis/Register.json';


const swap = () => {
    const [oct, setOct] = useState(0);
    const [matic, setMatic] = useState(0);
    const [chosenCompany, setChosenCompany] = useState('');

    const [data, setData] = useState([]);

    var provider = null;
    var signer = null;
    const companyABI = Company.abi;

    const swapTokens = async () => {
        const contractAddress = chosenCompany.address;
		console.log(matic.toString())
		console.log(ethers.utils.parseEther(matic.toString()).toString())

        const transaction = {
            to: contractAddress,
            value: ethers.utils.parseEther(matic.toString()), // Amount of MATIC to send
            data: '0x' // You can leave this empty if the receive() function doesn't require additional data
        };

        const tx = await signer.sendTransaction(transaction);
        console.log('Transaction sent:', tx.hash);
        toast('Transaction sent');
        await tx.wait();

        console.log('Transaction mined');
        toast.success('Transaction mined');
    };

    const handleOctChange = async (e) => {
		console.log(chosenCompany)
        setOct(e.target.value);
		let value = e.target.value != '' ? Number(e.target.value) : 0;
        setMatic(value * Number(chosenCompany.price));
		console.log({matic})
    };

    const handleCompanyChange = (e) => {
        const selectedCompanyAddress = e.target.value;
        const selectedCompany = data.find(
            (company) => company.address === selectedCompanyAddress
        );

        setChosenCompany(selectedCompany);
        setMatic(oct * Number(selectedCompany.price));
    };

    useEffect(() => {
        const registerAddress = '0x80AE69ffE6120ceBdFF1212BC5eF957EB2c0cE5c';
        const registerAbi = Register.abi;
        

        let fetched = [];
        const getAddresses = async () => {

			const registerContract = new ethers.Contract(
				registerAddress,
				registerAbi,
				signer
			);

			const newCompanyAddresses = []

            for (let i = 0; i < 8; i++) {
                const company = await registerContract.companies(i)
                newCompanyAddresses.push(company)
            }

            for (let i = 0; i < newCompanyAddresses.length; i++) {
                const contractAddress = newCompanyAddresses[i];
                const companyContract = new ethers.Contract(
                    contractAddress,
                    companyABI,
                    signer
                );
                let companyName = await companyContract.companyName();
                let price = await companyContract.tokenPrice();
                fetched.push({
                    name: companyName,
                    address: contractAddress,
                    price: price / 1000
                });
            }
            setData(fetched);
			setChosenCompany(fetched[0])
        };
        if (typeof window.ethereum !== 'undefined') {
            provider = new ethers.providers.Web3Provider(ethereum);
            signer = provider.getSigner();

            getAddresses();
        }
    }, [data]);

    return (
        <div>
            <div className="">
                <div className="bg-darkgreen w-5/12 rounded-md ml-40 pt-1">
                    <h1 className="font-bold text-white text-lg	m-6 pl-6">
                        Swap
                    </h1>
                    <div className=" mt-4 flex flex-col  items-center justify-center">
                        <div className="bg-white w-[90%] h-24 rounded-md flex items-center justify-between">
                            <input
                                type="number"
                                className="ml-12 focus:outline-none w-64 text-4xl font-bold"
                                value={oct}
                                onChange={(e) => handleOctChange(e)}
                            />
                            <select className="mr-12 bg-grey text-white font-semibold py-2 px-2 rounded-lg cursor-pointer">
                                <option>OCT</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center my-4 ">
                        <select
                            className=" bg-grey text-white font-semibold py-2 px-2 rounded-lg cursor-pointer"
                            value={chosenCompany.address}
                            onChange={(e) => handleCompanyChange(e)}
                        >
                            {data.map((company) => {
                                return (
                                    <option
                                        key={company.address}
                                        value={company.address}
                                    >
                                        {company.name} - {company.price} MATIC
                                    </option>
                                );
                            })}
                        </select>
                    </div>

                    <div className="flex flex-col  items-center justify-center">
                        <div className="bg-white w-[90%] h-24 rounded-md flex items-center justify-between">
                            <p
                                className="ml-12 focus:outline-none w-64 text-4xl font-bold"
                                placeholder="0"
                            >
                                {matic.toFixed(2)}
                            </p>
                            <select className="mr-12 bg-grey text-white font-semibold py-2 px-2 rounded-lg cursor-pointer">
                                <option>MATIC</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col  items-center justify-center">
                        <button
                            type="submit"
                            className="text-white focus:outline-none bg-grey font-semibold p-2 rounded-lg w-[90%] my-6 hover:bg-white hover:text-grey border-grey transition duration-300 ease-in-out"
                            onClick={swapTokens}
                        >
                            Swap
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

export default swap;
