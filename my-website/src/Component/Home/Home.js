import './Home.css'

import { useGlobalState } from '../../GlobalState';
import Introduction from './Introduction/introduction'
import Projects from './Projects/Projects'
import Experience from './Experience/Experience'
import Contact from './Contact/Contact'

const bgDark = { background: '#191919' }, bgLight = { background: '#fff' }
export default function Home(){
    const { darkMode } = useGlobalState(); 

    return (
        <div className='home' style={darkMode ? bgDark : bgLight}>
            <Introduction/>
            <Projects />
            <Contact />
        </div>
    )
}