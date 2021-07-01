import { AuthProvider } from "./authProvider";
import { CartProvider } from "./cartProvider";
import { UserProvider } from "./userProvider";
const Providers = [AuthProvider, CartProvider, UserProvider];

export const RootProvider = ({ children }) => {
  Providers.forEach((Provider) => {
    children = <Provider> {children} </Provider>;
  });
  return children;
};
