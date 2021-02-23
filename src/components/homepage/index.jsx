import React from 'react';
import { Link } from 'react-router-dom';

const HomepageComponent = () => {

    return(
        <>
            <div className="main container-fluid px-0">
                <div className="row no-gutters">
                    <div className="col-md-12">
                        <Link  to={`/category/novedades`}><img src="images/novedades.jpeg" alt="novedades" className="submain__img--tamano"/>
                        <div className="title__image--center">
                            <p className="title__image--style">Novedades</p>
                        </div></Link>
                    </div>
                    <div className="col-md-6">
                        <Link to={`/category/destacados`}><img src="images/destacados.jpeg" alt="destacados" className="submain__img--tamano"/>
                        <div className="title__image--center">
                            <p className="title__image--style">Destacados</p>
                        </div></Link>
                    </div>
                    <div className="col-md-6">
                        <Link to={`/category/descuentos`}><img src="images/promociones.jpeg" alt="promociones" className="submain__img--tamano"/>
                        <div className="title__image--center">
                            <p className="title__image--style">Promociones</p>
                        </div></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomepageComponent;