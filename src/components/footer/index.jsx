import React from 'react';
import { Link } from 'react-router-dom';

const FooterComponent = () => {
    return(
        <>
        <footer className="footerMain page-footer">
                <div className="footerMain__fondo--color text-center text-md-left">
                    <div className="footerMain__lists--display row">
                        <div className="footerMain__list col-md-3 mx-auto">
                            <ul>
                                <li><Link className="footerMain__list--title" to={`/instrumentos`}>Instrumentos</Link></li>
                                <li><Link to={`/category/guitarras`}>Guitarras</Link></li>
                                <li><Link to={`/category/bajos`}>Bajos</Link></li>
                            </ul>
                        </div>
                        <hr className="clearfix w-100 d-md-none"/>
                        <div className="footerMain__list col-md-3 mx-auto">
                            <ul>
                                <li><Link className="footerMain__list--title" to={`/accesorios`}>Accesorios</Link></li>
                                <li><Link to={`/category/amplificadores`}>Amplificadores</Link></li>
                                <li><Link to={`/category/auriculares`}>Auriculares</Link></li>
                            </ul>
                        </div>
                        <hr className="clearfix w-100 d-md-none"/>
                        <div className="footerMain__list col-md-3 mx-auto">
                            <ul>
                                <li><Link className="footerMain__list--title" to={`/promociones`}>Promociones</Link></li>
                                <li><Link to={`/category/descuentos`}>Descuentos</Link></li>
                                <li><Link to={`/promociones/promociones_bancarias`}>Promociones Bancarias</Link></li>
                            </ul>
                        </div>
                        <hr className="clearfix w-100 d-md-none"/>
                        <div className="footerMain__list col-md-3 mx-auto">
                            <ul>
                                <li><Link className="footerMain__list--title" to={`/contacto`}>Contacto</Link></li>
                                <li><Link to={`/contacto`}>Escríbenos</Link></li>
                                <li><img className="footerMain__logo--tamano" src="/images/fbLogo.png" alt="logoFb"/><Link to={"https://facebook.com/tiendaMusica"}>@tiendaMusica</Link></li>
                                <li><img className="footerMain__logo--tamano" src="/images/igLogo.png" alt="logoIg"/><Link to={"https://instagram.com/tiendaMusica"}>@tiendaMusica</Link></li>
                                <li><img className="footerMain__logo--tamano" src="/images/twLogo.png" alt="logoTw"/><Link to={"https://twitter.com/tiendaMusica"}>@tiendaMusica</Link></li>
                            </ul>
                        </div>
                    </div>
                    <hr className="clearfix w-100 d-md-none"/>
                    <div className="store__location--center">
                        <label> Avenida Congreso 620, CABA, Argentina</label><br/>
                    </div>
                </div>
                <div className="footer__copyright--fondo footer-copyright">
                    <img className="footerMain__logotienda--tamano" src="/images/logo.png" alt="logo"/>
                    <label>TiendaMusica</label><br/>
                    <label>© Copyright 2020 TiendaMusica. Todos los derechos reservados</label>
                </div>
            </footer>
        </>
    )
}

export default FooterComponent;