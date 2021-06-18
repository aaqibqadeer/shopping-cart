import { useContext } from "react";
import { AuthContext } from "../App";
import { Product, NoProduct } from "../components";
import productsList from "../products.json";

export const Products = () => {
  const { authStatus } = useContext(AuthContext);

  const ProductList = () =>
    productsList.arrayOfProducts.map((product) => (
      <Product
        product={product}
        key={product.id}
        id={product.id}
        authStatus={authStatus}
      />
    ));

  return (
    <div className="container">
      <div className="row scroll">
        {productsList.arrayOfProducts.length > 0 && <ProductList />}
        {productsList.arrayOfProducts.length === 0 && <NoProduct />}
      </div>
    </div>
  );
};
