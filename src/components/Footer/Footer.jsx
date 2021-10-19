import React from "react";

function Footer({ padding }) {
  return (
    <p className={padding ? "text-center p-5 " : "text-center my-auto "}>
      Made with 💙 by Mansilla Agustin
    </p>
  );
}

export default Footer;
