import React, { useState } from 'react';
import ItemDetailContainer from '../../containers/itemdetailcontainer';
//import { CartContext } from '../../context/CartContext';
import ItemComponent from '../item';
import LoadingComponent from '../loading';

const ItemListComponent = (props) => {
    const categoryName = props.categoryName.charAt(0).toUpperCase() + props.categoryName.slice(1)
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
            <div className="submain container-fluid px-0">
                <div className="row">
                    <div className="title__section container-fluid">   
                        <h4>{categoryName}</h4>  
                    </div>
                </div>
                <hr className="hr__personalized"/>
                <div className="modal-body row"> 
                    <div className="col-md-12">
                        <div className="row row__orden">
                {   
                    
                    props.loading ?  
                    items.map(item => (
                        <ItemComponent item={item} key={item.id} onClick={showModal} getItemId={getItemId}/>
                    )) 
                    :
                    <LoadingComponent/>
                }
                {
                    showDetails ? <ItemDetailContainer showDetails={showDetails} itemId={itemId} setShowDetails={setShowDetails}/> : null
                
                }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemListComponent;