import { Link, Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { useContext } from "react";
import About from "./About";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Products from "./Products";
import Register from "./Register";
import { AuthContext, LoadingContext } from "../App";



function Header() {

  function logout() {
    updateLoading(true)
    setTimeout(() => {
      updateLoading(false)
      updateStatus(false)
    }, 2000);
  }

  const {authStatus, updateStatus} = useContext(AuthContext);
  const {isLoading, updateLoading} = useContext(LoadingContext);
  
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
            { authStatus && <button onClick={logout} className="btn btn-primary mx-2">Sign out</button> }
            { !authStatus && <Link to="/login" className="btn btn-primary mx-2">Sign In</Link> }
        </nav>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/products" component={Products}/>
          <Route path="/about" component={About}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </Switch>
      </Router>
    </div>
  );
}

export default Header;
