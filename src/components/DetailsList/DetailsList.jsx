import React from "react";
import PropTypes, { string } from "prop-types";
function DetailsList({ name = "", eyeColor= "", hairColor= "", weight= [""], height= [""], workplace= "" }) {
  return (
    //Se podria mapear y renderizar condicionalmente con el index para intercalar los estilos.
    <div className="col">
      <ul className="list-group">
        <li className="list-group-item list-group-item-primary p-4">
          Name: {name}
        </li>
        <li className="list-group-item list-group-item-secondary p-4">
          Eye color: {eyeColor}
        </li>
        <li className="list-group-item list-group-item-primary p-4">
          Hair color: {hairColor}
        </li>
        <li className="list-group-item list-group-item-secondary p-4">
          Weight: {weight}
        </li>
        {/*  algunso endpoint no tiene mts ni kg. */}
        <li className="list-group-item list-group-item-primary p-4">
          Height: {parseInt(height) / 100 || "Not Found"}
        </li>
        <li className="list-group-item list-group-item-secondary p-4">
          Workplace: {workplace}
        </li>
      </ul>
    </div>
  );
}

DetailsList.propTypes = {
  name: PropTypes.string,
  eyeColor: PropTypes.string,
  hairColor: PropTypes.string,
  weight: PropTypes.arrayOf(string),
  height: PropTypes.arrayOf(string),
  workplace: PropTypes.string,
};

export default DetailsList;
