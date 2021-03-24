import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { GlobalContext } from '../../context/GlobalContext';
import LoadingComponent from '../loading';
import { Link } from 'react-router-dom';

const CategoriesComponent = () => {
    const { setCategoryName, categoriesImg } = useContext(GlobalContext)
    const { categories } = useParams();
    const [categoriesName, setCategoriesName] = useState([])
    const [links, setLinks] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setCategoryName(categories)
        if (categories === "instrumentos"){
            setCategoriesName(["Guitarras", "Bajos"])
            setLinks(["/category/guitarras", "/category/bajos"])
        }
        if (categories === "accesorios"){
            setCategoriesName(["Amplificadores", "Auriculares"])
            setLinks(["/category/amplificadores", "/category/auriculares"])
        }
        if (categories === "promociones"){
            setCategoriesName(["Descuentos", "Promociones Bancarias"])
            setLinks(["/category/descuentos", "/promociones_bancarias"])
        }
        return () => {}
    },[categories, setCategoryName])

    useEffect(()=>{
        categoriesImg ? setLoading(false) : setLoading(true)
        return () => {}
    },[categoriesImg])

    return(
        <>
            <div className="submain container-fluid px-0">
                <div className="row no-gutters">
                    <div className="col-md-6">
                        {
                            loading ? 
                            <LoadingComponent/>
                            :
                            <Link to={links[0]}><img src={categoriesImg[0]} alt="amplificadores" className="submain__img--tamano"/>
                                <div className="title__image--center">
                                    <p className="title__image--style">{categoriesName[0]}</p>
                                </div></Link>
                        } 
                    </div>
                    <div className="col-md-6">
                        <Link to={links[1]}><img src={categoriesImg[1]} alt="auriculares" className="submain__img--tamano"/>
                        <div className="title__image--center">
                            <p className="title__image--style">{categoriesName[1]}</p>
                        </div></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoriesComponent;