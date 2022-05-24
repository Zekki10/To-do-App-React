import { AddBtn } from "./AddItemStyles"
import { SiAddthis } from "react-icons/si";
import { useState, useContext } from 'react';
import { DataContext } from "../Context/DataProvider"


export const AddItem = (props) => {

    const [texts, setTexts] = useContext(DataContext);
    const [inputText, setInputText] = useState('');
    const [id, setId] = useState(1);

    const getText = (event) => {
        setInputText(event.target.value);
    }

   const submit = (event) => {
        
    //Evita que la pag. se actualice
        event.preventDefault();
        setId(id + 1);
        if (inputText.trim() !== '') {
            setTexts([...texts, {name: inputText, id:id}])
            setInputText('');
        }

    }

    return (
        <div>
            <AddBtn onSubmit={submit}>
                <input value={inputText} onChange={getText} placeholder="New Item" />
                <button><SiAddthis/></button>
            </AddBtn>
        </div>
        )
}