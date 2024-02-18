import { useState } from 'react';

const Carrito = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Gafas de sol', price: 50 },
    { id: 2, name: 'Montura de gafas', price: 30 },
    { id: 3, name: 'Estuche para gafas', price: 10 },
  ]);
  const [total, setTotal] = useState(0);

  const addToCart = (item) => {
    setItems([...items, item]);
    setTotal(total + item.price);
  };

  const removeFromCart = (item) => {
    setItems(items.filter((i) => i.id !== item.id));
    setTotal(total - item.price);
  };

  return (
    <div>
      <h2>Carrito de compras</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
    </div>
  );
};

export default Carrito;
