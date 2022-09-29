import { AddBtn } from "./AddItemStyles"
import { SiAddthis } from "react-icons/si";
import { useState, useContext } from 'react';
import  DataContext from "../../Context/DataProvider"

export const AddItem = () => {
    const { texts, setTexts, saveData } = useContext(DataContext);
    const [inputText, setInputText] = useState('');
    

    const getText = (event) => {
        setInputText(event.target.value);
    }

   const submit = (event) => {  
        event.preventDefault();
        
        if (inputText.trim() !== '') {
            setTexts([...texts, { name: inputText, checked: false }])
            saveData({ name: inputText, checked: false});
            setInputText('');
        }
    }
    



    return (
        <div>
            <AddBtn onSubmit={submit}>
                <input value={inputText} onChange={getText} placeholder="New Item" />
                <button type="submit"><SiAddthis/></button>
            </AddBtn>
        </div>
        )
}