import Head from 'next/head'
import HeaderGB from '../components/Accueil/GB/HeaderGB'
import SectionPresentationGB from '../components/Accueil/GB/SectionPresentationGB'
import FooterGB from '../components/Accueil/GB/FooterGB'



export default function HomeGB() { 
  
  

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
        <HeaderGB/>
        <SectionPresentationGB/>
        <FooterGB/>
      </div>
  )
}
