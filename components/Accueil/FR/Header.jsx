import { FR, GB, BR } from 'country-flag-icons/react/3x2'
import Link from 'next/link'


export default function Header() {
    return(
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
                        <a className="Réglages du site">
                        <FR width={23}/><i className="fa-solid fa-circle-check" />
                        </a>
                    </li>
                    <li className="reglage">
                        <Link href="/HomeGB">
                        <a className="Réglages du site">
                        <GB width={23}/>
                        </a>
                        </Link>
                    </li>
                    <li className="reglage">
                        <Link href="HomeBR">
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
                    href="https://twitter.com/DeFi_Lottery"
                    title="Accédez à notre twitter"
                    >
                    <i className="fa-brands fa-twitter" />
                    </a>
                </div>
                <div className="iconsnavbardiscord">
                    <a
                    className="logodiscord"
                    href="https://discord.gg/pYHEtRy76K"
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
                    a propos
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
                <h3>100% Décentralisée, 100% Sécurisé</h3>
                <h3>
                    Loterie géré par <strong>vous</strong>
                </h3>
                </div>
            </div>
        </header>
    )
}