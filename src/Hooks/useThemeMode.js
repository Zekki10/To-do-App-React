import { useState } from "react"



export const useThemeMode = () => {
    const initialColor = localStorage.getItem('theme')
    const [theme, setTheme] = useState(initialColor);
    
    const switchTheme = (theme) => {
        
        if (theme === "blue") {
            setTheme("blue");
            return;
        } else if (theme === "dark") {
            setTheme("dark");
            return;
        } else {
            setTheme("green");
        }
    };
    
    return [theme, switchTheme];
    };



