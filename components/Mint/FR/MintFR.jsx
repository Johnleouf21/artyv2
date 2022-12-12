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
    const addressDL = "0x5D927D8d12c2B609860132a259299D1f50c54B96";
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
            <div className='container-scroll'>
              <header>
                <nav>
                  <ul>
                    <div className="sectionnavbar">
                      <div className="divlogo">
                        <li id="logo">
                          <Link href="/">
                          <a>
                            <i className="fa-solid fa-ticket" /> DeFi Lottery
                          </a>
                          </Link>
                        </li>
                      </div>
                      <div className="divnavbar">
                        <div className="navbaricons">
                            <div className="iconsnavbartwitter">
                              <a
                                className="logotwitter"
                                target="_blank"
                                href="https://twitter.com/DeFi_Lottery"
                                title="Accédez à notre twitter">
                                <i className="fa-brands fa-twitter" />
                              </a>
                            </div>
                            <div className="iconsnavbardiscord">
                              <a
                                target="_blank"
                                className="logodiscord"
                                href="https://discord.gg/pYHEtRy76K"
                                title="Accédez à notre discord communautaire officiel">
                                <i className="fa-brands fa-discord" />
                              </a>
                            </div>
                          </div>
                            <li id="whitepaper">
                              <a href="https://decentralized-lottery.gitbook.io/defi-lottery/" title="Accédez au White Paper" target="_blank">
                                White Paper
                              </a>
                            </li>
                            <li id="apropos">
                              <a href="/#splitchange" title="Pour mieux comprendre notre projet">
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
                        </div>
                      </div>
                    </ul>
                  </nav>
                </header>
                <section>
                  {provider ? (
                    
                  
                    <div className="mint-page">
                      <div className="mint-page-container">
                        <div className="mint-pres">
                          <div className="mint-pres-container">
                            <Image
                              src="/image/discordpdp.png"
                              alt="bob"
                              width={1200}
                              height={300}
                            />
                          </div>
                        </div>
                        <div className="mint-zone">
                          <div className="mint-zone-container">
                            <div className="mint-section-text0">
                              <div className="mint-section-text1">
                                <h2>MINT TICKET</h2>
                              </div>
                              <div className="mint-section-text2">
                                <h3>{(data.supplyLottery -(-data.alreadySupply)) - data.totalSupply} tickets NFT&apos;s restants</h3>
                                <h3>Sale ends 24/12/2022 at 22h GMT+1</h3>
                              </div>
                            </div>
                            <div className="mint-section">
                              <div className="mint-container0">
                                <div className="mint-section0">
                                  <h3>amount of tickets</h3>
                                </div>
                                <div className="mint-section1">
                                  <div className="mint-section1-menu">
                                    <a onClick={decrementAmmount}>-</a>
                                    <a onClick={incrementAmmount}>+</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mint-section">
                              <div className="mint-container0">
                                <div className="mint-section0">
                                  <h3>Total</h3>
                                </div>
                                <div className="mint-section1">
                                  <div className="mint-section2-menu">
                                    <h2>{ammount}</h2>
                                  </div>
                                  <div className="mint-section2-menu">
                                    <h2>{(data.priceSale/10**18 * ammount).toFixed(2)} MATIC</h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mint-section-btn">
                              <div className="mint-btn-container">
                                <button className="btn-mint" onClick={enter}>Mint</button>
                                <div className="mint-btn-section">
                                  <h4>Solde : {address && (<p>{balanceInMatic} {chainData?.chain}</p>)}</h4>
                                </div>
                                <div className="mint-btn-section">
                                  <h4>Cashprize : <p>{(data.getBalance/10**18 * 0.8).toFixed(2)} {chainData?.chain}</p></h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    ) : (
                      <div className="mint-page">
                      <div className="mint-page-container">
                        <div className="mint-pres">
                          <div className="mint-pres-container">
                            <Image
                              src="/image/discordpdp.png"
                              alt="bob"
                              width={1200}
                              height={300}
                            />
                          </div>
                        </div>
                        <div className="mint-zone">
                          <div className="mint-zone-container">
                            <div className="mint-section-text0">
                              <div className="mint-section-text1">
                                <h2>PLEASE CONNECT</h2>
                              </div>
                              <div className="mint-section-text2">
                                <h3>NaN tickets NFT&apos;s restants</h3>
                                <h3>Sale ends (day) (month) 2022 at (hour) GMT+1</h3>
                              </div>
                            </div>
                            <div className="mint-section">
                              <div className="mint-container0">
                                <div className="mint-section0">
                                  <h3>amount of tickets</h3>
                                </div>
                                <div className="mint-section1">
                                  <div className="mint-section1-menu">
                                    <a onClick={decrementAmmount}>-</a>
                                    <a onClick={incrementAmmount}>+</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mint-section">
                              <div className="mint-container0">
                                <div className="mint-section0">
                                  <h3>Total</h3>
                                </div>
                                <div className="mint-section1">
                                  <div className="mint-section2-menu">
                                    <h2>NaN</h2>
                                  </div>
                                  <div className="mint-section2-menu">
                                    <h2>NaN MATIC</h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mint-section-btn">
                              <div className="mint-btn-container">
                                <button className="btn-mint">Please Connect</button>
                                <div className="mint-btn-section">
                                  <h4>Solde : <p>NaN</p></h4>
                                </div>
                                <div className="mint-btn-section">
                                  <h4>Cashprize : <p>NaN</p></h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </section>
            </div>
    )
}
