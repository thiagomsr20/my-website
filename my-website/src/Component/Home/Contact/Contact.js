import './Contact.css'
import { useGlobalState } from '../../../GlobalState';

const textDarkMode = { color: '#c4c4c4' }, textLightMode = { color: '#1d1d1d' }

export default function Contact(){
    const { darkMode } = useGlobalState(); 

    return (
        <div className='contact'>
            <h1 style={darkMode ? textDarkMode : textLightMode}>Let's work <span>together</span></h1>
            <form>
                <input type='text' placeholder='Email' required='true'/>
                <textarea placeholder='Message'></textarea>
                <button type='submit'>Send</button>
            </form>
        </div>
    )
}