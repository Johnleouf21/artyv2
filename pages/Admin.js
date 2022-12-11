import { ethers } from 'ethers';
import Contract from '../artifacts/contracts/DefiLotteryV2.sol/DefiLotteryV2.json';
import { useState, useEffect } from "react"
import { ellipseAddress } from "../lib/utilities"

export default function Admin() {

    const [data, setData] = useState({});
    const [data2, setData2] = useState({});
    const [accounts, setAccounts] = useState([]);
    const [ammount, setAmmount] = useState(0);
    const [amount, setAmount] = useState(0);
    const [price, setPrice] = useState(0);
    const [loader, setLoader] = useState(true);
    const [balanceInMatic, setBalanceInMatic] = useState();
    const addressDL = "0x5D927D8d12c2B609860132a259299D1f50c54B96";

    const handleChange = event => {
        setPrice(event.target.value);
  
        console.log('value is:', event.target.value)
    }


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
                
                const totalSupply = await contract.totalSupply();
                const getBalance = await contract.getBalance();
                const lotteryClosed = await contract.lotteryClosed();
                const idLottery = await contract.idLottery();
                const object = {
                    "idLottery": String(idLottery),
                    "lotteryClosed": String(lotteryClosed), 
                    "getBalance": String(getBalance),  
                    "totalSupply": String(totalSupply),
                }
                setData(object);
            }
            catch (err) {
                console.log(err);
            }
        }
    }
    

    const incrementAmmount = () => {
        ammount + 1 <= data.idLottery && setAmmount(ammount + 1);
    }
    const decrementAmmount = () => {
        ammount - 1 >= 0 && setAmmount(ammount - 1)
    }

    const incrementAmount = () => {
        amount + 1 <= 50 && setAmount(amount + 10);
    }
    const decrementAmount = () => {
        amount - 1 >= 1 && setAmount(amount - 10)
    }
    
    async function getWinner() {
        if (typeof window.ethereum !== 'undefined') {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const contract = new ethers.Contract(addressDL, Contract.abi, provider);
            try {
                
                const getWinner = await contract.getWinner(data.idLottery - ammount);
                console.log('winner address is:', getWinner)
                const object2 = {
                    "getWinner": ellipseAddress(getWinner), 
                }
                setData2(object2);
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

    async function changePriceSale() {
        if (typeof window.ethereum !== 'undefined') {
            let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(addressDL, Contract.abi, signer);
            try {
                
                const transaction = await contract.changePriceSale(price);
                await transaction.wait();
                
            }
            catch (err) {
                console.log(err);
            }
        }
    }

    async function changeSupplyLottery() {
        if (typeof window.ethereum !== 'undefined') {
            let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(addressDL, Contract.abi, signer);
            try {
                
                const transaction = await contract.changeSupplyLottery(amount);
                await transaction.wait();
                
            }
            catch (err) {
                console.log(err);
            }
        }
    }

    return(
        <div>
            <div className="btn-marketplace">
                    <ul className="btn-marketplace-ul">
                        <div className="btn-marketplace-ul-text-mint">
                            <h2>Administration</h2>
                            <p className="btn-marketplace-ul-presentationtext-h1-supply">
                            {data.totalSupply} tickets vendus
                            </p>
                            <p className="btn-marketplace-ul-presentationtext-h1-supply">
                            current loterie : {data.idLottery}
                            </p>
                        </div>
                        <div className="btn-marketplace-ul-text-line" />
                        <div className="btn-marketplace-ul-text-amount">
                            <div className="btn-marketplace-ul-text-container">
                            <div className="btn-marketplace-ul-text-container-box"> 
                                <button className="walletBTN3" onClick={toggleLottery}>loterie on/off</button>loterie ferme : {data.lotteryClosed}
                            </div>
                            </div>
                            <div className="btn-marketplace-ul-text-line" />
                        </div>
                        <div className="btn-marketplace-ul-text-amount">
                            <div className="btn-marketplace-ul-text-container">
                            <div className="btn-marketplace-ul-text-container-box"> 
                                <button className="walletBTN3" onClick={requestRandomWords}>tirage du nombre aléatoire</button>
                            </div>
                            </div>
                            <div className="btn-marketplace-ul-text-line" />
                        </div>
                        <div className="btn-marketplace-ul-text-amount">
                            <div className="btn-marketplace-ul-text-container">
                            <div className="btn-marketplace-ul-text-container-box"> 
                                <button className="walletBTN3" onClick={pickWinner}>tirage/recompenses du gagnant</button>
                            </div>
                            </div>
                            <div className="btn-marketplace-ul-text-line" />
                        </div>
                        <div className="btn-marketplace-ul-text-total">
                            <div className="btn-marketplace-ul-text-container">
                            <h3>Cashprize Team</h3>
                            <div className="btn-marketplace-ul-text-container-box" />
                            <p>{(data.getBalance/10**18 * 0.2).toFixed(2)} MATIC</p>
                            </div>
                            <div className="btn-marketplace-ul-text-line" />
                        </div>
                        <div className="btn-marketplace-ul-text-mint">
                            <h2>address winners</h2>
                            <p className="btn-marketplace-ul-presentationtext-h1-supply">
                            loterie number : <button id='btnmarketplace' onClick={decrementAmmount}>+</button>{data.idLottery - ammount}<button id='btnmarketplace' onClick={incrementAmmount}>-</button>
                            </p>
                            <p className="btn-marketplace-ul-presentationtext-h1-supply">
                            address : {data2.getWinner}
                            </p><button className="walletBTN3" onClick={getWinner}>Get address</button>
                            <div className="btn-marketplace-ul-text-line" />
                        </div>
                        <div className="btn-marketplace-ul-text-mint">
                            <h2>tickets par loterie</h2>
                            <p className="btn-marketplace-ul-presentationtext-h1-supply">
                            <button id='btnmarketplace' onClick={incrementAmount}>+</button>{amount}<button id='btnmarketplace' onClick={decrementAmount}>-</button>
                            </p>
                            <button className="walletBTN3" onClick={changeSupplyLottery}>Nouveau nombre de tickets</button>
                            <div className="btn-marketplace-ul-text-line" />
                        </div>
                        <div className="btn-marketplace-ul-text-mint">
                            <h2>change price for</h2>
                            <button className="walletBTN3" onClick={changePriceSale}>CHANGE</button>
                                <input
                                  list="number-ticket"
                                  className="btn-marketplace-ul-li-input"
                                  onChange={handleChange}
                                  min={1}
                                  max={50}
                                  placeholder={price}
                                />
                        </div>
                    </ul>
            </div>       
        </div>
    )
}