import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GlobalStateProvider } from './GlobalState';

// Header e footer fixos na pagina
import Header from './Component/Header/header'
import Footer from './Component/Footer/footer'

// Paginas variaveis
import Home from './Component/Home/Home'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStateProvider>
      <Header />
      <Home />
      <Footer />
    </GlobalStateProvider>
  </React.StrictMode>
);