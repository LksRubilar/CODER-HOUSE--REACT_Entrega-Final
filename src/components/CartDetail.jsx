// CartDetail.jsx
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import { FaTrashAlt } from "react-icons/fa";

export default function CartDetail() {
  const {
    cartItems,
    addToCart,
    updateCartItemQuantity,
    removeFromCart,
    clearCart,
  } = useContext(CartContext);

  const handleAdd = (product) => {
    addToCart(product, 1); // Incrementa en 1 la cantidad del producto
  };

  const handleSubtract = (product) => {
    if (product.quantity > 1) {
      addToCart(product, -1); // Disminuye en 1 la cantidad del producto
    }
  };

  const handleRemove = (product) => {
    removeFromCart(product.id); // Elimina el producto completamente
  };

  // Calcular el total de productos (cantidad de unidades) y el total de la compra
  const totalProducts = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div className="cart-detail">
      <h2 className="cart-title">Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p className="cart-state">Tu carrito está vacío</p>
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
                <p>
                  Precio: <span>${item.price}</span>
                </p>
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
                <button
                  className="btn-remove"
                  onClick={() => handleRemove(item)}
                >
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          ))}
          <div className="order-summary">
            <h2>Resumen de la compra</h2>
            <h3>
              Total de Productos: <span>{totalProducts}</span>
            </h3>
            <h3>
              Total de la Compra: <span>${totalPrice.toFixed(2)}</span>
            </h3>
            <button className="btn-clear" onClick={clearCart}>
              Vaciar Carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
