import { useContext } from "react";
import { LoadingContext } from "../context";

export const withLoading = (Component) => {
  const LoadingConsumer = (props) => {
    const context = useContext(LoadingContext);
    return <Component {...props} {...context} />;
  };
  return LoadingConsumer;
};
