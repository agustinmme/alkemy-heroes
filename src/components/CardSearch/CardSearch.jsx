import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHeroes } from "../../actions/superheroActions";
import storage from "../../services/storage";
import superhero from "../../services/superhero";
import helper from "../../helper/helperSuperheroes";
function CardSearch({ name, img, id }) {
  const dispatch = useDispatch();
  const [heroCap, setHeroCap] = useState(false);
  const { superheroes } = useSelector((state) => state);

  const handlerAddHero = async () => {
    try {
      const data = await superhero.fetchById(id);
      const { name, powerstats, appearance, biography, image } = data;
      const heroAux = {
        id,
        powerstats,
        appearance,
        alignment: biography.alignment,
        name,
        image,
      };
      if (helper.checkNotRepeat(superheroes, heroAux)) {
        if (helper.balanceHeroes(superheroes, heroAux)) {
          storage.addHero(id);
          dispatch(addHeroes(heroAux));
        } else {
          setHeroCap(
            `No puedes agregar mas Heroes a tu equipo de tipo ${heroAux.alignment}`
          );
          setTimeout(() => {
            setHeroCap("");
          }, 3000);
        }
      } else {
        setHeroCap(`No puedes agregar de nuevo a ${heroAux.name}`);
        setTimeout(() => {
          setHeroCap("");
        }, 3000);
      }
    } catch (error) {
      setHeroCap(`${error.message}`);
      setTimeout(() => {
        setHeroCap("");
      }, 3000);
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
        <button
          className={heroCap ? "btn btn-warning m-3" : "btn btn-primary m-3"}
          onClick={handlerAddHero}
        >
          {heroCap ? heroCap : "AGREGAR"}
        </button>
      </div>
    </div>
  );
}

export default CardSearch;
