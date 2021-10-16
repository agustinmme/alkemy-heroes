import React, { useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import superhero from "../../../services/superhero";
import CardHero from "../../../components/CardHero/CardHero";
import "./Home.css";

function Home() {
  const handlerLogout = async () => {
    try {
      const value = await superhero.fetchByName("");
      console.log(value);
    } catch (error) {
      console.log(error);
    }
  };
  handlerLogout();

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
          <div class="d-flex flex-row board">
            <div class="p-4 text-center skill-block rounded ">
              <h6>Intelligence</h6>
              <h4>90%</h4>
            </div>
            <div class="p-4 text-center skill-block">
              <h6>Strength</h6>
              <h4>70%</h4>
            </div>
            <div class="p-4 text-center skill-block">
              <h6>Speed</h6>
              <h4>80%</h4>
            </div>
            <div class="p-4 text-center skill-block">
              <h6>Durability</h6>
              <h4>75%</h4>
            </div>
            <div class="p-4 text-center skill-block">
              <h6>Power</h6>
              <h4>90%</h4>
            </div>
            <div class="p-4 text-center skill-block">
              <h6>Combat</h6>
              <h4>90%</h4>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between my-3">
          <h1>My heroes</h1>
          <div className="add">
            <button className="btn btn-dark  my-auto text-uppercase ">
              add Hero
            </button>
          </div>
        </div>
        <div className="row g-2">
          <CardHero />
          <CardHero />
          <CardHero />
          <CardHero />
          <CardHero />
          <CardHero />
          <CardHero />
          <CardHero />
        </div>
        <p className="text-center p-5">Made with 💙 by Mansilla Agustin</p>
      </div>
    </>
  );
}

export default Home;
