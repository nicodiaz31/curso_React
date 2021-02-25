import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    let exist = false
    const saludo = "hola"
    console.log("array?"+Array.isArray(cart))

    const isInCart = (id) => {
        exist = cart.some(itemCart => itemCart.item.id === id)
    }

    const addToCart = (product) =>{
        isInCart(product.item.id)
        if (exist) {
            cart.forEach(itemCart => {
                if(itemCart.item.id === product.item.id){
                    itemCart.quantity += product.quantity
                    return itemCart
                } else {
                    return itemCart
                }
            })
            setCart([...cart])
        } else {
            setCart([...cart, product])
        }
    }

    const clear = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const updatedCart = cart.filter(product => product.item.id !== id)
        setCart(updatedCart)
    }

    return(
        <CartContext.Provider value={{cart, addToCart, saludo, setCart, removeItem, clear}}>
            {children}
        </ CartContext.Provider>
    )
}

export default CartProvider;