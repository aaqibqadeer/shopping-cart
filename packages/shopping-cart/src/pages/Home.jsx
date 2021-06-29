import { useEffect } from "react";
import { Product, NoProduct } from "../components";
import { combineHOCs } from "../helper";
import { withAuth, withLoading } from "../store";
import { useProductsHook } from "../utils/api";

const withHocs = combineHOCs(withAuth, withLoading);

export const Home = withHocs(({ setIsLoading }) => {
  const { res, getProducts, products } = useProductsHook();

  useEffect(() => {
    setIsLoading(res.loading);
  }, [res, setIsLoading]);

  useEffect(() => {
    getProducts();
  }, []);

  const ProductList = () =>
    products
      ? products.map((product) => (
          <Product product={product} key={product._id} id={product._id} />
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
});
