// CartDetail.jsx
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

export default function CartDetail() {
  const { cartItems, addToCart, updateCartItemQuantity } =
    useContext(CartContext);

  const handleAdd = (product) => {
    addToCart(product, 1); // Incrementa en 1 la cantidad del producto
  };

  const handleSubtract = (product) => {
    if (product.quantity > 1) {
      addToCart(product, -1); // Disminuye en 1 la cantidad del producto
    }
  };

  return (
    <div className="cart-detail">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div className="">
          {cartItems.map((item) => (
            <div key={item.id} className="detail-list">
              <div className="list-img">
                <img
                  src={`../src/img/${item.image}.jpg`}
                  alt={item.title}
                  className=""
                />
              </div>
              <div className="list-info">
                <h3>{item.title}</h3>
                <p>Precio: ${item.price}</p>
              </div>
              <div className="unity-controls">
                <button
                  className="btn-min"
                  onClick={() => handleSubtract(item)}
                >
                  -
                </button>
                <p className="stock-count">
                  Cantidad: <span>{item.quantity}</span>
                </p>
                <button className="btn-plus" onClick={() => handleAdd(item)}>
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
