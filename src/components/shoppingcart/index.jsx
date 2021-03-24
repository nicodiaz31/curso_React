import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { GlobalContext } from '../../context/GlobalContext';

function ShoppingCart() {

    const { logoShoppingCart } = useContext(GlobalContext)
    const { cart } = useContext(CartContext)
    let cartNumber = cart.length


    return ( 
        <>
            <img className="cart__logo--tamano" src={logoShoppingCart} alt="shoppingcart"/>
            {   cartNumber > 0 ?
                <span className='badge badge-warning' id='lblCartCount'> {cart.length}</span> : null
            }

        </>
    );
}

export default ShoppingCart;