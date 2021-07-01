import { useCallback, useState } from "react";
import { api } from "./api";

export const useLogoutHook = () => {
  const [res, setRes] = useState({
    success: false,
    loading: false,
    status: null,
  });

  const logout = useCallback(async () => {
    setRes({ success: false, loading: true, status: null });
    try {
      const response = await api.delete("/user/logout");
      localStorage.clear();
      setRes({ success: true, loading: false, status: 200 });
    } catch (error) {
      setRes({ success: false, loading: false, status: error.response.status });
    }
  }, []);

  return {
    res,
    logout,
  };
};
