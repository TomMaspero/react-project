import { useState, createContext } from 'react';

const CartContext = createContext();

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    
    const addItem = (productToAdd) => {
        setCart([...cart, productToAdd]);
    }

    const removeItem = (id) => {
        const newCartWithoutProduct = cart.filter(prod => prod.product.id !== id)
        setCart(newCartWithoutProduct);
    }

    const getQuantity = () => {
        let accu = 0
        cart.forEach(prod => {
        accu += prod.quantity
        })

        return accu
    }

    const getTotal = () => {
        let total = 0;
        cart.map(prod => {
            total += prod.product.price*prod.quantity; 
        })
        return total.toFixed(2);
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const resetCart = () => {
        setCart([]);
    }

    return(
        <CartContext.Provider value={{cart, addItem, resetCart, getQuantity, getTotal, isInCart, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;