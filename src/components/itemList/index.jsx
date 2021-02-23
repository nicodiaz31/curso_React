import React, { useContext, useEffect, useState } from 'react';
import ItemDetailContainer from '../../containers/itemdetailcontainer';
//import { CartContext } from '../../context/CartContext';
import ItemComponent from '../item';

const ItemListComponent = (props) => {

    const [loading, setLoading] = useState(false)
    const [categoryName, setCategoryName] = useState(props.categoryName)
    const [items, setItems] = useState([]);
    const [showDetails, setShowDetails] = useState(false);
    const [itemId, setItemId] = useState();
    //const cartContext = useContext(CartContext);
    //console.log(cartContext);

    useEffect(() =>{
        if (categoryName === 'guitarras' || categoryName === 'bajos' || categoryName === 'destacados' || categoryName === 'descuentos'){
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
                    if (categoryName === 'destacado' || categoryName === 'descuento' || categoryName === 'novedades'){
                        value.forEach(element =>{
                            if(element[categoryName] === true){
                                setItems(prevArray => [...prevArray, element])
                                setLoading(true)
                            }
                        })
                    } else {
                        value.forEach(element =>{
                            if(element.tipo === categoryName){
                                setItems(prevArray => [...prevArray, element])
                                setLoading(true)
                            }
                        })
                    }
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
                loading ?  
                items.map(item => (
                    <ItemComponent item={item} key={item.id} onClick={showModal} getItemId={getItemId} categoryName={categoryName}/>
                )) 
                :
                <div class="spinner-border" role="status" style={{marginBottom: 15}}>
                    <span class="sr-only">Loading...</span>
                </div>
            }
            {
                showDetails ? <ItemDetailContainer showDetails={showDetails} itemId={itemId} setShowDetails={setShowDetails}/> : null
            
            }
        </>
    )
}

export default ItemListComponent;