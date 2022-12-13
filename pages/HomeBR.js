import HeaderBR from '../components/Accueil/BR/HeaderBR'
import SectionPresentationBR from '../components/Accueil/BR/SectionPresentationBR'
import FooterBR from '../components/Accueil/BR/FooterBR'
import Head from 'next/head'



export default function HomeBR() { 
  
  

  return (
    <div>
      <Head>
        <title>DeFi Lottery</title>
        <meta name="description" content="New ecosystem,
          New rules, far from governments.
          Lottery manage by you." />
        <meta property="og:image:url" content="image/logo-onglet.jpg"></meta>
        <link rel="icon" href="image/logo-onglet.jpg"/>
        <link rel="favicon" href="image/logo-onglet.jpg"/>
      </Head>
        <HeaderBR/>
        <SectionPresentationBR/>
        <FooterBR/>
      </div>
  )
}
