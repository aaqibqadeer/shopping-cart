import { useCallback, useState } from "react";
import { api } from "./api";

export const useRegisterHook = () => {
  const [res, setRes] = useState({
    success: false,
    loading: false,
    status: null,
  });
  const register = useCallback(async (payload) => {
    setRes({ success: false, loading: true, status: null });
    try {
      const response = await api.post("/user/register", payload);
      setRes({
        success: true,
        loading: false,
        status: response.status,
      });
    } catch (error) {
      setRes({ success: false, loading: false, status: error.response.status });
    }
  }, []);

  return { res, register };
};
