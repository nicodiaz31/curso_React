import React, { useState } from 'react';
import ItemDetailContainer from '../../containers/itemdetailcontainer';

const ItemCountComponent = (props) => {
    const [count, setCount] = useState(props.initialValue);

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
    
    return (
        <>
            <div>
                <button className="btn btn-primary" onClick={ () =>
                    onSubstrain()
                }> - </button>
                <input value={ count } disabled className="quantity__input"/>
                <button className="btn btn-primary" onClick={ ()=>
                    onAdd()
                }> + </button>
            </div>
            <ItemDetailContainer/>
        </>
    )
} 

export default ItemCountComponent;