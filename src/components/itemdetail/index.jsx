import React, { useEffect, useState } from 'react';
import ItemCountComponent from "../itemcount";
import {NavLink} from 'react-router-dom';

const ItemDetailComponent = (props) => {

    const [quantity, setQuantity] = useState(0);
    const [showButton, setShowButton] = useState(false)
    const stock = 9;

    useEffect(()=>{
        return () => {};
    },[]);

    const onAdd = (quantity) => {
        setQuantity(quantity);
        console.log("cantidad: " + quantity)
        setShowButton(true);
        console.log(showButton)
    }

    if (props.showModal === true) {
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
                <ItemCountComponent stock={ stock } quantity={quantity} onAdd={onAdd}/>
            </>
        )
    } else {
        return (
            <>
                <div className="row row__orden">
                    <div className="row">
                        <span>{props.item.marca}</span>
                    </div>
                    <div className="row">
                        <span>{props.item.modelo}</span>
                    </div>
                    <div className="row">
                        <span>Precio: {props.item.precio}</span>
                    </div>
                    <div className="row">
                        <span>{props.item.imagen}</span>
                    </div>
                    <div className="row">
                        {showButton ? <button className="btn blue__button mt-auto">
                            <NavLink to={`/cart`}>Finalizar Compra</NavLink>
                            </button>:<ItemCountComponent stock={ stock } quantity={quantity} onAdd={onAdd}/>}
                    </div>
                </div>
                
            </>
        )
    }

    
}

export default ItemDetailComponent;