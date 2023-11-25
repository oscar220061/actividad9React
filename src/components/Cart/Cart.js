import ReactDOM from 'react-dom';
import TiendaContext from '../Contexto';
import classes from './Cart.module.css';
import { useContext} from 'react';
function Cart() {

  const datos = useContext(TiendaContext);
  const total = datos.datosContext.cartItems.reduce((prevVal, item) => prevVal + item.price, 0)

  console.log(datos)
  return ReactDOM.createPortal(
    <>
      <div className={classes.backdrop} onClick={datos.onClose} />
      <aside className={classes.cart}>
        <h2>Your Cart</h2>
        <ul>
          {datos.datosContext.cartItems.map((item) => (
            <li key={item.id}>
              {item.title} (${item.price})
            </li>
          ))}
        </ul>
        <p className={classes.total}>Total: ${total}</p>
        <div className={classes.actions}>
          <button onClick={datos.onClose}>Close</button>
          <button onClick={datos.onClose}>Buy</button>
        </div>
      </aside>
    </>,
    document.getElementById('modal')
  );
}

export default Cart;
