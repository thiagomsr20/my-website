import './Apresentacao.css';

const fotoThiago = "./src/resource/img/foto de perfil.png";

function Apresentacao() {
  return (
    <div class="apresentacao" id="apresentacao">
      <div class="apresentacao-texto">
        <h1 class="apresentacao-titulo">Olá, eu sou o Thiago</h1>

        <div class="apresentacao-resumo">
          <p>
            Sou um entusiasta de desenvolvimento web, atualmente estudando por conta para me tornar um especialista no
            desenvolvimento Back-End com ASP.NET. Apesar de estar correndo atrás de ser especialista, gosto muito
            da ideia de entender como os demais setores funcionam,
            por conta disso, adoro aprender novos conceitos que não fazem parte do meu roadmap Back-End, como DevOps, Front-End e UI UX.
          </p>
        </div>

      </div>
      <img src={fotoThiago} alt="Foto do Thiago"></img>
    </div>
  );
}

export default Apresentacao;
