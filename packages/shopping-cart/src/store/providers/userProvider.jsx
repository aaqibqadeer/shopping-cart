import { useState } from "react";
import { UserContext } from "../context";

export const CartProvider = ({ children }) => {
  const [user, setUser] = useState({
    _id: "",
    name: "",
    email: "",
  });

  const value = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={value}> {children} </UserContext.Provider>
  );
};
