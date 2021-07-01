import { useContext } from "react";
import { CartContext } from "../context";

export const withCart = (Component) => {
  const CartConsumer = (props) => {
    const context = useContext(CartContext);
    return <Component {...props} {...context} />;
  };
  return CartConsumer;
};
