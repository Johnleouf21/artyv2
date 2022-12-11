import Head from 'next/head'
import HeaderBR from '../components/Accueil/BR/HeaderBR'
import SectionPresentationBR from '../components/Accueil/BR/SectionPresentationBR'
import FooterBR from '../components/Accueil/BR/FooterBR'




export default function HomeBR() { 
  
  

  return (
    <div>
      <Head>
        <title>DeFi Lottery</title>
        <meta name="description" content="New ecosystem,
          New rules, far from governments.
          Lottery manage by you." />
        <link rel="icon" href="image/logo-onglet.jpg"/>
        <link rel="favicon" href="image/logo-onglet.jpg"/>
      </Head>
        <HeaderBR/>
        <SectionPresentationBR/>
        <FooterBR/>
      </div>
  )
}
