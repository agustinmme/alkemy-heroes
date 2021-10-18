import React from "react";
import { useDispatch } from "react-redux";
import storage from "../../services/storage";
import { addHeroes } from "../../actions/superheroActions";
import superhero from "../../services/superhero";

function CardSearch({ name, img, id }) {
  const dispatch = useDispatch();
  const handlerAddHero =async () => {
    storage.addHero(id);
    try {
      const data = await superhero.fetchById(id);
      const { name, powerstats, appearance, biography, image } = data;
      dispatch(
        addHeroes({ id, powerstats, appearance, biography, name, image })
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="card mt-2 mx-5">
      <div className="d-flex justify-content-between align-items-center">
        <div className="user d-flex flex-row align-items-center">
          <img src={img} width="150" className="user-img " />
          <span>
            <p className="fw-bold text-primary m-3">{name}</p>
          </span>
        </div>
        <button className="btn btn-primary m-3" onClick={handlerAddHero}>
          AGREGAR
        </button>
      </div>
    </div>
  );
}

export default CardSearch;
