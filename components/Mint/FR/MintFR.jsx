import Image from 'next/image';
import Link from 'next/link';
import { ethers } from 'ethers';
import Contract from '../../../artifacts/contracts/DefiLotteryV2.sol/DefiLotteryV2.json';
import WalletConnectProvider from "@walletconnect/web3-provider"
import { providers } from "ethers"
import { useCallback, useState, useEffect, useReducer } from "react"
import WalletLink from "walletlink"
import Web3Modal from "web3modal"
import { getChainData, ellipseAddress } from "../../../lib/utilities"

const INFURA_ID = "460f40a260564ac4a4f4b3fffb032dad"

const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: INFURA_ID // required
      }
    },
    "custom-walletlink": {
      display: {
        logo:
          "https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0",
        name: "Coinbase",
        description: "Connect to Coinbase Wallet (not Coinbase App)"
      },
      options: {
        appName: "Coinbase", // Your app name
        networkUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
        chainId: 1
      },
      package: WalletLink,
      connector: async (_, options) => {
        const { appName, networkUrl, chainId } = options
        const walletLink = new WalletLink({
          appName
        })
        const provider = walletLink.makeWeb3Provider(networkUrl, chainId)
        await provider.enable()
        return provider
      }
    }
  }
  
  let web3Modal
  if (typeof window !== "undefined") {
    web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: false,
      providerOptions // required
    })
  }
  
  const initialState = {
    provider: null,
    web3Provider: null,
    address: null,
    chainId: null
  }
  
  function reducer(state, action) {
    switch (action.type) {
      case "SET_WEB3_PROVIDER":
        return {
          ...state,
          provider: action.provider,
          web3Provider: action.web3Provider,
          address: action.address,
          chainId: action.chainId
        }
      case "SET_ADDRESS":
        return {
          ...state,
          address: action.address
        }
      case "SET_CHAIN_ID":
        return {
          ...state,
          chainId: action.chainId
        }
      case "RESET_WEB3_PROVIDER":
        return initialState
      default:
        throw new Error()
    }
  }

  const networks = {
    polygon: {
      chainId: `0x${Number(137).toString(16)}`,
      chainName: "Polygon Mainnet",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18
      },
      rpcUrls: ["https://polygon-rpc.com"],
      blockExplorerUrls: ["https://polygonscan.com/"]
    },
    mumbai: {
      chainId: `0x${Number(80001).toString(16)}`,
      chainName: "Matic Mumbai Testnet",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18
      },
      rpcUrls: ["https://rpc-mumbai.maticvigil.com"],
      blockExplorerUrls: ["https://mumbai.polygonscan.com/"]
    },
  }
  
  const changeNetwork = async ({ networkName, setError }) => {
    try {
      if (!window.ethereum) throw new Error("No crypto wallet found");
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${Number(80001).toString(16)}` }],
      });
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                ...networks[networkName]
              }
            ],
          });
        } catch (addError) {
          setError(err.message);
        }
      }
    }
  }

export default function MintFR() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { provider, address, chainId } = state
    const [data, setData] = useState({});
    const [accounts, setAccounts] = useState([]);
    const [ammount, setAmmount] = useState(1);
    const [loader, setLoader] = useState(true);
    const [balanceInMatic, setBalanceInMatic] = useState();
    const addressDL = "0xb08D0552A23Dae5AD2f356147F758629DA0c1a16";
    const [error, setError] = useState();

    const handleChange = event => {
      setAmmount(event.target.value);

      console.log('value is:', event.target.value)
    }


    const handleNetworkSwitch = async (networkName) => {
      setError();
      await changeNetwork({ networkName, setError });
      
    };
  
    const networkChanged = (chainId) => {
      console.log({ chainId });
    };
  
    useEffect(() => {
      window.ethereum.on("chainChanged", networkChanged);
  
      return () => {
        window.ethereum.removeListener("chainChanged", networkChanged);
      };
    }, []);
  

  
    const connect = useCallback(async function() {
      // This is the initial `provider` that is returned when
      // using web3Modal to connect. Can be MetaMask or WalletConnect.
      const provider = await web3Modal.connect()
  
      // We plug the initial `provider` into ethers.js and get back
      // a Web3Provider. This will add on methods from ethers.js and
      // event listeners such as `.on()` will be different.
      const web3Provider = new providers.Web3Provider(provider)
  
      const signer = web3Provider.getSigner()
      const address = await signer.getAddress()
      console.log("SET ADDRESS FROM CONNECT", address)
      const network = await web3Provider.getNetwork()
  
      dispatch({
        type: "SET_WEB3_PROVIDER",
        provider,
        web3Provider,
        address,
        chainId: network.chainId
      })
    }, [])
  
    const disconnect = useCallback(
      async function() {
        await web3Modal.clearCachedProvider()
        if (provider?.disconnect && typeof provider.disconnect === "function") {
          await provider.disconnect()
        }
        dispatch({
          type: "RESET_WEB3_PROVIDER"
        })
      },
      [provider]
    )
  
    // Auto connect to the cached provider
    useEffect(() => {
      console.log("web3Modal.cachedProvider", web3Modal.cachedProvider)
      if (web3Modal.cachedProvider) {
        connect()
      }
    }, [connect])
  
    // A `provider` should come with EIP-1193 events. We'll listen for those events
    // here so that when a user switches accounts or networks, we can update the
    // local React state with that new information.
    useEffect(() => {
      if (provider?.on) {
        const handleAccountsChanged = accounts => {
          // eslint-disable-next-line no-console
          console.log("accountsChanged from event", accounts)
          dispatch({
            type: "SET_ADDRESS",
            address: accounts[0]
          })
        }
  
        // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes
        const handleChainChanged = _hexChainId => {
          window.location.reload()
        }
  
        const handleDisconnect = error => {
          // eslint-disable-next-line no-console
          console.log("disconnect", error)
          disconnect()
        }
  
        provider.on("accountsChanged", handleAccountsChanged)
        provider.on("chainChanged", handleChainChanged)
        provider.on("disconnect", handleDisconnect)
  
        // Subscription Cleanup
        return () => {
          if (provider.removeListener) {
            provider.removeListener("accountsChanged", handleAccountsChanged)
            provider.removeListener("chainChanged", handleChainChanged)
            provider.removeListener("disconnect", handleDisconnect)
          }
        }
      }
    }, [provider, disconnect])
  
    const chainData = getChainData(chainId)
  
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
                  const supplyLottery = await contract.supplyLottery();
                  const getBalance = await contract.getBalance();
                  const idLottery = await contract.idLottery();
                  const alreadySupply = await contract.alreadySupply();
                  const lotteryClosed = await contract.lotteryClosed();
                  const object = {
                    "getBalance": String(getBalance), 
                    "idLottery": String(idLottery),
                    "priceSale": String(priceSale), 
                    "totalSupply": String(totalSupply), 
                    "alreadySupply": String(alreadySupply),
                    "lotteryClosed": String(lotteryClosed),
                    "supplyLottery": String(supplyLottery)
                  }
                  setData(object);
              }
              catch (err) {
                  console.log(err);
              }
          }
      }
  
      async function enter() {
          if (typeof window.ethereum !== 'undefined') {
              let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
              const provider = new ethers.providers.Web3Provider(window.ethereum);
              const signer = provider.getSigner();
              const contract = new ethers.Contract(addressDL, Contract.abi, signer);
              try {
                  let overrides = {
                      from: accounts[0],
                      value: (data.priceSale * ammount).toString()
                  }
                  const transaction = await contract.enter(accounts[0], ammount, overrides);
                  await transaction.wait();
                  
              }
              catch (err) {
                  console.log(err);
              }
          }
      }
  
  
      const incrementAmmount = () => {
          ammount + 1 <= 50 && setAmmount(ammount + 1);
      }
      const decrementAmmount = () => {
          ammount - 1 >= 1 && setAmmount(ammount - 1)
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

    async function connecter() {
      await handleNetworkSwitch("mumbai");
      await connect()

    }
    
      return (
                <><header>
                <nav>
                  <ul>
                    <li id="logo">
                      <Link href="/">
                      <a>
                        <i className="fa-solid fa-ticket" /> DeFi Lottery
                      </a>
                      </Link>
                    </li>
                    <div className="iconsnavbartwitter">
                      <a
                        className="logotwitter"
                        href="https://twitter.com/DeFi_Lottery"
                        title="Accédez à notre twitter">
                        <i className="fa-brands fa-twitter" />
                      </a>
                    </div>
                    <div className="iconsnavbardiscord">
                      <a
                        className="logodiscord"
                        href="https://discord.gg/pYHEtRy76K"
                        title="Accédez à notre discord communautaire officiel">
                        <i className="fa-brands fa-discord" />
                      </a>
                    </div>
                    <li id="whitepaper">
                      <a href="#" title="Accédez au White Paper">
                        White Paper
                      </a>
                    </li>
                    <li id="apropos">
                      <a href="FRindex.html#about" title="Pour mieux comprendre notre projet">
                        A propos
                      </a>
                    </li><div className="buttons-container">
                    {provider ? (
                    <button className="walletBTN" onClick={disconnect}>
                    {ellipseAddress(address)}</button>
                    ) : (
                      <button className="walletBTN2" onClick={connecter}>
                      Connect
                    </button>
                  )}</div>
                  </ul>
                </nav>
              </header>
              <section className="fontImg1">
                <div className="banner-information"></div>
                <div className="marketplace">
                  <div className="marketplace-photo-nft">
                    <div className="marketplace-photo-nft-border">
                      <Image
                        className="marketplace-photo-nft-border-1"
                        src="/image/discordpdp.png"
                        alt="bob"
                        width={600}
                        height={600}
                      />
                    </div>
                  </div>
                  <div className="btn-marketplace">
                    <ul className="btn-marketplace-ul">
                      <div className="btn-marketplace-ul-text-mint">
                        <h2>Mint Ticket</h2>
                        <p className="btn-marketplace-ul-presentationtext-h1-supply">
                        {(data.supplyLottery -(-data.alreadySupply)) - data.totalSupply} tickets NFT&apos;s restants
                        </p>
                        <p className="btn-marketplace-ul-presentationtext-h1-supply">
                        Loterie numero : {data.idLottery}
                        </p>
                        <p className="btn-marketplace-ul-presentationtext-h1-supply">
                        Statut (true = ferme, false = ouverte) : {data.lotteryClosed}
                        </p>
                      </div>
                      <div className="btn-marketplace-ul-text-balance">
                        <div className="btn-marketplace-ul-text-container">
                          <h3>Solde</h3>
                          <div className="btn-marketplace-ul-text-void" />
                          {address && (<p>{balanceInMatic} {chainData?.chain}</p>)}
                        </div>
                        <div className="btn-marketplace-ul-text-line" />
                      </div>
                      <div className="btn-marketplace-ul-text-amount">
                        <div className="btn-marketplace-ul-text-container">
                          <div className="btn-marketplace-ul-text-container-box"> 
                            <h3>Montant</h3>
                            <p>(max 50)</p>
                          </div>
                          <div id="btn-markeplace-ul-quantity-container">
                            <div className="btn-markeplace-ul-quantity">
                            <button className="btn-markeplace-ul-quantity-l" onClick={decrementAmmount}>-</button>
                            </div>
                            <div className="btn-marketplace-ul-quantity-li-datalist">
                              <form action="/action_page.php">
                                <input
                                  list="number-ticket"
                                  className="btn-marketplace-ul-li-input"
                                  onChange={handleChange}
                                  min={1}
                                  max={50}
                                  placeholder={ammount}
                                />
                              </form>
                            </div>
                            <div className="btn-markeplace-ul-quantity">
                            <button className="btn-markeplace-ul-quantity-r" onClick={incrementAmmount}>+</button>
                            </div>
                          </div>
                        </div>
                        <div className="btn-marketplace-ul-text-line" />
                      </div>
                      <div className="btn-marketplace-ul-text-total">
                        <div className="btn-marketplace-ul-text-container">
                          <h3>Total</h3>
                          <div className="btn-marketplace-ul-text-void" />
                          <p>{(data.priceSale/10**18 * ammount).toFixed(2)} MATIC</p>
                        </div>
                        <div className="btn-marketplace-ul-text-line" />
                      </div>
                      <div className="btn-marketplace-mint">
                        <button className="btn-mint" onClick={enter} >Acheter</button> 
                      </div>
                      <div className="btn-marketplace-ul-text-total">
                        <div className="btn-marketplace-ul-text-container">
                          <h3>Cashprize</h3>
                          <div className="btn-marketplace-ul-text-void" />
                          <p>{(data.getBalance/10**18 * 0.8).toFixed(2)} MATIC</p>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
              </section></>
    )
}
