import React, { useState } from 'react';

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(count);
  };

  return (
    <div className="item-count">
      <button onClick={handleDecrement} disabled={count <= 1}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement} disabled={count >= stock}>+</button>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;