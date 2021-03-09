import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

const PurchaseOrderComponent = (props) => {

    const { createOrder } = useContext(GlobalContext);
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phoneNumber, setPhoneNumber] = useState()

    const orderCreation = (e) => {
        e.preventDefault();
        props.orderCompleted()
        const newOrder = {
            buyer: {
                name: name,
                email: email,
                phoneNumber: phoneNumber
            },
            items: props.cart,
            total: props.total
        }
        createOrder(newOrder);
    }

    const nameHandler = (e) => {
        setName(e.target.value)
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const phoneNumberHandler = (e) => {
        setPhoneNumber(e.target.value)
    }

    return(
        <>
            <div className='modal'>
                <div className='modal-content'> 
                    <span className="close" onClick={() =>
                        props.completeOrder()
                    }>&times;</span>
                    <form className="text-center p-5" onSubmit={orderCreation}>
                            <h2 style={{fontWeight: 900}}>Datos Personales</h2>
                            <input type="text" id="defaultContactFormName" className="form-control mb-4" placeholder="Nombre" 
                                onChange={nameHandler} required/>
                            <input type="email" id="defaultContactFormEmail" className="form-control mb-4" placeholder="E-mail" 
                                onChange={emailHandler} required/>
                            <input type="text" id="defaultContactFormPhone" className="form-control mb-4" placeholder="Teléfono"
                                onChange={phoneNumberHandler} required/>
                            <button className="btn btn-info" type="submit">Finalizar Compra</button>
                    </form>
                </div>
            </div>
            
        </>
    )
}

export default PurchaseOrderComponent;