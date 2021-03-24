import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

const PromocionesBancariasComponent = () => {

    const { logoCards } = useContext(GlobalContext)

    return(
        <>
            <div className="submain container-fluid px-0">
                <div className="row">
                    <div className="title__section container-fluid">   
                        <h4>Promociones Bancarias</h4>  
                    </div>
                </div>
                <hr className="hr__personalized"/>
                <div className="flex-row">
                    <div className="col-md-12">
                        <p>Todos los días hasta 12 cuotas sin interés con todas las tarjetas de crédito!</p>
                        <p>Si pagas en efectivo hasta 10% de descuento!</p>
                        <label><img className="pagos__logo--tamano" src={logoCards} alt="logoFb"/></label>
                    </div>
                </div>
	        </div>
        </>
    )
}

export default PromocionesBancariasComponent;