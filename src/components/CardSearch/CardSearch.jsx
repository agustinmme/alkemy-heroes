import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHeroes } from "../../actions/superheroActions";
import { useHistory } from "react-router";
import storage from "../../services/storage";
import superhero from "../../services/superhero";
import helper from "../../helper/helperSuperheroes";
import PropTypes from "prop-types";
import Swal from "sweetalert";

function CardSearch({ name, img, id }) {
  const history = useHistory();
  const dispatch = useDispatch();
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
          setTimeout(() => {
            dispatch(addHeroes(heroAux));
          }, 1000);

          history.push("/dash");
        } else {
          Swal({
            icon: "info",
            title: "Oops...",
            text: `You can't add more ${heroAux.alignment.toUpperCase()}`,
          })
        }
      } else {
        Swal({
          icon: "info",
          title: "Oops...",
          text: `You can't add ${heroAux.name} back`,
        })
      }
    } catch (error) {
      Swal({
        icon: "error",
        title: "Oops...",
        text: `${error.message}`,
      })
    }
  };
  return (
    <>
        <div data-test-id="hero" className="col-md-3">
          <div className="card card-hero text-center">
            <div className="img mb-2 overflow-hidden">
              <img src={img} className="img-fluid rounded-top img-max" />
            </div>
            <h5 className="mb-1 text-capitalize">{name}</h5>
            <div className="mt-4 actions p-1 d-flex">
              <button
                className="btn btn-primary text-uppercase m-1"
                onClick={handlerAddHero}
              >
                ADD
              </button>
            </div>
          </div>
        </div>
    </>
  );
}

CardSearch.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CardSearch;
