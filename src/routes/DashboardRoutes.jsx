import React, { } from "react";
import { BrowserRouter as Router,Route, Switch,useRouteMatch } from "react-router-dom";

import Home from "../views/Dashboard/Home/Home";
import SuperHeroes from "../views/Dashboard/SearchHeroes/SearchHeroes";
import Details from "../views/Dashboard/Details/Details";
function DashboardRoutes() {
    let { path } = useRouteMatch();


  return (
    <Router>
      <Switch>
        <Route exact path={`${path}`} component={Home} />
        <Route exact path={`${path}/search`} component={SuperHeroes} />
        <Route exact path={`${path}/details/:id`} component={Details} />
      </Switch>
    </Router>
  );
}

export default DashboardRoutes;
