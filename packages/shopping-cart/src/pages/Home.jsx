import { useContext } from "react";
import { AuthContext } from "../App";
import productsList from '../products.json';
import Product from './Product';

export default function Home(props) {

  const {authStatus, updateStatus} = useContext(AuthContext);
  
  return(
    <div className="container">
      <div className="row">
        {productsList.arrayOfProducts.map((product) =>
          <Product product={product} key={product.id} id={product.id} authStatus={authStatus} />
        )}
      </div>
    </div>
  )
}