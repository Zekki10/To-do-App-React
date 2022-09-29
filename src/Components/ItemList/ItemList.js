import React, { useContext } from 'react'
import { ListContainer } from "./ItemListStyles"
import { Item } from "../Item/Item"
import DataContext from "../../Context/DataProvider"


export const ItemList = () => {
    
    const {texts, setTexts, isLoading, isError} = useContext(DataContext);

    const editTexts = (value,id) => {
        const newTexts = [...texts];
        newTexts.forEach((text) => {
            if(text.id === id){
                text.name = value;
            }
        })
        setTexts(newTexts)
    }
    


        
    if (!isLoading && !isError) {
        
        return (
            <ListContainer>
                {
                    texts.map((text, index) => (
                        <Item text={text.name} key={index} id={text.id}/>
                    ))
                }
            </ListContainer>
        )
    } else if (isLoading) {
        return (
            <ListContainer>
                <span className='loading'>Loading... </span>   
            </ListContainer>
        )
        
    } else {
        return (
            <ListContainer>
                <span className='error'>cannot connect... try 'npm run fake-api'</span>
                {
                    texts.map((text, index) => (
                        <Item text={text} key={index} id={text.id} editTexts={editTexts} checked={text.checked} />
                    ))
                }
            </ListContainer>
        )
        
    }
}

