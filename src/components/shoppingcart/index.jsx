import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { GlobalContext } from '../../context/GlobalContext';

function ShoppingCart() {

    const { logoShoppingCart } = useContext(GlobalContext)
    const { cart } = useContext(CartContext)
    const [cartNumber, setCartNumber] = useState();

    useEffect(()=>{
        let number = 0;
        for (let i=0; i < cart.length; i++){
            number += parseInt(cart[i].quantity)
        }
        setCartNumber(number)
    },[cart])


    return ( 
        <>
            <img className="cart__logo--tamano" src={logoShoppingCart} alt="shoppingcart"/>
            {   cartNumber > 0 ?
                <span className='badge badge-warning' id='lblCartCount'> {cartNumber}</span> : null
            }

        </>
    );
}

export default ShoppingCart;