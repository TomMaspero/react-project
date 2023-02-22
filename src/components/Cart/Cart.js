import './Cart.scss';
import CartItem from '../CartItem/CartItem';
import {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import CartContext from '../../context/CartContext';


const Cart = () => {
    const {cart, resetCart, getTotal} = useContext(CartContext)

    const handleOnReset = () => {
        resetCart();
    }

    if(cart.length === 0) {
        return(
            <div className='cart'>
                <p className='cart--title'>Your shopping cart is empty</p>
                <Link to="/" className='cart--button'>Browse our products</Link>
            </div>
        )
    };

    return(
        <div className='cart'>

            <p className='cart--title'>Your cart</p>

            {cart.map(prod => <CartItem key={prod.product.id} prod={prod.product} quantity={prod.quantity}/>)}
            
            <p className='cart--price'>Total: ${getTotal(cart)}</p>

            <Link to='/checkout' className='cart--button'>Checkout</Link>
            <button onClick={() => handleOnReset()} className='cart--button'>Reset Cart</button>
        </div>
    )
}

export default Cart;