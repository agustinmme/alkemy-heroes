import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import DetailsList from "../../../components/DetailsList/DetailsList";
import superhero from "../../../services/superhero";
import Loader from "../../../components/Loader/Loader";
import "./Details.css";

function Details({}) {
  const history = useHistory();
  const { id } = useParams();
  const [detailsHero, setdetailsHero] = useState({
    appearance: {},
    work: {},
    biography: {},
    imgHero: {},
    powerstats: {},
  });
  const [loading, setLoading] = useState(false);
  const { superheroes } = useSelector((state) => state);

  useEffect(async () => {
    try {
      setLoading(true);
      const appearance = await superhero.fetchAppearance(parseInt(id));
      const work = await superhero.fetchWork(parseInt(id));
      const biography = await superhero.fetchBiography(parseInt(id));
      const { url } = await superhero.fetchImage(parseInt(id));
      const power = superheroes.filter((element) => element.id === id)[0]
        .powerstats;
      setdetailsHero({
        appearance,
        work,
        biography,
        imgHero: url,
        powerstats: power,
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const covertAndSorted = (data) => {
    let entries = Object.entries(data);
    let sorted = entries.sort((b, a) => a[1] - b[1]);
    return sorted;
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Navbar />
      <div className="container-fluid bg-primary banner">
        <div className="container-lg">
          <p className="title text-center ">{detailsHero.biography.name}</p>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className="p-3 card  over-card bg-white rounded display-none d-none d-md-block">
          <div className="d-flex flex-row board">
            {covertAndSorted(detailsHero.powerstats).map((stats, index) => (
              <div
                key={index}
                className={
                  index === 0
                    ? "p-4 text-center skill-block rounded text-warning text-capitalize"
                    : "p-4 text-center skill-block rounded text-capitalize"
                }
              >
                <h6> {stats[0]}</h6>
                <h4> {stats[1]}</h4>
              </div>
            ))}
          </div>
        </div>
        
        <div className="d-flex justify-content-between my-3">
          <h1>Details</h1>
          <div className="add">
            <button
              className="btn btn-dark  my-auto text-uppercase "
              onClick={() => {
                history.push("/dash/");
              }}
            >
              back
            </button>
          </div>
        </div>
        <div className="row g-2">
          <div className="col-md-4">
            <div className="card card-hero text-center">
              <div className="img overflow-hidden rounded">
                <img
                  src={detailsHero.imgHero}
                  className="img-fluid rounded-top img-details"
                />
              </div>
            </div>
          </div>
          <DetailsList
            name={detailsHero.biography["full-name"]}
            eyeColor={detailsHero.appearance["eye-color"]}
            hairColor={detailsHero.appearance["hair-color"]}
            height={detailsHero.appearance["height"]}
            weight={detailsHero.appearance["weight"]}
            workplace={detailsHero.work["base"]}
          />
        </div>
        {/* Ajuste mobile */}
        <div className=" d-sm-flex d-md-none">
          <ul className="list-group">
            {covertAndSorted(detailsHero.powerstats).map((stats, index) => (
              <li
                key={index}
                className={
                  index % 2 === 0
                    ? "list-group-item list-group-item-primary p-4 text-capitilize"
                    : "list-group-item list-group-item-secondary p-4 text-capitilize"
                }
              >
                 {stats[0]}: {stats[1]}
              </li>
            ))}
          </ul>
        </div>
        <Footer padding={true} />
      </div>
    </>
  );
}

export default Details;
