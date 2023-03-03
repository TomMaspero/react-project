import './ItemDetailContainer.scss';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

////////////////////////////////////////////////////////    ASYNC MOCK
// import { getProductById } from '../../asyncMock';

////////////////////////////////////////////////////////    FIREBASE
import { getDoc, doc } from 'firebase/firestore/lite';
import { db } from '../../services/firebase';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});
    const { productId } = useParams(); //lo mismo que arriba pero lo desestructuro
    const [loading, setLoading] = useState(true);

    /////////////////////////////////////////////////////////       ASYNC MOCK
    // useEffect(() => {
    //     getProductById(productId)
    //         .then(product => {
    //             setProduct(product);
    //             // console.log(product)
    //         })
    //         .catch(error => {
    //             console.log("error en el getProductById");
    //         })
    // }, [productId])
    //////////////////////////////////////////////////////


    //////////////////////////////////////////////////////////      FIREBASE
    useEffect(() => {
        setLoading(true);

        getDoc(doc(db, 'products', productId)).then(response => {
            const data = response.data();
            const productAdapted = {id: response.id, ...data}
            setProduct(productAdapted);
        }).catch(error => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false);
        })
    }, [productId])
    ///////////////////////////////////////////////////////////////
    
    return(
        <div>
        {
            loading ? (
                <div className='item-detail-container'>
                    <h1 className='item-detail-container--title'>Your product is loading...</h1>
                </div>
            ) : (
                <div  className='item-detail-container'>
                    <ItemDetail product={product}/>
                </div>
            )
        }
        </div>
    )
}

export default ItemDetailContainer;