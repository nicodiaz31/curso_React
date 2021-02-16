import React from 'react';

const FooterComponent = () => {
    return(
        <>
        <footer className="footerMain page-footer">
                <div className="footerMain__fondo--color text-center text-md-left">
                    <div className="footerMain__lists--display row">
                        <div className="footerMain__list col-md-3 mx-auto">
                            <ul>
                                <li><a className="footerMain__list--title" href="instrumentos.html">Instrumentos</a></li>
                                <li><a href="guitarras.html">Guitarras</a></li>
                                <li><a href="bajos.html">Bajos</a></li>
                            </ul>
                        </div>
                        <hr className="clearfix w-100 d-md-none"/>
                        <div className="footerMain__list col-md-3 mx-auto">
                            <ul>
                                <li><a className="footerMain__list--title" href="accesorios.html">Accesorios</a></li>
                                <li><a href="amplificadores.html">Amplificadores</a></li>
                                <li><a href="auriculares.html">Auriculares</a></li>
                            </ul>
                        </div>
                        <hr className="clearfix w-100 d-md-none"/>
                        <div className="footerMain__list col-md-3 mx-auto">
                            <ul>
                                <li><a className="footerMain__list--title" href="promociones.html">Promociones</a></li>
                                <li><a href="descuentos.html">Descuentos</a></li>
                                <li><a href="promociones_bancarias.html">Promociones Bancarias</a></li>
                            </ul>
                        </div>
                        <hr className="clearfix w-100 d-md-none"/>
                        <div className="footerMain__list col-md-3 mx-auto">
                            <ul>
                                <li><a className="footerMain__list--title" href="contacto.html">Contacto</a></li>
                                <li><a href="contacto.html">Escríbenos</a></li>
                                <li><img className="footerMain__logo--tamano" src="/images/fbLogo.png" alt="logoFb"/><a href="https://facebook.com/tiendaMusica">@tiendaMusica</a></li>
                                <li><img className="footerMain__logo--tamano" src="/images/igLogo.png" alt="logoIg"/><a href="https://instagram.com/tiendaMusica">@tiendaMusica</a></li>
                                <li><img className="footerMain__logo--tamano" src="/images/twLogo.png" alt="logoTw"/><a href="https://twitter.com/tiendaMusica">@tiendaMusica</a></li>
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