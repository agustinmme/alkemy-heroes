import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ log, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        log ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};