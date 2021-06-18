import React from "react";
import { useState, useContext } from "react";

const LoadingContext = React.createContext({});

export const LoadingProvider = (Component) => {
  const [isLoading, setIsLoading] = useState(false);

  const updateLoading = (status) => setIsLoading(status);

  return (
    <LoadingContext.Provider value={{ isLoading, updateLoading }}>
      <Component />
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
