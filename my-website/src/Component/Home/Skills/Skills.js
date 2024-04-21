import './skills.css'
import { useGlobalState } from '../../../GlobalState';

const textDarkMode = { color: '#c4c4c4' }, textLightMode = { color: '#1d1d1d' }

export default function Skills() {
    const { darkMode } = useGlobalState();

    return (
        <div className='skills'>
            <i class="devicon-csharp-plain-wordmark" style={darkMode ? textDarkMode : textLightMode}></i>
            <i class="devicon-dot-net-plain-wordmark" style={darkMode ? textDarkMode : textLightMode}></i>
            <i class="devicon-html5-plain-wordmark" style={darkMode ? textDarkMode : textLightMode}></i>
            <i class="devicon-css3-plain-wordmark" style={darkMode ? textDarkMode : textLightMode}></i>
            <i class="devicon-react-original-wordmark" style={darkMode ? textDarkMode : textLightMode}></i>
            <i class="devicon-microsoftsqlserver-plain-wordmark" style={darkMode ? textDarkMode : textLightMode}></i>
            <i class="devicon-postgresql-plain-wordmark" style={darkMode ? textDarkMode : textLightMode}></i>
            <i class="devicon-redis-plain" style={darkMode ? textDarkMode : textLightMode}></i>
            <i class="devicon-apachekafka-original-wordmark" style={darkMode ? textDarkMode : textLightMode}></i>
            <i class="devicon-apache-plain-wordmark" style={darkMode ? textDarkMode : textLightMode}></i>
            <i class="devicon-docker-plain-wordmark" style={darkMode ? textDarkMode : textLightMode}></i>
            <i class="devicon-azure-plain"></i>
        </div>
    )
}