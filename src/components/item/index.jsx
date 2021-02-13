import React from 'react';
//import ItemDetailContainer from '../../containers/itemdetailcontainer';

const ItemComponent = (props) => {

    //const [showDetail, setShowDetail] = useState(false);
    const item = props.item;

    const onClick = () => {
        props.getItemId(item.id)
        props.onClick();
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
                            <button className="btn blue__button mt-auto" onClick={onClick}>Ver Artículo</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemComponent;