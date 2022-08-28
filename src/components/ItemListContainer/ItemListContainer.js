import ItemList from '../ItemList/ItemList';
import './ItemListContainer.scss';
import {useState, useEffect} from 'react';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import {useParams} from 'react-router-dom';

//SE ENCARGA DE HACER EL PEDIDO A LA API

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    const {categoryId} = useParams();
    
    useEffect(() => {

        const asyncFunction = categoryId ? getProductsByCategory : getProducts;

        asyncFunction(categoryId).then(products => {    //lo mismo que lo de abajo pero escrito de otra manera
            setProducts(products);
        }).catch(error => {
            console.log("error in ItemListContainer's asyncFunction");
        })
        // if(!categoryId){
        //     getProducts().then(products => {    //PEDIDO A LA API
        //         setProducts(products);
        //     })
        // } else {
        //     getProductsByCategory(categoryId).then(products => {
        //         setProducts(products)
        //     })
        // }
    },[categoryId]) //renderiza de nuevo cuando se cambia la categoría

    return(
        <div className='item-list-container'>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;