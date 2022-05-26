import { AddBtn } from "./AddItemStyles"
import { SiAddthis } from "react-icons/si";
import { useState, useContext } from 'react';
import { DataContext } from "../Context/DataProvider"
import { useMutation } from "react-query";
import { createNewItem } from "../api/querysItems";




export const AddItem = (props) => {

    const [texts, setTexts] = useContext(DataContext);
    const [inputText, setInputText] = useState('');
    const [id, setId] = useState(Math.round(Math.random()*100000));
    const {mutate, error, isLoading} = useMutation(createNewItem);

    const getText = (event) => {
        setInputText(event.target.value);
    }

   const submit = (event) => {
        
        event.preventDefault();
        
        setId(Math.round(Math.random()*100000));
        
        if (inputText.trim() !== '') {
            setTexts([...texts, {id:id, name: inputText }])
            sendItem({id:id, name: inputText});
            setInputText('');
        }
    }

    const sendItem = (newItem) => {
        mutate(newItem)
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