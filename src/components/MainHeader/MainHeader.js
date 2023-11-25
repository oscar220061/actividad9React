import { useContext, useState } from 'react';
import TiendaContext from '../Contexto';
import Cart from '../Cart/Cart';
import classes from './MainHeader.module.css';

const  MainHeader=()=>{

  const datos = useContext(TiendaContext);

  const [modalIsOpen, setModalIsOpen] = useState();

  function openCartModalHandler() {
    setModalIsOpen(true);
  }

  function closeCartModalHandler() {
    setModalIsOpen(false);
  }
  

  const numCartItems = datos.cartItems.length;
  const datosCompartidos ={onClose: closeCartModalHandler,datosContext: datos}
  return (
    <>
     
      <header className={classes.header}>
        <h1>StateEvents Shop</h1>
        <button onClick={openCartModalHandler}>Cart ({numCartItems})</button>
      </header>
      
      {modalIsOpen && 
      <TiendaContext.Provider value={datosCompartidos}>
        <Cart/>
      </TiendaContext.Provider>}
      
    </>
  );
}

export default MainHeader;
