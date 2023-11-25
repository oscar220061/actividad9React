import { useState } from 'react';
import TiendaContext from "./components/Contexto"
import Events from './components/Events/Events';
import MainHeader from './components/MainHeader/MainHeader';


function App() {
  const [cartItems, setCartItems] = useState([]);

  function addItemHandler(item) {
    setCartItems((prevItems) => [...prevItems, item]);
  }

  function removeItemHandler(itemId) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }
  const datosCompartidos ={cartItems: cartItems, onAddItemToCart: addItemHandler, onRemoveItemFromCart:removeItemHandler }
  return (
    <>
    <TiendaContext.Provider value={datosCompartidos}>
      <MainHeader/>
      <main>
        <Events/>
      </main>
    </TiendaContext.Provider>
    </>
  );
}

export default App;
