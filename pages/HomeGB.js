import HeaderGB from '../components/Accueil/GB/HeaderGB'
import SectionPresentationGB from '../components/Accueil/GB/SectionPresentationGB'
import FooterGB from '../components/Accueil/GB/FooterGB'
import Head from 'next/head'


export default function HomeGB() { 
  
  

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
        <HeaderGB/>
        <SectionPresentationGB/>
        <FooterGB/>
      </div>
  )
}
