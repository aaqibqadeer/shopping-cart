import { Link, Switch, BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Products from "./pages/Products";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="mb-5 navbar navbar-dark bg-dark navbar-expand-lg">
          <Link to="/" className="navbar-brand">Shopping Cart</Link>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"> <Link to="/" className="nav-link"> Home </Link> </li>
              <li className="nav-item"> <Link to="/products" className="nav-link"> Products </Link> </li>
              <li className="nav-item"> <Link to="/about" className="nav-link"> About </Link> </li>
            </ul>
          </div>
            <button className="btn mx-2">
              <i className="uil uil-shopping-cart-alt text-light position-relative">
                <span className="badge bg-danger rounded-pill position-absolute top-0 start-100 fst-normal">4</span>
              </i>
            </button>
            <Link to="/login" className="btn btn-primary mx-2">Sign In</Link>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/products">
            <Products/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
