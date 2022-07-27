import { SwitchTheme } from "./ThemeSwitchStyles"




export const ThemeSwitch = ({handleClick}) => {

    const setTheme = (theme) => {
        handleClick(theme)
        localStorage.setItem('theme',theme)
    }
    return (
        <SwitchTheme>
            <span>Choose a style:</span>
            <div>
                <button className="green" onClick={() => setTheme('green')}></button>
                <button className="dark" onClick={() => setTheme('dark')}></button>
                <button className="blue" onClick={() => setTheme('blue')}></button>
            </div>
        </SwitchTheme>
    )
}