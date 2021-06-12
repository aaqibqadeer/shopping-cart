import { useContext } from "react";
import productsList from '../products.json';
import Product from './Product';
import { AuthContext } from "../App";

export default function Products(props) {
  const {authStatus, updateStatus} = useContext(AuthContext);
  
  return(
    <div className="container">
      <div className="row">
        {productsList.arrayOfProducts.map((product, index) =>
          <Product product={product} key={index} authStatus={authStatus}/>
        )}
      </div>
    </div>
  )
}