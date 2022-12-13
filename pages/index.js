import Footer from '../components/Accueil/FR/Footer'
import Header from '../components/Accueil/FR/Header'
import SectionPresentation from '../components/Accueil/FR/SectionPresentation'
import Head from 'next/head'


export default function Home() { 
  
  

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
        <Header/>
        <SectionPresentation/>
        <Footer/>
      </div>
  )
}
