import { useContext, useEffect } from "react";
import { AuthContext, LoadingContext } from "../App";
import { Product, NoProduct } from "../components";
import { useProductsHook } from "../utils/api";

export const Products = () => {
  const { authStatus } = useContext(AuthContext);
  const { updateLoading } = useContext(LoadingContext);
  const { res, getProducts, products } = useProductsHook();

  useEffect(() => {
    updateLoading(res.loading);
  }, [res, updateLoading]);

  useEffect(() => {
    getProducts();
  }, []);

  const ProductList = () =>
    products
      ? products.map((product) => (
          <Product
            product={product}
            key={product._id}
            id={product._id}
            authStatus={authStatus}
          />
        ))
      : null;

  return (
    <div className="container">
      <div className="row scroll">
        {products.length > 0 && <ProductList />}
        {products.length === 0 && <NoProduct />}
      </div>
    </div>
  );
};
