import { LoadingProvider, AuthProvider, CartProvider } from "./";

const Providers = [LoadingProvider, AuthProvider, CartProvider];

export const RootProvider = ({ children }) => {
  Providers.forEach((Provider) => {
    if (Array.isArray(Provider)) {
      const [Component, props] = Provider;
      children = <Component {...props}> {children} </Component>;
    } else {
      children = <Provider> {children} </Provider>;
    }
  });
  return children;
};
