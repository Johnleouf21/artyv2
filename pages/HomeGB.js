import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { FR, GB, BR } from 'country-flag-icons/react/3x2'



export default function HomeGB() { 
  
  

  return (
    <div>
      <Head>
        <title>DeFi Lottery</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="image/logo-onglet.jpg"/>
      </Head>
      
      <header>
          <nav>
            <ul>
              <li id="logo">
                <a href="#">
                  <i className="fa-solid fa-ticket" /> DeFi Lottery
                </a>
              </li>
              <div className="action">
                <div className="profile" >
                  <li className="reglage">
                    <Link href="/">
                    <a className="Réglages du site">
                      <FR width={23}/>
                    </a>
                    </Link>
                  </li>
                  <li className="reglage">
                    <a className="Réglages du site">
                      <GB width={23}/><i className="fa-solid fa-circle-check" />
                    </a>
                  </li>
                  <li className="reglage">
                    <Link href="/HomeBR">
                    <a className="Réglages du site">
                      <BR width={23}/>
                    </a>
                    </Link>
                  </li>
                </div>
                </div>
              <div className="iconsnavbartwitter">
                <a
                  className="logotwitter"
                  href="https://twitter.com/?lang=fr"
                  title="Accédez à notre twitter"
                >
                  <i className="fa-brands fa-twitter" />
                </a>
              </div>
              <div className="iconsnavbardiscord">
                <a
                  className="logodiscord"
                  href="https://discord.gg/GqsyHETQM2"
                  title="Accédez à notre discord communautaire officiel"
                >
                  <i className="fa-brands fa-discord" />
                </a>
              </div>
              <li id="whitepaper">
                <a target="_blank" href="youtube.com" title="Accédez au White Paper">
                  White Paper
                </a>
              </li>
              <li id="apropos">
                <a href="#about" title="Pour mieux comprendre notre projet">
                  About
                </a>
              </li>
              <li className="nav-roadmap">
                <a href="FRroadmap.html">Road Map</a>
              </li>
              <button id="btnmarketplace" title="Accédez à la collection NFT">
                <Link href="/Mint">
                <a>Marketplace NFT</a>
                </Link>
              </button>
            </ul>
          </nav>
          <div id="mainPage-home">
            <div className="mainPage-text">
              <h1>DeFi Lottery</h1>
              <div id="premierTrait" />
              <h3>100% Decentralized, 100% Secured</h3>
              <h3>
              Lottery manage by <strong>YOU</strong>
              </h3>
            </div>
            {/* <div class="mainPage-btn">
                <ul>
                    <li><a class="mainPage-btn-discover" href="#">YOU</a></li>
                    <li><a class="mainPage-btn-gettingstart" href="#">FUCK</a></li>
                </ul>
            </div> */}
          </div>
        </header>
        <div className="splitchange">
          <h4>
            <a className="splitchange-more" href="#presentation">
              {" "}
              Learn more about the project{" "}
              <i className="fa-solid fa-chevron-down" />
            </a>
          </h4>
        </div>
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
        <footer>
          <div id="deuxiemeTrait" />
          <div className="footer-container">
            <div className="footer-presentation-defi">
              <div className="footer-presentation-defi-description">
                <h3 className="footer-presentation-defi-h3">
                  <i className="fa-solid fa-ticket" /> DeFi Lottery
                </h3>
                <h4 className="footer-presentation-defi-h4">
                DeFi lottery based on blockchain technology and secured through the use of a smart contract
                </h4>
              </div>
            </div>
            <div className="footer-credits">
              <h4>
                <a href="#about">About</a>
              </h4>
              <h4>
                <a href="">Contact us</a>
              </h4>
              <h4>
                <a href="">Whitepaper</a>
              </h4>
              <h4>
                <a href="credits.html">Credits</a>
              </h4>
              {/* <form action="data.php" method="POST" class="footer-form">
                    <input style="cursor:text" type="email" name="email" class="footer-form-input" placeholder="E-mail">
                    <textarea style="cursor:text" type="textarea" class="footer-form-textarea" placeholder="Votre message"></textarea>
                    <button class="footer-form-btn"><a>Envoyer</a></button>
                </form> */}
            </div>
          </div>
          <div id="deuxiemeTrait" />
          <div id="copyrightEtIcons">
            <div id="copyright">
              <span title="Jeunes Entrepreneurs">© All Rights Reserved</span>
            </div>
            <div id="icons">
              <a
                href="https://twitter.com/DeFi_Lottery"
                title="Accédez à notre twitter"
              >
                <i className="fa-brands fa-twitter" />
              </a>
              <a
                href="https://www.youtube.com/?hl=FR"
                title="Accédez à notre chaine youtube"
              >
                <i className="fa-brands fa-youtube" />
              </a>
              <a
                href="https://discord.gg/GqsyHETQM2"
                title="Accédez à notre discord communautaire officiel"
              >
                <i className="fa-brands fa-discord" />
              </a>
            </div>
          </div>
        </footer>
      </div>
  )
}
