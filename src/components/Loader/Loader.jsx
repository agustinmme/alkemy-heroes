import React from "react";
import { LoopCircleLoading } from "react-loadingg";
import Logo from "../Logo/Logo";
const Loader = ({ type }) => {
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
export default Loader;
