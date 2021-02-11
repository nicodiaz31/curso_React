import React from 'react';
import ItemDetailComponent from '../../components/itemdetail';

const ItemDetailContainer = (props) => {

    const showDetail = props.showDetail;
    
    const item = props.item;
    
    return (
        <>  
           {showDetail ? <ItemDetailComponent item={item} setShowDetail={props.setShowDetail}/> : null}
        </>
    )
}

export default ItemDetailContainer;