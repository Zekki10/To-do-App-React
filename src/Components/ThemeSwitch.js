import { SwitchTheme } from "./ThemeSwitchStyles"




export const ThemeSwitch = ({handleClick}) => {

    
    return (
    <SwitchTheme>
        <button className="green" onClick={() => handleClick('green')}></button>
        <button className="dark" onClick={() => handleClick('dark')}></button>
        <button className="blue" onClick={() => handleClick('blue')}></button>
    </SwitchTheme>
    )
}