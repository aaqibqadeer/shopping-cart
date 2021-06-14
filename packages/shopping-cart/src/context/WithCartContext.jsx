import React from "react";
import { useState, useContext, useRef } from "react";

export const CartContext = React.createContext({});

function CartContextProvider(props) {
  const [cart, setCart] = useState([{id:1, quantity:1}]);
  const ref = useRef({
    cart:cart,
    setCart:setCart,
    addToCart:addToCart
  })
  console.log("ref")
  console.log(ref.current)

  function addToCart(product) {
    // ref.current.cart = [...ref.current.cart, product]
    // ref.current.setCart(ref.current.cartValue)
    setCart([...cart, product])
    console.log(product)
    console.log(cart)
    // console.log(ref.current.cart)
  }

  function updateCart(cart) {
    setCart()
  }

  // return function (props) {
    return (
      <CartContext.Provider value={{ cart:ref.current.cart, addToCart:ref.current.addToCart, updateCart }}> 
        { props.children }
      </CartContext.Provider>
    )
  // }
}

export function useCartContext() {
  return useContext(CartContext);
}

export function withCartContext(Component) {
  return function (props) {
    return (
      <CartContextProvider>
        <Component {...props} />
      </CartContextProvider>
    )
  }
}