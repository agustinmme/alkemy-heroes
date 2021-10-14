import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo-alkemy.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import loginServices from "../../services/login";
function App() {
  const [user, setUser] = useState({});
  const [erroAlert, setErroAlert] = useState("");
  return (
    <>
      <div className="bg">
        <div className="d-flex justify-content-center container">
          <div className="card my-auto ">
          {erroAlert!==""?<div className={"card-header"}>
              <div className="alert alert-warning alert-dismissible fade show" role="alert">
                {erroAlert}
              </div>
            </div>:null}
            <div className="card-body">
              <img
                src={logo}
                className="img-logo rounded mx-auto d-block mt-3 "
                alt="Logo Alkemy"
              />
              <div className="px-3">
                <div id="emailHelp" className="text-center fs-5">
                  Alkemy Heroes
                </div>
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  validate={(values) => {
                    let errors = {};
                    if (!values.email) {
                      errors.email = "Debes ingresar tu email/usuario";
                    } else if (
                      !/^[a-z0-9_.]+@[a-z0-9]+\.[a-z0-9_.]+$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "El formato no es valido";
                    }

                    if (!values.password) {
                      errors.password = "Debes ingresar tu contraseña";
                    }
                    return errors;
                  }}
                  onSubmit={async (values, { resetForm }) => {
                    try {
                      const user = await loginServices.login({
                        email: values.email,
                        password: values.password,
                      });
                      console.log("hola" + values.email);
                      setUser(user);
                      resetForm();
                      const { token } = user;
                      window.localStorage.setItem("LoggedAlkemyChallenge",JSON.stringify(token))
                    } catch (error) {
                        setErroAlert(error.message);
                        setTimeout(()=>{
                            setErroAlert("");
                        },4000);
                    }
                  }}
                >
                  {({ errors, touched }) => (
                    <Form className="form">
                      <div className="d-flex justify-content-center align-items-center"></div>
                      <div className="d-flex justify-content-center align-items-center"></div>
                      <div className="mb-3">
                        <label className="form-label mt-3">Email address</label>
                        <Field
                          type="email"
                          className={
                            errors.email && touched.email
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                          id="email"
                          name="email"
                          placeholder="Agustin@gmail.com"
                        />
                        <ErrorMessage
                          name="email"
                          component={() => (
                            <span
                              id="emailError"
                              className="text-danger fw-bolder mt-2"
                            >
                              {errors.email}
                            </span>
                          )}
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label ">Password</label>
                        <Field
                          type="password"
                          className={
                            errors.password && touched.password
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                          id="password"
                          name="password"
                          placeholder="Contraseña"
                        />
                        <ErrorMessage
                          name="password"
                          component={() => (
                            <span
                              id="passwordError"
                              className="text-danger fw-bolder mt-2"
                            >
                              {errors.password}
                            </span>
                          )}
                        />
                      </div>

                      <button
                        type="submit"
                        className={"btn btn-primary fw-light font-monospace "}
                      >
                        Login
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
            <div className={"card-footer "}>
              <p className="text-center my-auto">
                Made with 💙 by Mansilla Agustin
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
