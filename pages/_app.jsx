import Actions from '../components/actions';
import Container from '../components/container';
import Header from '../components/header';
import '../styles/globals.css'
import { TelegramProvider } from "../telegram";
import { useRouter } from 'next/router';
import React from 'react';
import Store from '../helpers/store';

const App = ({ Component, pageProps }) => {

  return (
    <Store>
      <TelegramProvider>
        <Header />
        <Container>
          <Component {...pageProps}/>
        </Container>
        <Actions />
      </TelegramProvider>
    </Store>
  )
}

export default App
