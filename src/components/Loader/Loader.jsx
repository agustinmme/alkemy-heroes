import React from "react";
import { LoopCircleLoading } from "react-loadingg";
import Logo from "../Logo/Logo";
import PropTypes from "prop-types";
const Loader = ({ type = 1 }) => {
  return (
    <>
      {type !== 1 ? (
        <div>
          <section className="d-flex text-center">
            <div className="container d-flex justify-content-center mt-5">
              <div className="row align-items-center justify-content-center mt-5">
                <Logo />
              </div>
            </div>
          </section>
          <LoopCircleLoading />
        </div>
      ) : (
        <LoopCircleLoading />
      )}
    </>
  );
};

Loader.propTypes = {
  type: PropTypes.number,
};


export default Loader;
