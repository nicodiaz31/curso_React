import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ShoppingCart from '../shoppingcart';
import { Link }  from 'react-router-dom';

function Navbar(props) {
	console.log(props.numberArticles);
    return ( 
        <>
           <nav className="navbar navbar-expand-lg navbar__background--color navbar-dark">
				<div className="container-fluid">
					<div className="navbar__logo">
						<Link to={`/`} className="navbar-brand"><img className="navbar__logo--tamano" src="/images/logo.png" alt="logo"/></Link>
					</div>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls=".navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
					    <span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="myNavbar">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link className="nav-link" to={`/instrumentos`}>Intrumentos</Link>
								<ul className="dropdown-menu navbar__sublist">

									<li className="nav__link--hover"><Link to={`/category/guitarras`} className="dropdown-item">Guitarras</Link></li>
									<li className="nav__link--hover"><Link to={`/category/bajos`} className="dropdown-item">Bajos</Link></li>
								</ul>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to={`/accesorios`}>Accesorios</Link>
								<ul className="dropdown-menu navbar__sublist">
									<li className="nav__link--hover"><Link to={`/category/amplificadores`} className="dropdown-item">Amplificadores</Link></li>
									<li className="nav__link--hover"><Link to={`/category/auriculares`} className="dropdown-item">Auriculares</Link></li>
								</ul>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to={`/promociones`}>Promociones</Link>
								<ul className="dropdown-menu navbar__sublist">
									<li className="nav__link--hover"><Link to={`/descuentos`} className="dropdown-item">Descuentos</Link></li>
									<li className="nav__link--hover"><Link to={`/promociones_bancarias`} className="dropdown-item">Promociones Bancarias</Link></li>
								</ul>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to={`/contacto`}>Contacto</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to={`/busqueda`}>Busqueda</Link>
							</li>
							<li className="nav-item">
								
								<Link to={`/cart`}><ShoppingCart numberArticles={props.numberArticles}/></Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
        </>
    );
}

export default Navbar;