import { useContext } from "react";
import { AuthContext } from "../App";
import productsList from '../products.json';
import Product from './Product';

export default function Home(props) {

  const {authStatus, updateStatus} = useContext(AuthContext);
  
  return(
    <div className="container">
      <div className="row">
        {productsList.arrayOfProducts.map((product, index) =>
          <Product product={product} key={index} authStatus={authStatus} />
        )}
      </div>
    </div>
  )
}