'use client';
import React, { useState } from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import { CiViewList } from 'react-icons/ci';
import Companies from '@/components/Companies';
import NewCompanies from '@/components/NewCompany';

const admin = () => {
    const [type, setType] = useState('companies');
    const [selectedCompany, setSelectedCompany] = useState(null);

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
            <div className="flex items-center flex-col w-1/5  h-full">
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
                <div className="bg-darkgreen rounded-md w-[75%] overflow-auto scroll-smooth	 h-[430px] text-white px-8 py-8">
                    <h2 className="font-bold mx-2 text-lg my-1">
                        Registered companies
                    </h2>
                    <Companies showModal={showModal} />
                </div>
            )}

            {type === 'newCompany' && (
                <div className="bg-darkgreen rounded-md w-[75%] overflow-auto scroll-smooth	 h-[430px] text-white px-8 py-4">
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

export default admin;
