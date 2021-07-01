import { useState } from "react";
import { AuthContext } from "../context";

export const AuthProvider = ({ children }) => {
  const [authStatus, setAuthStatus] = useState(false);

  const value = {
    authStatus,
    setAuthStatus,
  };

  return (
    <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  );
};
