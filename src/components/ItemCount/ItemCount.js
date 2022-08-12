import {useState} from 'react';
import './ItemCount.scss';

const ItemCount = ({item, stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);

    const increment = () => {
        if(count<stock){
            setCount(count+1);
        }
    }

    const decrement = () => {
        if(count>1){
            setCount(count-1);
        }
    }

    return(
        <div className='item-count'>
            <div className='item-count__top'>
                <p className='item-count__top--text'>{item}</p>
            </div>
            <div className='item-count__bottom'>
                <div className='counter'>
                    <button onClick={decrement} className='counter--button'>-</button>
                    <h2 className='counter--text'>{count}</h2>
                    <button onClick={increment} className='counter--button'>+</button>
                </div>
                <button onClick={() => onAdd(count)} className='item-count__bottom--button'>Agregar al carrito</button>
            </div>
        </div>
    )


}



export default ItemCount;