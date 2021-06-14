import { useContext } from "react";
import { AuthContext } from "../App";
import productsList from '../products.json';
import { Product } from '../components/Product.jsx';

export function Home(props) {

  const {authStatus} = useContext(AuthContext);
  
  return(
    <div className="container">
      <div className="row scroll">
          {productsList.arrayOfProducts.map((product) =>
            <Product product={product} key={product.id} id={product.id} authStatus={authStatus} />
          )}
      </div>
    </div>
  )
}