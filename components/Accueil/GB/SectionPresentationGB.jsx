import { ethers } from 'ethers';
import Contract from '../../../artifacts/contracts/DefiLotteryV2.sol/DefiLotteryV2.json';
import { useState, useEffect } from "react"
import { ellipseAddress } from "../../../lib/utilities"
import CountdownTimer from '../../CountdownTimer';

export default function SectionPresentationGB() {

  const [data, setData] = useState({});
  const [accounts, setAccounts] = useState([]);
  const [loader, setLoader] = useState(true);
  const addressDL = "0x5D927D8d12c2B609860132a259299D1f50c54B96";
  const targetTimestamp = 1671062239;
  const timeLeft = targetTimestamp * 1000;

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
            const cashprize = await contract.cashprize();
            const supplyLottery = await contract.supplyLottery();
            const idLottery = await contract.idLottery();
            const alreadySupply = await contract.alreadySupply();
            const object = {
              "idLottery": String(idLottery),
              "cashprize": String(cashprize), 
              "totalSupply": String(totalSupply), 
              "alreadySupply": String(alreadySupply),
              "supplyLottery": String(supplyLottery)
              }
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
    }
  }


    return(
      <>
      <div className="about">
        <div className="about-textcontainer">
          <div className="leading-text">ABOUT</div>
          <h2>
            We want to change the lottery system to make it safer and more
            decentralized.
          </h2>
          <p>DeFi Lottery is a decentralized lottery that uses Blockchain and NFTs technologies.
            Indeed, <strong>the major problems of traditional and centralized lotteries
            </strong> are that the funds generated by these companies are redistributed to
            the winners (when there are any) are only a minor part of what they win. We thought about
            this problem and <strong>we realized that the use of a smart contract to manage the flow 
            of transactions</strong> linked to a lottery, from the purchase of the ticket, to the draw 
            and finally the obtaining of the cash prize by the winner, directly sent to their wallet
            via a button, without a banking intermediary, is a possible solution to 
            <strong>start decentralizing these industries which are worth billions</strong>
          </p>
          <p><strong>A smart contract</strong> is a computer code executed on the blockchain,
            their advantages are that once deployed, they become <strong>immutable</strong>,
            no one can modify them, <strong>transparent</strong> transparent thanks to the 
            fact that they are deployed on a public blockchain like Ethereum, and finally 
            they are <strong>intermediate and automatic</strong>.
          </p>
          <p><strong>The smart contract</strong> deployed by the DeFi Lottery team is a guarantee
            of security, transparency and automation of this discipline. For the curious, the code
            of our smart contract is available here or you can find all the detailed information on
            the project on our 
            <a href="https://decentralized-lottery.gitbook.io/defi-lottery/" target='_blank'> whitepaper
              <i className="fa-solid fa-up-right-from-square" />
            </a>
          </p>
        </div>
      </div>
      <div className="realization">
        <div className="realization-container">
          <div className="realization-container-text">
            <div className="leading-text">PROCESS</div>
            <h2>How the lottery works.</h2>
            <p>
              Well the operation of the lottery is not that difficult... 
              First we deploy the smart contract on the blockchain Then
              we open the sale for everyone and you have 1 week to buy 
              your ticket(s) to participate in the weekly lottery. The 
              amount you will pay will be automatically and directly stored 
              on the smart contract that you can ALL view! Finally, thanks 
              to blockchain technology, the draw is carried out by the smart 
              contract, which makes it secure and the winner automatically receives his prize!
            </p>
          </div>
        </div>
        <div className="realization-roadmap">
          <div className="realization-roadmap-container">
            <div className="realization-roadmap-container-text">
              <h3>How the lottery works during the week</h3>
            </div>
            <div className="realization-roadmap-container-bricks">
              <div className="realization-roadmap-container-bricks-a">
                <div id="realization-roadmap-container-bricks-i">
                  <i className="fa-solid fa-rocket" />
                </div>
                <h4>Opening of the lottery</h4>
                <p>Day 1</p>
                <p>
                Tickets for the weekly lottery are available for purchase
                </p>
              </div>
              <div className="realization-roadmap-container-bricks-b">
                <div id="realization-roadmap-container-bricks-i">
                  <i className="fa-solid fa-hammer" />
                </div>
                <h4>Mint</h4>
                <p>Day 1-7</p>
                <p>
                You have 7 days to buy your tickets before the draw every Friday from 8 p.m.
                </p>
              </div>
              <div className="realization-roadmap-container-bricks-c">
                <div id="realization-roadmap-container-bricks-i">
                  <i className="fa-solid fa-hand" />
                </div>
                <h4>The mint is stopped</h4>
                <p>Day 7</p>
                <p>
                The purchase of tickets is no longer possible
                </p>
              </div>
              <div className="realization-roadmap-container-bricks-d">
                <div id="realization-roadmap-container-bricks-i">
                  <i className="fa-solid fa-dice" />
                </div>
                <h4>Draw of the winner and his recieve the cashprize</h4>
                <p>Day 7</p>
                <p>
                The smart contract draws the winner and the amount of the
                reward is paid directly into their wallet
                </p>
              </div>
            </div>
            <h4>
              More details{" "}
              <a href="https://decentralized-lottery.gitbook.io/defi-lottery/">
                on white paper
                <i className="fa-solid fa-up-right-from-square" />
              </a>
            </h4>
          </div>
        </div>
      </div>
      <div className="count">
        <div className="count-bigcontainer">
          <div className="count-container">
            <div className="count-container-total">
              <div className="count-container-text">
                <h3>Total cashprize win in {data.idLottery-1} weeks</h3>
              </div>
              <div className="count-container-text-arg">
                <h2>{(data.cashprize/10**18).toFixed(3)} $</h2>
              </div>
            </div>
            <div className="count-container-participants">
              <div className="count-container-text-container">
                <div className="count-container-text-container-child">
                  <div className="count-container-text">
                    <h3>
                      <i className="fa-solid fa-person-circle-check" /> Actual
                      participants
                    </h3>
                  </div>
                  <div className="count-container-text-arg">
                    <h2>{data.totalSupply-data.alreadySupply}</h2>
                  </div>
                </div>
                <div className="count-container-text-container-child">
                  <div className="count-container-text">
                    <h3>
                      <i className="fa-solid fa-users" /> Total participants
                    </h3>
                  </div>
                  <div className="count-container-text-arg">
                    <h2>{data.totalSupply}</h2>
                  </div>
                </div>
                <div className="count-container-text-container-child">
                  <div className="count-container-text">
                    <h3>
                      <i className="fa-solid fa-crown" /> Total winner
                    </h3>
                  </div>
                  <div className="count-container-text-arg">
                    <h2>{data.idLottery-1}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="count-container1">
            <div className="count-container-text">
              <h3>Time remaining before next draw</h3>
            </div>
            <div className="count-container-text-arg">
            <CountdownTimer targetDate={timeLeft} />
              <div className="count-container-loader">
                <div className="count-container-loader-bar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    
    )
}