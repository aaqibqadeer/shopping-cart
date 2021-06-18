import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, RouteGuard } from "./components";
import {
  Home,
  About,
  Login,
  Products,
  Register,
  Cart,
  Checkout,
  OrderSuccess,
} from "./pages";
import { Overlay } from "./AppStyle.jsx";

export const AuthContext = React.createContext({});
export const UsersContext = React.createContext({});
export const LoadingContext = React.createContext({});
export const CartContext = React.createContext({});

export const App = () => {
  const [authStatus, setAuthStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<any>([
    { name: "aaqib", email: "aaqib@gmail.com", password: "abc12345" },
  ]);
  const [cart, setCart] = useState<any>([{ id: 1, quantity: 1 }]);

  const updateStatus = (status: any) => setAuthStatus(status);

  const addUser = (user: any) => setUsers([...users, user]);

  const updateLoading = (status: any) => setIsLoading(status);

  const addToCart = (product: any) => setCart([...cart, product]);

  const updateCart = (cart: any) => setCart(cart);

  return (
    <div className="App">
      {isLoading && (
        <Overlay>
          <div className="d-flex justify-content-center">
            <div className="spinner-border m-5 p-5" role="status"></div>
          </div>
        </Overlay>
      )}
      <CartContext.Provider value={{ cart, addToCart, updateCart }}>
        <LoadingContext.Provider value={{ isLoading, updateLoading }}>
          <UsersContext.Provider value={{ users, addUser }}>
            <AuthContext.Provider value={{ authStatus, updateStatus }}>
              <Router>
                <Header />
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/products" component={Products} />
                  <Route path="/about" component={About} />
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                  <Route path="/cart" component={Cart} />
                  <RouteGuard
                    path="/checkout"
                    Component={Checkout}
                    auth={authStatus}
                  />
                  <RouteGuard
                    path="/order-success"
                    Component={OrderSuccess}
                    auth={authStatus}
                  />
                </Switch>
              </Router>
            </AuthContext.Provider>
          </UsersContext.Provider>
        </LoadingContext.Provider>
      </CartContext.Provider>
    </div>
  );
};
