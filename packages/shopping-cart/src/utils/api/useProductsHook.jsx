import { useCallback, useState } from "react";
import { api } from "./api";

export const useProductsHook = () => {
  const [products, setProducts] = useState({});
  const [res, setRes] = useState({
    success: false,
    loading: false,
    status: null,
  });
  const getProducts = useCallback(async () => {
    setRes({ success: false, loading: true, status: null });
    try {
      const response = await api.get("/product");
      setProducts(response.data);
      setRes({
        success: true,
        loading: false,
        // status: response.status,
      });
    } catch (error) {
      setProducts({});
      setRes({ success: false, loading: false, status: null });
    }
  }, []);

  return { res, getProducts, products };
};
