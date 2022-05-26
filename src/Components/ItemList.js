import React, { useContext, useEffect, useState } from 'react'
import { ListContainer } from "./ItemListStyles"
import { Item } from "./Item"
import { DataContext } from "../Context/DataProvider"


export const ItemList = () => {

    const [texts, setTexts] = useContext(DataContext);
    const [load, setLoad] = useState(false);

    
    const editTexts = (value,id) => {
        const newTexts = [...texts];
        newTexts.forEach((text, index) => {
            if(index === id){
                text.name = value;
            }
        })
        setTexts(newTexts)
    }
    

    const getItem = () => {
        
        fetch(`http://localhost:5000/items`)
        .then((response) => {
            return response.json()
        })
        .then( (res)=> { 
            const newTexts = [...texts]
            for (let item of res) {
                newTexts.push({name: item.text, id:item.id})
            }  
            setTexts(newTexts)
            setLoad(true) 
        })
        .catch (() => {
            console.error('error de servidor');
            setLoad(false)
        })
    }
    useEffect(() => {
        try {
            getItem()
        } catch {
            console.log('error')
        }
    }, [])
        
   

    if (load) {
        
        return (
            <ListContainer>
                {
                    texts.map((text, index) => (
                        <Item text={text} key={index} id={index} editTexts={editTexts} />
                    ))
                }
            </ListContainer>
        )
    } else {
        return (
            <ListContainer>
                <span className='loading'>Loading... try 'npm run fake-api'</span>
                {
                    texts.map((text, index) => (
                        <Item text={text} key={index} id={index} editTexts={editTexts} />
                    ))
                }
            </ListContainer>
        )
    }
}