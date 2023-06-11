'use client';
import axios from 'axios';
import { useState } from 'react';
import CompaniesFactory from '../abis/CompaniesFactory.json';
import { ethers } from 'ethers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewCompany = () => {

    const [fileImg, setFileImg] = useState(null);
	const [companyName, setCompanyName] = useState('');
	const [companyType, setCompanyType] = useState('');
	const [companyOwner, setCompanyOwner] = useState('');
	const [country, setCountry] = useState('');
	const [price, setPrice] = useState(0);
	const [carbonEmitted, setCarbonEmitted] = useState(0);

	const sendFileToIPFS = async (e) => {
		if (fileImg) {
			try {
				const formData = new FormData();
				formData.append('file', fileImg);

				const resFile = await axios({
					method: 'post',
					url: 'https://api.pinata.cloud/pinning/pinFileToIPFS',
					data: formData,
					headers: {
						pinata_api_key: `30d7a19afe755717bffc`,
						pinata_secret_api_key: `ea8d978a134be01628e7e0e6b2ae33aa97e6a1972e8074c26ef1e2709751c22e`,
						'Content-Type': 'multipart/form-data',
					},
				});

				const ImgHash = `https://ipfs.io/ipfs/${resFile.data.IpfsHash}`;
				return ImgHash;
				//Take a look at your Pinata Pinned section, you will see a new file added to you list.
			} catch (error) {
				console.log('Error sending File to IPFS: ');
				console.log(error);
			}
		}
	};

	const sendData = async () => {
		let URI = await sendFileToIPFS();

		const contractAddress = '0xaCAD05f1538182b63757BA3B8a7d750C97c52390';
		const contractABI = CompaniesFactory.abi;
		const provider = new ethers.providers.Web3Provider(ethereum);
		const signer = provider.getSigner();
		const companyFactory = new ethers.Contract(contractAddress, contractABI, signer);

		const result = await companyFactory.createCompanies(
			'0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada',
			'0xaFc796F03Fb2135579B88E9Ad6C7AE4DA600B199',
			companyName,
			companyType,
			companyOwner,
			country,
			price,
			carbonEmitted,
			URI
		);

		let address = '';
		companyFactory.on('NewCompaniesCreated', (companyAddress) => {
			console.log('companyAddress: ', companyAddress);
			address = companyAddress;
		});

		toast.success('Project registered successfully!', {
			position: 'bottom-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});

		setCarbonEmitted('');
		setCompanyName('');
		setCompanyOwner('');
		setCompanyType('');
		setCountry('');
		setPrice('');
		setFileImg(null);
	};


    return(
        <div>
            <div className='flex justify-center'> 
                <h2 className='font-bold mx-2 text-lg my-1'>Register new company</h2>
                </div>

                <div className='flex flex-wrap justify-around'>
                    <div className='flex flex-col'>
                        <label className=" text-white py-1" onChange={(e) => setCompanyName(e.target.value)} value={companyName}>Company Name:</label>
                        <input className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen" ></input>

                        <label className=" text-white py-1">Company Type:</label>
                        <input className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen" onChange={(e) => setCompanyType(e.target.value)} value={companyType}></input>

                        <label className=" text-white py-1">Company Owner:</label>
                        <input className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen"  onChange={(e) => setCompanyOwner(e.target.value)} value={companyOwner}></input>

                        <label className=" text-white py-1">Logo:</label>
                        <input
                        className="file-input file-input-ghost  file-input-bordered w-72 max-w-xs text-darkgreen bg-white"
                        type="file"
                        value={''}
                        onChange={(e) => setFileImg(e.target.files[0])}
                        placeholder="Upload a file"></input>
                    </div>
                    <div className='flex flex-col'>
                        <label className=" text-white py-1">Country:</label>
                        <input className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen"  onChange={(e) => setCountry(e.target.value)} value={country}></input>

                        <label className=" text-white py-1">Carbon Credits Emitted:</label>
                        <input type="number" className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen"  onChange={(e) => setCarbonEmitted(e.target.value)} value={carbonEmitted}></input>

                        <label className=" text-white py-1">Price:</label>
                        <input type="number" className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen" onChange={(e) => setPrice(e.target.value)} value={price}></input>

                    </div>
                   
                    
                    
                </div>
                <div className='flex justify-center'>
                    <button
                    type="submit"
                    className="text-white focus:outline-none bg-lightgreen font-semibold p-2 rounded-lg w-[85%] my-6 hover:bg-white hover:text-grey border-grey transition duration-300 ease-in-out" onClick={sendData}>
							Register
				    </button>

                </div>
        </div>
    );
};

export default NewCompany;

