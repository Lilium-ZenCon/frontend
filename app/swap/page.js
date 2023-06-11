'use client';
import { useState, useEffect } from 'react';
import Company from '../../abis/Company.json';
import companyAddresses from '../../utils/companyAddresses.json';
import { ethers } from 'ethers';
import { toast } from 'react-toastify';

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

		const transaction = {
			to: contractAddress,
			value: ethers.utils.parseEther(matic.toString()), // Amount of MATIC to send
			data: '0x', // You can leave this empty if the receive() function doesn't require additional data
		};

		const tx = await signer.sendTransaction(transaction);
		console.log('Transaction sent:', tx.hash);
		toast('Transaction sent');
		await tx.wait();

		console.log('Transaction mined');
		toast.success('Transaction mined');
	};

	const handleOctChange = async (e) => {
		let value = e.target.value != '' ? e.target.value : 0;
		setOct(value);
		setMatic(value * Number(chosenCompany.price));
	};

	const handleCompanyChange = (e) => {
		const selectedCompanyAddress = e.target.value;
		const selectedCompany = data.find((company) => company.address === selectedCompanyAddress);

		setChosenCompany(selectedCompany);
		setMatic(oct * Number(selectedCompany.price));
	};

	useEffect(() => {
		let fetched = [];
		const getAddresses = async () => {
			for (let i = 0; i < companyAddresses.companies.length; i++) {
				const contractAddress = companyAddresses.companies[i];
				const companyContract = new ethers.Contract(contractAddress, companyABI, signer);
				let companyName = await companyContract.companyName();
				let price = await companyContract.tokenPrice();
				fetched.push({
					name: companyName,
					address: contractAddress,
					price: price / 1000,
				});
			}
			setData(fetched);
		};
		if (typeof window.ethereum !== 'undefined') {
			provider = new ethers.providers.Web3Provider(ethereum);
			signer = provider.getSigner();

			getAddresses();
		}
	});

	return (
		<div>
			<div className="">
				<div className="bg-darkgreen w-5/12 rounded-md ml-40 pt-1">
					<h1 className="font-bold text-white text-lg	m-6 pl-6">Swap</h1>
					<div className=" mt-4 flex flex-col  items-center justify-center">
						<div className="bg-white w-[90%] h-24 rounded-md flex items-center justify-between">
							<input type="number" className="ml-12 focus:outline-none w-64 text-4xl font-bold" placeholder="0" value={oct} onChange={(e) => handleOctChange(e)} />
							<select className="mr-12 bg-grey text-white font-semibold py-2 px-2 rounded-lg cursor-pointer">
								<option>OCT</option>
							</select>
						</div>
					</div>
					<div className="flex flex-col items-center justify-center my-4 ">
						<select className=" bg-grey text-white font-semibold py-2 px-2 rounded-lg cursor-pointer" value={chosenCompany.address} onChange={(e) => handleCompanyChange(e)}>
							{data.map((company) => {
								return (
									<option key={company.address} value={company.address}>
										{company.name} - {company.price} MATIC
									</option>
								);
							})}
						</select>
					</div>

					<div className="flex flex-col  items-center justify-center">
						<div className="bg-white w-[90%] h-24 rounded-md flex items-center justify-between">
							<p className="ml-12 focus:outline-none w-64 text-4xl font-bold" placeholder="0">
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
			</div>
		</div>
	);
};

export default swap;
