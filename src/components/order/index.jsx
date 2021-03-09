import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

const OrderComponent = () => {

    const {orderNumber} = useContext(GlobalContext)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setLoading(true)
        if(orderNumber !== undefined) {
            setLoading(false)
        }
        return() => {}
    },[orderNumber])

    return(
        <>  
            <div className="row" style={{ marginBottom:25 }}>
                <div className="title__section container-fluid">   
                {   
                    loading ?  
                    <div className="spinner-border" role="status" style={{marginBottom: 15}}>
                        <span className="sr-only">Loading...</span>
                    </div>
                    :
                    <div>
                        <h4>Gracias por su compra!</h4>
                        <h3>Su número de orden es: {orderNumber}</h3> 
                    </div>
                }
                </div>
            </div>  
        </>
    )
}

export default OrderComponent;