import { createContext, useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import Company from '../abis/Company.json';	

// Create a context for your contract
const ContractContext = createContext();

// Define a provider component for your contract context
export const ContractContextProvider = ({ children }) => {
    const [contract, setContract] = useState(null);
    const [provider, setProvider] = useState(null);
    const [contractBalance, setContractBalance] = useState(0);

    const fetchContractBalance = async () => {
        if (contract) {
            await getContractBalance();
        }
    };


    useEffect(() => {
        async function initContract() {
            try {
                const ethProvider = new ethers.providers.Web3Provider(window.ethereum);
    
                // Create a signer from the connected wallet
                const signer = ethProvider.getSigner();
    
                // Define the contract address and ABI
                const contractAddress = '0xD5a08Cc53bE0205323CA83C66C22A13E09b93130';
                const contractABI = Company.abi; // Replace with your contract's ABI
    
                // Initialize the contract instance with the signer
                const contractInstance = new ethers.Contract(contractAddress, contractABI, signer);
    
                setProvider(ethProvider);
                setContract(contractInstance);
            } catch (error) {
                console.error('Error initializing contract:', error);
            }
        }
    
        async function fetchData() {
            if (window.ethereum) {
                await initContract();
                await fetchContractBalance();
            }
        }
    
        fetchData();
    }, [contract]);

    const getContractBalance = async () => {
        try {
            const balance = await provider.getBalance(contract.address);
            setContractBalance( ethers.utils.formatEther(balance));
        } catch (error) {
            console.error('Error fetching contract balance:', error);
        }
    };
    // Define other contract-related functions

    const contextValue = {
        contract,
        provider,
        contractBalance,
        // Other contract-related functions or values
    };

    return <ContractContext.Provider value={contextValue}>{children}</ContractContext.Provider>;
};

// Create a custom hook to use the context
export const useContract = () => {
    return useContext(ContractContext);
};