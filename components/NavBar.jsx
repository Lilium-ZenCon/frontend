'use client';
import Image from 'next/image';
import logo from '../public/assets/icon.svg';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useMetaMask } from '../contexts/WalletContext';
import { useContract } from '../contexts/ContractContext';

const NavBar = () => {
    const { account, connectMetaMask } = useMetaMask();

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const { contractBalance } = useContract();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="flex justify-between font-semibold text-grey items-center my-6 mx-10 font-montserrat">
            <span className="flex justify-between items-center gap-14">
                <Image src={logo} alt="logo" width="50" height="50" />
                <li className="list-none gap-14 flex items-center scroll-smooth	">
                    <Link
                        className="hover:bg-hover_grey rounded-lg py-2 px-4 transition duration-300 ease-in-out"
                        href="/#hero"
                    >
                        Home
                    </Link>
                    <Link
                        className="hover:bg-hover_grey rounded-lg py-2 px-4 transition duration-300 ease-in-out"
                        href="/#leaderboard"
                    >
                        Leaderboard
                    </Link>
                    <Link
                        className="hover:bg-hover_grey rounded-lg py-2 px-4 transition duration-300 ease-in-out"
                        href="/#how-it-works"
                    >
                        Add company
                    </Link>
                    <Link
                        className="hover:bg-hover_grey rounded-lg py-2 px-4 transition duration-300 ease-in-out"
                        href="/#how-it-works"
                    >
                        IoT Simulation
                    </Link>
                </li>
            </span>
            <div className="relative">
                {account ? (
                    <>
                        <button
                            type="button"
                            className="hover:bg-hover_grey px-4 py-2 rounded-full border-[1px] border-grey transition duration-300 ease-in-out flex"
                            onClick={toggleDropdown}
                        >
                            {account.substring(0, 6) +
                                '...' +
                                account.substring(38, 42)}
                            <div className="flex items-center ml-2">
                                <span>{contractBalance} ETH</span>
                                {/* Add an icon for representing the balance */}
                                <img
                                    src="/path-to-your-icon.png"
                                    alt="Balance Icon"
                                    width="24"
                                    height="24"
                                />
                            </div>
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-full p-2">
                                {/* Add your dropdown content and links here */}
                                <ul>
                                    <li>
                                        <Link href="/">Withdraw</Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </>
                ) : (
                    <button
                        type="button"
                        className="hover:bg-hover_grey px-4 py-2 rounded-full border-[1px] border-grey transition duration-300 ease-in-out"
                        onClick={connectMetaMask}
                    >
                        Connect wallet
                    </button>
                )}
            </div>
        </div>
    );
};

export default NavBar;
