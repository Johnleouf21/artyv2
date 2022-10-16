import Head from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import { ethers } from 'ethers';
import Contract from '../artifacts/contracts/DefiLotteryV2.sol/DefiLotteryV2.json';

import { useState, useEffect } from "react"




export default function Admin() {

    const [data, setData] = useState({});
    const [accounts, setAccounts] = useState([]);
    const [loader, setLoader] = useState(true);
    const [balanceInMatic, setBalanceInMatic] = useState();
    const addressDL = "0xd29970D07EB26D9B9cA7298b008FdB30bAD3C68B";


    useEffect(() => {
        getAccounts();
         setLoader(false); 
         fetchData()
       }, [accounts[0]])
 
    async function fetchData() {
        if (typeof window.ethereum !== 'undefined') {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const contract = new ethers.Contract(addressDL, Contract.abi, provider);
            try {
                
                const priceSale = await contract.priceSale();
                const totalSupply = await contract.totalSupply();
                const MAX_SUPPLY = await contract.MAX_SUPPLY();
                const idLottery = await contract.idLottery();
                const object = {"idLottery": String(idLottery), "priceSale": String(priceSale), "totalSupply": String(totalSupply), "MAX_SUPPLY": String(MAX_SUPPLY) }
                setData(object);
            }
            catch (err) {
                console.log(err);
            }
        }
    }

    async function getAccounts() {
        if(typeof window.ethereum !== 'undefined') {
            let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setAccounts(accounts);
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const balance = await provider.getBalance(accounts[0]);
            const balanceInMatic = (balance/10**18).toFixed(2);
            setBalanceInMatic(balanceInMatic);
        }
    }

    async function toggleLottery() {
        if (typeof window.ethereum !== 'undefined') {
            let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(addressDL, Contract.abi, signer);
            try {
                
                const transaction = await contract.toggleLottery();
                await transaction.wait();
                
            }
            catch (err) {
                console.log(err);
            }
        }
    }

    async function requestRandomWords() {
        if (typeof window.ethereum !== 'undefined') {
            let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(addressDL, Contract.abi, signer);
            try {
                
                const transaction = await contract.requestRandomWords();
                await transaction.wait();
                
            }
            catch (err) {
                console.log(err);
            }
        }
    }

    async function pickWinner() {
        if (typeof window.ethereum !== 'undefined') {
            let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(addressDL, Contract.abi, signer);
            try {
                
                const transaction = await contract.pickWinner();
                await transaction.wait();
                
            }
            catch (err) {
                console.log(err);
            }
        }
    }

    async function getWinner() {
        if (typeof window.ethereum !== 'undefined') {
            let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(addressDL, Contract.abi, signer);
            try {
                
                const transaction = await contract.getWinner(0);
                await transaction.wait();
                
            }
            catch (err) {
                console.log(err);
            }
        }
    }



    return(
        <div>
            <span>idLottery{data.idLottery}</span>
            <span>winner{getWinner}</span>
        <button id='btnmarketplace' onClick={toggleLottery}>ouvrir/fermer la lotterie</button>
        <button id='btnmarketplace' onClick={requestRandomWords}>tirage du nombre aléatoire</button>
        <button id='btnmarketplace' onClick={pickWinner}>tirage/recompenses du gagnant</button>
        </div>
    )
}