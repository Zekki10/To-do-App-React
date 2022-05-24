import styledComponents from "styled-components";


export const HeaderContainer = styledComponents.div`

    display: flex;
    width: 100%;
    padding: 4% 0;
    background-color: ${({theme}) => theme.color};
    justify-content: center;
    border-radius: 1%;

    box-shadow: 0px 0px 50px -15px rgba(0,0,0,0.75) inset;
    -webkit-box-shadow: -1px 1px 50px -15px rgba(0,0,0,0.75) inset;
    -moz-box-shadow: -1px 1px 50px -15px rgba(0,0,0,0.75) inset;

    h1 {
        font-size: 1.5rem;
        color: #fff;
    }

`