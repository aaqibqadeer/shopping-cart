import { useState } from "react";
import { UserContext } from "../context";

export const UserProvider = ({ children }) => {
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
