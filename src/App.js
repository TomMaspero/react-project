import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useState, createContext} from 'react';

import Animation from './components/Animation/Animation'

function App() {

  //CLASE 5 MIN 2:35:00 CONTEXT
  const Context = createContext();
  
  //CLASE 5 MIN 2:35:00 CONTEXT


  //CLASE 5 MIN 2:25:00
  const [cart, setCart] = useState([]);
  const addItem = (productToAdd) => {
    setCart([...cart, productToAdd])
  }
  //CLASE 5 MIN 2:25:00

  return (
    <div className="App">

    <Context.Provider value={'string'}>

        <BrowserRouter>
        <header className="App-header">
          <Navbar/>             {/* El navbar queda afuera de Routes porque se va a mostrar siempre */}
        </header>

        <main className='main'> {/* CREO QUE TENDRIA QUE SACAR EL MAIN Y HEADER )???? */}
          <Routes>
            {/* <Route path='/counter' element={<ItemCount item={'Celular Item'} stock={5} initial={1} onAdd={handleOnAdd} />}/> */}
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer/>} /> {/* todos los productos */}
            <Route path='/detail/:productId' element={<ItemDetailContainer/>} /> {/* Filtrado */}
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </main>

      </BrowserRouter>

      {/* <Animation/> */}
    </Context.Provider>

    

  </div>
  );
}

export default App;
