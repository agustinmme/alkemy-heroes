import React, { } from "react";
import { BrowserRouter as Router,Route, Switch,useRouteMatch } from "react-router-dom";

import Home from "../views/Dashboard/Home/Home";
import SuperHeroes from "../views/Dashboard/SearchHeroes/SearchHeroes";

function DashboardRoutes() {
    let { path } = useRouteMatch();


  return (
    <Router>
      <Switch>
        <Route exact path={`${path}`} component={Home} />
        <Route exact path={`${path}/search`} component={SuperHeroes} />
      </Switch>
    </Router>
  );
}

export default DashboardRoutes;
