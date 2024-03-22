import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Header e footer fixos na pagina
import Header from './Component/Header/header'
import Design_bgShape from './Component//Design/bg shape/bgShape'
import Footer from './Component/Footer/footer'

// Paginas variaveis
import Introduction from './Component/Home/Introduction/introduction'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Introduction />
    <Design_bgShape totalPageHeight={1000}/>
    <Footer />
  </React.StrictMode>
);