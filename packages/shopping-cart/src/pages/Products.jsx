import { useEffect } from "react";
import { Product, NoProduct } from "../components";
import { useProductsHook } from "../utils/api";
import { Overlay } from "../AppStyle.jsx";

export const Products = () => {
  const { res, getProducts } = useProductsHook();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const ProductList = () =>
    res.products
      ? res.products.map((product) => (
          <Product product={product} key={product._id} id={product._id} />
        ))
      : null;

  return (
    <>
      {res.loading && (
        <Overlay>
          <div className="d-flex justify-content-center">
            <div className="spinner-border m-5 p-5" role="status"></div>
          </div>
        </Overlay>
      )}
      {!res.loading && (
        <div className="container">
          <div className="row scroll">
            {res.products.length > 0 && <ProductList />}
            {res.products.length === 0 && <NoProduct />}
          </div>
        </div>
      )}
    </>
  );
};
