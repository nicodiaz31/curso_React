import React from 'react';
import ItemCountComponent from "../itemcount";

const ItemDetailComponent = (props) => {

    let stock = 9;
    const initialValue = stock > 0 ? 1 : 0;

    return (
        <>
            <div className='modal'>
                <div className='modal-content'> 
                    <span className="close" onClick={() =>
                        props.setShowDetails(prev => !prev)
                    }>&times;</span>
                    <span>{props.item.marca}</span>
                    <span>{props.item.modelo}</span>
                    <span>{props.item.precio}</span>
                    <span>{props.item.imagen}</span>
                </div>
            </div>
            <p>Cantidad Disponible: { stock }</p>
            <ItemCountComponent stock={ stock } initialValue={ initialValue }/>
        </>
    )
}

export default ItemDetailComponent;