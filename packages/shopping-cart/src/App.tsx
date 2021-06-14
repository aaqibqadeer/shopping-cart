import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useState } from "react";
import { Header } from "./components/Header.jsx";
import { Routes } from "./components/Routes";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Login } from "./pages/Login.jsx";
import { Products } from "./pages/Products.jsx";
import { Register } from "./pages/Register";
import { Cart } from "./pages/Cart";
import { Overlay } from './AppStyle';

export const AuthContext = React.createContext({});
export const UsersContext = React.createContext({});
export const LoadingContext = React.createContext({});
export const CartContext = React.createContext({});

export default function App() {
  const [authStatus, setAuthStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<any>([{name:"aaqib", email:"aaqib@gmail.com", password:"abc12345"}]);
  const [cart, setCart] = useState<any>([{id:1, quantity:1}]);

  function updateStatus(status:any) {
    setAuthStatus(status)
  }

  function addUser(user:any) {
    setUsers([...users,user])
  }

  function updateLoading(status:any) {
    setIsLoading(status)
  }

  function addToCart(product:any) {
    setCart([...cart, product])
    console.log(cart)
  }

  function updateCart(cart:any) {
    setCart(cart)
    console.log(cart)
  }

  return (
    <div className="App">
      {isLoading && <Overlay>
        <div className="d-flex justify-content-center">
          <div className="spinner-border m-5 p-5" role="status">
          </div>
        </div>
      </Overlay>}
      <CartContext.Provider value={{ cart, addToCart, updateCart }}>
        <LoadingContext.Provider value={{ isLoading, updateLoading }}>
          <UsersContext.Provider value={{users, addUser}}>
            <AuthContext.Provider value={{authStatus, updateStatus}}>
                <Router>
                  <Header/>
                  <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/products" component={Products} />
                    <Route path="/about" component={About} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/cart" component={Cart} />
                  </Switch>
                </Router>
            </AuthContext.Provider>
          </UsersContext.Provider>
        </LoadingContext.Provider>
      </CartContext.Provider>
    </div>
  );
}