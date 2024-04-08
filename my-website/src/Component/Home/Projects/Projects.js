import './Projects.css'
import projectData from './resources/projetosData.json'

import { useGlobalState } from '../../../GlobalState';

const textDarkMode = { color: '#c4c4c4' }, textLightMode = { color: '#1d1d1d' }
const bgDark = { background: '#232323' }, bgLight = { background: '#d9d9d9' }
const subTextDark = { color: '#606060' }, subTextLight = { color: '#6f6f6f' }

export default function Projects() {
    const { darkMode } = useGlobalState();

    return (
        <div className='project'  style={darkMode ? bgDark : bgLight}>
            <h1 style={darkMode ? textDarkMode : textLightMode}>My personal <span>projects</span></h1>
            <div className='project-cards'>
                {projectData.map((project) => (
                    <div className='project-card'>
                        <img src={project.img} alt='project img'></img>
                    </div>
                ))}
            </div>
        </div>
    )
}