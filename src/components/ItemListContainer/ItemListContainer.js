import ItemList from '../ItemList/ItemList';
import './ItemListContainer.scss';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
// import firebase from 'firebase/compat/app';

///////////////////     ASYNC MOCK
// import { getProducts, getProductsByCategory } from '../../asyncMock';


////////////////////    FIREBASE
import { getDocs, collection, query, where } from 'firebase/firestore/lite';
import { db } from '../../services/firebase'; 

//SE ENCARGA DE HACER EL PEDIDO A LA API

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams();

    useEffect(() => {

        setLoading(true);

        //////////////////////////////////////////// FIREBASE

        const collectionRef = !categoryId
        ? collection(db, 'products')
        : query(collection(db, 'products'), where('category', '==', categoryId));

        getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data();
                return { id: doc.id, ...data}
            })
            setProducts(productsAdapted);
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
        ///////////////////////////////////////////////////////




        ////////////////////////////////////////////////////////////// ASYNC MOCK
        // const asyncFunction = categoryId ? getProductsByCategory : getProducts;

        // asyncFunction(categoryId).then(products => {    //lo mismo que lo de abajo pero escrito de otra manera
        //     setProducts(products);
        // }).catch(error => {
        //     console.log("error in ItemListContainer's asyncFunction");
        // })
        //////////////////////////////////////////////////////////////

    },[categoryId]) //renderiza de nuevo cuando se cambia la categoría

    return(
        <div className='item-list-container'>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;