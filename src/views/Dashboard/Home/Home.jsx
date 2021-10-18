import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../../components/Navbar/Navbar";
import CardHero from "../../../components/CardHero/CardHero";
import "./Home.css";
import Footer from "../../../components/Footer/Footer";
import Loader from '../../../components/Loader/Loader'



function Home({ history }) {
  const { superheroes } = useSelector((state) => state);

  const dispatch = useDispatch();



  return (
    <>
      <Navbar />
      <div className="container-fluid bg-primary banner">
        <div className="container-lg">
          <p className="title text-center ">SUPERHERO</p>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className="p-3 card  over-card bg-white rounded">
          <div className="d-flex flex-row board">
            <div className="p-4 text-center skill-block rounded ">
              <h6>Intelligence</h6>
              <h4>90%</h4>
            </div>
            <div className="p-4 text-center skill-block">
              <h6>Strength</h6>
              <h4>70%</h4>
            </div>
            <div className="p-4 text-center skill-block">
              <h6>Speed</h6>
              <h4>80%</h4>
            </div>
            <div className="p-4 text-center skill-block">
              <h6>Durability</h6>
              <h4>75%</h4>
            </div>
            <div className="p-4 text-center skill-block">
              <h6>Power</h6>
              <h4>90%</h4>
            </div>
            <div className="p-4 text-center skill-block">
              <h6>Combat</h6>
              <h4>90%</h4>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between my-3">
          <h1>My heroes</h1>
          <div className="add">
            <button
              className="btn btn-dark  my-auto text-uppercase "
              onClick={() => {
                history.push("/dash/search");
              }}
            >
              add Hero
            </button>
          </div>
        </div>
        <div className="row g-2">
          {superheroes.map((hero, index) => (
            <CardHero
              key={index}
              name={hero.name}
              powerstats={hero.powerstats}
              id={hero.id}
              img={hero.image["url"]}
            />
          ))}
        </div>
        <Footer padding={true} />
      </div>
    </>
  );
}

export default Home;
