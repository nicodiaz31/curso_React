import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function ShoppingCart() {

    const { cart } = useContext(CartContext)
    let cartNumber = cart.length


    return ( 
        <>
            <img className="cart__logo--tamano" src="/images/shoppingcart.png" alt="shoppingcart"/>
            {   cartNumber > 0 ?
                <span className='badge badge-warning' id='lblCartCount'> {cart.length}</span> : null
            }

        </>
    );
}

export default ShoppingCart;