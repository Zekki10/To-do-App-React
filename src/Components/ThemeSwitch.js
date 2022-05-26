import { SwitchTheme } from "./ThemeSwitchStyles"




export const ThemeSwitch = ({handleClick}) => {

    
    return (
        <SwitchTheme>
            <span>Choose a style:</span>
            <div>
                <button className="green" onClick={() => handleClick('green')}></button>
                <button className="dark" onClick={() => handleClick('dark')}></button>
                <button className="blue" onClick={() => handleClick('blue')}></button>
            </div>
            </SwitchTheme>
    )
}