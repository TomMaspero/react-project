import Item from '../Item/Item';
import './ItemList.scss';

//SE ENCARGA DE HACER EL MAPEO

const ItemList = ({products}) => {

    return(
        <div className='item-list'>
            <div className='item-list__products'>
                {products.map(product =>
                    <Item key={product.id} product={product}/>
                )}
            </div>
        </div>
    )

}

export default ItemList;