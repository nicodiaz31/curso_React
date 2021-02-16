import React from 'react';
import { NavLink } from 'react-router-dom';
//import ItemDetailContainer from '../../containers/itemdetailcontainer';

const ItemComponent = (props) => {

    //const [showDetail, setShowDetail] = useState(false);
    let ban = false;
    const item = props.item;

    const onClick = () => {
        props.getItemId(item.id)
        
        props.onClick();
    }

    if(item.tipo === 'auriculares' || item.tipo === 'amplificador'){
        ban = true;
    }

    return (
        <>
            <div className="d-flex">
                <div className="card" id="card__one--color">
                    <div className="image">
                        { ban ? <img src={"/"+item.imagen} className='img__ancha' alt={item.modelo}/>:<img src={"/"+item.imagen} alt={item.modelo}/>}
                    </div>
                    <div className="details__card">
                        <div className="center">
                            <p className="p__title">{item.marca} {item.modelo}</p>
                            <p>Precio: ARS ${item.precio}</p>
                            <button className="btn blue__button mt-auto" onClick={onClick}><NavLink to={`/category/guitarras/item/${item.id}`}>Ver Artículo</NavLink></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemComponent;