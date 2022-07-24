import React, {useEffect, useState} from "react";
import {ethers} from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

window.ethereum

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer)


console.log(
    provider,
    signer,
    transactionContract)
}
export const TransactionProvider = ({children}) => {
  
const checkWalletConnected = async () => { 
    if(!ethereum) return alert("Wallet is not connected")

    const accounts = await ethereum.request({ method: 'eth_accounts'})

    console.log(accounts)
}

const connectWallet = async () => {}

useEffect(() => {
    checkWalletConnected()
}, [])
return (
    <TransactionContext.Provider value={{ value: 'test'}}>   
        {children}
    </TransactionContext.Provider>
)
}