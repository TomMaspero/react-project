import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Menu from './components/Menu/Menu';
import Banner from './components/Banner/Banner';
import Checkout from './components/Checkout/Checkout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {CartContextProvider} from './context/CartContext';

import {useState, useEffect} from 'react';

function App() {

  const [showMenu, setShowMenu] = useState(false);
  const [current, setCurrent] = useState(false);

  const handleMenu = () => {         {/*MOVER ESTA LOGICA A OTRO COMPONENTE (MENU CONTAINER???)*/}
    setShowMenu(!showMenu);
    document.body.classList.toggle('block-overflow');
  }

  return (
    <div className="App">
    <CartContextProvider>
    <BrowserRouter>
    <header className="App-header">
      <Navbar handleMenu={handleMenu}/>             {/* El navbar queda afuera de Routes porque se va a mostrar siempre */}
    </header>

    {showMenu ? <Menu handleMenu={handleMenu}/> : null}

    
    <main className='main' id='main'> 
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer/>} /> {/* todos los productos */}
        <Route path='/detail/:productId' element={<ItemDetailContainer/>} /> {/* Filtrado */}
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </main>

  </BrowserRouter>
  </CartContextProvider>
  </div>
  );
}

export default App;
