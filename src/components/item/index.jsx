import React, { useState } from 'react';

const ItemComponent = (props) => {

    const [item, setItem] = useState(props.item)

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
                                <a href="articulo.html" className="btn blue__button mt-auto">Ver Artículo</a>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default ItemComponent;