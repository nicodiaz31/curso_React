import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ShoppingCart from '../shoppingcart';
import { NavLink }  from 'react-router-dom';

function Navbar(props) {
	console.log(props.numberArticles);
    return ( 
        <>
           <nav className="navbar navbar-expand-lg navbar__background--color navbar-dark">
				<div className="container-fluid">
					<div className="navbar__logo">
						<NavLink to={`/`} className="navbar-brand"><img className="navbar__logo--tamano" src="/images/logo.png" alt="logo"/></NavLink>
					</div>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls=".navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
					    <span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="myNavbar">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link" href="instrumentos.html">Intrumentos</a>
								<ul className="dropdown-menu navbar__sublist">

									<li className="nav__link--hover"><NavLink to={`/category/guitarras`} className="dropdown-item">Guitarras</NavLink></li>
									<li className="nav__link--hover"><NavLink to={`/category/bajos`} className="dropdown-item">Bajos</NavLink></li>
								</ul>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="accesorios.html">Accesorios</a>
								<ul className="dropdown-menu navbar__sublist">
									<li className="nav__link--hover"><NavLink to={`/category/amplificadores`} className="dropdown-item">Amplificadores</NavLink></li>
									<li className="nav__link--hover"><NavLink to={`/category/auriculares`} className="dropdown-item">Auriculares</NavLink></li>
								</ul>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="promociones.html">Promociones</a>
								<ul className="dropdown-menu navbar__sublist">
									<li className="nav__link--hover"><NavLink to={`/descuentos`} className="dropdown-item">Descuentos</NavLink></li>
									<li className="nav__link--hover"><NavLink to={`/promociones_bancarias`} className="dropdown-item">Promociones Bancarias</NavLink></li>
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