import React, { useEffect,useState } from "react";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRouter } from "./PublicRouter";
import Login from "../views/pages/Login";
import Home from "../views/Dashboard/Home/Home";
import { login } from "../actions/authAction";
import { fetchMyHeroes } from '../actions/superheroActions'
import superhero from '../services/superhero'
import { useDispatch, useSelector } from "react-redux";
import Loader from '../components/Loader/Loader'
function AppRoutes() {
  const { auth } = useSelector((state) => state);
  const [cargando, setCargando] = useState(true)
  const dispatch = useDispatch();
  useEffect(async() => {
    const loggedUserJSON = window.localStorage.getItem("LoggedAlkemyChallenge");
    if (loggedUserJSON) {
      const { email, token } = JSON.parse(loggedUserJSON);
      dispatch(login(email,token));
      const values = await superhero.fetchGroupById([70,2,32]);
      dispatch(fetchMyHeroes(values));
    }

    
    setCargando(false);
  }, []);

  if(cargando){
    return (
     <Loader/>
    )
  }
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
