function ShoppingCart(props) {
    return ( 
        <>
            <a className="nav-link" href="shoppingcart.html"><img className="cart__logo--tamano" src="/images/shoppingcart.png" alt="shoppingcart"/>
                <span className='badge badge-warning' id='lblCartCount'> {props.numberArticles}</span>
            </a>
        </>
    );
}

export default ShoppingCart;