import './CartWidget.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    return (
        <a href='#' className='cart'>
            <div className='cart__top'>
                <FontAwesomeIcon icon={faCartShopping} className='cart__top--icon'/>
                <p className='cart__top--count'>0</p>
            </div>
            <div>
                <p className='cart__bottom--text'>Cart</p>
            </div>
        </a>
    )
}

export default CartWidget;