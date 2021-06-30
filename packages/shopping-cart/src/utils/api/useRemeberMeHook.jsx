import { useCallback, useState } from "react";
import { api } from "./api";

export const useRememberMeHook = () => {
  const [res, setRes] = useState({
    success: false,
    loading: false,
    status: null,
    user: {
      _id: "",
      name: "",
      email: "",
    },
  });

  const fetchUser = useCallback(async () => {
    setRes({
      success: false,
      loading: true,
      status: null,
      user: {
        _id: "",
        name: "",
        email: "",
      },
    });

    try {
      const response = await api.get("/user/me");
      localStorage.setItem("userId", response.data._id);
      setRes({
        success: true,
        loading: false,
        status: response.status,
        user: response.data,
      });
    } catch (error) {
      setRes({
        success: false,
        loading: false,
        status: error.response ? error.response.status : 500,
        user: {
          _id: "",
          name: "",
          email: "",
        },
      });
    }
  }, []);

  return {
    res,
    fetchUser,
  };
};
