import { useState, createContext } from 'react';

const CartContext = createContext();

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (productToAdd) => {

        if(isInCart(productToAdd.product.id) == false){
            setCart([...cart, productToAdd]);
        }
        else {
            //tengo que actualizar la cantidad
            // console.log("Ya está en el carrito!")
            
            let index = findProduct(productToAdd.product.id);

            updateQuantity(index, productToAdd.quantity);

            setCart([...cart]); //para que se re-renderice el widget correctamente (no estoy seguro si esto es correcto)
        }
    }

    const updateQuantity = (productIndex, addedQuantity) => {   //función solamente usada en addItem()
        let newQuantity = cart[productIndex].quantity + addedQuantity;
        cart[productIndex].quantity = newQuantity;
    }

    const findProduct = (id) => {   //función solamente usada en addItem()
        let index = 0;
        if(cart.length > 0){
            for(const prod in cart){
                if(cart[prod].product.id == id){break}
                else{
                    index++;
                }
            }
        }
        return index;
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
        return cart.some(prod => prod.product.id === id)
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