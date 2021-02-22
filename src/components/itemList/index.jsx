import React, { useContext, useEffect, useState } from 'react';
import ItemDetailContainer from '../../containers/itemdetailcontainer';
import { CartContext } from '../../context/CartContext';
import ItemComponent from '../item';

const ItemListComponent = (props) => {

    const [categoryName, setCategoryName] = useState(props.categoryName)
    const [items, setItems] = useState([]);
    const [showDetails, setShowDetails] = useState(false);
    const [itemId, setItemId] = useState();
    const cartContext = useContext(CartContext);
    console.log(cartContext);

    useEffect(() =>{
        if (categoryName === 'guitarras' || categoryName === 'bajos'){
            const catName = categoryName.slice(0,-1);
            setCategoryName(catName)
        } else if (categoryName === "amplificadores"){
            const catName = categoryName.slice(0,-2);
            setCategoryName(catName)
        }
        setTimeout(() => {
            fetch('/articles.json')
                .then(result => {
                    return result.json()
                })
                .then(value => {
                    value.forEach(element =>{
                        if(element.tipo === categoryName){
                             console.log(element)
                            setItems(prevArray => [...prevArray, element])
                        }
                    })
                    
                    
                })
        },2000)
        return () => {}
    }, [categoryName])

    const showModal = () => {
        console.log(showDetails)
        setShowDetails(prev => !prev)
        console.log(showDetails)
    }

    const getItemId = (itId) => {
        setItemId(itId)
    }

    return (
        <>
            {
                items.map(item => (
                    <ItemComponent item={item} key={item.id} onClick={showModal} getItemId={getItemId} categoryName={categoryName}/>
                ))
            }
            {
                showDetails ? <ItemDetailContainer showDetails={showDetails} itemId={itemId} setShowDetails={setShowDetails}/> : null
            
            }
        </>
    )
}

export default ItemListComponent;