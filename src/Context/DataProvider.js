import React, {useState, createContext } from 'react';

export const DataContext = createContext();


export const DataProvider = (props) => {
    const [texts, setTexts] = useState([])
    
    const data = {
        texts,
        setTexts
    }

    return (
        <DataContext.Provider value={data} >
            {props.children}
        </DataContext.Provider>
    )
}