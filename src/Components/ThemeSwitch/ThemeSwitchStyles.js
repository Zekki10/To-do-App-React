import styledComponents from "styled-components";

export const SwitchTheme = styledComponents.div`
    
    display:flex;
    justify-content:center;
    align-items: center;
    position:absolute;
    height:100%;
    z-index:20;
    padding-top:10%;
    right:0;
    border: .5px solid #000
    div {
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:center;
        width:100%;
        background-color: #fff;
    }
    button {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        border: solid 1px #000;
        margin: 5% 3%;
        &:hover {
            opacity: .8;
            cursor: pointer;
        }
    }
    .green {
        background-color: #48D965;
    }
    .blue {
        background-color: #1965FC;
    }
    .dark {
        background-color: #272727;
    }

`