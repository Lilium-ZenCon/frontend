'use client';

import { useState, useEffect } from 'react';

import LeaderboardCard from './LeaderboardCard';
import SearchBar from './SearchBar';
import Table from './Table';
import { ethers } from 'ethers';
import Company from '../abis/Company.json';
import Register from '../abis/Register.json';

const Leaderboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const companyABI = Company.abi;
        let fetched = [];

        const getLeaderboard = async () => {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            const registerAddress = '0x80AE69ffE6120ceBdFF1212BC5eF957EB2c0cE5c'
            const registerAbi = Register.abi;
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
                let companyType = await companyContract.companyType();
                let companyTokens =
                    await companyContract.carbonCreditsEmmiteds();
                let companyStatus = await companyContract.allowance();
                let URI = await companyContract.logoURI();

                fetched.push({
                    id: i,
                    company: {
                        name: companyName,
                        logo: URI,
                        type: companyType
                    },
                    tokens: companyTokens,
                    status: Number(companyStatus) > 0 ? 'Active' : 'Inactive'
                });
            }

            fetched.sort((a, b) => b.tokens - a.tokens);

            setData(fetched);

            console.log(data)
        };

        if (typeof window.ethereum !== 'undefined') {
            getLeaderboard();
        }
    });

    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        setFilteredData(data); // Update the filtered data when the data state changes
    }, [data]);

    const leaderboardCards = data.slice(0, 3);
    return (
        <div
            className="bg-darkgreen w-full min-h-screen px-10"
            id="leaderboard"
        >
            <div className="pt-20 text-white w-[40%]">
                <h1 className="text-6xl font-bold">Leaderboard</h1>
                <p className="text-md mt-5">
                    Welcome to our Carbon Credits Leaderboard! This leaderboard
                    showcases projects that have excelled in generating carbon
                    credits and contributing to the fight against climate
                    change. These projects play a vital role in reducing
                    greenhouse gas emissions and promoting sustainability on a
                    global scale.
                </p>
            </div>
            <div className="flex gap-5 justify-between w-full mt-8">
                {leaderboardCards.slice(0, 3).map((card, index) => {
                    return (
                        <LeaderboardCard
                            key={index}
                            place={index + 1}
                            company={card.company.name}
                            tokens={card.tokens.toString()}
                        />
                    );
                })}
            </div>
            <div className="py-10">
                <div className="w-full flex items-center justify-between text-white mb-3">
                    <h2 className="text-3xl font-semibold">All projects</h2>
                    <SearchBar data={data} setFilteredData={setFilteredData} />
                </div>
                <Table data={filteredData} />
            </div>
        </div>
    );
};

export default Leaderboard;
