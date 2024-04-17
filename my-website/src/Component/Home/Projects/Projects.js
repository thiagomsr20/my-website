import './Projects.css'
import projectData from './resources/projetosData.json'

import { useGlobalState } from '../../../GlobalState';

const textDarkMode = { color: '#c4c4c4' }, textLightMode = { color: '#1d1d1d' }
const bgDark = { background: '#232323' }, bgLight = { background: '#e8e8e8' }
const boxShadowDark = { boxShadow: '0 5px 10px #000' }, boxShadowLight = { boxShadow: '0 5px 10px #5a5a5a' }

export default function Projects() {
    const { darkMode } = useGlobalState();

    return (
        <div className='project' style={darkMode ? bgDark : bgLight}>
            <h1 style={darkMode ? textDarkMode : textLightMode}>My personal <span>projects</span></h1>
            <div className='project-cards'>
                {projectData.map((project) => (
                    // <div className='project-card' style={darkMode ? boxShadowDark : boxShadowLight}>
                    //     <img src={project.img} alt='project img'></img>
                    // </div>

                    <div class="parent">
                        <div class="card">
                            <div class="content-box">
                                <span class="card-title">{project.title}</span>
                                <p class="card-content">
                                    {project.desc}
                                </p>
                                <span class="see-more">See More</span>
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