import React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/authAction";
import { removeHeroes } from "../../actions/superheroActions";
import { Link } from "react-router-dom";


function Navbar() {
  const dispatch = useDispatch();
  const handlerLogout = () => {
    dispatch(logout());
    dispatch(removeHeroes());
    window.localStorage.removeItem("LoggedAlkemyChallenge");
  };
 
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-white p-3 sticky-top">
      <div className="container-fluid">
        <Link to="/dash" className="navbar-brand">
          <Logo type={2} />
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav"></div>
          <div className="navbar-nav ms-auto">
            <a className="nav-item nav-link fw-bolder" onClick={handlerLogout}>
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
