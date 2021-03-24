import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPageComponent = () =>{
    return(
        <>
             <div className="row" style={{ marginBottom:25 }}>
                <div className="title__section container-fluid">   
                    <h4>Página no existe!</h4>
                    <Link to={`/busqueda`} className="btn blue__button mt-auto" style={{color:'white'}}>Buscar Artículos</Link>  
                </div>
            </div>
        </>
    )
}

export default ErrorPageComponent;