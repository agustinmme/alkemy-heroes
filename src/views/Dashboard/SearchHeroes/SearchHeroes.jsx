import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import Navbar from "../../../components/Navbar/Navbar";
import CardMessage from "../../../components/CardMessage/CardMessage";
import CardSearch from "../../../components/CardSearch/CardSearch";
import Loader from "../../../components/Loader/Loader";
import * as Yup from "yup";
import "./SearchHeroes.css";
function SearchHeroes() {
  const [loading, setLoading] = useState(false);
  const [searchHeroes, setSearchHeroes] = useState([]);
  const [help, setHelp] = useState(true);
  const [errorAlert, setErrorAlert] = useState("");
  const baseURL = import.meta.env.VITE_SUPERHEROES;




  const onSubmit = async (values) => {
    try {
      setHelp(false);
      setLoading(true);

      const { data } = await axios.get(
        `${baseURL}/search/${values.searchHero}`
      );
      setSearchHeroes(data.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorAlert(error.message);
      setTimeout(() => {
        setErrorAlert("");
      }, 4000);
    }
  };

  const initialValues = {
    searchHero: "",
  };

  const validationSchema = Yup.object({
    searchHero: Yup.string()
      .required("Please enter a name")
  });


  return (
    <>
      <Navbar />
      <div className="container-fluid bg-primary banner">
        <div className="container-lg">
          <p className="title text-center text-uppercase">Search</p>
        </div>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="p-3 d-flex board board-max">
              <div className="col my-auto">
                <div className="search ">
                  <i className="search-icon">🦸‍♂️</i>
                  <Field
                    data-test-id="searchHeroInput"
                    type="text"
                    id="searchHero"
                    name="searchHero"
                    className={
                      errors.searchHero && touched.searchHero
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    placeholder={
                      errors.searchHero
                        ? errors.searchHero
                        : "You want a hero ? Search now"
                    }
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
          </Form>
        )}
      </Formik>

      <div className="row g-5 mx-1">
            {searchHeroes &&
              searchHeroes.map((hero) => (
                <CardSearch
                  key={hero.id}
                  name={hero.name}
                  img={hero.image["url"]}
                  id={hero.id}
                />
              ))}
          </div>




      {!searchHeroes && !loading ? (
        <CardMessage
          type={"warning"}
          title={"There are no Heroes that match your search."}
          text={"Check the spelling of the word."}
          moreText={"Use more generic words or fewer words."}
        />
      ) : null}

      {errorAlert !== "" ? (
        <CardMessage type={"danger"} title={errorAlert} />
      ) : null}

      {help ? (
        <CardMessage
          type={"info"}
          title={"Hi 👋, you can search for your heroes here ☝"}
        />
      ) : null}
      {loading ? (
        <div className="d-flex justify-content-center">
          <Loader type={1} />
        </div>
      ) : null}

    </>
  );
}

export default SearchHeroes;
