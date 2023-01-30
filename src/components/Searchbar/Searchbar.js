import './Searchbar.scss';
import {useEffect, useState, useRef} from 'react';
import {Link} from 'react-router-dom';

///////////////////             ASYNC MOCK
import {products, getProducts} from '../../asyncMock';

////////////////////////////    FIREBASE
// import { getDocs, collection} from 'firebase/firestore';
// import { db } from '../../services/firebase';

const Searchbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showResults, setShowResults] = useState('false');
    
    /////////////////////////////////////////////////////       FIREBASE
    // const [products, setProducts] = useState([]);

    //Esto es casi lo mismo que está en ItemListContainer, capaz lo puedo juntar
    //para que llame solamente 1 vez a la base de datos?
    // useEffect(() => {
    //     getDocs(collection(db, 'products')).then(response => {
    //         const productsAdapted = response.docs.map(doc => {
    //             const data = doc.data();
    //             return {id: doc.id, ...data}
    //         })
    //         setProducts(productsAdapted);
    //     }).catch(error => console.log(error))
    // },[searchTerm])
    //^^^

    const resetSearch = () => {
        setSearchTerm = '';
    }

    const useOutsideAlerter = (ref) => {
        useEffect(() => {
            const handleClickOutsideSearchbar = (event) => {
                if(ref.current && !ref.current.contains(event.target)){
                    setShowResults(false);
                }
            }
            document.addEventListener('mousedown', handleClickOutsideSearchbar);
            return () => {
                document.removeEventListener('mousedown', handleClickOutsideSearchbar);
            };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef)

    return(
        <div className='searchbar' ref={wrapperRef}>
            <input className='searchbar__input' placeholder='Search...' onChange={event => setSearchTerm(event.target.value)} onClick={event => setShowResults(true)}/>
            {products.filter((val) => {
                if(searchTerm == '') {return}
                else if (showResults && searchTerm.length>1 && val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val;
                }
            }).map((val, key) => {
                return (
                    <ul className='results-container' key={key}>
                        <li className='results-container__result'>
                            <Link className='results-container__result--link' onClick={event => resetSearch()} to={`/detail/${val.id}`}>{val.name}</Link>
                        </li>
                    </ul>
                )   
            })}
        </div>
    );
}

export default Searchbar;