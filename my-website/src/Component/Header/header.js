import './header.css'
import React, { useState } from 'react'
import { useGlobalState } from '../../GlobalState'; // Importando o hook useGlobalState
import ChangeTheme from '../Sub Component/change theme/changeTheme'

function Header() {

    const { darkMode } = useGlobalState(); // Usando o hook useGlobalState para acessar o valor de darkMode

    function menuShow() {
        let menuMobile = document.querySelector('.mobile-menu');
        if (menuMobile.classList.contains('open')) {
            menuMobile.classList.remove('open');
        } else {
            menuMobile.classList.add('open');
        }
    }

    return (
        <div className={'header'}>

            <div className='header-container'>

                <div className='subcontainer'>
                    <h1>Thiago<span>.</span></h1>

                    <div className='menu'>
                        <ul>
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Project</a></li>
                            <li><a>Skills</a></li>
                            <li><a>Service</a></li>
                            <li><a>Contact</a></li>
                        </ul>

                        <div className='mobile-menu-icon'>
                            <button onClick={menuShow}>
                                <i class="fa-solid fa-bars"></i>
                            </button>
                        </div>
                    </div>

                    <ChangeTheme />
                </div>

                <div className='mobile-menu'>
                    <ul>
                        <li>
                            <i class="fas fa-chevron-circle-right"></i>
                            <a>Home</a>
                        </li>

                        <li>
                            <i class="fas fa-chevron-circle-right"></i>
                            <a>About</a>
                        </li>

                        <li>
                            <i class="fas fa-chevron-circle-right"></i>
                            <a>Project</a>
                        </li>

                        <li>
                            <i class="fas fa-chevron-circle-right"></i>
                            <a>Skills</a>
                        </li>

                        <li>
                            <i class="fas fa-chevron-circle-right"></i>
                            <a>Service</a>
                        </li>

                        <li>
                            <i class="fas fa-chevron-circle-right"></i>
                            <a>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='construction-in-progress-message'>
                <p>Website under construction <i class="fa-solid fa-gear"></i></p>
            </div>

        </div>
    );
}

export default Header