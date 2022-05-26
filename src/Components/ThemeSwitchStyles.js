import styledComponents from "styled-components";


export const SwitchTheme = styledComponents.div`
    
    margin: 5% 0 0;
    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction:column;
    div {
        width:180px;
        display:flex;
        justify-content:space-between;
        align-items:center;
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