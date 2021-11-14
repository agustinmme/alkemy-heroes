import React from "react";
import PropTypes from "prop-types";
function CardMessage({ title, type, text = "", moreText ="" }) {
  return (
    <section className="py-5">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <blockquote
              className={`blockquote blockquote-custom bg-${type} p-5 shadow rounded`}
            >
              <h4>{title}</h4>
              <p className="mb-0 mt-2 font-italic"></p>
              {text}
              <p className="mb-0 mt-2 font-italic">{moreText}</p>
            </blockquote>
          </div>
        </div>

    </section>
  );
}

CardMessage.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string,
  moreText: PropTypes.string,
};

export default CardMessage;
