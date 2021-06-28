import { useContext } from "react";
import { LoadingContext, AuthContext } from "../App";

export const Signout = ({ authStatus }) => {
  const { updateLoading } = useContext(LoadingContext);
  const { updateStatus } = useContext(AuthContext);

  const logout = () => {
    updateLoading(true);
    let timer = setTimeout(() => {
      updateLoading(false);
      updateStatus(false);
      localStorage.clear();
      clearTimeout(timer);
    }, 2000);
  };

  return (
    <>
      {authStatus && (
        <button onClick={logout} className="btn btn-primary mx-2">
          Sign out
        </button>
      )}
    </>
  );
};
