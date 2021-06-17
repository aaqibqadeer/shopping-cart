import { useContext, useEffect } from "react";
import { LoadingContext, AuthContext } from "../App";

export function Signout(props) {

  const { updateLoading } = useContext(LoadingContext);
  const { updateStatus } = useContext(AuthContext);
  let timer;

  function logout() {
    updateLoading(true)
    timer = setTimeout(() => {
      updateLoading(false)
      updateStatus(false)
      clearTimeout(timer);
    }, 2000);
  }

  return(
    <>
      { props.authStatus && <button onClick={logout} className="btn btn-primary mx-2">Sign out</button> }
    </>
  )
}