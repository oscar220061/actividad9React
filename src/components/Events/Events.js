import dummyEvents from '../../data/dummy-events';
import EventItem from './EventItem';
import classes from './Events.module.css';
import TiendaContext from '../Contexto';
import { useContext } from 'react';

function Events() {

  const datos = useContext(TiendaContext);
  
  return (
    <ul className={classes.events}>
      {dummyEvents.map((event) => {

        const datosCompartidos = {
          id: event.id,
          event: event,
          isInCart: datos.cartItems.some((item) => item.id === event.id),
          onAddToCart: () => datos.onAddItemToCart(event),
          onRemoveFromCart: () => datos.onRemoveItemFromCart(event.id)
        };     
    return(
      <TiendaContext.Provider value={datosCompartidos}>
        <EventItem></EventItem>
      </TiendaContext.Provider>
      );
  })}
    </ul>
  );
}

export default Events;
