'use client';

import Graph from '@/components/Graph';
import NFTCarousel from '@/components/NFTCarousel';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import OffsetCarbonToken from '../../abis/OffSetCarbonToken.json';

const dashboard = () => {
	const [balance, setBalance] = useState(0);
	const [history, setHistory] = useState('');
  const [totalOffset, setTotalOffset] = useState(0);
	const contractAddress = '0xaFc796F03Fb2135579B88E9Ad6C7AE4DA600B199';
	const provider = new ethers.providers.Web3Provider(ethereum);
	const signer = provider.getSigner();
	const tokenContract = new ethers.Contract(contractAddress, OffsetCarbonToken.abi, signer);

  const getBalance = async () => {
    const account = await signer.getAddress();
    let result = await tokenContract.balanceOf(account);
    let history = await tokenContract.historyUsersRetires();
    setBalance(result.toString());
    setHistory(history);
    console.log(history);
  };

	useEffect(() => {
		if (typeof window.ethereum !== 'undefined') {
			getBalance();
		}
	}, [balance]);

	return (
		<div className="mx-10 mt-4">
			<h1 className="text-4xl font-bold mb-2 mt-4">Dashboard</h1>
			<h3 className="text-lg font-semibold text-grey">Achievements</h3>
			<div className="mb-10">
				<div className="flex flex-row justify-around ">
					<NFTCarousel />
				</div>
				<h3 className="text-lg font-semibold text-grey mt-6">Activity</h3>
				<div className="bg-white shadow-lg rounded-md flex justify-between items-center">
					<div className="flex flex-col justify-between items-center">
						<div className="bg-white w-96 h-32">
							<h5 className="text-sm font-bold text-grey mt-[6%] ml-[8%]">Total Tokens</h5>
							<h1 className="font-bold text-darkgreen text-4xl ml-[8%]">{balance}</h1>
						</div>
						<div className="bg-white w-96 h-32">
							<h5 className="text-sm font-bold text-grey mt-[6%] ml-[8%]">Total Offset</h5>
							<h1 className="font-bold text-darkgreen text-4xl ml-[8%]">{totalOffset}</h1>
						</div>
					</div>
					<div className="w-full pb-5">
						<Graph />
					</div>
				</div>
			</div>
		</div>
	);
};

export default dashboard;
