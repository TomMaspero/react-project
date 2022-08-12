import './Item.scss';

const Item = ({item}) => {

    return(
        <div className='item-container'>    
                <li className='item'>
                    <h2 className='item--name'>{item.name}</h2>
                    <img className='item--img' src={item.img}/>
                    <p className='item--description'>{item.description}</p>
                    <button className='item--button'>Ver Detalles</button>
                    <p className='item--stock'>{`Stock disponible: ${item.stock}`}</p>
                </li>
        </div>
    )





}   


export default Item;