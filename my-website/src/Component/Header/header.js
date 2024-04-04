import './header.css'
import React, { useState } from 'react'
import { useGlobalState } from '../../GlobalState'; // Importando o hook useGlobalState
import ChangeTheme from '../Sub Component/change theme/changeTheme'

const DarkStyle = {
    backgroundColor: "#171717",
    boxShadow: '0px 3px 10px #0e0e0e'
};
const LightStyle = {
    backgroundColor: "#fff",
    boxShadow: '0px 3px 20px #a5a5a5'
};
const textDarkStyle = {
    color: '#797979'
}
const textLightStyle = {
    color: '#272727'
}
const titleDark = { color: '#fff' }, titleLight = { color: '#000' }

function Header() {

    const { darkMode } = useGlobalState(); // Usando o hook useGlobalState para acessar o valor de darkMode

    const [isScrolled, changeClassName] = useState(false);
    const changeHeader = () => {
        if (window.scrollY > 0) {
            // Provávelmente com a inserção de novos campos esse valor vai ter que ser aumentado
            // de 1900 para mais no caso
            if(window.scrollY >= 1900){
                changeClassName(false)
            }else{
                changeClassName(true)
            }
        }else {
            changeClassName(false)
        }
    }
    window.addEventListener("scroll", changeHeader)

    function menuShow() {
        let menuMobile = document.querySelector('.mobile-menu');
        if (menuMobile.classList.contains('open')) {
            menuMobile.classList.remove('open');
        } else {
            menuMobile.classList.add('open');
        }
    }

    return (
        <div className={isScrolled ? 'header-scrolled' : 'header'} style={darkMode ? DarkStyle : LightStyle}>

            <div className='header-container'>

                <div className='subcontainer'>
                    <h1 style={darkMode ? titleDark : titleLight}>Thiago<span>.</span></h1>

                    <div className='menu'>
                        <ul>
                            <li><a style={darkMode ? textDarkStyle : textLightStyle}>Home</a></li>
                            <li><a style={darkMode ? textDarkStyle : textLightStyle}>About</a></li>
                            <li><a style={darkMode ? textDarkStyle : textLightStyle}>Project</a></li>
                            <li><a style={darkMode ? textDarkStyle : textLightStyle}>Skills</a></li>
                            <li><a style={darkMode ? textDarkStyle : textLightStyle}>Service</a></li>
                            <li><a style={darkMode ? textDarkStyle : textLightStyle}>Contact</a></li>
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
                            <a style={darkMode ? textDarkStyle : textLightStyle}>Home</a>
                        </li>

                        <li>
                            <i class="fas fa-chevron-circle-right"></i>
                            <a style={darkMode ? textDarkStyle : textLightStyle}>About</a>
                        </li>

                        <li>
                            <i class="fas fa-chevron-circle-right"></i>
                            <a style={darkMode ? textDarkStyle : textLightStyle}>Project</a>
                        </li>

                        <li>
                            <i class="fas fa-chevron-circle-right"></i>
                            <a style={darkMode ? textDarkStyle : textLightStyle}>Skills</a>
                        </li>

                        <li>
                            <i class="fas fa-chevron-circle-right"></i>
                            <a style={darkMode ? textDarkStyle : textLightStyle}>Service</a>
                        </li>

                        <li>
                            <i class="fas fa-chevron-circle-right"></i>
                            <a style={darkMode ? textDarkStyle : textLightStyle}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Header