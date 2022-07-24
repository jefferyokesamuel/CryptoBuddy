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


console.log({
    provider,
    signer,
    transactionContract
    });
}
export const TransactionProvider = ({children}) => {
    const [currentAccount, setCurrentAccount] = useState('');
    const [formData, setFormData] = useState({addressTo: '', amount: '', keyword: '', message: '' });

    const handleChange = (e, name) => {
        setFormData((prevState) = ({ ...prevState, [name]: e.target.value }));
    }
  
    const checkIfWalletIsConnected = async () => { 

    try {
        
     if(!ethereum) return alert("Wallet is not connected")

        const accounts = await ethereum.request({ method: 'eth_accounts'})

        if(accounts.length) {
            setConnectedAccount(accounts[0])
        } else {
            console.log("no accounts found")
        }
    } catch (error) {
        console.log(error)

        throw new Error("No Ethereum object")
    }
        
       
    }

    const connectWallet = async () => {
        try {
            if(!ethereum) return alert("Wallet is not connected")
            const accounts = await ethereum.request({ method: 'eth_requestAccounts'})

            setCurrentAccount(accounts[0])
        } catch (error) {
            console.log(error)

            throw new Error("No Ethereum object")
        }
    }

    const sendTransaction = async () => {
        try {
            if(!ethereum) return alert("Wallet is not connected")
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        checkIfWalletIsConnected()
    }, []);


    return (
        <TransactionContext.Provider value={{currentAccount}}>   
            {children}
        </TransactionContext.Provider>
    );
}
