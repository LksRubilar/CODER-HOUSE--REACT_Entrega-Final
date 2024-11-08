// CartProvider.jsx
import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext); // Hook personalizado para acceder al contexto
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

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
