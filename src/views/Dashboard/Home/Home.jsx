import React, { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../../components/Navbar/Navbar";
import CardHero from "../../../components/CardHero/CardHero";
import "./Home.css";

function Home() {

  const myTeam = useSelector(state => state.superheroes);

  const powerstats = {
    intelligence: "100",
    strength: "26",
    speed: "27",
    durability: "50",
    power: "47",
    combat: "100",
  };


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
            <button className="btn btn-dark  my-auto text-uppercase ">
              add Hero
            </button>
          </div>
        </div>
        <div className="row g-2">
        {myTeam.map((hero, index) => (
            <CardHero key={index} name={hero.name} powerstats={hero.powerstats} id={hero.id} img={hero.image["url"]}  />
            ))}
          
        </div>
        <p className="text-center p-5">Made with 💙 by Mansilla Agustin</p>
      </div>
    </>
  );
}

export default Home;
