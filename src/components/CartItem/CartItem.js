import './CartItem.scss'; 





const CartItem = ({prod, quantity}) => {


    return(
        <div className='cart-item'>
            <p className='cart-item--name'>{prod.name}</p>
            <p className='cart-item--text'>Quantity: {quantity}</p>
            <p className='cart-item--text'>Price: ${prod.price}</p>
            <p className='cart-item--text'>Subtotal: ${prod.price * quantity}</p>
            <button className='cart-item--button'>Remove</button>
        </div>
    )


}



export default CartItem;