import './header.css'
import React, {useState} from 'react'

function Header() {

    // hamburguer menu script
    function menuShow() {
        let menuMobile = document.querySelector('.mobile-menu');
        if (menuMobile.classList.contains('open')) {
            menuMobile.classList.remove('open');
        } else {
            menuMobile.classList.add('open');
        }
    }

    // Efeito de mudar o header quando scrolar
    // Nao 'e possivel usar classlist idreto pois n tem como usar o BOM,
    // pq o react n renderiza a tempo para permitir o uso
    const [className, changeClassName] = useState(false);
    const changeHeader = () => {
        if(window.scrollY >= 120){
            changeClassName(true)
        }else{
            changeClassName(false)
        }
    }

    window.addEventListener("scroll", changeHeader)

    return (  
        <div className={className ? 'header-scrolled' : 'header'}>
            <nav class="nav-bar">
                <div class="logo">
                    <h1 className='header-title'>Thiago<span>.</span></h1>
                </div>
                <div class="nav-list">
                    <ul>
                        <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">About</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Project</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Skills</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Service</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
                    </ul>
                </div>
                <div class="resume-button">

                    <button>
                        <a href="#">Resume</a>
                        <i class="fa-solid fa-file"></i>
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
                    <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">About</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Project</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Skills</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Service</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
                </ul>

                <div class="resume-button">
                    <button>
                        <a href="#">Resume</a>
                        <i class="fa-solid fa-file"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header