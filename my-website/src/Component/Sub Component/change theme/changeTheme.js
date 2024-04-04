import './changeThem.css'
import { useGlobalState } from '../../../GlobalState'

export default function Checkbox() {

    const { darkMode, toggleDarkMode } = useGlobalState();

    return (
        <label class="switch">
            <input
                type="checkbox"
                checked={darkMode}
                onChange={toggleDarkMode}></input>
            <span class="slider"></span>
        </label>
    )
}