import './Searchbar.scss';
import {products} from '../../asyncMock';
import {useState} from 'react';

const Searchbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    return(
        <div className='searchbar'>
            <input className='searchbar__input' placeholder='Search...' onChange={event => setSearchTerm(event.target.value)}/>
            {products.filter((val) => {
                if(searchTerm == '') {return}
                else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val;
                }
            }).map((val, key) => {
                return (
                    <div key={key}>
                        <p>{val.name}</p>
                    </div>
                )   
            })}
        </div>
    );
}

export default Searchbar;