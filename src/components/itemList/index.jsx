import React, { useEffect, useState } from 'react';
import ItemComponent from '../item';

const ItemListComponent = () => {

    const [items, setItems] = useState([]);

    useEffect(() =>{
        setTimeout(() => {
            fetch('articles.json')
                .then(result => {
                    return result.json()
                })
                .then(value => {
                    setItems(value)
                    console.log(value)
                })
        },2000)
        return () => {}
    }, [])

    return (
        <>
                {
                    items.map(item => (
                        <ItemComponent item={item}/>
                    ))
                }
        </>
    )
}

export default ItemListComponent;