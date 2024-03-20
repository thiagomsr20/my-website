import './header.css'

function Header() {

    function menuShow() {
        let menuMobile = document.querySelector('.mobile-menu');
        if (menuMobile.classList.contains('open')) {
            menuMobile.classList.remove('open');
        } else {
            menuMobile.classList.add('open');
        }
    }
    return (
        <div className='header'>
            <nav class="nav-bar">
                <div class="logo">
                    <h1 className='header-title'>Thiago<span>.</span></h1>
                </div>
                <div class="nav-list">
                    <ul>
                        <li class="nav-item"><a href="#" class="nav-link">Início</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Projetos</a></li>
                        <li class="nav-item"><a href="#" class="nav-link"> Sobre</a></li>
                    </ul>
                </div>
                <div class="resume-button">

                    <button>
                        <a href="#">Resume</a>
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>

                </div>

                <div class="mobile-menu-icon">

                    <button onClick={menuShow}>
                        <i class="fa-solid fa-bars"></i>
                    </button>

                </div>
            </nav>
            <div class="mobile-menu">
                <ul>
                    <li class="nav-item"><a href="#" class="nav-link">Início</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Projetos</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Sobre</a></li>
                </ul>

                <div class="resume-button">
                    <button>
                        <a href="#">Resume</a>
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header