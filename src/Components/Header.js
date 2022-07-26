import { HeaderContainer } from "./HeaderStyle";
import { FaListAlt } from "react-icons/fa";
import { IoMdColorPalette } from "react-icons/io"
import { ThemeSwitch } from '../Components/ThemeSwitch';
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai"
const Header = ({handleClick}) => {
    const [openStyle, setOpenStyle] = useState(false)

    console.log(handleClick)
    return (

        <HeaderContainer>
            <div className="background_color"></div>
            <FaListAlt />
            <h1>TO DO LIST</h1>
            <button className="theme_button" onClick={() => setOpenStyle(true)}>
                <div className="theme_container">
                    <IoMdColorPalette />
                    <p>theme</p>
                </div>
            </button>
            {openStyle && 
                <div className="menu_style">
                    <div className="black_background"></div>
                    <button className="close_theme_button" onClick={() => setOpenStyle(false)}>
                        <AiOutlineClose />
                    </button>
                    <ThemeSwitch handleClick={handleClick} />
                </div>
            }
        </HeaderContainer>

    )
}

export default Header;