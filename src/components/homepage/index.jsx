import React from 'react';

const HomepageComponent = () => {

    return(
        <>
            <div className="main container-fluid px-0">
                <div className="row no-gutters">
                    <div className="col-md-12">
                        <a href="novedades.html"><img src="images/novedades.jpeg" alt="novedades" className="submain__img--tamano"/>
                        <div className="title__image--center">
                            <p className="title__image--style">Novedades</p>
                        </div></a>
                    </div>
                    <div className="col-md-6">
                        <a href="destacados.html"><img src="images/destacados.jpeg" alt="destacados" className="submain__img--tamano"/>
                        <div className="title__image--center">
                            <p className="title__image--style">Destacados</p>
                        </div></a>
                    </div>
                    <div className="col-md-6">
                        <a href="promociones.html"><img src="images/promociones.jpeg" alt="promociones" className="submain__img--tamano"/>
                        <div className="title__image--center">
                            <p className="title__image--style">Promociones</p>
                        </div></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomepageComponent;