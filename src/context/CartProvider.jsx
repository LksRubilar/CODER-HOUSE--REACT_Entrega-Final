// CartContext.js o CartProvider.jsx
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // Remueve `export` aquí
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
    console.log(cartItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider; // Exportación por defecto
