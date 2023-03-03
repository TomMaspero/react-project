import './ItemDetail.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStore, faTruck} from '@fortawesome/free-solid-svg-icons'; 
import {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../../context/CartContext';

const ItemDetail = ({ product }) => {

    const [quantity, setQuantityToAdd] = useState(0);
    const {addItem} = useContext(CartContext);
    
    const handleOnAdd = (quantity) => {               
        setQuantityToAdd(quantity);           
        const productToAdd = {
            product, quantity
        }
        addItem(productToAdd);

    } 

    return(
        <div className='item-detail'>
            <div className='item-detail__left'>
                <img src={`/${product.img}`} className='item-detail__left--img'/>
                <p className='item-detail__left--description'>{product.description}</p>
            </div>
            <div className='item-detail__right'>
                <h2 className='item-detail__right--name'>{product.name}</h2>
                <p className='item-detail__right--price'>${product.price}</p>

                <div className='item-detail__right__stock'>
                    <FontAwesomeIcon icon={faStore} className='item-detail__right__stock--icon'/>
                    <div className='item-detail__right__stock__top'>
                        <p className='item-detail__right__stock--text'>Stock Available: {product.stock}</p>
                        <p className='item-detail__right__stock--subtext'>Available for pickup</p>
                    </div>
                </div>
                <div className='item-detail__right__stock'>
                    <FontAwesomeIcon icon={faTruck} className='item-detail__right__stock--icon'/>
                    <div className='item-detail__right__stock__top'>
                        <p className='item-detail__right__stock--text'>
                            <span className='item-detail__right__stock--span'>In stock </span>
                            for delivery
                        </p>
                        <p className='item-detail__right__stock--subtext'>Arrives in 2 - 5 days - FREE Shipping on orders $49+</p>
                    </div>
                </div>
                {
                    quantity === 0 ? (
                        <ItemCount product={product} onAdd={handleOnAdd}/>
                    ) : (
                        <Link to='/cart' className='item-detail--button'>To Cart</Link>
                    )
                }

            </div>
        </div>


    )
}

export default ItemDetail;