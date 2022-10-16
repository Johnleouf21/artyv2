import Image from 'next/image'

export default function SectionPresentation() {
    return(
        <section id="presentation">
          <div id="about">
            <div className="about-textcontainer">
              <div className="textTitleLeft">
                <h2>Explication du projet</h2>
              </div>
              <div className="textParagrapheLeft">
                <p>
                  DeFi Lottery est une Lottery <strong>100% Décentralisée</strong>,
                  nous utilisons les technologies de la{" "}
                  <strong>BLOCKCHAIN et des NFTs</strong>.Les NFTs DeFi Lottery{" "}
                  <strong>NE SONT PAS de simples png,jpeg</strong>,ce sont des{" "}
                  <strong>tickets d&apos;entré</strong> à une lotterie hebdomadaire ! Après
                  le tirage,vous pouvez garder <strong>VOS NFTs, VOS tickets</strong>
                  .Une fois un gagnant tiré de façon <strong>&quot;automatique&quot;</strong>,
                  et de façon à ce que{" "}
                  <strong>PERSONNE NE PEUT INFLUENCER LE RESULTAT</strong>, le gagnant
                  recevr ses gains <strong>AUTOMATIQUEMENT ET DIRECTEMENT</strong>{" "}
                  dans son wallet !
                </p>
              </div>
            </div>
            <div className="about-imgcontainer">
              <Image
                src="/image/explication-image.png"
                className="presentationImg1"
                alt="winner of defi lottery cash prize easy money "
                width={800}
                height={400}
              />
            </div>
          </div>
          <div id="progress">
            <div className="progress-textcontainer">
              <div className="textTitleRight">
                <h2>Le déroulement</h2>
              </div>
              <div className="textParagrapheRight">
                <p>
                  Le tirage au sort se passe chaque vendredi à (heure) UTC+1, Le
                  gagnant est tiré au sort via un{" "}
                  <strong className="linkText">
                    <a href="#smartcontract">smart contract</a>
                  </strong>
                  . Les NFTs mint durant la semaine deviendront obsolète après le
                  tirage et une nouvelle collection sera disponible sur la{" "}
                  <strong className="linkText">
                    <a href="#">market place</a>
                  </strong>
                  . Le gagnant seront nommés sur le site (
                  <strong className="linkText">
                    <a href="#">ici</a>
                  </strong>
                  ) et sur le discord à l&apos;heure du tirage.
                </p>
              </div>
            </div>
            <div className="progress-imgcontainer">
              <Image
                src="/image/weeklyroadmap-image.png"
                alt="road map project of defi lottery money loto"
                className="roadmap-textIllustration"
                width={900}
                height={500}
              />
            </div>
          </div>
          <div id="smartcontract">
            <div className="smartcontract-textcontainer">
              <div className="textTitleLeft">
                <h2>Le Smart Contract</h2>
              </div>
              <div className="textParagrapheLeft">
                <p>
                  La blockchain et le web 3.0 nous offrent la possibilité de garantir
                  la sécurité d&apos;une loterie fiable et sécurisée grâce à l&apos;utilisation
                  d&apos;un contrat intelligent (smart contract en anglais) Le contrat
                  intelligent sera déployé, l&apos;argent des monnaies sera{" "}
                  <strong>sécurisé</strong> sur le contrat intelligent. Afin de
                  garantir une transparence totale, le code du contrat intelligent
                  sera
                  <strong>accessible à tous</strong> vous pourrez donc déchiffrer ces
                  lignes de code pour vous assurer que nous ne laissons pas de place
                  aux arnaques. Le tirage au sort du gagnant se fera également sur le
                  contrat intelligent avec la fonction de hachage keccack256,{" "}
                  <strong>que nous ne pouvons pas contrôler/modifier</strong>
                  Le tirage sera basé sur le <strong>HASHARD TOTAL</strong>
                </p>
              </div>
            </div>
            <div className="smartcontract-imgcontainer">
              <Image
                src="/image/smartcontract-image.png"
                alt="security smart contract developper blockchain work on security defi lottery"
                className="imgsmartcontract"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div id="mintnft">
            <div className="mintnft-textcontainer">
              <div className="textTitleRight">
                <h2>Le mint du NFT</h2>
              </div>
              <div className="textParagrapheRight">
                <p>
                  Le mint de NFT se fera sur <strong>notre site</strong> dans la
                  section marketplace NFT que vous pouvez retouver juste au-dessus
                  L&apos;argent des mint sera imméditament stocké sur le smart contract
                  suite à votre achat,sans intermédiaire,et vos fonds seront{" "}
                  <strong>sécurisés</strong>
                  Vous pouvez le voir sur le smart contract,nous ne pouvons que nous
                  verser nos parts repspectives à l&apos;aide de{" "}
                  <strong>PaymentSplitter</strong>,ce qui va faciliter nos dû...
                </p>
              </div>
            </div>
            <div className="mintnft-imgcontainer">
              <Image
                src="/image/mint-image.png"
                alt="mint nft ticket defi lottery for win cash prize"
                className="imgmintnft"
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>
    )
}