import './Projetos.css';
import React from 'react';
import ProjectData from './resource/dados-projetos.json'

function Projetos() {

  return (
    <div className="projeto-container">
      <h1 class="projeto-titulo">Projetos</h1>
      <div class='cartoes'>
        {ProjectData.map((data) => {
          return (
            <div class="card-container">
              <div className="projeto-card">
                <img src={data.URL} alt='Foto do projeto' class="projeto-img"></img>
                <h2 class="projeto-name">{data.Name}</h2>
                <p class="projeto-description">{data.Description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Projetos;
