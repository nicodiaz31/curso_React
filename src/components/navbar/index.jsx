import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ShoppingCart from '../shoppingcart';

function Navbar(props) {
	console.log(props.numberArticles);
    return ( 
        <>
           <nav className="navbar navbar-expand-lg navbar__background--color navbar-dark">
				<div className="container-fluid">
					<div className="navbar__logo">
						<a href="index.html" className="navbar-brand"><img className="navbar__logo--tamano" src="/images/logo.png" alt="logo"/></a>
					</div>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls=".navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
					    <span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="myNavbar">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link" href="instrumentos.html">Intrumentos</a>
								<ul className="dropdown-menu navbar__sublist">
									<li className="nav__link--hover"><a className="dropdown-item" href="guitarras.html">Guitarras</a></li>
									<li className="nav__link--hover"><a className="dropdown-item" href="bajos.html">Bajos</a></li>
								</ul>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="accesorios.html">Accesorios</a>
								<ul className="dropdown-menu navbar__sublist">
									<li className="nav__link--hover"><a className="dropdown-item" href="amplificadores.html">Amplificadores</a></li>
									<li className="nav__link--hover"><a className="dropdown-item" href="auriculares.html">Auriculares</a></li>
								</ul>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="promociones.html">Promociones</a>
								<ul className="dropdown-menu navbar__sublist">
									<li className="nav__link--hover"><a className="dropdown-item" href="descuentos.html">Descuentos</a></li>
									<li className="nav__link--hover"><a className="dropdown-item" href="promociones_bancarias.html">Promociones Bancarias</a></li>
								</ul>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="contacto.html">Contacto</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="busqueda.html">Busqueda</a>
							</li>
							<li className="nav-item">
								<ShoppingCart numberArticles={props.numberArticles}/>
							</li>
						</ul>
					</div>
				</div>
			</nav>
        </>
    );
}

export default Navbar;