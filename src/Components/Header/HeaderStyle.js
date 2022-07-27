import styledComponents from "styled-components";


export const HeaderContainer = styledComponents.div`

    display: flex;
    width: 100%;
    height:20%;
    padding: 4% 0;
    // filter: drop-shadow(0 0 0 ${({theme}) => theme.color}); 
    background: url('./todopng.jpg') ${({theme}) => theme.color} no-repeat fixed;
    justify-content: flex-start;
    align-items: center;
    border-radius: 1%;
    // overflow: hidden;
    position:relative;

    .background_color {
        display: flex;
        position:absolute;
        background-color: ${({theme}) => theme.color};
        width:100%;
        opacity:.5;
        height:100%;
        z-index:5;
    }
    h1 {
        font-size: 1.5rem;
        color: #fff;
        z-index:10;
        filter: opacity(1) drop-shadow(0 0 0 #fff)
    }
    svg {
        font-size: 2.5rem;
        color: #fff;
        padding: 0 5%;
        z-index:10;
    }
    .theme_button {
        position: absolute;
        right:25px;
        background: none;
        border: none;
        cursor:pointer;
    }
    .theme_container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }
    .theme_container p {
        color: #fff;
        z-index:20;
    }
    .menu_style {
        position:absolute;
        background-color: #fff;
        width:20%;
        min-width:150px;
        height:100vh;
        z-index:20;
        top:0;
        right:0;
    }
    .menu_style div {
        display: flex;
        flex-direction:column;
        width:100%;
        align-items: center;
        justify-content: flex-start;
        background-color: #fff;
    }
    .close_theme_button {
        background-color: #fff;
        border: none;
        cursor:pointer;
        width:100%;
        display:flex;
        justify-content: flex-end;
        align-items: center;
        z-index: 2;
    }
    .close_theme_button svg {
        color: #000;
        width:26px
    }
    .menu_style .black_background {
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: #00000099;
        z-index: -1;
    }

`