import React from "react";

function CardMessage({ title, type, text, text2 }) {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <blockquote
              className={`blockquote blockquote-custom bg-${type} p-5 shadow rounded`}
            >
              <h4>{title}</h4>
              <p className="mb-0 mt-2 font-italic"></p>
              {text}
              <p className="mb-0 mt-2 font-italic">{text2}</p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardMessage;
