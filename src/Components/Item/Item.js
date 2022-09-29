import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { SiAddthis } from "react-icons/si";
import { ItemRow } from "./ItemStyles";
import React, { useState, useContext } from 'react';
import { DataContext } from "../../Context/DataProvider";
import { updateDoc, deleteDoc, doc } from "firebase/firestore";
import db from "../../utils/firebaseConfig"


export const Item = ({text, id, editTexts}) => {

    const { texts, setTexts } = useContext(DataContext);
    const [onEdit, setOnEdit] = useState(false);
    const [value, setValue] = useState(text.name);
        const [isChecked, setChecked] = useState(text.checked || false)

    
    const edit = id => {
        setOnEdit(false);
        if(value) {
            editTexts(value,id)
            setValue('')
        }
        updateDoc(doc(db, "items", id), {id:id, name:value});
        // updateItem(id, {id:id, name:value})
    }

    const deleteItem = id => {
        const newTexts = texts.filter(item=> item !== text )
        setTexts(newTexts)
        deleteDoc(doc(db, "items", id));
    }
    const setCheck = () =>{
        setChecked(!isChecked)
        console.log(!isChecked)
        // updateDoc(doc(db, "items", id), {checked:!isChecked || false});
    }

    if (onEdit === true) {

        return (
            <ItemRow>
                <form>
                    <input className="input_edit" value={value} onChange={event => setValue(event.target.value)} />
                    <div className="edit_button">
                        <button onClick={() => edit(text.id, text.name)}>
                            <SiAddthis />
                        </button>
                    </div>
                </form>
            </ItemRow>
        )

    } else if (!isChecked) {
        return (
            <ItemRow>
                <div className="div_span">
                    <input className="input_checkbox" type='checkbox' defaultChecked={text.checked} onChange={() => setCheck()}  />
                    <span>{text.name}</span>
                </div>
                <div className="div_icons">
                    <button onClick={() => setOnEdit(true)}>
                        <MdModeEditOutline /> 
                    </button>
                    <button>
                        <MdDelete onClick={() => console.log("delte")} />
                    </button>
                </div>
            </ItemRow>
        )
    } else {
        return (
            <ItemRow className="li_checked">
                <div className="div_span checked">
                    <input className="input_checkbox checked" type='checkbox' defaultChecked={text.checked} onChange={() => setCheck()} />
                    <span className="checked">{text.name}</span>
                </div>
                <div className="div_icons checked">
                    {/* <button onClick={() => setOnEdit(true)}>
                        <MdModeEditOutline /> 
                    </button> */}
                    <button>
                        <MdDelete onClick={() => console.log('delte')} />
                    </button>
                </div>
            </ItemRow>
        )
    }
}