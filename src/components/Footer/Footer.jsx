import React from "react";
import PropTypes from "prop-types";
function Footer({ padding }) {
  return (
    <p className={padding ? "text-center p-5 " : "text-center my-auto "}>
      Made with 💙 by Mansilla Agustin
    </p>
  );
}
Footer.propTypes = {
  padding:PropTypes.bool.isRequired,
};

export default Footer;
