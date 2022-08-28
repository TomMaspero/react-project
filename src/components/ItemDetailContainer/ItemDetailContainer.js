import './ItemDetailContainer.scss';
import {useEffect, useState} from 'react';
import { getProductById } from '../../asyncMock';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});

    // const params = useParams();
    const { productId } = useParams(); //lo mismo que arriba pero lo desestructuro
    useEffect(() => {
        getProductById(productId)
            .then(product => {
                setProduct(product);
                console.log(product)
            })
            .catch(error => {
                console.log("error en el getProductById");
            })
    }, [])
    
    return(
        <div className='item-detail-container'>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer;