import { useCallback, useState } from "react";
import { api } from "./api";

export const useProductsHook = () => {
  const [res, setRes] = useState({
    success: false,
    loading: false,
    status: null,
    products: [],
  });
  const getProducts = useCallback(async () => {
    setRes({ success: false, loading: true, status: null, products: [] });
    try {
      const response = await api.get("/product");
      setRes({
        success: true,
        loading: false,
        status: response ? response.status : null,
        products: response.data,
      });
    } catch (error) {
      setRes({ success: false, loading: false, status: null, products: [] });
    }
  }, []);

  return { res, getProducts };
};
