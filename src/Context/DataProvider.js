import React, {useState, createContext, useEffect } from 'react';
import getItems from '../../utils/querysItemsFirebase'
import { useQuery } from 'react-query'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import db from "../utils/firebaseConfig";
 
const dataContext = createContext();

const DataProvider = ({children}) => {
    const {isLoading, isError} = useQuery(['items'], getItems)
    const [texts, setTexts] = useState([])
    const [value, setValue] = useState('');

    useEffect(() => {
        return (() => {
            try {
                getItems().then((response) => {
                    console.log(response)
                    const newTexts = [...texts]
                    for (let item of response) {
                        newTexts.push({name: item.name, id:item.id, checked:item.checked})
                    }  
                    setTexts(newTexts)
                }) 
            } catch {  
            }
        })  
    }, [])

    const saveData = async (newOrder) => {
        const orderFirebase = collection(db, "items");
        const orderDoc = await addDoc(orderFirebase, newOrder)
        console.log(orderDoc)
      }
    const edit = (id,value) => {
        if(value) {
            setValue('')
        }
        updateDoc(doc(db, "items", id) , { name:value });
    }
    const info = {
        texts,
        setTexts,
        isLoading,
        isError,
        saveData,
        edit,
        value,
        setValue
    }

    return (
        <dataContext.Provider value={info} >
            {children}
        </dataContext.Provider>
    )
}

export default dataContext
export { DataProvider }