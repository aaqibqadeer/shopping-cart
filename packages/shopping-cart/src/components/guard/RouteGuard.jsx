import React from "react";
import { Redirect, Route } from "react-router-dom";

export const RouteGuard = ({ Component, auth, ...rest }) => {

  return (
    <Route {...rest}
      render={(props) => auth ? <Component {...props} /> : <Redirect to="/" />}
    />
  );
};
