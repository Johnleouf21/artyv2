import Head from 'next/head'
import Footer from '../components/Accueil/FR/Footer'
import Header from '../components/Accueil/FR/Header'
import SectionPresentation from '../components/Accueil/FR/SectionPresentation'



export default function Home() { 
  
  

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
        <Header/>
        <SectionPresentation/>
        <Footer/>
      </div>
  )
}
