import React from "react";
import "./Login.css";
import logo from "../../assets/logo-alkemy.png";
import { Formik, Form, Field, ErrorMessage } from "formik";

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
                initialValues={{
                  email: "",
                  password: "",
                }}
                validate={(values) => {
                  let errors = {};
                  if (!values.email) {
                    errors.email = "ingresa un email";
                  } else if (!values.email) {
                    errors.email = "Ingrese un mail valido";
                  }

                  if (!values.password) {
                    errors.password = "ingresa un password";
                  } else if (!values.password) {
                    errors.password = "ingresa una contresena valida";
                  }
                  return errors;
                }}
                onSubmit={(values, { resetForm }) => {
                  console.log("hola" + values.email);
                  resetForm();
                }}
              >
                {({
                  errors
                }) => (
                  <Form className="form">
                    <div className="d-flex justify-content-center align-items-center">
                      <div id="emailHelp" className="form-text fs-5">
                        Alkemy Heroes
                      </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center"></div>
                    <div className="mb-3">
                      <label className="form-label mt-3">Email address</label>
                      <Field
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Correo electrónico"
                      />
                      <ErrorMessage
                        name="email"
                        component={() => (
                          <div
                            id="emailError"
                            className="text-danger fw-bolder mt-2"
                          >
                            {errors.email}
                          </div>
                        )}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label ">Password</label>
                      <Field
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Contraseña"
                      />
                      <ErrorMessage
                        name="password"
                        component={() => (
                          <div
                            id="passwordError"
                            className="text-danger fw-bolder mt-2"
                          >
                            {errors.password}
                          </div>
                        )}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary fw-light font-monospace "
                    >
                      Login
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="card-body text-light mx-auto mt-2">
              Made with 💙 by Mansilla Agustin
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
