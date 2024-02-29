import React from 'react';
import ReactDOM from 'react-dom/client';
import Cabecario from './component/Shared/cabecario/Cabecario'
import Rodape from './component/Shared/rodape/Rodape'
import BackgroundShape from './component/Shared/background-shape/background-shape'

import Home from './component/Home/Home'

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cabecario />
    <Home />
    <Rodape />
    <BackgroundShape />
  </React.StrictMode>
);