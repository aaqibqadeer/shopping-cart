import { useContext } from "react";
import { LoadingContext, AuthContext } from "../App";

export function Signout(props) {

  const {isLoading, updateLoading} = useContext(LoadingContext);
  const {authStatus, updateStatus} = useContext(AuthContext);


  function logout() {
    updateLoading(true)
    setTimeout(() => {
      updateLoading(false)
      updateStatus(false)
    }, 2000);
  }

  return(
    <>
      { props.authStatus && <button onClick={logout} className="btn btn-primary mx-2">Sign out</button> }
    </>
  )
}