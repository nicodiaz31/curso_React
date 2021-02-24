import React, { useEffect, useState } from 'react';
import ItemCountComponent from "../itemcount";
import { Link } from 'react-router-dom';

const ItemDetailComponent = (props) => {

    const [quantity, setQuantity] = useState(0);
    const [showButton, setShowButton] = useState(false)
    const stock = 9;
    let clases = "img-fluid z-depth-1 img__detail--viewAlt";

    useEffect(()=>{
        return () => {};
    },[]);

    const onAdd = (quantity) => {
        setQuantity(quantity);
        console.log("cantidad: " + quantity)
        setShowButton(true);
        console.log(showButton)
    }

    if (props.item.tipo === "guitarra" || props.item.tipo === "bajo" || props.item.tipo === "auriculares") {
        clases = "img-fluid z-depth-1 img__detail--view"
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
                    <div className="col-md-6 mb-4 mb-md-0">
                        <div className="mdb-lightbox" style={{ textAlign: "center" }}>
                            <div className="col-12 mb-0">
                                <figure className="view overlay rounded z-depth-1 main-img">
                                    <img src={"/"+props.item.imagen} alt={props.item.modelo} className={clases}/>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <h4 style={{ marginLeft: 0}}>{props.item.marca} {props.item.modelo}</h4>
                        <hr className="hr__personalized"/>
                        <h5 style={{fontWeight:900}}>Precio: ${props.item.precio}</h5>
                        <h5 style={{fontWeight:900}}>Descripción:</h5> 
                        <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit impedit quidem asperiores assumenda ad modi facere vitae, sapiente adipisci laboriosam porro iste nemo ut. Animi, ipsam! Eum unde blanditiis architecto!</h5>
                    { showButton ?
                        <Link to={`/cart`} className="btn blue__button mt-auto btn__item--detail">Finalizar Compra</Link>
                        :
                        <ItemCountComponent stock={ props.item.stock } quantity={quantity} onAdd={onAdd}/>
                    }
                    </div>

            </>
        )
    }

    
}

export default ItemDetailComponent;