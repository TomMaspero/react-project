import './CartItem.scss'; 
import CartContext from '../../context/CartContext';
import {useContext} from 'react';




const CartItem = ({prod, quantity}) => {

    const {removeItem} = useContext(CartContext); 

    const handleOnRemove = (id) => {
        removeItem(id);
    }

    return(
        <div className='cart-item'>
            <p className='cart-item--name'>{prod.name}</p>
            <p className='cart-item--text'>Quantity: {quantity}</p>
            <p className='cart-item--text'>Price: ${prod.price}</p>
            <p className='cart-item--text'>Subtotal: ${prod.price * quantity}</p>
            <button onClick={() => handleOnRemove(prod.id)}  className='cart-item--button'>Remove</button>
        </div>
    )
}



export default CartItem;