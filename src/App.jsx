
import React from "react";
import "./App.css";

function App() {
  return (
    <>
    <div className="bg">
    <div className="d-flex justify-content-center align-items-center container">
      <div className="card">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D0BAQEao2V2j5tDnw/company-logo_200_200/0/1625236028053?e=1642032000&v=beta&t=R70-mM8BuAe11gTe5ioWFBGmuqZu-PLDJu4LKHSt8gk"
          className="rounded mx-auto d-block"
          alt="Logo Alkemy"
        />
        <div className="px-3">
          <form>
            <div className="d-flex justify-content-center align-items-center">
              <div id="emailHelp" className="form-text fs-5">
               Alkemy Heroes 
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center"></div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label mt-3">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="text-danger fw-bolder mt-2">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label ">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
              <div id="emailHelp" className="text-danger fw-bolder mt-2">
                We'll never share your email with anyone else.
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary fw-light font-monospace mt-2"
            >
              Login
            </button>
          </form>
        </div>
        <div className="card-body text-light mx-auto mt-5">Made with 💙 by Mansilla Agustin</div>
      </div>
    </div>
    </div>
    </>
  );
}

export default App;
