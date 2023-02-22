import './Checkout.scss';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

import { db } from '../../services/firebase';
import { addDoc, collection } from 'firebase/firestore';

const Checkout = () => {

    const { cart, getQuantity, getTotal } = useContext(CartContext)

    const totalQuantity = getQuantity();
    const total = getTotal();

    const createOrder = () => {
        const objOrder = {
            buyer: {
                firstName: 'Diego',             //Cambiar esto con los datos ingresados en el formulario
                lastName: 'Crespo',
                phone: '223111111',
                address: 'calle falsa 123',
            },
            items: cart, 
            totalQuantity,
            total,
            date: new Date(),
        }

        console.log(objOrder);

        const orderRef = collection(db, 'orders');
        addDoc(orderRef, objOrder).then( response => {
            console.log(response)                           ///borrar el console log
        })
    
    }

    return (
        <div className='checkout'>
            <h1 className='checkout__title'>Checkout</h1>
            <button className='checkout__button' onClick={createOrder}>Generar Orden</button>
        </div>
    )
}

export default Checkout;