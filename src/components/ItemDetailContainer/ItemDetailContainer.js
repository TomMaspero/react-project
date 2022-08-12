import './ItemDetailContainer.scss';
import {useEffect, useState} from 'react';
import { getProductById } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});
    
    let id = '1';

    useEffect(() => {
        getProductById(id)
            .then(product => {
                setProduct(product);
            })
            .catch(error => {
                console.log("error en el getProductById");
            })
    }, [])
    
    return(
        <div>
            <h2>Detail</h2>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer;