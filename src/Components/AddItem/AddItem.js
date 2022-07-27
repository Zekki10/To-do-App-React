import { AddBtn } from "./AddItemStyles"
import { SiAddthis } from "react-icons/si";
import { useState, useContext } from 'react';
import { DataContext } from "../../Context/DataProvider"
// import { useMutation } from "react-query";
// import { createNewItem } from "../../api/querysItems";
import { addDoc, collection } from 'firebase/firestore'
import db from "../../utils/firebaseConfig"


export const AddItem = (props) => {

    const {texts, setTexts} = useContext(DataContext);
    const [inputText, setInputText] = useState('');
    const [id, setId] = useState(Math.round(Math.random()*100000));

    // const {mutate, error, isLoading} = useMutation(createNewItem);

    const getText = (event) => {
        setInputText(event.target.value);
    }

   const submit = (event) => {
        
        event.preventDefault();
        
        setId(Math.round(Math.random()*100000));
        
        if (inputText.trim() !== '') {
            setTexts([...texts, {id:id, name: inputText }])
            saveData({id:id, name: inputText});
            setInputText('');
        }
    }

    const saveData = async (newOrder) => {
      const orderFirebase = collection(db, "items");
      const orderDoc = await addDoc(orderFirebase, newOrder)
    }


    return (
        <div>
            <AddBtn onSubmit={submit}>
                <input value={inputText} onChange={getText} placeholder="New Item" />
                <button type="button"><SiAddthis/></button>
            </AddBtn>
        </div>
        )
}