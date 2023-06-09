"use client";
import axios from "axios";
import { useState } from "react";

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

        const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
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
    //const contractAddress = '0x820cBd25Da806EDb97B944aA82F745dCb2357AFB';
    //const contractABI = Token.abi;
    // const provider = new ethers.providers.Web3Provider(ethereum);
    //   const signer = provider.getSigner();
    //   const companyFactory = new ethers.Contract(contractAddress, contractABI, signer);
    
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
