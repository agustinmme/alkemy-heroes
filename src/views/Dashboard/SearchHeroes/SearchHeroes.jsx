import React, { useState, useEffect } from "react";

import axios from "axios";
import Navbar from "../../../components/Navbar/Navbar";
import CardMessage from "../../../components/CardMessage/CardMessage";
import CardSearch from "../../../components/CardSearch/CardSearch";
import Loader from "../../../components/Loader/Loader";

import "./SearchHeroes.css";
import { useDebouncedValue } from "../../../hook/useDebounce";
function SearchHeroes() {
  const [loading, setLoading] = useState(false);
  const [searchHeroes, setSearchHeroes] = useState([]);
  const [help, setHelp] = useState(true);
  const [errorAlert, setErrorAlert] = useState("");
  const baseURL = import.meta.env.VITE_SUPERHEROES;
  const [inputValue, setInputValue] = useState("");
  const debouncedInputValue = useDebouncedValue(inputValue, 1000);

  useEffect(async () => {
    if (inputValue != "") {
      try {
        setHelp(false);
        setLoading(true);

        const { data } = await axios.get(`${baseURL}/search/${inputValue}`);
        setSearchHeroes(data.results);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setErrorAlert(error.message);
        setTimeout(() => {
          setErrorAlert("");
        }, 4000);
      }
    }
  }, [debouncedInputValue]);

  return (
    <>
      <Navbar />
      <div className="container-fluid bg-primary banner">
        <div className="container-lg">
          <p className="title text-center text-uppercase">Search</p>
        </div>
      </div>

      <div className="p-3 d-flex board board-max">
        <div class="container-sm">
          <div className="col my-auto">
            <div className="search">
              <div class="input-group mb-5">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Write a hero or AntiHero"
                  name="search"
                  onChange={(e) => {
                    setInputValue(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className="container row g-5 mx-1">
          {searchHeroes &&
            searchHeroes.map((hero) => (
              <CardSearch
                key={hero.id}
                name={hero.name}
                img={hero.image["url"]}
                id={hero.id}
              />
            ))}
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
        </div>
      </div>
    </>
  );
}

export default SearchHeroes;
