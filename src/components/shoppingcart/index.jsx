import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function ShoppingCart() {

    const { cart } = useContext(CartContext)

    return ( 
        <>
            <img className="cart__logo--tamano" src="/images/shoppingcart.png" alt="shoppingcart"/>
            <span className='badge badge-warning' id='lblCartCount'> {cart.length}</span>

        </>
    );
}

export default ShoppingCart;