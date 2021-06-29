import { combineHOCs } from "../helper";
import { withAuth, withLoading } from "../store";
import { Overlay } from "../AppStyle.jsx";

const withHocs = combineHOCs(withAuth, withLoading);

export const Signout = withHocs(
  ({ authStatus, setIsLoading, isLoading, setAuthStatus }) => {
    const logout = () => {
      setIsLoading(true);
      let timer = setTimeout(() => {
        setIsLoading(false);
        setAuthStatus(false);
        localStorage.clear();
        clearTimeout(timer);
      }, 2000);
    };

    return (
      <>
        {isLoading && (
          <Overlay>
            <div className="d-flex justify-content-center">
              <div className="spinner-border m-5 p-5" role="status"></div>
            </div>
          </Overlay>
        )}
        {authStatus && (
          <button onClick={logout} className="btn btn-primary mx-2">
            Sign out
          </button>
        )}
      </>
    );
  }
);
