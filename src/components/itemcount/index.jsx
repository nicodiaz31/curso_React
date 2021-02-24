import React, { useState } from 'react';

const ItemCountComponent = (props) => {
    const [count, setCount] = useState(1);
    //const [disable, setDisable] = useState(true)

  

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
            <div>
                <div className="row" style={{fontWeight:900, marginLeft:0}}>
                    <h5>Cantidad Disponible:</h5>
                    <h5 style={{fontWeight:'bold', marginLeft:5}}>{ props.stock }</h5>
                </div>
                <button className="btn btn-default btn-number" onClick={onSubstrain}> - </button>
                <input value={ count } disabled className="input-number quantity__input"/>
                <button className="btn btn-default btn-number" onClick={onAdd}> + </button>
                {
                    count > 0 ? 
                        <button className="btn blue__button mt-auto btn__item--detail" onClick={onClick}> Agregar al carrito</button>
                        :
                        null
                }
                
            </div>
        </>
    )
} 

export default ItemCountComponent;