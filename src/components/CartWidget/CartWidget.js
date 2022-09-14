import './CartWidget.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import {useContext} from 'react';
import CartContext from '../../context/CartContext';

const CartWidget = () => {

    const {getQuantity} = useContext(CartContext);
    let quant = getQuantity();

    return (
        <Link to='/cart' className='cart-widget'>
            <div className='cart-widget__top'>
                <FontAwesomeIcon icon={faCartShopping} className='cart-widget__top--icon'/>
                
                {quant != 0 ? <p className='cart-widget__top--count'>{quant}</p> : null}
            </div>
            <div>
                <p className='cart-widget__bottom--text'>Cart</p>
            </div>
        </Link>
    )
}

export default CartWidget;