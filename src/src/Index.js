import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Header e footer fixos na pagina
import Header from './Component/Header/header'
import Footer from './Component/Footer/footer'

// Paginas variaveis
import About from './Component/About/about'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <About />
    <Footer />
  </React.StrictMode>
);