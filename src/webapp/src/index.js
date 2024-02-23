import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cabecario from './component/cabecario/Cabecario'
import Apresentacao from './component/apresentacao/Apresentacao';
import BackShape from './component/background-shape/background-shape'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cabecario />
    <Apresentacao />
    <BackShape />
  </React.StrictMode>
);