import React from "react";
import "./style.css";

const Banner = (props) => {
  return (
    <div className="banner">
      <div className="divTitle">
        <h1><span>{props.titleLine1}</span><span>{props.titleLine2}</span></h1> 
        {/* On passe des props qui seront appelées dans le composant de la page en question */}
      </div>
      <img
        className="imgBanner"
        src={props.src}
        alt="Falaise et mer en contre bas."
      />
    </div>
  );
};

export default Banner;
