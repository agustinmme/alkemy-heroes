import React, { useEffect } from "react";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRouter } from "./PublicRouter";
import { login } from "../actions/authAction";
import { fetchMyHeroes } from "../actions/superheroActions";
import { useDispatch, useSelector } from "react-redux";
import Login from "../views/pages/Login";
import DashboardRoutes from "./DashboardRoutes";
import superhero from "../services/superhero";
import storage from "../services/storage";
function AppRoutes() {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(async () => {
    const loggedUserJSON = window.localStorage.getItem("LoggedAlkemyChallenge");
    if (loggedUserJSON) {
      const { email, token } = JSON.parse(loggedUserJSON);
      dispatch(login(email, token));
      const heroes = storage.getHereos();
      if (heroes[0] !== undefined) {
        const newArray = await superhero.fetchGroupById(heroes);
        dispatch(fetchMyHeroes(newArray));
      }
    }
  }, []);

  return (
    <Router>
      <Switch>
        <PublicRouter log={auth.logged} path="/login" component={Login} />
        <PrivateRoute
          log={auth.logged}
          path="/dash"
          component={DashboardRoutes}
        />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
}

export default AppRoutes;
