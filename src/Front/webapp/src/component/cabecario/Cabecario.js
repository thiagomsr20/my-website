import './Cabecario.css'

import React, { useState, useEffect } from 'react';

function Cabecario() {
  const [isRotated, setIsRotated] = useState(false);

  const handleLinkClick = (item) => {
    setIsRotated(true);
  };

  useEffect(() => {
    const rotateShape = () => {
      document.getElementById('forma-estilizada-background').style.animation = 'girar 0.5s ease-in-out forwards';
    };
    if (isRotated) {
      rotateShape();
      setTimeout(() => setIsRotated(false), 500);
    }
  }, [isRotated]);

  return (
    <div class="cabecario" id='cabecario'>
        <ul class="cabecario-links">
            <li class="cabecario-link" onClick={() => handleLinkClick('Apresentação')}>Apresentação</li>
            <li class="cabecario-link" onClick={() => handleLinkClick('Projetos')}>Projetos</li>
            <li class="cabecario-link" onClick={() => handleLinkClick('Contato')}>Contato</li>
        </ul>
    </div>
  );
}

export default Cabecario;
