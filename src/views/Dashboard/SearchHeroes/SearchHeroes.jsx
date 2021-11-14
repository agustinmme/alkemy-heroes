import React, { useState,useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import CardMessage from "../../../components/CardMessage/CardMessage";
import CardSearch from "../../../components/CardSearch/CardSearch";
import Loader from "../../../components/Loader/Loader";
import "./SearchHeroes.css";
function SearchHeroes() {
  const [loading, setLoading] = useState(false);
  const [searchHeroes, setSearchHeroes] = useState([]);
  const [help, setHelp] = useState(true);
  const [errorAlert, setErrorAlert] = useState("");
  const baseURL = import.meta.env.VITE_SUPERHEROES;
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      })
  }, [])
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
                errors.searchHero = "Enter a name please";
              }
              return errors;
            }}
            onSubmit={async (values) => {
              try {
                setHelp(false);
                setLoading(true);
                
                const { data } = await axios.get(`${baseURL}/search/${values.searchHero}`);
                setSearchHeroes(data.results);
                setLoading(false);

              } catch (error) {
                setLoading(false);
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

        {loading ? <Loader type={1} /> : null}


         {searchHeroes && searchHeroes.map((hero) => (
            <CardSearch
              key={hero.id}
              name={hero.name}
              img={hero.image["url"]}
              id={hero.id}
            />
          ))}
 
          {!searchHeroes && !loading ? <CardMessage
            type={"warning"}
            title={"There are no Heroes that match your search."}
            text={"Check the spelling of the word."}
            moreText={"Use more generic words or fewer words."}
          />
        :null}

        {errorAlert !== "" ? (
          <CardMessage type={"danger"} title={errorAlert} />
        ) : null}

        {help ? (
          <CardMessage
            type={"info"}
            title={"Hi 👋, you can search for your heroes here ☝"}
          />
        ) : null}

        {loading ? null : <Footer padding={true} />}
      </div>
    </>
  );
}

export default SearchHeroes;
