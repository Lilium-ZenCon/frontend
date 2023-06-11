'use client';
import React, { useState, useEffect } from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import { CiViewList } from 'react-icons/ci';
import Companies from '@/components/Companies';
import NewCompanies from '@/components/NewCompany';
import companyAddresses from '../../utils/companyAddresses.json';
import { ethers } from 'ethers';
import Company from '../../abis/Company.json';

const Admin = () => {
    const [type, setType] = useState('companies');
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [companies, setCompanies] = useState([]);
    const [loadingCompanies, setLoadingCompanies] = useState(true);

    useEffect(() => {
        const companyABI = Company.abi;
        let companies = [];

        const getCompanies = async () => {
            try {
                const provider = new ethers.providers.Web3Provider(
                    window.ethereum
                );
                const signer = provider.getSigner();

                setLoadingCompanies(true); // Set loading state when fetching companies

                for (let i = 0; i < companyAddresses.companies.length; i++) {
                    const contractAddress = companyAddresses.companies[i];
                    const companyContract = new ethers.Contract(
                        contractAddress,
                        companyABI,
                        signer
                    );

                    let companyName = await companyContract.companyName();
                    let companyType = await companyContract.companyType();
                    let companyEmittedTokens =
                        await companyContract.carbonCreditsEmmiteds();
                    let companyAllowance = await companyContract.allowance();
                    let URI = await companyContract.logoURI();
                    let companyOwner = await companyContract.companyOwner();
                    let companyCountry = await companyContract.country();
                    let tokenPrice = await companyContract.tokenPrice();

                    companies.push({
                        name: companyName,
                        emittedTokens: Number(companyEmittedTokens),
                        status:
                            Number(companyAllowance) > 0
                                ? 'Active'
                                : 'Inactive',
                        image: URI,
                        type: companyType,
                        currentAllowance: Number(companyAllowance),
                        owner: companyOwner,
                        issuesDetected: false,
                        country: companyCountry,
                        tokenPrice: tokenPrice
                    });
                }

                companies.sort((a, b) => b.emittedTokens - a.emittedTokens);

                setCompanies(companies);
                setLoadingCompanies(false); // Set loading state to false after fetching companies
            } catch (error) {
                console.error(
                    'An error occurred while fetching companies.',
                    error
                );
                setLoadingCompanies(false); // Set loading state to false in case of error
            }
        };

        if (typeof window.ethereum !== 'undefined') {
            getCompanies();
        }
    }, []);

    const showModal = (company) => {
        setSelectedCompany(company);
        window.company_modal.showModal();
    };

    const closeModal = () => {
        setSelectedCompany(null);
        window.company_modal.close();
    };

    return (
        <div className="flex justify-between mx-8 items-center">
            <div className="flex items-center flex-col w-1/5 h-full">
                <button
                    className="w-full bg-lightgreen h-32 rounded-lg shadow-xl my-4 flex flex-col justify-center items-center hover:bg-darkgreen transition ease-in-out duration-1"
                    onClick={() => setType('companies')}
                >
                    <CiViewList className="text-white" size={30} />
                    <p className="font-bold text-white mt-2">All companies</p>
                </button>
                <button
                    className="w-full bg-lightgreen h-32 rounded-lg shadow-xl my-4 flex flex-col justify-center items-center hover:bg-darkgreen transition ease-in-out duration-100"
                    onClick={() => setType('newCompany')}
                >
                    <CiCirclePlus className="text-white" size={30} />
                    <p className="font-bold text-white mt-2">
                        Register new company
                    </p>
                </button>
            </div>
            {type === 'companies' && (
                <div className="bg-darkgreen rounded-md w-[75%] overflow-auto scroll-smooth h-[530px] text-white px-8 py-8">
                    <h2 className="font-bold mx-2 text-lg my-1">
                        Registered companies
                    </h2>
                    {loadingCompanies ? (
                        <p>Loading companies...</p> // Loading indicator within the container
                    ) : (
                        <Companies
                            showModal={showModal}
                            companies={companies}
                        />
                    )}
                </div>
            )}

            {type === 'newCompany' && (
                <div className="bg-darkgreen rounded-md w-[75%] overflow-auto scroll-smooth h-[430px] text-white px-8 py-4">
                    <NewCompanies />
                </div>
            )}

            <dialog id="company_modal" className="modal">
                {selectedCompany && (
                    <form method="dialog" className="modal-box">
                        <button
                            htmlFor="my-modal-3"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={closeModal}
                        >
                            ✕
                        </button>
                        <h3 className="text-lg">
                            <b>Company: </b>
                            {selectedCompany.name}
                        </h3>
                        <div className="flex flex-col my-4">
                            <p className="mx-1">
                                <b>Company Type:</b> {selectedCompany.type}
                            </p>
                            <p className="mx-1">
                                <b> Owner: </b> {selectedCompany.owner}
                            </p>
                            <p className="mx-1">
                                <b>Status:</b> {selectedCompany.status}
                            </p>
                            <p className="mx-1">
                                <b>Issues detected:</b>{' '}
                                {selectedCompany.issuesDetected ? 'Yes' : 'No'}
                            </p>
                            <p className="mx-1">
                                <b>Country: </b> {selectedCompany.country}
                            </p>
                            <p className="mx-1">
                                <b>Token Price: </b>{' '}
                                {selectedCompany.tokenPrice}
                            </p>
                            <p className="mx-1">
                                <b>Carbon Credits Emitted: </b>{' '}
                                {selectedCompany.carbonCreditsEmitted}
                            </p>
                            <p className="mx-1">
                                <b> Current Allowance: </b>{' '}
                                {selectedCompany.currentAllowance}
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-lightgreen text-white px-2 py-2 rounded-md hover:bg-darkgreen transition duration-300 ease-in-out">
                                Revoke
                            </button>
                        </div>
                    </form>
                )}
            </dialog>
        </div>
    );
};

export default Admin;
