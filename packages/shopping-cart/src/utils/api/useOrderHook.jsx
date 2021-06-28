import { useCallback, useState } from "react";
import { api } from "./api";

export const useOrderHook = () => {
  const [res, setRes] = useState({
    success: false,
    loading: false,
    status: null,
  });
  const order = useCallback(async (payload) => {
    setRes({ success: false, loading: true, status: null });
    try {
      const response = await api.post("/order", payload);
      setRes({
        success: true,
        loading: false,
        status: response.status,
      });
    } catch (error) {
      setRes({ success: false, loading: false, status: error.response.status });
    }
  }, []);

  return { res, order };
};
