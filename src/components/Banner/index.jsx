import React from "react";
import "./style.css";
import BannerTitle from "components/BannerTitle";

const Banner = (props) => {
  return (
    <div className="banner">
      {/* <div className="divTitle"> */}
        {/* <h1>{props.title}</h1>  */}
        {/* On passe des props qui seront appelées dans le composant de la page en question */}
      {/* </div> */}
      <BannerTitle line1="Chez vous," line2="partout et ailleurs"/>
      <img
        className="imgBanner"
        src={props.src}
        alt="Falaise et mer en contre bas."
      />
    </div>
  );
};

export default Banner;
