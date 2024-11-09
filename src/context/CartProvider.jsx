// CartProvider.jsx
import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        const updatedItems = prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: Math.max(item.quantity + quantity, 0) }
            : item
        );
        return updatedItems.filter((item) => item.quantity > 0);
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  // Nueva función para eliminar un producto completamente del carrito
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  // Nueva función para vaciar todo el carrito
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
