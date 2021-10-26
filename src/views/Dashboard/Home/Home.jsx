import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../../components/Navbar/Navbar";
import CardHero from "../../../components/CardHero/CardHero";
import "./Home.css";
import Footer from "../../../components/Footer/Footer";
import PowerStatsTeam from "../../../components/PowerStatsTeam/PowerStatsTeam";
import CardMessage from "../../../components/CardMessage/CardMessage";

function Home({ history }) {
  const { superheroes } = useSelector((state) => state);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Navbar />

      <div className="container-fluid bg-primary banner">
        <div className="container-lg">
          <p className="title text-center ">SUPERHERO</p>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <PowerStatsTeam />
        <div className="d-flex justify-content-between my-3">
          <h1>My heroes</h1>
          <div className="add">
            <button
              className={"btn btn-dark  my-auto text-uppercase "}
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
          {superheroes.length === 0 ? (
            <CardMessage
              type={"info"}
              title={"Hi 👋, look for your heroes in ADD HERO"}
            />
          ) : null}
        </div>
        <Footer padding={true} />
      </div>
    </>
  );
}

export default Home;
