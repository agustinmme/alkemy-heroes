import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PublicRouter = ({ log, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        log ? <Redirect to="/dash" /> : <Component {...props} />
      }
    />
  );
};
