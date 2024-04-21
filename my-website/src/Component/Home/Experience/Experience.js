import './Experience.css'

import { useGlobalState } from '../../../GlobalState';

const bgDark = { background: '#191919' }, bgLight = { background: '#fff' }

export default function Experience(){
    const { darkMode } = useGlobalState(); 

    return (
        <div className='experience' style={darkMode ? bgDark : bgLight}>

        </div>
    )
}