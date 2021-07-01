import { Redirect, Route } from "react-router-dom";
import { withAuth } from "../../store";

export const RouteGuard = withAuth(({ Component, authStatus, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authStatus ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
});
