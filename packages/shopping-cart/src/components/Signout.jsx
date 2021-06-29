import { useEffect } from "react";
import { withAuth } from "../store";
import { Overlay } from "../AppStyle.jsx";
import { useLogoutHook } from "../utils/api";

export const Signout = withAuth(({ authStatus, setAuthStatus }) => {
  const { res, logout } = useLogoutHook();

  useEffect(() => {
    setAuthStatus(!res.success);
  }, [res]);

  return (
    <>
      {res.loading && (
        <Overlay>
          <div className="d-flex justify-content-center">
            <div className="spinner-border m-5 p-5" role="status"></div>
          </div>
        </Overlay>
      )}
      {!res.loading && authStatus && (
        <button onClick={logout} className="btn btn-primary mx-2">
          Sign out
        </button>
      )}
    </>
  );
});
