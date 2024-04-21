import './Projects.css'
import projectData from './resources/projetosData.json'

import { useGlobalState } from '../../../GlobalState';

const textDarkMode = { color: '#c4c4c4' }, textLightMode = { color: '#1d1d1d' }
const bgDark = { background: '#232323' }, bgLight = { background: '#d4d4d4' }

export default function Projects() {
    const { darkMode } = useGlobalState();

    return (
        <div className='project' style={darkMode ? bgDark : bgLight}>
            <h1 style={darkMode ? textDarkMode : textLightMode}>My personal<span>:projects:</span></h1>
            <div className='project-cards'>
                {projectData.map((project) => (
                    <div class="parent">
                        <div class="card" 
                        style={{ backgroundImage: `url(${project.img})` }}>
                            <div class="content-box">
                                <span class="card-title">{project.title}</span>
                                <p class="card-content">
                                    {project.desc}
                                </p>
                                <a class="see-more" href={project.url} target='blank'>See More</a>
                            </div>
                            <div class="date-box">
                                <span class="month">APRIL</span>
                                <span class="date">16</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}