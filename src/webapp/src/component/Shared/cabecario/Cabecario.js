import './Cabecario.css'

import React from 'react';

function Cabecario() {

  return (
    <div class="cabecario" id='cabecario'>
      <div class="cabecario-content">
        <h2 class="cabecario-logo">Thiago<span class="cabecario-logo-ponto">.</span></h2>
        <ul class="cabecario-links">
            <li class="cabecario-link">Home</li>
            <li class="cabecario-link">About</li>
            <li class="cabecario-link">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Cabecario;
