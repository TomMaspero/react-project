import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const handleOnAdd = (quantity) => {
    console.log(`la cantidad agregada es ${quantity}`)
  }

  return (
    <div className="App">

    <BrowserRouter>
      <header className="App-header">
        <Navbar/>             {/* El navbar queda afuera de Routes porque se va a mostrar siempre */}
      </header>

      <main className='main'> {/* CREO QUE TENDRIA QUE SACAR EL MAIN Y HEADER )???? */}
        <Routes>
          <Route path='/' element={<ItemCount item={'Celular Item'} stock={5} initial={1} onAdd={handleOnAdd} />}/>
          <Route path='/list' element={<ItemListContainer/>} />
          <Route path='/detail' element={<ItemDetailContainer/>} />
        </Routes>
      </main>
    
    </BrowserRouter>

  </div>
  );
}

export default App;
