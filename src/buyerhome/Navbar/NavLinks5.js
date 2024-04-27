import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { ethers } from 'ethers';
import farmABI from '../../abis/farmABI.json';

const NavLinks = () => {
    const farmContractAddress = "0x3ACd479d5e0A7BF2d11c84690277a9a92795f06d";

    const [currentAccount, setCurrentAccount] = useState("");

    const connectWallet = async () => {
        const { ethereum } = window;
        if (!ethereum) {
            alert("Please install MetaMask!");
            return;
        }

        try {
            const accounts = await ethereum.request({ method: "eth_requestAccounts" });
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.error("Failed to connect wallet", error);
        }
    };

    const checkIfWalletIsConnected = async () => {
        const { ethereum } = window;
        if (!ethereum) {
            console.log("MetaMask is not installed!");
            return;
        }

        const accounts = await ethereum.request({ method: "eth_accounts" });
        if (accounts.length > 0) {
            setCurrentAccount(accounts[0]);
        }
    };

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    const getReward = async () => {
        const { ethereum } = window;
        if (!ethereum) {
            console.log("Ethereum object doesn't exist!");
            return;
        }

        try {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(farmContractAddress, farmABI, signer);
            // Interact with contract here, e.g., `await contract.newSignUp();`
        } catch (error) {
            console.error("Error getting reward:", error);
        }
    };

    return (
        <>
            <HashLink className="nav-link" smooth to="/#about">About</HashLink>
            <HashLink className="nav-link" smooth to="/#services">Services</HashLink>
            <button onClick={getReward} className="button-reward">Get Rewards</button>
            {currentAccount ? (
                <span className="account-display">{currentAccount}</span>
            ) : (
                <button onClick={connectWallet} className="button-connect">Connect Wallet</button>
            )}
        </>
    );
};

export default NavLinks;
