import React from "react";
import { useState, useContext } from "react";

const LoadingContext = React.createContext({});

export function LoadingProvider(Component) {
  const [isLoading, setIsLoading] = useState(false);
  
  function updateLoading(status) {
    setIsLoading(status)
  }
  
  return(
    <LoadingContext.Provider value={{ isLoading, updateLoading }}>
      <Component/>
    </LoadingContext.Provider>
  )
}

export function useLoading() {
  return useContext(LoadingContext);
}