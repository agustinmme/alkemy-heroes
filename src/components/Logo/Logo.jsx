import React from 'react'
import logoIso from '../../assets/logo-alkemy.png'
import logoLetter from '../../assets/logo-alkemy2.png'
import "./Logo.css";
function Logo({type}) {
    return (
        <img
            src={type===1?logoIso:logoLetter}
            className={type===1?"img-logo1 rounded mx-auto d-block mt-3":"img-logo2 rounded my-auto d-block"}
            alt="Logo Alkemy"
          />
    )
}

export default Logo;
