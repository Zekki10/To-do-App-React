import styledComponents from "styled-components";

export const ListContainer = styledComponents.ul`

    margin: 0 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style:none;

    .error {
        padding: 2%;
        background-color: #ff6961
    }
    .loading {
        padding: 2%;
        background-color: ${({theme}) => theme.color};
    }

`