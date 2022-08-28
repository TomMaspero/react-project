import './Item.scss';
import { Link } from 'react-router-dom';

const Item = ({product}) => {

    const handleClick = (e) => {
        e.stopPropagation()
        console.log('hice click en el item')
    }

    return(
        <div className='item-container' onClick={handleClick}>    
                <li className='item'>
                    <h2 className='item--name'>{product.name}</h2> 
                    <img className='item--img' src={`/${product.img}`}/>
                    <p className='item--description'>{product.description}</p>
                    <Link to={`/detail/${product.id}`} className='item--button'>Details</Link>
                    <p className='item--stock'>{`Stock available: ${product.stock}`}</p>
                </li>
        </div>
    )





}   


export default Item;