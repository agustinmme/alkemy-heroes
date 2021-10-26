import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { deleteHero } from "../../actions/superheroActions";
import storage from "../../services/storage";
import ModalDelete from "../Modals/ModalDelete";
import "./CardHero.css";
function CardHero({ name, powerstats, id, img }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const covertAndSorted = (data) => {
    let entries = Object.entries(data);
    let sorted = entries.sort((b, a) => a[1] - b[1]);
    return sorted;
  };
  const deleteThisHero = () => {
    storage.deleteHero(id);
    dispatch(deleteHero("" + id));
  };
  return (
    <div className="col-md-3">
      <div className="card card-hero text-center">
        <div className="img mb-2 overflow-hidden">
          <img src={img} className="img-fluid rounded-top img-max" />
        </div>
        <h5 className="mb-1 text-capitalize">{name}</h5>
        <div className="row g-2 mt-2">
          {covertAndSorted(powerstats).map((stats, index) => {
            return (
              <div
                key={stats[0]}
                className={
                  index === 0
                    ? "p-3 mx-auto d-flex flex-column bg-primary rounded stats-power"
                    : "p-3 mx-auto d-flex flex-column bg-primary rounded stats"
                }
              >
                <span
                  className={
                    index === 0
                      ? "stats-title-power text-capitalize"
                      : "stats-title text-capitalize"
                  }
                >
                  {stats[0]}
                </span>
                <span className="number">{stats[1]}</span>
              </div>
            );
          })}
        </div>
        <div className="mt-4 actions p-1 d-flex">
          <button
            className="btn btn-dark text-uppercase m-1"
            onClick={() => {
              history.push(`/dash/details/${id}`);
            }}
          >
            details
          </button>
          <ModalDelete id={`id${id}`} deleteHero={deleteThisHero} name={name}/>
          <button
            className="btn btn-danger text-uppercase m-1"
            data-bs-toggle="modal"
            data-bs-target={`#id${id}`}
          >
            remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardHero;
