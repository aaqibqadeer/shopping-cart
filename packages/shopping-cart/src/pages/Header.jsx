import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../App";
import { CartContext } from "../App";
import { Links } from './Links'
import { Signout } from './Signout'

export function Header() {

  const { cart } = useContext(CartContext);
  const { authStatus } = useContext(AuthContext);
  

  const links = [
    {text:"Home", to:"/"},
    {text:"Products", to:"/products"},
    {text:"About", to:"/about"},
  ]
  
  return (
    <nav className="mb-5 navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Shopping Cart</Link>
          <Links links={links} />
          <Link to="/cart" className="btn mx-2">
            <i className="uil uil-shopping-cart-alt text-light position-relative">
              {authStatus && cart.length>0 && <span className="badge bg-danger rounded-pill position-absolute top-0 start-100 fst-normal"> { cart.length } </span>}
            </i>
          </Link>
          { !authStatus && <Link to="/login" className="btn btn-primary mx-2">Sign In</Link> }
          <Signout authStatus={authStatus}/>
          
      </div>
    </nav>
  );
}