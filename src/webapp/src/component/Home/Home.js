import './Home.css'
import Projetos from './projetos/Projetos'
import Contato from './contato/Contato';
import Apresentacao from './apresentacao/Apresentacao';

function Home() {

  return (
    <div class="Home">
        <Apresentacao />
        <Projetos />
        <Contato />
    </div>
  );
}

export default Home;
