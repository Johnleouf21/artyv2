import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { GB, FR, BR } from 'country-flag-icons/react/3x2'







export default function Nav() {



  

    ///<━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━App━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━>


    return (
        <div>
            <Head>
        <title>lottery</title>
        <meta property="og:image:url" content="/favicon.jpg"></meta>
        <meta name="description" content="The red paws club project, A true passive income NFT, The easy way of earning money" />
        <link rel="icon" href="/favicon.ico" />
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
                    <a className="Réglages du site" href="ENindex.html">
                      <FR width={23}/><i className="fa-solid fa-circle-check" />
                    </a>
                  </li>
                  <li className="reglage">
                    <a className="Réglages du site" href="ENindex.html">
                      <GB width={23}/>
                    </a>
                  </li>
                  <li className="reglage">
                    <a className="Réglages du site" href="ENindex.html">
                      <BR width={23}/>
                    </a>
                  </li>
                </div>
                <div className="menu">
                  <ul>
                    <div className="action2">
                      <div className="profile2" >
                        <li>
                          <i className="fa-solid fa-globe" /> Langue{" "}
                          <i className="fa-solid fa-caret-right" />
                        </li>
                        <div className="menulang">
                         
                        </div>
                      </div>
                    </div>
                    <div className="actionclose" >
                      <ul>
                        <li>
                          <i className="fa-solid fa-xmark" /> Fermer
                        </li>
                      </ul>
                    </div>
                  </ul>
                </div></div>
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
            {/* <div class="mainPage-btn">
                <ul>
                    <li><a class="mainPage-btn-discover" href="#">YOU</a></li>
                    <li><a class="mainPage-btn-gettingstart" href="#">FUCK</a></li>
                </ul>
            </div> */}
          </div>
        </header>

        </div >
    )
}
