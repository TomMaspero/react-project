import './ItemDetailContainer.scss';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});

    // const params = useParams();
    const { productId } = useParams(); //lo mismo que arriba pero lo desestructuro
    useEffect(() => {

        getDoc(doc(db, 'products', productId)).then(response => {
            const data = response.data();
            const productAdapted = {id: response.id, ...data}
            setProduct(productAdapted);
        }).catch(error => {
            console.log(error)
        })
        // .finally(() => {
        //     setLoading(false);
        // })

    }, [productId])
    
    return(
        <div className='item-detail-container'>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer;