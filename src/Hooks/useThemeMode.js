import { useState } from "react"



export const useThemeMode = () => {
    
    let initialColor = ''
    if("theme" in localStorage){ 
        initialColor = localStorage.getItem('theme') 
    } else { 
        initialColor = 'green'
    }
    console.log(initialColor)
    
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



