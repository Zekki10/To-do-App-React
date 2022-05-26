import styledComponents from "styled-components";


export const HeaderContainer = styledComponents.div`

    display: flex;
    width: 100%;
    padding: 4% 0;
    background-color: ${({theme}) => theme.color};
    justify-content: center;
    border-radius: 1%;

    h1 {
        font-size: 1.5rem;
        color: #fff;
    }

`