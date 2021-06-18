import React from "react";
import { useState, useContext, useRef } from "react";

export const CartContext = React.createContext({});

const CartContextProvider = ({ children }) => {
  const addToCart = (product) => setCart([...cart, product]);

  const [cart, setCart] = useState([{ id: 1, quantity: 1 }]);

  const ref = useRef({
    cart: cart,
    setCart: setCart,
    addToCart: addToCart,
  });

  const updateCart = (cart) => setCart();

  return (
    <CartContext.Provider
      value={{
        cart: ref.current.cart,
        addToCart: ref.current.addToCart,
        updateCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);

export const withCartContext = (Component) => {
  return function (props) {
    return (
      <CartContextProvider>
        <Component {...props} />
      </CartContextProvider>
    );
  };
};
