import './Cart.scss';
import CartItem from '../CartItem/CartItem';
import {useContext, useEffect, useState} from 'react';
import CartContext from '../../context/CartContext';


const Cart = () => {
    const {cart} = useContext(CartContext)
    if(cart.length === 0) return;

    const getTotal = (cart) => {
        let total = 0;
        cart.map(prod => {
            total += prod.product.price*prod.quantity; 
        })
        return total;
    }

    return(
        <div className='cart'>

            <p className='cart--title'>Your cart</p>

            {cart.map(prod => <CartItem key={prod.product.id} prod={prod.product} quantity={prod.quantity}/>)}
            
            <p className='cart--price'>Total: ${getTotal(cart)}</p>

            <button className='cart--button'>Create Order</button>
        </div>
    )
}

export default Cart;