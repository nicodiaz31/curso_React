import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';

const SearchComponent = () => {

    const { imgSearch } = useContext(GlobalContext)

    return(
            <>  
            <div className="row">
            <div className="title__section container-fluid">   
                <h4>Búsqueda</h4>  
            </div>
            </div>
            <hr className="hr__personalized"/>
                <div className="modal-body row"> 
                    <div className="col-md-12">
                        <div className="row row__orden">
                            <div className="d-flex">
                                <div className="card card__busqueda" id="card__one--color">
                                    <div className="image">
                                        <img src={imgSearch[0]} alt="guitarras"/>
                                    </div>
                                    <div className="details__card">
                                        <div className="center">
                                            <p className="p__title">Guitarras</p>
                                            <Link to={`/category/guitarras`} className="btn blue__button mt-auto">Ir</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="card card__busqueda" id="card__two--color">
                                    <div className="image">
                                        <img src={imgSearch[1]} alt="bajos"/>
                                    </div>
                                    <div className="details__card">
                                        <div className="center">
                                            <p className="p__title">Bajos</p>
                                            <Link to={`/category/bajos`} className="btn blue__button mt-auto">Ir</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="card card__busqueda" id="card__three--color">
                                    <div className="image">
                                        <img src={imgSearch[2]} alt="amplificadores"/>
                                    </div>
                                    <div className="details__card">
                                        <div className="center">
                                            <p className="p__title">Amplificadores</p>
                                            <Link to={`/category/amplificadores`} className="btn blue__button mt-auto">Ir</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="card card__busqueda" id="card__four--color">
                                    <div className="image">
                                        <img src={imgSearch[3]} alt="auriculares"/>
                                </div>
                                <div className="details__card">
                                    <div className="center">
                                        <p className="p__title">Auriculares</p>
                                        <Link to={`/category/auriculares`} className="btn blue__button mt-auto">Ir</Link>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="d-flex">
                                <div className="card card__busqueda" id="card__five--color">
                                    <div className="image">
                                        <img src={imgSearch[4]} alt="novedades"/>
                                    </div>
                                    <div className="details__card">
                                        <div className="center">
                                            <p className="p__title">Novedades</p>
                                            <Link to={`/category/novedades`} className="btn blue__button mt-auto">Ir</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="card card__busqueda" id="card__six--color">
                                    <div className="image">
                                        <img src={imgSearch[5]} alt="destacados"/>
                                    </div>
                                    <div className="details__card">
                                        <div className="center">
                                            <p className="p__title">Destacados</p>
                                            <Link to={`/category/destacados`} className="btn blue__button mt-auto">Ir</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    )
}

export default SearchComponent;