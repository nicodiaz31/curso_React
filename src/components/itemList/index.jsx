import React, { useEffect, useState } from 'react';
import ItemDetailContainer from '../../containers/itemdetailcontainer';
import ItemComponent from '../item';

const ItemListComponent = () => {

    const [items, setItems] = useState([]);
    const [showDetails, setShowDetails] = useState(false);
    const [itemId, setItemId] = useState();

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

    const showModal = () => {
        setShowDetails(true)
    }

    const getItemId = (itId) => {
        setItemId(itId)
    }

    return (
        <>
            {
                items.map(item => (
                    <ItemComponent item={item} key={item.id} onClick={showModal} getItemId={getItemId}/>
                ))
            }
            {
                showDetails ? <ItemDetailContainer showDetails={showDetails} itemId={itemId} setShowDetails={setShowDetails}/> : null
            
            }
        </>
    )
}

export default ItemListComponent;