
import classes from './EventItem.module.css';
import { useContext } from 'react';
import TiendaContext from '../Contexto';

function EventItem() {
  
  const datos = useContext(TiendaContext);
  let buttonCaption = 'Add to Cart';
  let buttonAction = datos.onAddToCart;

  if (datos.isInCart) {
    buttonCaption = 'Remove from Cart';
    buttonAction = datos.onRemoveFromCart;
  }

  return (
    <li className={classes.event}>
      <img src={datos.event.image} alt={datos.event.title} />
      <div className={classes.content}>
        <h2>{datos.event.title}</h2>
        <p className={classes.price}>${datos.event.price}</p>
        <p>{datos.event.description}</p>
        <div className={classes.actions}>
          <button onClick={buttonAction}>{buttonCaption}</button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
