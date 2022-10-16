import Image from 'next/image'

export default function SectionPresentationGB() {
    return(
      <section id="presentation">
      <div id="about">
        <div className="about-textcontainer">
          <div className="textTitleLeft">
            <h2>Explication of the projet</h2>
          </div>
          <div className="textParagrapheLeft">
            <p>
            DeFi Lottery is a <strong>100% Decentralized</strong> Lottery, we use <strong>BLOCKCHAIN and NFTs</strong> technologies.
                    DeFi Lottery NFTs <strong>ARE NOT simple png,jpeg</strong>, they are <strong>entry tickets</strong> to a weekly lottery!
                After the draw, you can keep <strong>YOUR NFTs, YOUR tickets</strong>. Once a winner has been drawn <strong>"automatically"</strong>, and in such a way that <strong>
                    NOBODY CAN INFLUENCE THE RESULT</strong>, the winner will receive his winnings <strong>AUTOMATICALLY AND DIRECTLY</strong> in his wallet!
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
            <h2>The course</h2>
          </div>
          <div className="textParagrapheRight">
            <p>
            The draw takes place every Friday at (time) UTC+1,
                    The winner is drawn via a <strong class="linkText"><a href="#smartcontract">smart contract</a></strong>.
                    The mint NFTs during the week will become obsolete after the draw and a new collection will be available on the <strong class="linkText"><a href="#">market place</a></strong>.
                    The winner will be named on the site (
              <strong className="linkText">
                <a href="#">here</a>
              </strong>
              ) and on the discord at the time of the draw.
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
            <h2>The Smart Contract</h2>
          </div>
          <div className="textParagrapheLeft">
            <p>
            The blockchain and web 3.0 offer us the possibility of guaranteeing the security of a reliable and secure lottery through the use of a smart contract (smart contract in English)
                    The smart contract will be deployed, the money from the mints will be <strong>secure</strong> on the smart contract. In order to guarantee full transparency, the code of the smart contract will be
                    <strong>accessible to everyone</strong> so you will be able to decipher these lines of code to make sure that we do not leave room for scams.
                    The winner&apos;s draw will also be done on the smart contract with the keccack256 hash function, <strong>which we cannot control/modify</strong>
                    The draw will be based on the <strong>TOTAL HASHARD</strong>
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
            <h2>The NFT mint</h2>
          </div>
          <div className="textParagrapheRight">
            <p>
            The NFT mint will be done on <strong>our site</strong> in the NFT marketplace section that you can find just above
                    The mint money will be immediately stored on the smart contract following your purchase, without an intermediary, and your funds will be <strong>secure</strong>
                    You can see it on the smart contract, we can only pay each other our respective shares using <strong>PaymentSplitter</strong>, which will facilitate
                    our due...
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