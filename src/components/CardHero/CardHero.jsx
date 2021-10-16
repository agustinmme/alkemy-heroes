import React from "react";
import "./CardHero.css";
function CardHero() {
  return (
    <div className="col-md-3">
      <div className="card card-hero text-center">
        <div className="img mb-2 overflow-hidden">
          <img
            src="https://i1.wp.com/hipertextual.com/wp-content/uploads/2021/08/batman-scaled.jpeg"
            className="img-fluid rounded-top"
          />
        </div>
        <h5 className="mb-1">Batman</h5>
        <div className="p-2 mt-2 mx-2 d-flex justify-content-between text-white">
          <div className="p-2 d-flex flex-column bg-primary rounded stats-power">
            <span className="stats-title-power">Intelligence</span>
            <span className="number">38</span>
          </div>
          <div className="p-2 d-flex flex-column bg-primary rounded stats">
            <span className="stats-title">Strength</span>
            <span className="number">980</span>
          </div>
          <div className="p-2 d-flex flex-column bg-primary rounded stats">
            <span className="stats-title">Speed</span>
            <span className="number">8.9</span>
          </div>
        </div>
        <div className="p-2 mt-2 mx-2 d-flex justify-content-between text-white">
          <div className="p-2 d-flex flex-column bg-primary rounded stats">
            <span className="stats-title">Durability</span>
            <span className="number">38</span>
          </div>
          <div className="p-2 px-3 d-flex flex-column bg-primary rounded stats">
            <span className="stats-title">Power</span>
            <span className="number">980</span>
          </div>
          <div className="p-2  d-flex flex-column bg-primary rounded stats">
            <span className="stats-title">Combat</span>
            <span className="number">8.9</span>
          </div>
        </div>
        <div className="mt-4 actions p-1 d-flex">
          <button className="btn btn-dark text-uppercase m-1">details</button>
          <button className="btn btn-danger text-uppercase m-1">remove</button>
        </div>
      </div>
    </div>
  );
}

export default CardHero;
