import React, { useState } from "react";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./SearchHeroes.css";
import CardMessage from "../../../components/CardMessage/CardMessage";
import superhero from "../../../services/superhero";
import CardSearch from "../../../components/CardSearch/CardSearch";
import Loader from '../../../components/Loader/Loader'
function SearchHeroes() {
  const [loading, setLoading] = useState(false);
  const [searchHeroes, setSearchHeroes] = useState([]);
  const [help, setHelp] = useState(true);
  const [errorAlert, setErrorAlert] = useState("");
  return (
    <>
      <Navbar />
      <div className="container-fluid bg-primary banner">
        <div className="container-lg">
          <p className="title text-center text-uppercase">Search</p>
        </div>
      </div>
      <div className="container mt-5 mb-5 ">
        <div className="p-3 card  over-card bg-white rounded">
          <Formik
            initialValues={{
              searchHero: "",
            }}
            validate={(values) => {
              let errors = {};
              if (!values.searchHero) {
                errors.searchHero = "Ingrese un nombre de héroe por favor";
              }
              return errors;
            }}
            onSubmit={async (values, { resetForm }) => {
              try {
                setHelp(false);
                setLoading(true)
                const { results } = await superhero.fetchByName(
                  values.searchHero
                );
                setSearchHeroes(results);
                resetForm();
                setLoading(false)
              } catch (error) {
                setErrorAlert(error.message);
                setTimeout(() => {
                  setErrorAlert("");
                }, 4000);
              }
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="p-3 d-flex board board-max">
                  <div className="col my-auto">
                    <div className="search ">
                      <i className="search-icon">🦸‍♂️</i>
                      <Field
                        type="text"
                        id="searchHero"
                        name="searchHero"
                        className={
                          errors.searchHero && touched.searchHero
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        placeholder="You want a hero ? Search now"
                      />
                      <button
                        className={
                          errors.searchHero && touched.searchHero
                            ? "btn btn-danger button-inside-error"
                            : "btn btn-info button-inside"
                        }
                        type="submit"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
                <ErrorMessage
                  name="searchHero"
                  component={() => (
                    <h6 className="text-center text-danger error-text mt-3">
                      {errors.searchHero}
                    </h6>
                  )}
                />
              </Form>
            )}
          </Formik>
        </div>

        {  loading? <Loader type={1} />:null}

        {
         searchHeroes!== undefined? searchHeroes.map((hero, index) => (
            <CardSearch key={hero.id} name={hero.name} img={hero.image["url"] } id={hero.id}/>
          )):<CardMessage
          type={"warning"}
          title={"No hay Heroes que coincidan con tu búsqueda."}
          text={"Revisá la ortografía de la palabra."}
          text2={"Utilizá palabras más genéricas o menos palabras."}
        />
        }

        {errorAlert !== "" ? (
          <CardMessage type={"danger"} title={errorAlert} />
        ) : null}

        {help ? (
          <CardMessage
            type={"info"}
            title={"Hola 👋, puedes buscar a tus heroes aqui ☝"}
          />
        ) : null}

        <Footer padding={true} />
      </div>
    </>
  );
}

export default SearchHeroes;
