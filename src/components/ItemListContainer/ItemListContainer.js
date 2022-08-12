import ItemList from '../ItemList/ItemList';
import './ItemListContainer.scss';
import {useState, useEffect} from 'react';
import { getProducts } from '../../asyncMock';

//SE ENCARGA DE HACER EL PEDIDO A LA API

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        getProducts().then(products => {    //PEDIDO A LA API
            setProducts(products);
        })
    },[])

    return(
        <div className='item-list-container'>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;