import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <title>DeFi Lottery</title>
        <meta name="description" content="New ecosystem,
          New rules, far from governments.
          Lottery manage by you." />
        <meta property="og:image:url" content="image/logo-onglet.jpg"></meta>
        <link rel="icon" href="image/logo-onglet.jpg"/>
        <link rel="favicon" href="image/logo-onglet.jpg"/>
        <link rel="stylesheet" href="/css/loader.css" media="screen"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>
        <link href="https://fonts.googleapis.com/css2?family=Koulen&family=Roboto+Mono:wght@600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Joan&family=Poppins&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}