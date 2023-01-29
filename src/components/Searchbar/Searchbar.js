import './Searchbar.scss';


// import {products} from '../../asyncMock';

import { getDocs, collection} from 'firebase/firestore';
import { db } from '../../services/firebase';


import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const Searchbar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const [products, setProducts] = useState([]);
    
    //Esto es lo mismo que está en ItemListContainer, capaz lo puedo juntar
    //para que llame solamente 1 vez a la base de datos?
    useEffect(() => {
        getDocs(collection(db, 'products')).then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data();
                return {id: doc.id, ...data}
            })
            setProducts(productsAdapted);
        }).catch(error => console.log(error))
    })
    //^^^

    return(
        <div className='searchbar'>
            <input className='searchbar__input' placeholder='Search...' onChange={event => setSearchTerm(event.target.value)}/>
            {products.filter((val) => {
                if(searchTerm == '') {return}
                else if (searchTerm.length>1 && val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val;
                }
            }).map((val, key) => {
                return (
                    <div className='results' key={key}>
                        <Link to={`/detail/${val.id}`} className='item__bottom--button'>{val.name}</Link>
                    </div>
                )   
            })}
        </div>
    );
}

export default Searchbar;