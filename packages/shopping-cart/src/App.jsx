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
import { RootProvider } from "./store";

export const App = () => {
  return (
    <div className="App">
      <RootProvider>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/cart" component={Cart} />
            <RouteGuard path="/checkout" Component={Checkout} />
            <RouteGuard path="/order-success" Component={OrderSuccess} />
          </Switch>
        </Router>
      </RootProvider>
    </div>
  );
};
