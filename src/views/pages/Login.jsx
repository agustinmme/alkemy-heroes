
import React from "react";
import "./Login.css";
import logo from '../../assets/logo-alkemy.png'
import { Formik } from "formik";

function App() {
  return (
    <>
    <div className="bg">
    <div className="d-flex justify-content-center container">
      <div className="card my-auto">
        <img
          src={logo}
          className="img-logo rounded mx-auto d-block mt-3 "
          alt="Logo Alkemy"
        />
        <div className="px-3">

        <Formik
        onSubmit={()=>{
            console.log("hola")
        }}
        >
            {({handleSubmit})=>(
                    <form onSubmit={handleSubmit}>
                        <div className="d-flex justify-content-center align-items-center">
                        <div id="emailHelp" className="form-text fs-5">
                        Alkemy Heroes 
                        </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center"></div>
                        <div className="mb-3">
                        <label  className="form-label mt-3">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                        
                        </div>
                        <div className="mb-3">
                        <label  className="form-label ">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                        />

                        </div>

                        <button
                        type="submit"
                        className="btn btn-primary fw-light font-monospace "
                        >
                        Login
                        </button>
                    </form>
          )}
          </Formik>


          
        </div>
        <div className="card-body text-light mx-auto mt-2">Made with 💙 by Mansilla Agustin</div>
        <div id="emailHelp" className="text-danger fw-bolder mt-2">
                We'll never share your email with anyone else.
              </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default App;
