import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Menu from './components/Menu/Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {CartContextProvider} from './context/CartContext';

function App() {

  return (
    <div className="App">
    <CartContextProvider>
    <BrowserRouter>
    <header className="App-header">
      <Navbar/>             {/* El navbar queda afuera de Routes porque se va a mostrar siempre */}
    </header>

    <main className='main'>
     
      <Routes>
        {/* <Route path='/counter' element={<ItemCount item={'Celular Item'} stock={5} initial={1} onAdd={handleOnAdd} />}/> */}
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer/>} /> {/* todos los productos */}
        <Route path='/detail/:productId' element={<ItemDetailContainer/>} /> {/* Filtrado */}
        <Route path='/cart' element={<Cart/>} />
        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </main>
  </BrowserRouter>
  </CartContextProvider>

    

  </div>
  );
}

export default App;
