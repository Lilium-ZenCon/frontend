'use client'
import { ethers } from "ethers";
import { useEffect } from 'react';
import Token from '../../abis/Token.json';

const page = () => {
  const contractAddress = '0x820cBd25Da806EDb97B944aA82F745dCb2357AFB';
  const contractABI = Token.abi;

  useEffect(() => {
    const getKeyboards = async () => {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const keyboardsContract = new ethers.Contract(contractAddress, contractABI, signer);
      let result = await keyboardsContract.balanceOf('0xfD6bC6A51D75Ce69bb8ba7Fa684eb2DeDa0D37e0')
      console.log('result ', result.toString())
  }
    if (typeof window.ethereum !== 'undefined') {
      getKeyboards();
    }
  }, [])
  return (
    <div>
        
    </div>
  )
}

export default page