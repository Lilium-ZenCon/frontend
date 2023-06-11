'use client';

import { useEffect, useState } from 'react';

import { FaPlaneDeparture } from 'react-icons/fa';
import { TbBrandCarbon } from 'react-icons/tb';
import { AiFillCar } from 'react-icons/ai';
import { FaBus } from 'react-icons/fa';
import FootprintRetire from '@/components/FootprintRetire';
import WalletContext from '@/context/WalletContext';
import { ethers } from 'ethers';
import OffsetCarbonToken from '../../abis/OffSetCarbonToken.json';
import { toast } from 'react-toastify';

const page = () => {
	const [type, setType] = useState('carbon');
	const [tokenAmount, setTokenAmount] = useState(0);
	const [balance, setBalance] = useState(0);
	const contractAddress = '0xaFc796F03Fb2135579B88E9Ad6C7AE4DA600B199';
	const provider = new ethers.providers.Web3Provider(ethereum);
	const signer = provider.getSigner();
	const tokenContract = new ethers.Contract(contractAddress, OffsetCarbonToken.abi, signer);

	const getBalance = async () => {
		const account = await signer.getAddress();
		let result = await tokenContract.balanceOf(account);
		setBalance(result.toString());
	};

	const retireTokens = async () => {
		let date = new Date();
		date = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
		console.log(date);
		let result = await tokenContract.retire(tokenAmount, date);
		console.log(result);
		toast.success('Tokens retired!');
		getBalance();
	};

	useEffect(() => {
		if (typeof window.ethereum !== 'undefined') {
			getBalance();
		}
	}, [balance]);

	return (
		<div className="flex justify-between px-10 items-center gap-10 py-10">
			<div className="flex items-center flex-wrap w-1/2 gap-10 h-full">
				<div
					className="py-8 w-[40%] shadow-xl rounded-md flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-hover_grey transition duration-300 ease-in-out"
					onClick={() => setType('carbon')}
				>
					<TbBrandCarbon size={30} />
					<p className=" text-grey uppercase text-sm font-semibold">Carbon tokens</p>
				</div>
				<div
					className="py-8 w-[40%] shadow-xl rounded-md flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-hover_grey transition duration-300 ease-in-out"
					onClick={() => setType('flight')}
				>
					<FaPlaneDeparture size={30} />
					<p className=" text-grey uppercase text-sm font-semibold">Flight</p>
				</div>
				<div
					className="py-8 w-[40%] shadow-xl rounded-md flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-hover_grey transition duration-300 ease-in-out"
					onClick={() => setType('public transit')}
				>
					<FaBus size={30} />
					<p className=" text-grey uppercase text-sm font-semibold">Public transit</p>
				</div>
				<div
					className="py-8 w-[40%] shadow-xl rounded-md flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-hover_grey transition duration-300 ease-in-out"
					onClick={() => setType('car')}
				>
					<AiFillCar size={30} />
					<p className=" text-grey uppercase text-sm font-semibold">Car</p>
				</div>
			</div>
			<div className="bg-darkgreen rounded-md w-1/2">
				{type === 'carbon' && (
					<div className=" mt-4 flex flex-col items-center justify-center text-white">
						<h3 className="font-bold text-white text-3xl pt-3 ">Offset tokens</h3>
						<p className="text-sm mb-6">You have {balance} offset carbon tokens</p>
						<input className="w-[80%] h-28 rounded-lg text-black font-bold px-2 text-5xl" type="number" value={tokenAmount} onChange={(e) => setTokenAmount(e.target.value)}></input>
						<button className="bg-dark_grey text-white font-semibold py-5 px-2 rounded-lg cursor-pointer mt-6 w-full" onClick={retireTokens}>
							Retire
						</button>
					</div>
				)}

				{type === 'public transit' && (
					<FootprintRetire title="public transit ride" typesName="Public transit" balance={balance} tokenAmount={tokenAmount} setTokenAmount={setTokenAmount} retireTokens={retireTokens} />
				)}

				{type === 'flight' && <FootprintRetire title="flight" typesName="Flight" balance={balance} tokenAmount={tokenAmount} setTokenAmount={setTokenAmount} retireTokens={retireTokens} />}

				{type === 'car' && <FootprintRetire title="car ride" typesName="Car" balance={balance} tokenAmount={tokenAmount} setTokenAmount={setTokenAmount} retireTokens={retireTokens} />}
				<div></div>
			</div>
		</div>
	);
};

export default page;
