import './Checkout.scss';
import { useState, useContext } from 'react';
import CartContext from '../../context/CartContext';

import { db } from '../../services/firebase';
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore/lite';

const Checkout = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { cart, getQuantity, getTotal, resetCart } = useContext(CartContext)

    const totalQuantity = getQuantity();
    const total = getTotal();

    const createOrder = async () => {
        setIsLoading(true);
        try{
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
    
            const ids = cart.map(prod => prod.product.id); //No estoy seguro por qué es necesario el "product", ya que en el ejemplo aparece como simplemente "prod.id"
    
            const productsRef = collection(db, 'products');
    
            // getDocs(query(productsRef, where(documentId(), 'in', ids))).then(response => console.log(response)).catch(error => {console.log(error)});
            //La función getDocs busca los documentos que cumplan con la consulta
            //de la colección de productos cuyos IDs (traídos desde Firestore con la función DocumentId)
            //y usamos el operador "in" para indicarle que tienen que estar dentro de mi array de ids "ids". 
    
            //Lo mismo que arriba pero con async/await
            const producstAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)));
    
            const { docs } = producstAddedFromFirestore;
    
            const outOfStock = []; //Guardo un array con los productos que están fuera de stock para poder validar la compra, puede servir para alguna otra cosa
    
            const batch = writeBatch(db);
            
            docs.forEach(doc => {
                const dataDoc = doc.data(); //este método me permite acceder a los datos del producto en la orden de compra
                const stockDb = dataDoc.stock;
                //ahora lo comparo con el stock en el carrito
                const productAddedToCart = cart.find(prod => prod.product.id == doc.id)
                const productQuantity = productAddedToCart?.quantity; //si el producto existe me devuelve la cantidad 
    
                if(stockDb >= productQuantity){
                    //Si el stock da bien, tengo que actualizar el stock de todos los productos, pero tengo que esperar a recorrer TODOS los productos antes de hacer eso
                    //Por lo que necesitamos el "batch update"
                    batch.update(doc.ref, {stock: stockDb - productQuantity})  
                } else{
                    outOfStock.push({id: doc.id, ...dataDoc}) //lo agrego al array de outOfStock
                }
            })
    
            if(outOfStock.length === 0){
                await batch.commit()
                const orderRef = collection(db, 'orders');
                const orderAdded = await addDoc(orderRef, objOrder);

                console.log(`El id de su ordern es: ${orderAdded.id}`);

                resetCart();
            } else {
                console.log("Error, falta de stock");
            }
        }

        catch (error) {
            console.log(error)
        }

        finally {
            setIsLoading(false);
        }
    
    }

    if(isLoading) {
        return (
            <div className='checkout'>
                <h1 className='checkout__title'>Se está generando tu orden...</h1>

            </div>
        )
    }

    return (
        <div className='checkout'>
            <h1 className='checkout__title'>Checkout</h1>
            <button className='checkout__button' onClick={createOrder}>Generar Orden</button>
        </div>
    )
}

export default Checkout;