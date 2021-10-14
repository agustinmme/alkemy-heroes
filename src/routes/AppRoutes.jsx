import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRouter } from "./PublicRouter";
import Login from "../views/pages/Login";
import Home from "../views/Dashboard/Home/Home";
function AppRoutes() {
  const [user, setUser] = useState({});
  const [logged, setLogged] = useState("false");
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("LoggedAlkemyChallenge");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      setLogged(true);
    } else {
        setLogged(false);
    }
  }, []);
  return (
    <Router>
      <Switch>
        <PublicRouter log={logged} path="/login" component={Login} />
        <PrivateRoute log={logged} path="/dash/home" component={Home} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
}

export default AppRoutes;
