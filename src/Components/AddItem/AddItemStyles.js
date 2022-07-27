import styledComponents from "styled-components";


export const AddBtn = styledComponents.form`

    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    margin: 4% auto;
    heigth: 2rem;

    input {
        width: 50%;
        padding:1%;
        margin: 0 3%;
    &:focus {
        outline: solid 1px  ${({theme}) => theme.color};
    }
    }

    button {
        border: none;
        background: none;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${({theme}) => theme.color};
        height: 100%;
        width:4vw;
        
        &:hover {
            color: ${({theme}) => theme.subColor};
            cursor: pointer;
        }
    }
    svg {
        width: 100%;
        height: 2rem;
        min-width: 2em;
    }


`
