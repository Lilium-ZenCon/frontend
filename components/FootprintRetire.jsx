'use client';

import { useState } from 'react';
import { flights, cars, publicTransportation } from '../utils/footprintTypes';
import { ethers } from 'ethers';
import OffsetCarbonToken from '../abis/OffSetCarbonToken.json';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CarDynamicNFT from '../abis/CarDynamicNFT.json';
import FlightDynamicNFT from '../abis/FlightDynamicNFT.json';
import PublicTransportationDynamicNFT from '../abis/PublicTransportDynamicNFT.json';

const FootprintRetire = ({ title, typesName, balance, tokenAmount, setTokenAmount, getBalance }) => {
	const [distance, setDistance] = useState(0);
	const [selectedType, setSelectedType] = useState('');

	let types = typesName === 'Car' ? cars : typesName === 'Flight' ? flights : typesName === 'Public transit' ? publicTransportation : null;

	const mint = async () => {
		let NFTaddress = typesName === 'Car' ? '0xd7b40c4B30E95d673899eB5F154b5aDcE9584340' : typesName === 'Flight' ? '0x77e6386c77DBb106a3DEBEE04F0884edF6329cf8' : typesName === 'Public transit' ? '0x6649A75E54d10485788A1CEC066b308cF444E13B' : null;
		let abi = typesName === 'Car' ? CarDynamicNFT.abi : typesName === 'Flight' ? FlightDynamicNFT.abi : typesName === 'Public transit' ? PublicTransportationDynamicNFT.abi : null;
		console.log(abi)
		const ethereum = window.ethereum;
		const provider = new ethers.providers.Web3Provider(ethereum);
		const providerSigner = provider.getSigner();
		let NFTContract = new ethers.Contract(NFTaddress.toLowerCase(), abi, providerSigner);
		let result = await NFTContract.safeMint(providerSigner.getAddress());
		toast.success('Token minted!');
	}

	const retireTokens = async () => {
		const contractAddress = '0x8659f014d788846898101964Cce57D461Af30530';
		const ethereum = window.ethereum;
        const provider = new ethers.providers.Web3Provider(ethereum);
        const providerSigner = provider.getSigner();
		console.log(Number.parseInt(tokenAmount))
        let tokenContract = new ethers.Contract(
            contractAddress,
            OffsetCarbonToken.abi,
            providerSigner
        );
        
        let result = await tokenContract.retire(Number.parseInt(tokenAmount));
        toast.success('Tokens retired!');
		mint()
        getBalance(providerSigner, tokenContract);
    };

	const estimateEmissions = async () => {
		const url =
			typesName === 'Car'
				? 'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?distance=' + distance + '&type=' + selectedType
				: typesName === 'Flight'
				? 'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromFlight?distance=' + distance + '&type=' + selectedType
				: typesName === 'Public transit'
				? 'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromPublicTransit?distance=' + distance + '&type=' + selectedType
				: null;
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '3a7e4801f4msh1b3064ecafd09a8p1ae327jsn40f90d33ae30',
				'X-RapidAPI-Host': 'carbonfootprint1.p.rapidapi.com',
			},
		};
		try {
			console.log(url);
			console.log(options);
			const response = await fetch(url, options);
			const result = await response.json();
			setTokenAmount(Number(result.carbonEquivalent));
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<div className=" mt-4 flex flex-col items-center justify-center text-white">
				<h3 className="font-bold text-white text-3xl pt-3">Offset a {title}</h3>
				<p className="text-sm mb-5">You have {balance} carbon tokens</p>
				<div className="flex items-end justify-between mb-5 w-[80%] gap-5">
					<label className="w-1/2">
						<p className="text-sm">Km traveled</p>
						<input className="rounded-full text-black px-1 w-3/4 h-7" value={distance} onChange={(e) => setDistance(e.target.value)}></input>
					</label>
					<label className="w-1/2">
						<p className="text-sm">{typesName} type</p>
						<select className="text-black rounded-full h-7" value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
							<option disabled value="">
								Select
							</option>
							{types.map((type) => (
								<option key={type} value={type}>
									{type}
								</option>
							))}
						</select>
					</label>
					<button onClick={estimateEmissions} className="px-4 py-1 rounded-full bg-lightgreen text-white h-7">
						Estimate
					</button>
				</div>
				<p className="w-[80%] h-28 rounded-lg text-black font-bold px-2 text-5xl bg-white flex items-center">{tokenAmount.toFixed(2)}</p>
				<button className="bg-dark_grey text-white font-semibold py-5 px-2 rounded-lg cursor-pointer mt-6 w-full" onClick={retireTokens}>
					Retire
				</button>
			</div>
		</div>
	);
};

export default FootprintRetire;
