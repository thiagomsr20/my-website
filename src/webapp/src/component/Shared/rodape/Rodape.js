import './Rodape.css'

function Rodape(){
    return (
        <div class="rodape">
            <div class="rodape-content">
                <div class="rodape-mensagens">
                    <h3 class="rodape-titulo">Bom ver você por aqui!</h3>

                    <p class="rodape-email"><a href='#' target='_blank'>thiagomsoares2017@gmail.com</a></p>
                    <p class="rodape-texto">Este site possui uma melhor visualização no Desktop</p>
                    <p class="rodape-copyright">Feito com carinho <span>&#169; 2024 Thiago Maciel Soares</span></p>
                </div>

                <div class="rodape-redes">
                    <ul class="rodape-links">
                        <li class="rodape-link"><a href='https://github.com/thiagomsr20' target='_blank'>GitHub</a></li>
                        <li class="rodape-link"><a href='https://www.linkedin.com/in/thiago-maciel-soares-738913235/' target='_blank'>Linkedin</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Rodape;