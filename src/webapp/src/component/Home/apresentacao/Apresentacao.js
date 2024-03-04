import './Apresentacao.css';
import fotoPerfil from './resource/foto de perfil.png'

function Apresentacao() {
  return (
    <div class="apresentacao" id="apresentacao">
      <div class="apresentacao-texto">
        <h1 class="apresentacao-titulo">Olá, eu sou o <span class="apresentacao-nome">Thiago</span></h1>

        <div class="apresentacao-resumo">
          <p>
            Sou desenvolvedor BackEnd
          </p>
        </div>

      </div>
      <img class="apresentacao-foto" src={fotoPerfil} alt="Foto do Thiago"></img>
    </div>
  );
}

export default Apresentacao;
