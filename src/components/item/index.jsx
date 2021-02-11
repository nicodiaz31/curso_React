import React, { useState } from 'react';
import ItemDetailContainer from '../../containers/itemdetailcontainer';

const ItemComponent = (props) => {

    const [showDetail, setShowDetail] = useState(false);
    const item = props.item;

    const showModal = () => {
        setShowDetail(prev => !prev)
        console.log(showDetail);
    }

    return (
        <>
            <div className="d-flex">
                <div className="card" id="card__one--color">
                    <div className="image">
                        <img src={item.imagen} alt={item.modelo}/>
                    </div>
                    <div className="details__card">
                        <div className="center">
                            <p className="p__title">{item.marca} {item.modelo}</p>
                            <p>Precio: ARS ${item.precio}</p>
                            <button className="btn blue__button mt-auto" onClick={showModal}>Ver Artículo</button>
                        </div>
                    </div>
                </div>
            </div>
            <ItemDetailContainer item={item} showDetail={showDetail} setShowDetail={setShowDetail}/>
        </>
    )
}

export default ItemComponent;