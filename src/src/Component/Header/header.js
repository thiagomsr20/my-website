import './header.css'

function Header() {
    return (
        <div className='header'>
            <nav class="nav-bar">
                <div class="logo">
                    <h1>Logo</h1>
                </div>
                <div class="nav-list">
                    <ul>
                        <li class="nav-item"><a href="#" class="nav-link">Início</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Projetos</a></li>
                        <li class="nav-item"><a href="#" class="nav-link"> Sobre</a></li>
                    </ul>
                </div>
                <div class="login-button">
                    <button><a href="#">Entrar</a></button>
                </div>

                <div class="mobile-menu-icon">
                    <button onclick="menuShow()"><i class="fas fa-bars"></i></button>
                </div>
            </nav>
            <div class="mobile-menu">
                <ul>
                    <li class="nav-item"><a href="#" class="nav-link">Início</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Projetos</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Sobre</a></li>
                </ul>

                <div class="login-button">
                    <button><a href="#">Entrar</a></button>
                </div>
            </div>
        </div>
    );
}

export default Header