import React, { useContext } from 'react'
import { ListContainer } from "./ItemListStyles"
import { Item } from "./Item"
import { DataContext } from "../Context/DataProvider"


export const ItemList = () => {

    const [texts, setTexts] = useContext(DataContext);

    const editTexts = (value,id) => {
        const newTexts = [...texts];
        newTexts.forEach((text, index) => {
            if(index === id){
                text.name = value;
            }
        })
        setTexts(newTexts)
    }


    return (
        <ListContainer>
            {
                texts.map((text, index) => (
                    <Item text={text} key={index} id={index} editTexts={editTexts} />
                ))
            }
        </ListContainer>
    )
}