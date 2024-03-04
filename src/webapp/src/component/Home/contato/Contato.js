import './Contato.css';

function Contato() {
  return (
    <div class="contato-container">
      <form action="/" method="post">
      <h1 class="form h1">Formulário de Contato</h1>
      <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" placeholder="Digite seu nome completo"></input>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Digite seu email"></input>
        <label for="mensagem">Mensagem:</label>
        <textarea id="mensagem" name="mensagem" rows="5" cols="30" placeholder="Digite sua mensagem"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contato;
