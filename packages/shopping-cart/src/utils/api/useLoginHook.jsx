import { useCallback, useState } from "react";
import { api } from "./api";

export const useLoginHook = () => {
  const [res, setRes] = useState({
    success: false,
    loading: false,
    status: null,
  });

  const login = useCallback(async (payload) => {
    setRes({
      success: false,
      loading: true,
      status: null,
    });

    try {
      const response = await api.post("/user/login", payload);
      localStorage.setItem("userId", response.data._id);
      setRes({
        success: true,
        loading: false,
        status: response.status,
      });
    } catch (error) {
      setRes({
        success: false,
        loading: false,
        status: error.response ? error.response.status : 500,
      });
    }
  }, []);

  return {
    res,
    login,
  };
};
