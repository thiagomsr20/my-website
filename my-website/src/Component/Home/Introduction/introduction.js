import './introduction.css'
import { useGlobalState } from '../../../GlobalState'; // Importando o hook useGlobalState

export default function Introduction() {
    const { darkMode } = useGlobalState(); // Usando o hook useGlobalState para acessar o valor de darkMode

    return (
        <div className='Introduction'>
            <div>
                <h1>Cooming soon</h1>
                <i class="fa-solid fa-gear"></i>
            </div>
            <img id="corgiGif" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/58229245652299.583ac55194751.gif" alt="corgi gif"></img>
        </div>
    )
}