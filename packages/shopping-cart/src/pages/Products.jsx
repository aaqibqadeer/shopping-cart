import { useContext } from "react";
import productsList from '../products.json';
import { Product } from '../components/Product';
import { NoProduct } from '../components/NoProduct';
import { AuthContext } from "../App";

export function Products(props) {
  const { authStatus } = useContext(AuthContext);

  const ProductList = productsList.arrayOfProducts.map((product) =>
    <Product product={product} key={product.id} id={product.id} authStatus={authStatus}/>
  )
  
  return(
    <div className="container">
      <div className="row">
        {productsList.arrayOfProducts.length>0 && ProductList}
        {productsList.arrayOfProducts.length===0 && <NoProduct/>}
      </div>
    </div>
  )
}