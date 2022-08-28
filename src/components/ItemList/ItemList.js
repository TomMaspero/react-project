import Item from '../Item/Item';
import './ItemList.scss';

//SE ENCARGA DE HACER EL MAPEO

const ItemList = ({products}) => {

    return(
        <div className='item-list' onClick={() => console.log('hice click en item-list')}>
            <ul className='item-list__ul'>
                {products.map(product =>
                    <Item key={product.id} product={product}/>
                )}
            </ul>
        </div>
    )

}

export default ItemList;