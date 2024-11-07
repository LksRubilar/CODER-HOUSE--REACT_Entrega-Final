// Button.jsx
import { useState } from "react";

export default function Button({ onCountChange, onAddToCart }) {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
    onCountChange(count + 1);
  };

  const handleSubtract = () => {
    if (count > 0) {
      setCount(count - 1);
      onCountChange(count - 1);
    }
  };

  const handleAddToCart = () => {
    onAddToCart(count);
    setCount(0); // Reinicia el contador después de agregar al carrito si así lo deseas
  };

  return (
    <div className="button-container">
      <button className="btn-min" onClick={handleSubtract}>
        -
      </button>
      <span className="btn-count">{count}</span>
      <button className="btn-plus" onClick={handleAdd}>
        +
      </button>
      <button className="btn-add" onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
}
