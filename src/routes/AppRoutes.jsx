import React, { useEffect } from "react";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRouter } from "./PublicRouter";
import Login from "../views/pages/Login";
import Home from "../views/Dashboard/Home/Home";
import { login } from "../actions/authAction";
import { useDispatch, useSelector } from "react-redux";
function AppRoutes() {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("LoggedAlkemyChallenge");
    if (loggedUserJSON) {
      const { email, token } = JSON.parse(loggedUserJSON);
      dispatch(login(email,token));
    }
  }, []);
  return (
    <Router>
      <Switch>
        <PublicRouter log={auth.logged} path="/login" component={Login} />
        <PrivateRoute log={auth.logged} path="/dash/home" component={Home} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
}

export default AppRoutes;
