import styledComponents from "styled-components";


export const ItemRow = styledComponents.li`

    width:100%;
    border: 1px solid ${({theme}) => theme.color};
    padding: 1% 2%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: auto;   
    overflow: hidden;
    &.li_checked {
        border: 1px solid #808080;
        background-color: #dcdcdc;
    }

    div {
        width: 15%;
        display: flex;
        align-items: center;
        width: 100%;        
    }
    .div_span {
        justify-content: left;
        width:80%;
    }
    .div_icons{
        justify-content: right;
        heigth: auto;
    }
    span {
        width:80%;
        overflow:hidden;
        &.checked {
            text-decoration:line-through;
    }
    }
    form {
        display:flex;
        width: 100%;
    }
    svg {
        font-size: 1.5rem;
        color: #041C14;
        padding: 0 5%;
        &:hover {
            color: ${({theme}) => theme.subColor};
            cursor:pointer;
    }
    }
    button {
        border:none;
        background: none;
        margin: 0 2%;
        
    }
    .input_edit {
        width: 100%;
        margin: 0;
        padding: .5% 0;
    }
    .edit_button {
        justify-content: right;
        width:20%;
        margin: 0;
    }
    .input_checkbox {
        margin-right: 2%;
    }
    input[type="checkbox"] {
        appearance: none;
        height:15px;
        width:15px;
        border: 1px solid ${({theme}) => theme.subColor};
        cursor:pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        &:after {
            content:"✓";
            font-weight:900;
            display:none;
        }
        &:hover {
            background-color:none;
        }
        &:checked{
            border:1px solid #808080;
            background-color: #808080;
        }
        &:checked:after {
            display:flex;
        } 
    }

    

    @media (max-width: 540px) {
        

        .div_span {
            heigth: auto;
            overflow:hidden;
        }
        span {
            width:100%;
        }
        .div_icons {
            width: 30%;
        }
      }
`
