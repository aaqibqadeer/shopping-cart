import { useContext } from "react";
import productsList from '../products.json';
import Product from './Product';
import { AuthContext } from "../App";

export default function Products(props) {
  const {authStatus, updateStatus} = useContext(AuthContext);
  
  return(
    <div className="container">
      <div className="row">
        {productsList.arrayOfProducts.map((product) =>
          <Product product={product} key={product.id} id={product.id} authStatus={authStatus}/>
        )}
      </div>
    </div>
  )
}