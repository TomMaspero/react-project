import './Item.scss';
import { Link } from 'react-router-dom';

const Item = ({product}) => {

    return(
        <div className='item-container'>    
                <div className='item'>
                    <div className='item__top'>
                        <img className='item__top--img' src={`/${product.img}`}/>
                    </div>
                    <div className='item__bottom'>
                        <h2 className='item__bottom--price'>${product.price}</h2>
                        <h2 className='item__bottom--name'>{product.name}</h2> 
                        <Link to={`/detail/${product.id}`} className='item__bottom--button'>Details</Link>
                    </div>
                    {/* <p className='item--description'>{product.description}</p> */}
                    {/* <p className='item--stock'>{`Stock available: ${product.stock}`}</p> */}
                </div>
        </div>
    )





}   


export default Item;