import { ethers } from 'ethers';
import Contract from '../../../artifacts/contracts/DefiLotteryV2.sol/DefiLotteryV2.json';
import { useState, useEffect } from "react"
import { ellipseAddress } from "../../../lib/utilities"
import CountdownTimer from '../../CountdownTimer';



export default function SectionPresentation() {

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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto excepturi
            magnam dignissimos nemo doloremque sed similique vero ullam nobis
            nesciunt? Aut nisi modi error quisquam totam tempore! Illum, vel,
            eligendi provident fuga, sunt aliquam quaerat natus optio quis ratione
            ipsum dicta. Sint optio odit itaque reiciendis provident, quasi sit
            quia.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quia
            corrupti natus voluptatum autem in adipisci odio aliquid aperiam
            dignissimos, nobis magnam! At molestiae aut minus adipisci facilis
            possimus aliquam provident quibusdam, eius architecto sunt saepe dicta
            quod harum totam praesentium qui rem ex deserunt ducimus unde? Possimus
            alias repellat, dicta, illo tempora facere quisquam unde reiciendis
            dolorum, facilis sed itaque! Autem harum quod iusto corporis assumenda
            facere quasi adipisci temporibus illo natus, laborum magnam repellat
            dignissimos dolor! Nulla sunt, aliquid assumenda id perferendis quasi
            ipsam animi hic, ex nesciunt ea vitae atque voluptatibus. Perspiciatis
            fugiat ex quasi necessitatibus aliquid.
          </p>
        </div>
        {/* <div class="about-imgcontainer">
              <img src="image/AATXAJzV0fmbd6yUSRS_EdeKOBKrmBZ7p4t9pwCB7Q=s900-c-k-c0xffffffff-no-rj-mo.webp" class="presentationImg1">
              <h4>Lorem ipsum dolor sit amet consectetur</h4>
          </div> */}
      </div>
      <div className="realization">
        <div className="realization-container">
          <div className="realization-container-text">
            <div className="leading-text">PROCESS</div>
            <h2>How the lottery works.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quia
              corrupti natus voluptatum autem in adipisci odio aliquid aperiam
              dignissimos, nobis magnam! At molestiae aut minus adipisci facilis
              possimus aliquam provident quibusdam, eius architecto sunt saepe dicta
              quod harum totam praesentium qui rem ex deserunt ducimus unde?
              Possimus alias repellat, dicta, illo tempora facere quisquam unde
              reiciendis dolorum, facilis sed itaque! Autem harum quod iusto
              corporis assumenda facere quasi adipisci temporibus illo natus,
              laborum magnam repellat dignissimos dolor! Nulla sunt, aliquid
              assumenda id perferendis quasi ipsam animi hic, ex nesciunt ea vitae
              atque voluptatibus. Perspiciatis fugiat ex quasi necessitatibus
              aliquid.
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
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam,
                  consequatur!
                </p>
              </div>
              <div className="realization-roadmap-container-bricks-b">
                <div id="realization-roadmap-container-bricks-i">
                  <i className="fa-solid fa-hammer" />
                </div>
                <h4>Mint</h4>
                <p>Day 1-7</p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam,
                  consequatur!
                </p>
              </div>
              <div className="realization-roadmap-container-bricks-c">
                <div id="realization-roadmap-container-bricks-i">
                  <i className="fa-solid fa-hand" />
                </div>
                <h4>The mint is stopped</h4>
                <p>Day 7</p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam,
                  consequatur!
                </p>
              </div>
              <div className="realization-roadmap-container-bricks-d">
                <div id="realization-roadmap-container-bricks-i">
                  <i className="fa-solid fa-dice" />
                </div>
                <h4>Draw of the winner and his recieve the cashprize</h4>
                <p>Day 7</p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam,
                  consequatur!
                </p>
              </div>
            </div>
            <h4>
              More details{" "}
              <a href="#">
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