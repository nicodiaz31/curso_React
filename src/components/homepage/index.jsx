import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';

const HomepageComponent = () => {

    const { getStorage } = useContext(GlobalContext)
    const [novedadesImg, setNovedadesImg] = useState()
    const [destacadosImg, setDestacadosImg] = useState()
    const [promocionesImg, setPromocionesImg] = useState()

    useEffect(() =>{
        const getImages = async () => {
            setNovedadesImg(await getStorage().ref().child('images/novedades.jpeg').getDownloadURL())
            setPromocionesImg(await getStorage().ref().child('images/promociones.jpeg').getDownloadURL())
            setDestacadosImg(await getStorage().ref().child('images/destacados.jpeg').getDownloadURL())
        }
        getImages()
        return () => {}
    },[getStorage])

    return(
        <>  
            <div className="main container-fluid px-0">
                <div className="row no-gutters">
                    {
                        novedadesImg ? 
                        <div className="col-md-12">
                            <Link  to={`/category/novedades`}><img src={novedadesImg} alt="novedades" className="submain__img--tamano"/>
                                <div className="title__image--center">
                                    <p className="title__image--style">Novedades</p>
                                </div>
                            </Link>
                        </div>
                        :
                        null
                    }
                    {
                        destacadosImg ? 
                        <div className="col-md-6">
                            <Link to={`/category/destacados`}><img src={destacadosImg} alt="destacados" className="submain__img--tamano"/>
                                <div className="title__image--center">
                                    <p className="title__image--style">Destacados</p>
                                </div>
                            </Link>
                        </div>
                        :
                        null
                    }
                    {
                        promocionesImg ?
                        <div className="col-md-6">
                            <Link to={`/category/descuentos`}><img src={promocionesImg} alt="promociones" className="submain__img--tamano"/>
                                <div className="title__image--center">
                                    <p className="title__image--style">Promociones</p>
                                </div>
                            </Link>
                        </div>
                        :
                        null
                    }
                </div>
            </div>
        </>
    )
}

export default HomepageComponent;