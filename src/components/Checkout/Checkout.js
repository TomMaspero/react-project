import './Checkout.scss';
import { useState, useContext } from 'react';
import CartContext from '../../context/CartContext';

import { db } from '../../services/firebase';
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore/lite';
import { Link, useNavigate } from 'react-router-dom';

const Checkout = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [orderCreated, setOrderCreated] = useState(false); 
    const [formSubmitted, setFormSubmitted] = useState(false);
    // const [submitError, setSubmitError] = useState(false);

    const [buyer, setBuyer] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        address: '',
        email: '',
    });
    
    const handleChange = (event) => {
        setBuyer({...buyer, [event.target.name]: event.target.value})
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 

        // setSubmitError(false);
        // for(var prop in Object.values(buyer)){
        //     if(Object.values(buyer)[prop] === ''){
        //         // console.log(Object.values(buyer)[prop]);
        //         // console.log(submitError)
        //         setSubmitError(true);
        //     }
        // }
        // console.log(submitError)
        // if(submitError==false){
        //     console.log('se submitio')
        // } else {console.log("ERROR!");}
        
        setFormSubmitted(true);
        // setBuyer({firstName:'', lastName:'', address:'', phoneNumber:'', email:''}) //NO ESTOY SEGURO QUE ESTO HAGA FALTA!
    }

    const goBack = () => {
        setFormSubmitted(false);
    }

    const { cart, getQuantity, getTotal, resetCart } = useContext(CartContext)
    const navigate = useNavigate();

    const totalQuantity = getQuantity();
    const total = getTotal();

    const createOrder = async () => {
        setIsLoading(true);
        try{
            const objOrder = {
                buyer,
                items: cart, 
                totalQuantity,
                total,
                date: new Date(),
            }
    
            const ids = cart.map(prod => prod.product.id); //No estoy seguro por qué es necesario el "product", ya que en el ejemplo aparece como simplemente "prod.id"
    
            const productsRef = collection(db, 'products');
    
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
                setOrderCreated(true);
                setTimeout(() => {
                    navigate('/');
                }, 3000);
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
                <h1 className='checkout__title'>Your order is being processed...</h1>

            </div>
        )
    }

    if(orderCreated){
        return (
            <div className='checkout'>
                <h1 className='checkout__title'>Your order was created succesfully!</h1>
                <h2 className='checkout_subtitle'> You will be redirected to the Home page in 3 seconds...</h2>
            </div>
        )
    }

    return (
        <div>
            {formSubmitted==false ? 
            (
                <div className='checkout'>            
                    <h1 className='checkout__title'>Checkout</h1>
                    <form className='form'>
                        <div className='form__row'>
                            <h3 className='form__title'>Please, fill in your details</h3>
                        </div>
                        <div className='form__row'>
                            <input className='form__inputField' type='text' name='firstName' placeholder='First Name' value={buyer.firstName} onChange={handleChange}/>
                        </div>
                        <div className='form__row'>
                            <input className='form__inputField' type='text' name='lastName' placeholder='Last Name' value={buyer.lastName} onChange={handleChange}/>
                        </div>
                        <div className='form__row'>
                            <input className='form__inputField' type='number' name='phoneNumber' placeholder='Phone Number' value={buyer.phoneNumber} onChange={handleChange}/>
                        </div>
                        <div className='form__row'>
                            <input className='form__inputField' type='text' name='address' placeholder='Address' value={buyer.address} onChange={handleChange}/>
                        </div>
                        <div className='form__row'>
                            <input className='form__inputField' type='text' name='email' placeholder='Email' value={buyer.email} onChange={handleChange}/>
                        </div>
                    </form>
                    <div className='checkout__bottom'>
                        <Link className='checkout__bottom--button' to='/cart'>Back to cart</Link>
                        <button className='checkout__bottom--button' onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            ):(
                <div className='checkout'>
                    <div className='checkout__final'>
                        <h2 className='checkout__final--title'>Please make sure your details are correct</h2>
                        <p className='checkout__final--text'>First name: {buyer.firstName}</p>
                        <p className='checkout__final--text'>Last Name: {buyer.lastName}</p>
                        <p className='checkout__final--text'>Phone Number: {buyer.phoneNumber}</p>
                        <p className='checkout__final--text'>Address: {buyer.address}</p>
                        <p className='checkout__final--text'>E-mail: {buyer.email}</p>
                    </div>
                    <button className='checkout__bottom--button' onClick={(goBack)}>Back</button>
                    <button className='checkout__bottom--button' onClick={createOrder}>Submit Order</button>
                </div>
            )}
        </div>
    )
}

export default Checkout;