import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './Component/Header/header'
import Footer from './Component/Footer/footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Footer />
  </React.StrictMode>
);