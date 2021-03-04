import React, { useContext, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartComponent = () => {

    const {cart, removeItem, clear, total, calcTotal } = useContext(CartContext)

    useEffect(()=>{
        return () => {};
    },[])

    cart.forEach(prod => {
        console.log(prod.item)
    })

    calcTotal()

    if (cart.length > 0){
        return(
            <>
            <div className="row">
                <div className="title__section container-fluid">   
                    <h4>Carrito de Compras</h4>  
                </div>
            </div>
            <hr className="hr__personalized"/>
            <div className="submain container-fluid px-0">
                <div className="flex emptyCart">
                    <div className="small__container cart-page">
                        <table className="listadoProductos">
                            <thead>
                                <tr>
                                    <th><label>Productos</label></th>
                                    <th><label>Cantidad</label></th>
                                    <th><label>Subtotal</label></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map(producto => {
                                        return <tr className="torta" key={producto.item.id}>
                                            <td>
                                                <div className="cart-info">
                                                    <div className="div-img" style={{width:130, minWidth:130, maxHeight:130}}>
                                                        <img src={"/"+producto.item.imagen} alt={producto.item.modelo} style={{width:60,marginLeft:25}}/>
                                                    </div>
                                                    <div>
                                                        <p>{producto.item.marca} {producto.item.modelo}</p>
                                                        <small>Precio: ${producto.item.precio}</small>
                                                        <button className="remove-option" onClick={remove => {
                                                            removeItem(producto.item.id)
                                                        }}>Eliminar</button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="center-input">
                                                <p>{producto.quantity}</p>
                                            </td>
                                            <td>{(producto.item.precio * producto.quantity).toFixed(2)}</td>
                                        </tr>  
                                    })
                                }
                            </tbody>
                        </table>
                        <div className="total-price">
                            <table className="total-table">
                                <tbody>
                                    <tr>
                                        <td>Total: {total ? total.toFixed(2):""}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="contBotones">
                        <button className="btn btn-info" id="emptyCartBtn" style={{margin:5}} onClick={clear}>Vaciar Carrito</button>
                        <button className="btn btn-info botonCompra" id="botonCompra" style={{margin:5}}>Comprar</button>
                    </div>
                </div>
            </div>
            </>
        )
    } else {
        return (<>
            <div className="row" style={{ marginBottom:25 }}>
                <div className="title__section container-fluid">   
                    <h4>Carrito de compras vacío :)</h4>
                    <Link to={`/busqueda`} className="btn blue__button mt-auto" style={{color:'white'}}>Buscar Artículos</Link>  
                </div>
            </div>
        </>)
    }   
}

export default CartComponent;