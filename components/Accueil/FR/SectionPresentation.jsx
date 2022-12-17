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
            const idLottery = await contract.idLottery();
            const alreadySupply = await contract.alreadySupply();
            const object = {
              "idLottery": String(idLottery),
              "cashprize": String((cashprize/10**18).toFixed(3)), 
              "totalSupply": String(totalSupply), 
              "alreadySupply": String(alreadySupply)
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
          <div className="leading-text">A propos</div>
          <h2>
            Nous souhaitons innover vers un système de lotterie sécurisé et décentralisé.
          </h2>
          <p>DeFi Lottery est une lotterie décentralisée qui utilise les technologies de la Blockchain
              et des NFTs. En effet, <strong>les problèmes majeurs des lotteries traditionnelles et
              centralisées</strong> sont que les fonds générés par ces entreprises sont redistribués
              aux gagnants (quand il y en a) ne sont qu'une mineure partie de ce qu&apos;ils gagnent.
              Nous avons pensé à ce problème et <strong>nous nous sommes aperçus que l&apos;utilisation
              d&apos;un smart contract pour gérer les flux de transactions</strong> lié à une lotterie,
              de l&apos;achat du ticket, au tirage au sort et enfin l&apos;obtention du cash prize par le gagnant,
              directement envoyé dans son wallet via un bouton, sans intermediaire bancaire, est une solution
              envisageable pour <strong>commencer à décentraliser ces industries qui pèsent des milliards</strong>
          </p>
          <p><strong>Un smart contract</strong> est un code informatique executé sur la blockchain,
              leurs avantages est qu&apos;une fois déployé, ils deviennent <strong>immuable</strong>, personne 
              ne peux les modifier, <strong>transparent</strong> grâce au fait qu&apos;il sont déployé sur une
              blockchain publique comme Ethereum, et pour finir ils sont <strong>intermédiaires et automatiques</strong>.
          </p>
          <p><strong>Le smart contract</strong> déployé par la team de DeFi Lottery est un garantit de sécurité,
           de transparence et d'automatisation de cette discipline. Pour les curieux le code de notre smart contract
            est disponible ici ou vous pouvez retrouver toutes les infos détaillées sur le projet sur notre 
            <a href="https://decentralized-lottery.gitbook.io/defi-lottery/" target='_blank'> whitepaper
              <i className="fa-solid fa-up-right-from-square" />
            </a>
          </p>
        </div>
      </div>
      <div className="realization">
        <div className="realization-container">
          <div className="realization-container-text">
            <div className="leading-text">DEROULEMENT</div>
            <h2>Comment fonctionne notre lotterie</h2>
            <p>
            Et bien le fonctionnement de la loterie n&apos;est pas si difficile...
            Tout d&apos;abord, nous déployons le contrat intelligent sur la blockchain
            Ensuite, nous ouvrons la vente pour tout le monde et vous avez 1 semaine
            pour acheter votre ou vos billets pour participer à la loterie hebdomadaire.
            Le montant que vous paierez sera automatiquement et directement stocké sur
            le contrat intelligent que vous pouvez TOUS conslter !
            Enfin, grâce à la technologie blockchain, le tirage au sort
            est effectué par le smart contract, ce qui le sécurise et le gagnant reçoit automatiquement son lot !
            </p>
          </div>
        </div>
        <div className="realization-roadmap">
          <div className="realization-roadmap-container">
            <div className="realization-roadmap-container-text">
              <h3>Comment fonctionne la lotterie pendant la semaine</h3>
            </div>
            <div className="realization-roadmap-container-bricks">
              <div className="realization-roadmap-container-bricks-a">
                <div id="realization-roadmap-container-bricks-i">
                  <i className="fa-solid fa-rocket" />
                </div>
                <h4>Ouverture de la lotterie</h4>
                <p>Jour 1</p>
                <p>
                  Les tickets pour la lotterie hebdomadaire sont disponible à l&apos;achat
                </p>
              </div>
              <div className="realization-roadmap-container-bricks-b">
                <div id="realization-roadmap-container-bricks-i">
                  <i className="fa-solid fa-hammer" />
                </div>
                <h4>Achat</h4>
                <p>Jour 1-7</p>
                <p>
                  Vous avez 7 jours pour acheter vos tickets avant le tirage au sort chaque vendredi à partir de 20h
                </p>
              </div>
              <div className="realization-roadmap-container-bricks-c">
                <div id="realization-roadmap-container-bricks-i">
                  <i className="fa-solid fa-hand" />
                </div>
                <h4>La lotterie ferme</h4>
                <p>Jour 7</p>
                <p>
                  L'achat de tickets n'est plus possible
                </p>
              </div>
              <div className="realization-roadmap-container-bricks-d">
                <div id="realization-roadmap-container-bricks-i">
                  <i className="fa-solid fa-dice" />
                </div>
                <h4>Tirage et récompense du gagnant</h4>
                <p>jour 7</p>
                <p>
                  Le smart contract effectue le tirage au sort du gagnant et le montant de la récompense directement versé sur son portefeuille
                </p>
              </div>
            </div>
            <h4>
              Plus de détails{" "}
              <a href="#">
                Sur le whitepaper
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
                <h3>Récompenses totales gagnées depuis {data.idLottery-1} semaines</h3>
              </div>
              <div className="count-container-text-arg">
                <h2>{data.cashprize} MATIC</h2>
              </div>
            </div>
            <div className="count-container-participants">
              <div className="count-container-text-container">
                <div className="count-container-text-container-child">
                  <div className="count-container-text">
                    <h3>
                      <i className="fa-solid fa-person-circle-check" /> Nombre de participants sur la lotterie en cours                    </h3>
                  </div>
                  <div className="count-container-text-arg">
                    <h2>{data.totalSupply-data.alreadySupply}</h2>
                  </div>
                </div>
                <div className="count-container-text-container-child">
                  <div className="count-container-text">
                    <h3>
                      <i className="fa-solid fa-users" /> Nombre de participants sur toutes les lotteries
                    </h3>
                  </div>
                  <div className="count-container-text-arg">
                    <h2>{data.totalSupply}</h2>
                  </div>
                </div>
                <div className="count-container-text-container-child">
                  <div className="count-container-text">
                    <h3>
                      <i className="fa-solid fa-crown" /> Nombre de gagnants depuis {data.idLottery-1} semaines
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
              <h3>Temps restant avant fermeture de la lotterie en cours</h3>
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