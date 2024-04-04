import './introduction.css'
import { useGlobalState } from '../../../GlobalState'; // Importando o hook useGlobalState

// Imagem de perfil
import fotoPerfil from './resource/foto de perfil.png'

const textDarkMode = { color: '#c4c4c4' }, textLightMode = { color: '#1d1d1d' }
const bgDark = { background: '#191919' }, bgLight = { background: '#fff' }

export default function Introduction() {
    const { darkMode } = useGlobalState(); // Usando o hook useGlobalState para acessar o valor de darkMode

    return (
        <div className='Introduction' style={darkMode ? bgDark : bgLight}>
            <div className='Introduction-container'>

                <div className='apresentacao'>
                    <p>Hi there!</p>
                    <h1 style={darkMode ? textDarkMode : textLightMode}>
                        I'm <span>Thiago</span>,<br></br>
                        Software Developer
                    </h1>
                </div>

                <div className='foto'>
                    <img src={fotoPerfil} alt='foto perfil'></img>
                    <span></span>
                </div>

                <div className='hireme'>

                </div>
            </div>
        </div>
    )
}