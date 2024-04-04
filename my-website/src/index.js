import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GlobalStateProvider } from './GlobalState';

// Header e footer fixos na pagina
import Header from './Component/Header/header'
import Footer from './Component/Footer/footer'

// Paginas variaveis
import Introdution from './Component/Home/Introduction/introduction'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStateProvider>
      <Header />
      <Introdution />
      <Footer />
    </GlobalStateProvider>
  </React.StrictMode>
);