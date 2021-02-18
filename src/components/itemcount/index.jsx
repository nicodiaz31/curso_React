import React, { useState } from 'react';

const ItemCountComponent = (props) => {
    const [count, setCount] = useState(props.quantity);

    const onAdd = () => {
        if (count < props.stock) {
            let quantity = count + 1;
            setCount(quantity);
        }
    } 

    const onSubstrain = () => {
        if (count > 0) {
            let quantity = count - 1;
            setCount(quantity);
        }
    }

    const onClick = () =>{
        props.onAdd(count)
    }
    
    return (
        <>
            <div className="modal-body row">
                <p>Cantidad Disponible: { props.stock }</p>
                <button className="btn btn-primary" onClick={onSubstrain}> - </button>
                <input value={ count } disabled className="quantity__input"/>
                <button className="btn btn-primary" onClick={onAdd}> + </button>
                <button className="btn blue__button mt-auto" onClick={onClick}> Agregar al carrito</button>
            </div>
        </>
    )
} 

export default ItemCountComponent;