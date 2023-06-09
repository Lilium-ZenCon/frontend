"use client";
import axios from "axios";
import { useState } from "react";
import CompaniesFactory from "../../abis/CompaniesFactory.json";
import { ethers } from "ethers";

// Use the api keys by providing the strings directly

const company = () => {
  const [fileImg, setFileImg] = useState(null);
  const [companyName, setCompanyName] = useState(null);
  const [companyType, setCompanyType] = useState(null);
  const [companyOwner, setCompanyOwner] = useState(null);
  const [country, setCountry] = useState(null);

  const sendFileToIPFS = async (e) => {
    if (fileImg) {
      try {
        const formData = new FormData();
        formData.append("file", fileImg);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `30d7a19afe755717bffc`,
            pinata_secret_api_key: `ea8d978a134be01628e7e0e6b2ae33aa97e6a1972e8074c26ef1e2709751c22e`,
            "Content-Type": "multipart/form-data",
          },
        });

        const ImgHash = `https://ipfs.io/ipfs/${resFile.data.IpfsHash}`;
        return ImgHash
        //Take a look at your Pinata Pinned section, you will see a new file added to you list.
      } catch (error) {
        console.log("Error sending File to IPFS: ");
        console.log(error);
      }
    }
  };

  const sendData = async () => {
  


    let URI = await sendFileToIPFS();
    console.log(URI);
    const contractAddress = '0xaCAD05f1538182b63757BA3B8a7d750C97c52390';
    const contractABI = CompaniesFactory.abi;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const companyFactory = new ethers.Contract(contractAddress, contractABI, signer);

    let info = ''
    const result = await companyFactory.createCompanies('0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada', '0xaFc796F03Fb2135579B88E9Ad6C7AE4DA600B199',
    'a', 
    'a',
    '0xfD6bC6A51D75Ce69bb8ba7Fa684eb2DeDa0D37e0',
    'a',
    2,
    50,
    URI);
    console.log(result);
    companyFactory.on("NewCompaniesCreated", (address) => {
    info = {
      address: address
    };
    console.log(JSON.stringify(info));
  });

  companyFactory.companiesLeaderboard('0xCd6906C2d9b75C57755caF7AE3DE88F931d6B8f8').then((result) => {
    console.log(result);
  });
    
  }

  return (
    <div>
      <div className="flex justify-center pb-8">
        <div className="flex justify-center bg-darkgreen w-[40%] rounded-lg py-4">
          <div className="flex flex-col ">
            <div className="flex justify-center">
              <h1 className="text-white font-bold py-4">
                Register new company
              </h1>
            </div>
            <div className="py-4 flex flex-col">
              <label className=" text-white py-1">Company Name:</label>
              <input className="w-72 h-8 rounded-lg px-4 focus:outline-none" onChange={(e) => setCompanyName(e.target.result)}></input>
            </div>
            <div className="py-4 flex flex-col">
              <label className=" text-white py-1">Company Type:</label>
              <input className="w-72 h-8 rounded-lg px-4 focus:outline-none" onChange={(e) => setCompanyType(e.target.result)} ></input>
            </div>
            <div className="py-4 flex flex-col">
              <label className=" text-white py-1">Company Owner:</label>
              <input className="w-72 h-8 rounded-lg px-4 focus:outline-none" onChange={(e) => setCompanyOwner(e.target.result)}></input>
            </div>
            <div className="py-4 flex flex-col">
              <label className=" text-white py-1">Country:</label>
              <input className="w-72 h-8 rounded-lg px-4 focus:outline-none"
              onChange={(e) => setCompanyCountry(e.target.result)}></input>
            </div>
            <div className="py-4 flex flex-col">
              <label className=" text-white py-1">Logo URI:</label>
              <input
                className="file-input file-input-ghost  file-input-bordered w-72 max-w-xs text-darkgreen bg-white"
                type="file"
                onChange={(e) =>setFileImg(e.target.files[0])}
              ></input>
            </div>
            <button
              type="submit"
              className="text-white focus:outline-none bg-grey font-semibold p-2 rounded-lg w-[100%] my-6 hover:bg-white hover:text-grey border-grey transition duration-300 ease-in-out"
              onClick={sendData}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default company;
