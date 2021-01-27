import React from 'react'
import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const theme = db.theme;

export default function App({ Component, pageProps }) {
   
  return (
    <>
     {/* essa propriedade define globalmente que a letra sera esse abaixo */}
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Head>
        <link rel = "preconnect" href = "https://fonts.gstatic.com"/>
<link href = "https://fonts.googleapis.com/css2? family = Potta + One & display = swap" rel = "folha de estilo"/>
      </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}