import React, { useState } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../actions/authAction";
import Logo from "../../components/Logo/Logo";
import loginServices from "../../services/login";
import Footer from "../../components/Footer/Footer";
import "./Login.css";
function App({ history }) {
  const [user, setUser] = useState({});
  const [erroAlert, setErroAlert] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <div className="bg">
        <div className="d-flex justify-content-center container">
          <div className="card login-card my-auto ">
            {erroAlert !== "" ? (
              <div className={"card-header alert-danger p-3 fs-5"}>
                <div className="text-center" role="alert">
                  {erroAlert}
                </div>
              </div>
            ) : null}
            <div className="card-body">
              <Logo type={1} />
              <div className="px-3">
                <div id="emailHelp" className="text-center fs-5">
                  Challenge Alkemy
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
                      setUser(user);
                      resetForm();
                      const { token } = user;
                      window.localStorage.setItem(
                        "LoggedAlkemyChallenge",
                        JSON.stringify({
                          email: values.email,
                          password: values.password,
                          token: token,
                        })
                      );
                      dispatch(
                        login({
                          email: values.email,
                          token,
                        })
                      );
                      history.push("/dash");
                    } catch (error) {
                      setErroAlert(error.message);
                      setTimeout(() => {
                        setErroAlert("");
                      }, 4000);
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
                          placeholder="challenge@alkemy.org"
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
                          placeholder="react"
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
                        className={
                          "btn btn-primary btn-login fw-light font-monospace "
                        }
                      >
                        Login
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
            <div className={"card-footer "}>
              <Footer padding={false} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
