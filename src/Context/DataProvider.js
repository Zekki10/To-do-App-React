import React, {useState, useEffect, createContext } from 'react';


export const DataContext = createContext();

export const DataProvider = (props) => {

    const [texts, setTexts] = useState([])

    return (
        <DataContext.Provider value={[texts, setTexts]} >
            {props.children}
        </DataContext.Provider>
    )

}