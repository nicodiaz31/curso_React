import React, { useState } from 'react';
import ItemDetailContainer from '../../containers/itemdetailcontainer';
//import { CartContext } from '../../context/CartContext';
import ItemComponent from '../item';

const ItemListComponent = (props) => {
    const categoryName = props.categoryName
    const items = props.items;
    const [showDetails, setShowDetails] = useState(false);
    const [itemId, setItemId] = useState();
    //const cartContext = useContext(CartContext);
    //console.log(cartContext);

    

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
                props.loading ?  
                items.map(item => (
                    <ItemComponent item={item} key={item.id} onClick={showModal} getItemId={getItemId} categoryName={categoryName}/>
                )) 
                :
                <div className="spinner-border" role="status" style={{marginBottom: 15}}>
                    <span className="sr-only">Loading...</span>
                </div>
            }
            {
                showDetails ? <ItemDetailContainer showDetails={showDetails} itemId={itemId} setShowDetails={setShowDetails}/> : null
            
            }
        </>
    )
}

export default ItemListComponent;