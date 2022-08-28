import {useState} from 'react';
import './ItemCount.scss';


/*

AGREGAR QUE PASA SI EL STOCK INICIAL DE UN ITEM ES 0!!!!
MOSTRAR "CURRENTLY UNAVAILABLE CON EL BOTON DE COLOR ROJO APAGADO"
*/

const ItemCount = ({product, onAdd}) => {
    const [count, setCount] = useState(1); //lo inicializo siempre en 1

    const increment = () => {
        if(count<product.stock){
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
            {/* <div className='item-count__top'>
                <p className='item-count__top--text'>{product.name}</p>
            </div> */}
            <div className='item-count__bottom'>
                <div className='counter'>
                    <button onClick={decrement} className='counter--button'>-</button>
                    <h2 className='counter--text'>{count}</h2>
                    <button onClick={increment} className='counter--button'>+</button>
                </div>
                <button onClick={() => onAdd(count)} className='item-count__bottom--button'>Add to Cart</button>
            </div>
        </div>
    )


}



export default ItemCount;