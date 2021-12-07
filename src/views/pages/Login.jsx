import React, { useState } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../actions/authAction";
import { fetchMyHeroes } from "../../actions/superheroActions";
import Logo from "../../components/Logo/Logo";
import loginServices from "../../services/login";
import Footer from "../../components/Footer/Footer";
import storage from "../../services/storage";
import superhero from "../../services/superhero";
import "./Login.css";
import * as Yup from "yup";

function App({ history }) {
  const [user, setUser] = useState({});
  const [erroAlert, setErroAlert] = useState("");
  const dispatch = useDispatch();

  const onSubmit = async (values, { resetForm }) => {
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
          token: token,
        })
      );
      const heroes = storage.getHereos();
      const newArray = await superhero.fetchGroupById(heroes);

      dispatch(
        login({
          email: values.email,
          token,
        })
      );
      dispatch(fetchMyHeroes(newArray));
      history.push("/dash");
    } catch (error) {
      setErroAlert(error.response.status + "  " + error.response.data.error);
      setTimeout(() => {
        setErroAlert("");
      }, 4000);
    }
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Enter your email / username")
      .email("Enter a mail"),
    password: Yup.string()
      .required("Enter your password")
      .min(5, "Password is short"),
  });

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
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
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
