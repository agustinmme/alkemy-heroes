import React from "react";

import PropTypes from "prop-types";
import "./Loader.css";
const Loader = () => {
  return (
    <>
      <div className="spinner-border fixed" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </>
  );
};

Loader.propTypes = {
  type: PropTypes.number,
};

export default Loader;
