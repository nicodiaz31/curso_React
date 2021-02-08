import React, { useState, useEffect } from 'react';
import ItemDetailComponent from '../../components/itemdetail';

const ItemDetailContainer = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {

        async function getItems(){
            await fetch('articles.json')
                    .then(result =>{
                        return result.json()
                    })
                    .then(value => {
                        setItems(value);
                    })

        } 
        
        getItems();

    }, [])


    return (
        <>
            <ItemDetailComponent items={items}/>
        </>
    )
}

export default ItemDetailContainer;