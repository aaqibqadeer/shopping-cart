import { useState } from "react";
import { CartContext } from "../context";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart([...cart, product]);
  const updateCart = (cart) => setCart(cart);

  const value = {
    cart,
    addToCart,
    updateCart,
  };

  return (
    <CartContext.Provider value={value}> {children} </CartContext.Provider>
  );
};
