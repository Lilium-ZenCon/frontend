"use client"

import { useState, useEffect } from "react";

import LeaderboardCard from "./LeaderboardCard";
import SearchBar from "./SearchBar";
import Table from "./Table";
//import Token from '../../abis/Token.json';
import { ethers } from "ethers";

const Leaderboard = () => {

  useEffect(() => {
    const getLeaderboard = async () => {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      //const keyboardsContract = new ethers.Contract(contractAddress, contractABI, signer);
      //let result = await keyboardsContract.balanceOf('0xfD6bC6A51D75Ce69bb8ba7Fa684eb2DeDa0D37e0')
      //console.log('result ', result.toString())
  }
    if (typeof window.ethereum !== 'undefined') {
      getLeaderboard();
    }
  }, [])


  const data = [
    {
      id: 1,
      company: {
        name: 'Gerdau',
        logo: 'https://media.licdn.com/dms/image/C4D0BAQFOflmqo6o0Zw/company-logo_200_200/0/1657129848248?e=2147483647&v=beta&t=ye07zO-CeE4C1yHlnzZVoRLI-haSpHxwdgOm-zXEUMs',
        type: 'Steel',
      },
      tokens: 100,
      status: 'Active',
    },
    {
      id: 2,
      company: {
        name: 'Company B',
        logo: 'https://example.com/logo2.png',
        type: 'Type B',
      },
      tokens: 200,
      status: 'Inactive',
    },
    // Add more data objects as needed
  ];

  const [filteredData, setFilteredData] = useState(data);


  const leaderboardCards = [
    { company: "Company 1", tokens: 100 },
    { company: "Company 2", tokens: 200 },
    { company: "Company 3", tokens: 300 },
  ];

  return (
    <div className="bg-darkgreen w-full min-h-screen px-10" id="leaderboard">
      <div className="pt-20 text-white w-[40%]">
        <h1 className="text-6xl font-bold">
          Leaderboard
        </h1>
        <p className="text-md mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          sed facilisis diam. Praesent tincidunt lobortis turpis. In vehicula
          posuere iaculis. Nunc a metus eu turpis ultrices tincidunt sed sed
          metus.
        </p>
      </div>
      <div className="flex gap-5 justify-between w-full mt-8">
        {leaderboardCards.slice(0, 3).map((card, index) => {
          return (
            <LeaderboardCard
              key={index}
              place={index + 1}
              company={card.company}
              tokens={card.tokens}
            />
          );
        })}
      </div>
      <div className="py-10">
        <div className="w-full flex items-center justify-between text-white mb-3">
          <h2 className="text-3xl font-semibold">All users</h2>
          <SearchBar data={data} setFilteredData={setFilteredData}/>
        </div>
        <Table data={filteredData}/>
      </div>
    </div>
  );
};

export default Leaderboard;
